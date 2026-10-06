# 0.2.32 release verification

Recorded **2026-10-06**. **Prepared: local package verification passed; public download verification is pending.**

| Field | Evidence |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.32_x64-setup.exe` |
| Bytes | 34,477,994 |
| SHA-256 | `E4410F012FA3F4604A36FA4E6ACF4FE7B2DE8A2CD238B2405F619B8564B9DB5A` |
| App version | 0.2.32 |
| App / installation registry publisher | Axiom Risk Group LLC |
| Installer / app Authenticode | NotSigned / NotSigned |
| Public download identity | Pending publication |
| Fresh physical-device installation / real-data upgrade | NOT EVALUATED |
| New native-model quality / live paid-provider compatibility | NOT EVALUATED |

## Settings and selection controls

Seven settings chapters replace the long flat sidebar, with related pages in a compact chapter navigation. Agent 589 brings native model setup and local companion preferences into one chapter, with distinct Local AI and Companion pages. Existing settings destinations, saved guide choices, unsaved edits and explicit model actions remain. The companion uses fixed local help; combining navigation does not turn it into a model or grant access to project content.

The app retains its existing theme cards. Settings category and page navigation use the current paper/night palette, with visible keyboard focus and containment in small windows. Book Cream, Book White and existing saved/System appearance remain available. The separately deployed website replaces its native theme dropdown with a palette-matched picker. No new telemetry, recipient, permission, paid action or default model activation is introduced. Offline policies retain the original disclosures and user-content rights, with current navigation labels.

The existing official stable GitHub checker and verified manual Save remain. Open **Settings → Application → About us & updates → Version & updates**. Native version authority, fixed GitHub feed, reviewed version/hash/byte-count binding and no-replace saving are unchanged. Save work, close the app and manually run setup. Clients through 0.2.30 need one manual bootstrap of 0.2.31 or later; 0.2.31 already has the working checker and can discover this release. A checksum is not publisher signing.

## Source and package qualification

The normal production Tauri/NSIS path passed the final-source **43-stage** gate: **1257 tests**, plus TypeScript and disposable synthetic installer lifecycle checks. Selected desktop UI tests passed **716**; these counts overlap and are not additive. Source fingerprint: `c2cfaa6bc0895e124ed48f24a4b1d768b407750fd8813fb0de47898887c5a5e1`. Browser fixtures and source tests exercise the interface; they do not establish native installed-window behavior or physical-device installation.

Aligned frontend, Tauri, Cargo and lockfile versions, the full embedded frontend inventory and **17** standalone bundled resources passed verification. Exact NSIS extraction preserves the configured payload and four offline policy documents: Privacy, Use and AI Guidance, EULA and third-party notices. The extracted executable differs from the native build only by the expected three-byte Tauri NSIS bundle marker. Setup-only NSIS plugins and the WebView bootstrapper are separately classified. Existing source/package safeguards remain mandatory.

The installer lifecycle check uses disposable sentinels and does not install into the user's profile. Upgrade replaces installation-directory binaries/resources; Main, clones, settings, conversations, sealed stores, receipts and downloaded models are outside that tree. No model is bundled or automatically downloaded; existing setup/startup choices remain. All earlier installers and the separate legacy Mini 0.2.15-axiom.1 preview retain their original bytes, notes and qualifications.

Source: `0ed5b9fe492cc479cdbcd731992a4aca414468b7`. Both executable and installer are unsigned manual early access. Clean-device installation, SmartScreen/UAC, real-data upgrades, actual native Save-dialog interaction, live model/provider behavior and signing remain separate qualifications. This visual/navigation release is not a broad dependency security audit or legal-compliance certification.

[Release notes](../releases/v0.2.32.md) · [Downloads](DOWNLOADS.md) · [Historical installers](INSTALLER_ARCHIVE.md)
