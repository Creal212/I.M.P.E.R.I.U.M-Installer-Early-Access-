# Latest installer and verification

[**Download the latest installer · 0.2.15 · Windows x64**](https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-/releases/download/v0.2.15/I.M.P.E.R.I.U.M_0.2.15_x64-setup.exe) · [Changes in this version](../releases/v0.2.15.md) · [Historical installers](INSTALLER_ARCHIVE.md)

Only files attached to a release are downloadable app packages. If an asset is still being published, wait for it to appear. Historical notes, tags and GitHub-generated source archives do not establish binary availability.

## Editions

| Edition | Status |
| --- | --- |
| **Windows x64 installer 0.2.15** | Latest audited built early-access artifact. Unsigned; manual installation/updates. |
| **Mini preconfigured preview ZIP** | Exact 0.2.15 app plus a fresh bundled CPU Mini profile. Packaging checked; launcher, model startup and relocation untested. See below. |
| **Portable Agent 589** | Planned; current development runtime/model folders are not distributions. |
| **Portable Core** | Planned; clean-machine bootstrap, large-model hardware and relocation qualification required. |

No portable links are fabricated. Packaging status must be updated from actual artifacts, not a renamed installed folder.

The latest installer is separate from [earlier published installers](INSTALLER_ARCHIVE.md) and [unpublished source milestones](../CHANGELOG.md#unpublished-work). Older downloads retain their original version; they do not include newer changes. A Mini preview does not become current merely because the latest installer changes.

## Mini preconfigured preview

[Download the Mini preview ZIP](https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-/releases/download/v0.2.15/IMPERIUM-0.2.15-Mini-preconfigured-preview-win-x64.zip)

- Filename: `IMPERIUM-0.2.15-Mini-preconfigured-preview-win-x64.zip`
- Size: **1,300,627,851 bytes**
- SHA-256: `E6273706210C8669E14517F94DCE2271FF05A91B017F8BC60CD87763E0C71566`
- Checks: original app/resource identities, pinned model/runtime inventory, all 60 archive files/lengths and archive CRC.
- **Not tested:** launcher execution, actual app/model startup, clean-device behavior or moving the package.

This is a preconfigured preview, not a qualified portable edition or a 0.2.16 build. It contains the exact installer-extracted 0.2.15 app and a new `Data` folder seeded only with pinned Mini model/runtime files and incomplete setup preferences. No user account, conversation, project or developer GPU environment was copied.

Extract the complete archive to a new writable folder. Windows x64, **Microsoft Edge WebView2** and Windows Script Host are prerequisites; WebView2 is not bundled in this ZIP. Do not disable Windows security settings if the launcher is restricted. Read the included README and [preview license](PREVIEW_LICENSE.md).

Use `Launch I.M.P.E.R.I.U.M.vbs`, which is designed to open the GUI without a console and sets absolute application/WebView data paths inside that extracted folder. **Do not open the App executable directly:** it bypasses the separate profile. Then use the in-app Agent 589 Mini setup/start action; the model must actually respond before it is ready. Nothing is pre-running or marked falsely healthy.

Stop the model and close the app before moving/backing up the folder. Main paths and provider/OS credentials are not guaranteed portable. **Never upload or redistribute Data after using the app:** it can contain private conversations, settings or credentials. Retain the untouched official ZIP instead.

## Exact installer identity

| Field | Verified value |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.15_x64-setup.exe` |
| Size | **878,875,259 bytes** |
| SHA-256 | `0AB6866F34F36924FE5FF30B8C519D2DC8D73E2E08F91873B60852ED73C8174F` |
| File/product version | **0.2.15** |
| Authenticode | **NotSigned** |
| Update route | Manual official download; no audited adjacent updater signature |

This is an explicitly disclosed unsigned early-access build, not a signed production/update channel. A rebuilt or signed artifact has different bytes and needs a new identity record.

Axiom Risk has confirmed the required Microsoft runtime redistribution entitlement. That is a publisher confirmation, not an independent legal certification; exact component notices and applicable terms still matter.

## Verify before running

1. Obtain the exact asset from the official release.
2. In PowerShell, run `Get-FileHash -Algorithm SHA256 -LiteralPath "path-to-downloaded-installer.exe"` and compare the entire result with the hash above.
3. Read the release's signing status. A hash is useful only when its expected value comes from a trusted source.
4. Save work and close the app before upgrading. Keep independent project backups.

Do not disable antivirus to bypass a concern. Report a suspicious mismatch privately. Local package checks do not prove every fresh-device installation, upgrade or account login.

Normal installer upgrades replace program files and preserve user data and Main projects. Uninstalling is not complete data erasure.

## Portable qualification

A portable edition must start from a clean extracted folder after relocation, bootstrap documented dependencies, clearly identify persistent data, preserve task boundaries, verify model/runtime bytes and carry required notices. It must not depend on a publisher's development machine or virtual environment.

Mini, Agent 589 and Core packages may differ substantially in size and hardware needs. GitHub release-file limits can require a different delivery layout for large model packs; no split-file process is promised until implemented and verified.

[Getting started](GETTING_STARTED.md) · [Release status](RELEASE_STATUS.md) · [Hardware](HARDWARE_AND_MODELS.md)
