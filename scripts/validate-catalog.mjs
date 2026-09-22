import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { performance } from 'node:perf_hooks';

// Offline metadata checks only. Never fetch, run, sign or inspect a binary.
export const REPOSITORY = 'https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const MAX_ASSET_BYTES = 2 ** 31;
const SEMVER = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*))*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/;
const BASENAME = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
const DOC = /^docs\/[A-Z0-9_-]+\.md$/;

export function validateCatalog(catalog) {
  const errors = [];
  const check = (condition, path, message) => { if (!condition) errors.push(`${path}: ${message}`); };
  function fields(value, expected, path) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      errors.push(`${path}: expected an object`); return false;
    }
    for (const key of Object.keys(value)) check(expected.includes(key), path, `unknown field ${key}`);
    for (const key of expected) check(Object.hasOwn(value, key), path, `missing field ${key}`);
    return true;
  }
  function text(value, path) {
    check(typeof value === 'string' && value.length > 0 && value.length <= 2000, path, 'expected nonempty bounded text');
  }
  function scan(value, path = 'catalog', depth = 0) {
    if (depth > 12) { errors.push(`${path}: excessive nesting`); return; }
    if (typeof value === 'string') {
      check(!/[\\]|\b[A-Za-z]:[\/\\]|file:\/\/|(?:^|\s)\/[A-Za-z0-9_.-]/i.test(value), path, 'local paths are not public release metadata');
    } else if (Array.isArray(value)) value.forEach((item, i) => scan(item, `${path}[${i}]`, depth + 1));
    else if (value && typeof value === 'object') for (const [key, item] of Object.entries(value)) scan(item, `${path}.${key}`, depth + 1);
  }
  scan(catalog);
  if (!fields(catalog, ['schemaVersion', 'product', 'repository', 'latestBuiltVersion', 'recordDateMeaning', 'releases', 'plannedEditions'], 'catalog')) return errors;
  check(catalog.schemaVersion === 1, 'schemaVersion', 'only schema 1 is supported');
  check(catalog.product === 'I.M.P.E.R.I.U.M', 'product', 'unexpected product');
  check(catalog.repository === REPOSITORY, 'repository', 'repository must match the fixed GitHub allowlist');
  check(typeof catalog.latestBuiltVersion === 'string' && SEMVER.test(catalog.latestBuiltVersion), 'latestBuiltVersion', 'expected strict SemVer');
  text(catalog.recordDateMeaning, 'recordDateMeaning');
  check(Array.isArray(catalog.releases) && catalog.releases.length > 0 && catalog.releases.length <= 1000, 'releases', 'expected 1–1000 releases');
  const versions = new Set();
  const releases = Array.isArray(catalog.releases) ? catalog.releases : [];
  for (const [i, release] of releases.entries()) {
    const path = `releases[${i}]`;
    if (!fields(release, ['version', 'recordDate', 'title', 'status', 'buildState', 'notes', 'assets'], path)) continue;
    check(typeof release.version === 'string' && SEMVER.test(release.version), `${path}.version`, 'expected strict SemVer without a v prefix');
    check(!versions.has(release.version), path, 'duplicate version'); versions.add(release.version);
    const date = release.recordDate;
    check(typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(Date.parse(date)) && new Date(date).toISOString().slice(0, 10) === date, `${path}.recordDate`, 'expected a real ISO date');
    text(release.title, `${path}.title`);
    check(['historical', 'prepared', 'published', 'unreleased'].includes(release.status), `${path}.status`, 'unknown publication status');
    check(['historical', 'built', 'unbuilt'].includes(release.buildState), `${path}.buildState`, 'unknown build state');
    check(release.notes === `releases/v${release.version}.md`, `${path}.notes`, 'notes must be the relative version page');
    check(Array.isArray(release.assets) && release.assets.length <= 20, `${path}.assets`, 'expected at most 20 assets');
    const assets = Array.isArray(release.assets) ? release.assets : [];
    if (['prepared', 'published'].includes(release.status)) {
      check(release.buildState === 'built' && assets.length > 0, path, 'prepared/published requires built assets');
    } else {
      check(assets.length === 0, path, 'historical/unreleased must not promise downloadable or tested assets');
      check(release.buildState === (release.status === 'historical' ? 'historical' : 'unbuilt'), path, 'publication/build states conflict');
    }
    const names = new Set();
    for (const [j, asset] of assets.entries()) {
      const ap = `${path}.assets[${j}]`;
      if (!fields(asset, ['name', 'kind', 'platform', 'url', 'bytes', 'sha256', 'signing', 'evaluation'], ap)) continue;
      check(typeof asset.name === 'string' && asset.name.length <= 180 && BASENAME.test(asset.name) && !/[.]$/.test(asset.name) && !/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(asset.name), `${ap}.name`, 'expected a safe file basename');
      check(!names.has(asset.name), ap, 'duplicate asset name'); names.add(asset.name);
      check(['installer', 'mini-preconfigured-preview', 'portable'].includes(asset.kind), `${ap}.kind`, 'unknown asset kind');
      check(asset.platform === 'windows-x64', `${ap}.platform`, 'unsupported platform in schema 1');
      check(asset.kind === 'installer' ? /\.exe$/.test(asset.name) : /\.zip$/.test(asset.name), `${ap}.name`, 'extension must match asset kind');
      const expected = `${REPOSITORY}/releases/download/v${release.version}/${asset.name}`;
      let parsed;
      try { parsed = new URL(asset.url); } catch { /* Invalid URL is reported below. */ }
      check(parsed && parsed.protocol === 'https:' && parsed.hostname === 'github.com' && !parsed.username && !parsed.password && !parsed.port && !parsed.search && !parsed.hash && asset.url === expected, `${ap}.url`, 'expected the exact HTTPS GitHub release asset URL');
      check(Number.isSafeInteger(asset.bytes) && asset.bytes > 0 && asset.bytes < MAX_ASSET_BYTES, `${ap}.bytes`, 'asset size must be a positive integer below 2 GiB');
      check(typeof asset.sha256 === 'string' && /^[a-f0-9]{64}$/.test(asset.sha256), `${ap}.sha256`, 'expected 64 lowercase SHA-256 hex characters');
      check(['unsigned', 'signed'].includes(asset.signing), `${ap}.signing`, 'unknown signing disclosure');
      const ev = asset.evaluation;
      if (!fields(ev, ['packageIntegrity', 'appBehavior', 'modelQuality', 'freshDevice', 'relocation', 'evidence', 'summary'], `${ap}.evaluation`)) continue;
      check(ev.packageIntegrity === 'passed', `${ap}.evaluation.packageIntegrity`, 'built release assets require verified package identity');
      for (const key of ['appBehavior', 'modelQuality', 'freshDevice', 'relocation']) {
        check(['passed', 'partial', 'not-run', 'not-qualified', 'not-applicable'].includes(ev[key]), `${ap}.evaluation.${key}`, 'unknown evaluation state');
      }
      check(typeof ev.evidence === 'string' && DOC.test(ev.evidence), `${ap}.evaluation.evidence`, 'expected a relative public documentation page');
      text(ev.summary, `${ap}.evaluation.summary`);
    }
  }
  const latest = releases.find(release => release?.version === catalog.latestBuiltVersion);
  check(latest?.buildState === 'built' && ['prepared', 'published'].includes(latest?.status) && latest?.assets?.length > 0, 'latestBuiltVersion', 'must refer to a prepared or published built release');
  check(Array.isArray(catalog.plannedEditions) && catalog.plannedEditions.length <= 20, 'plannedEditions', 'expected at most 20 planned editions');
  const editionIds = new Set();
  for (const [i, edition] of (Array.isArray(catalog.plannedEditions) ? catalog.plannedEditions : []).entries()) {
    const path = `plannedEditions[${i}]`;
    if (!fields(edition, ['id', 'name', 'status', 'evaluation', 'assets', 'note'], path)) continue;
    check(typeof edition.id === 'string' && /^[a-z][a-z0-9-]{0,79}$/.test(edition.id) && !editionIds.has(edition.id), `${path}.id`, 'expected unique edition slug'); editionIds.add(edition.id);
    text(edition.name, `${path}.name`); text(edition.note, `${path}.note`);
    check(edition.status === 'planned' && edition.evaluation === 'not-run' && Array.isArray(edition.assets) && edition.assets.length === 0, path, 'planned editions cannot claim assets or completed evaluation');
  }
  return errors;
}

function readCatalog(path) {
  const size = statSync(path).size;
  if (size > 512 * 1024) throw new Error('Catalog exceeds the 512 KiB metadata limit');
  return JSON.parse(readFileSync(path, 'utf8'));
}

function checkReferences(catalog) {
  const errors = [];
  const references = catalog.releases.flatMap(release => [release.notes, ...release.assets.map(asset => asset.evaluation.evidence)]);
  for (const reference of new Set(references)) {
    const path = resolve(ROOT, reference);
    if (!path.startsWith(ROOT + sep)) { errors.push(`Reference escapes repository: ${reference}`); continue; }
    try { if (!statSync(path).isFile()) errors.push(`Reference is not a file: ${reference}`); }
    catch { errors.push(`Missing reference: ${reference}`); }
  }
  return errors;
}

export function selfTest(catalog) {
  const started = performance.now();
  assert.deepEqual(validateCatalog(catalog), []);
  const mutations = [
    ['leading-zero SemVer', c => { c.releases[0].version = '0.02.16'; }],
    ['invalid numeric prerelease', c => { c.releases[0].version = '1.0.0-01'; }],
    ['duplicate version', c => c.releases.push(structuredClone(c.releases[0]))],
    ['unsafe basename', c => { c.releases.find(r => r.assets.length).assets[0].name = '../setup.exe'; }],
    ['unapproved URL', c => { c.releases.find(r => r.assets.length).assets[0].url = 'https://github.com.evil.example/setup.exe'; }],
    ['URL credentials', c => { const a = c.releases.find(r => r.assets.length).assets[0]; a.url = a.url.replace('https://', 'https://user:secret@'); }],
    ['invalid checksum', c => { c.releases.find(r => r.assets.length).assets[0].sha256 = 'abc'; }],
    ['size limit', c => { c.releases.find(r => r.assets.length).assets[0].bytes = 2 ** 31; }],
    ['unknown status', c => { c.releases[0].status = 'ready-tested'; }],
    ['local path in text', c => { c.releases[0].title = 'C:/Users/example/private'; }],
    ['absolute Unix path', c => { c.releases[0].title = 'Recorded in /var/private/build'; }],
    ['missing asset claimed tested', c => { c.plannedEditions[0].evaluation = 'passed'; }],
    ['unbuilt release with assets', c => { c.releases.find(r => r.status === 'unreleased').assets = structuredClone(c.releases.find(r => r.assets.length).assets); }],
    ['published without assets', c => { const r = c.releases.find(r => r.assets.length); r.status = 'published'; r.assets = []; }],
    ['unknown claim field', c => { c.releases[0].tested = true; }],
  ];
  for (const [name, mutate] of mutations) {
    const candidate = structuredClone(catalog); mutate(candidate);
    assert.ok(validateCatalog(candidate).length > 0, `${name} should be rejected`);
  }
  const published = structuredClone(catalog);
  published.releases.find(r => r.assets.length).status = 'published';
  assert.deepEqual(validateCatalog(published), []);
  return { cases: mutations.length + 2, elapsedMs: Number((performance.now() - started).toFixed(3)) };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    if (args.length > 1 || (args.length === 1 && args[0] !== '--self-test')) throw new Error('Usage: node scripts/validate-catalog.mjs [--self-test]');
    const catalog = readCatalog(resolve(ROOT, 'releases.json'));
    const errors = validateCatalog(catalog);
    if (!errors.length) errors.push(...checkReferences(catalog));
    if (errors.length) throw new Error(errors.join('\n'));
    if (args[0] === '--self-test') console.log(JSON.stringify({ ok: true, ...selfTest(catalog), scope: 'offline synthetic catalog validation only' }));
    else console.log(`Catalog valid: ${catalog.releases.length} versions; ${catalog.releases.reduce((n, r) => n + r.assets.length, 0)} assets. Remote availability and binary testing are not checked.`);
  } catch (error) { console.error(String(error.message || error)); process.exitCode = 1; }
}
