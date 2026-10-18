# 0.2.33 release verification

Recorded **2026-10-17**. **Published after exact local package and public-download identity verification.**

| Field | Evidence |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.33_x64-setup.exe` |
| Bytes | 34,474,011 |
| SHA-256 | `4074E8F887A4F5C78EE97E7F47CE91A2108C0F1623910A2C71D5F4FF86A03816` |
| App version | 0.2.33 |
| Installer / app Authenticode | NotSigned / NotSigned |
| Source commit | `fad279cb48909e7e90335f4ee6bac32655ed10e0` |
| Fresh physical-device installation / real-data upgrade | NOT EVALUATED |
| Live paid-provider compatibility / new model quality | NOT EVALUATED |

## Security changes

Windows provider-store master keys now use current-user DPAPI protection. Existing 32-byte keys migrate atomically while retaining the original encrypted records. Corrupt configuration, corrupt ciphertext and missing keys fail closed; saving cannot silently reset credentials. Store transactions serialize across app processes and reject linked files. These changes reduce offline-copy exposure; software already running as the same Windows user can still access credentials. Older app versions cannot read the migrated key format, and moving accounts/machines may require provider reauthentication.

DOMPurify, source-map-js, rustls and ZIP parsers were updated for current advisories. The Windows updater excludes an unused ZIP extractor while retaining executable signature validation. npm and both Rust lockfile audits report no vulnerability entries at the recorded audit date. Rust maintenance warnings and the Linux-only upstream glib unsoundness warning remain; non-Windows packages are not qualified by this Windows release.

## Verification scope

The final-source **44-stage gate** passed **1271 tests**, plus TypeScript and disposable synthetic installer lifecycle checks. This includes 716 UI tests and 14 filtered API-key tests; counts overlap and are not additive. Fingerprint: `28db326734bb9fa954ffae99d2cd5ded9c53e6a38d4d688f5c90f41c006e9e4f`. Credential tests used temporary synthetic homes; no real user store was migrated during verification.

The final UI inventory, 17 bundled resource hashes, NSIS extraction and executable version were verified. No source maps, source tree, PDBs or private signing material are shipped in the inspected payload. The installer contains only expected public resources and setup support. The build remains unsigned manual early access; a SHA-256 checksum establishes file identity, not publisher signing. No automatic updater feed is enabled.

Installed app state, Main projects, clones, settings, conversations, receipts and models were not modified by this audit. Installation replaces app binaries/resources; the Windows key wrapper migration happens only when the new app accesses provider credentials. Older published packages retain their original identities.

Locally distributed JavaScript and binaries remain inspectable. These fixes do not make reverse engineering impossible or certify every feature safe. Clean-device installation, SmartScreen/UAC, real-data upgrades/downgrades and live provider/model behavior remain untested here.

[Release notes](../releases/v0.2.33.md) · [Downloads](DOWNLOADS.md) · [Historical installers](INSTALLER_ARCHIVE.md)
