# Maintaining releases

[`releases.json`](../releases.json) is the versioned, public catalog for the website and this distribution repository. Schema **1** records version notes, exact download identities, publication state and scoped evaluation. It contains no installer bytes, credentials, personal data or private machine paths.

The catalog currently links all 18 recorded version pages. **0.2.15 is the latest built version.** Its installer and Mini preconfigured preview have separate identities and limitations. **0.2.16 remains unbuilt/unreleased with no assets.** Regular Agent 589 and Core portable editions remain planned with no download URL or testing claim.

## Status means one specific thing

| Status | Meaning | Asset rule |
| --- | --- | --- |
| `historical` | A recorded version note; no historical binary availability is promised. | Empty assets; historical build state. |
| `prepared` | Exact built assets and local checks are recorded; public upload is not yet confirmed. | One or more built assets. Hide download actions on a public website. |
| `published` | A maintainer confirmed the matching assets are publicly downloadable from the official release. | One or more built assets. Download actions may use their exact URLs. |
| `unreleased` | Saved work without a released build. | Unbuilt; empty assets. |
| `planned` | An edition exists only as a plan, in `plannedEditions`. | Empty assets; evaluation is `not-run`. |

`recordDate` comes from the publisher's version notes. It is **not** a publication timestamp. `latestBuiltVersion` may refer to a prepared build; the website must also check `status === "published"` before presenting it as available.

## Publish or replace an installer

1. Finish the authorized build and artifact-specific verification. Keep paused agent/model work paused unless the user explicitly resumes it. Preserve the old release and its notes.
2. Create or update `releases/v<VERSION>.md`. Explain the actual packaged changes and known limits. Link the page from `CHANGELOG.md`. Do not copy claims from an unbuilt later version into an older release.
3. Add a unique strict SemVer record with `status: "prepared"`, `buildState: "built"`, its recorded note date, and the exact relative notes path. Set `latestBuiltVersion` only to the actual latest built record.
4. For every completed asset, record its exact basename, kind, platform, final byte length, lowercase SHA-256 and signing disclosure. Use the official GitHub release URL for that version and filename. A re-sign, rebuild or archive change creates different bytes: recompute the size and hash and repeat the applicable checks. Do not relabel an old hash or silently overwrite an immutable published asset.
5. Record evaluation by area. Package integrity is not proof of app behavior, native-model quality, installation on other devices or relocation. Keep `not-run`, `partial` and `not-qualified` states visible. Maintain the linked public evidence summary. Do not infer that all features passed from a successful archive or UI check.
6. Run the offline checks from this repository with Node.js:

   ```text
   node scripts/validate-catalog.mjs
   node scripts/validate-catalog.mjs --self-test
   ```

7. Upload the exact assets and a SHA-256 checksum file to a draft release using the maintainer's authorized publishing workflow. Keep large binaries out of Git history. Every asset must be **smaller than 2 GiB**. Larger future model packages need a documented, verified delivery plan; do not invent split-file links.
8. Verify the uploaded names, byte lengths and checksums through the authorized release workflow. Confirm the release is public and downloadable. Only then change that record from `prepared` to `published`. The offline validator cannot make this determination or perform this transition for you.
9. Re-run catalog validation, review the public notes and update the website from the same committed catalog. Keep the manifest, release notes and website synchronized. Commit only the reviewed public metadata/docs; never include private test evidence, credentials or a user's populated application data.
10. Put the newly published installer in the README's **Latest installer** section and [Downloads](DOWNLOADS.md), using its exact versioned release and asset URLs. GitHub may exclude a prerelease from its automatic Latest shortcut, so do not rely on that shortcut or remove the early-access designation merely to obtain it. Move the previous installer's links and original integrity record to [Historical installers](INSTALLER_ARCHIVE.md). Retain its catalog `published` state and original assets; do not change it to `historical`, which means notes without downloadable binaries. Preserve source-only milestones under **Unpublished work**, with no download button. Do not relabel an older Mini preview as the new version.

For the already prepared 0.2.15 assets, publishing changes **only the publication state** after the exact upload has been verified. Do not regenerate or recompute a different artifact to make a catalog mismatch disappear. Compare against the pinned hashes already recorded.

## Schema and validation contract

The offline validator is dependency-free and makes no network requests. It rejects unknown fields, duplicate versions, invalid SemVer, invalid dates, conflicting build/publication states, unsafe asset basenames, unapproved URL hosts or paths, malformed hashes, noninteger/oversized files, unknown evaluation states, private local paths and planned/unbuilt entries that claim tested downloads. It also checks that referenced local note/evidence pages exist. The in-memory synthetic checks include invalid examples; they do not launch an app, model, installer or downloaded code.

Asset URLs must match the exact allowlisted repository, version tag and filename. A repository migration, new platform or schema extension requires an explicit validator and documentation update; changing an arbitrary catalog URL is not enough.

Evaluation fields describe separate scopes:

| Field | Scope |
| --- | --- |
| `packageIntegrity` | Exact packaged identities/inventory checks. Prepared and published assets require `passed`. |
| `appBehavior` | Observed application checks, including whether coverage was partial. |
| `modelQuality` | Native-model task quality qualification; packaging does not qualify it. |
| `freshDevice` | Testing on a separate clean device. |
| `relocation` | Moving a portable package and confirming its behavior; may be inapplicable to an installer. |
| `evidence` / `summary` | Public, scoped explanation of the checks and remaining limits. |

The validator checks structural consistency, **not the truth of a human-entered testing or signing claim**. A maintainer must retain the underlying evidence. Changing an enum to `passed` is not a test. A hash is an integrity identifier, not a digital signature or security guarantee.

The Mini ZIP's current archive checks do not cover its launcher, model startup or relocation. It must retain its **preconfigured preview** label and recorded `not-run` fields until actual qualification is authorized and completed. Never package its `Data` directory after personal use. Preserve all original third-party notices and applicable distribution terms.

## Website consumption

Read the catalog as data, not executable instructions. Show a download button only for a `published` record with the selected asset. Display the filename, size, signing disclosure and scoped evaluation alongside its notes. Do not substitute a historical note, a planned edition or an unbuilt version when an asset is absent. A failed release lookup should report that downloads are temporarily unavailable rather than inventing a URL.

Keep [Downloads](DOWNLOADS.md), [Release status](RELEASE_STATUS.md), [Known limitations](KNOWN_LIMITATIONS.md) and the website consistent with these fields. Published catalog history is a record of disclosed artifacts, not a promise that a future version will be released.
