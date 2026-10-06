# 0.2.31 release verification

Recorded **2026-10-06**. **Published after exact local package and public-download identity verification.**

| Field | Evidence |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.31_x64-setup.exe` |
| Bytes | 34,481,716 |
| SHA-256 | `00A0F3DC32C8F9BE8544922C58CB98736CEAA8042F3375FED8AF5454F732154A` |
| App version | 0.2.31.0 |
| App / installation registry publisher | Axiom Risk Group LLC |
| Installer / app Authenticode | NotSigned / NotSigned |
| Public download identity | Public asset byte count and SHA-256 match this exact installer |
| Fresh physical-device installation / real-data upgrade | NOT EVALUATED |
| New native-model quality / live paid-provider compatibility | NOT EVALUATED |

## Release checking and source qualification

The previous installed checker compiled an unconfigured signed endpoint and returned `not_configured` without a request. Published clients through 0.2.30 therefore need one manual bootstrap install of this release. Changing a website catalog cannot replace their compiled checker. This source implements main-window-only checks of the fixed official stable GitHub feed using the native binary's package version. No frontend URL or current-version parameter selects the release authority. Drafts, prereleases, incomplete assets, noncanonical tags, wrong repository addresses, missing/different digests, altered checksum filenames and oversized responses are refused. Redirect destinations are allowlisted before the next request.

About us has Check now, busy state, release notes, latest published/native current version and readable errors with retry and an official-release fallback link. An optional launch check defaults on only with accessible local preference storage, preserves explicit off, and reports a newer release or a failed check without silently claiming up to date. A successful manual retry refreshes the notice. Turning it off suppresses future launch checks; manual checks remain available. GitHub receives ordinary connection information under its privacy terms. No project files, prompts, provider credentials or account tokens are sent. Settings privacy and the exact offline privacy document disclose this separate app-level network action.

Download verified installer binds version, SHA-256 and byte count to the offer reviewed before Save. It verifies both GitHub asset digests and the exact installer checksum, validates complete executable bytes, and saves through a pinned-parent no-replace operation outside Main, managed clones and private state. Existing or raced destination files are refused rather than overwritten. Temporary publication is cleaned after failure. There is no setup launch, automatic app exit, relaunch or signed-updater installation. Save work, close the app and manually run the saved unsigned installer; a hash match is not publisher signing.

The normal production Tauri/NSIS path passed the final-source **43-stage** gate: **1215 tests**, plus TypeScript and the synthetic installer lifecycle contract. Selected desktop UI tests passed **674**; these counts overlap and are not additive. The nine native release validators and five safe-save tests exercise stable version/checksum identity, pre-request host allowlisting, offer binding, collisions, cleanup, hardlinks and protected roots. Actual native TLS/API/checksum/redirect/download qualification verified public 0.2.30 before packaging and is repeated for the final public 0.2.31 installer without executing or saving into a user profile. Actual production update components are tested with a synthetic host across supported desktop widths and paper/night themes; they are separate from live native network proof.

## Exact package and data boundaries

Aligned frontend, Tauri, Cargo and lockfile versions, the full embedded frontend inventory and 17 standalone bundled resources passed verification. Exact NSIS extraction preserves the configured payload and four offline legal documents: Privacy, Use and AI Guidance, EULA and third-party notices. The extracted executable differs from the native build only by the expected three-byte Tauri NSIS bundle marker. Setup-only NSIS plugins and the WebView bootstrapper are separately classified. Application publisher metadata identifies Axiom Risk Group LLC; the existing setup template leaves its executable CompanyName field blank while the installation registry publisher identifies the company.

The installer lifecycle check uses disposable synthetic sentinels and does not install into the user's profile. Main, clones, configurations, conversations, sealed stores, receipts and existing model files remain outside the install tree. No model is bundled or automatically downloaded; existing setup/startup and appearance choices remain. The older unfinished updater draft is replaced only with this reviewed manual flow; its unsafe automatic installer-launch path is not shipped.

Source: `dbecce39e304f51571fb0f0c5d186b9b576f1f81`. Both executable and installer are unsigned manual early access. Clean-device installation, SmartScreen/UAC, real-data upgrades, actual Save-dialog interaction in a native installed app, live model/provider behavior and signing remain separate qualifications. No new paid action or model permission is introduced. Existing default-branch dependency alerts are not resolved by this update. All earlier packages, including 0.2.30 and the separate legacy Mini 0.2.15-axiom.1 prerelease, retain their original bytes, notes and qualification limits; Mini does not receive the new checker automatically.

[Release notes](../releases/v0.2.31.md) · [Downloads](DOWNLOADS.md) · [Historical installers](INSTALLER_ARCHIVE.md)
