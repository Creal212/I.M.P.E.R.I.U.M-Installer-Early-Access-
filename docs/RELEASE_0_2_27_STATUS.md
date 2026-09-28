# 0.2.27 release verification

Recorded **2026-09-28**. **Published after exact local package and public-download identity verification.**

| Field | Evidence |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.27_x64-setup.exe` |
| Bytes | 34,981,184 |
| SHA-256 | `580381658006FE34C710D50C82784ED15D7FC08D53C9DB87774F212CFFA86439` |
| App version | 0.2.27.0 |
| Installer / app Authenticode | NotSigned / NotSigned |
| Exact extraction / embedded resources | Exact extraction, embedded resource inventory and native-build identity verified |
| Public download identity | Public asset byte count and SHA-256 match this exact installer |
| Fresh physical-device installation / real-data upgrade | NOT EVALUATED |
| Native model coding quality / universal provider support | NOT EVALUATED |

## Scoped source and package checks

- The final source-bound Windows release gate passed **588 tests across 34 stages**, including TypeScript, desktop UI, clone/Main boundaries, current-RAM native admission, selected-provider media, artifact inspection and installer lifecycle contracts. The opt-in scanner throughput benchmark was excluded and is not claimed as a performance test.
- The reported retained image passed both the updated artifact verifier and project scanner revision 9 with no findings, threats or coverage gaps. The same saved bytes/version were used, without another generation request, export or approval override. An actual import/repeated-rescan regression preserved safe images, Main and unrelated edits while quarantining real metadata credentials.
- The normal production build and post-build release verifier passed. **132 UI asset hashes and 13 bundled resource hashes** were checked. Exact installer extraction verified **15 payload files**, application PE version **0.2.27.0**, and the native executable with only Tauri's documented three-byte NSIS marker change. No source overlay was used.
- The isolated process-startup smoke was **not run**: the host had 7.35 GiB available, below the existing QA guard's 12 GiB requirement. This guard is not the application's minimum RAM specification. Fresh physical-device installation, real-data upgrade/uninstall and live native-model or provider inference were not evaluated by this repair release.
- Static inspection has format/resource limits and is not a malware or visual-content guarantee. Gzip/tar retain their prior raw screening and can still false-positive on compressed or embedded images; this repair qualifies standalone images and ZIP inspection. No universal model-quality or hardware-readiness claim is made.

Unsigned early access with manual updates. Main and unrelated local files remain outside agent authority; only the app applies reviewed patches to Main. Native models remain optional Settings downloads; this installer bundles no model or new portable edition. Existing user settings remain in effect.

Free-RAM admission is an estimate and does not certify every device, prevent all freezes, or establish model coding quality. Static file inspection is not a malware, visual-content or functional-safety guarantee. No new live model inference, paid-provider request, fresh physical-device installation or real-data migration is claimed for this repair release unless separately recorded in its final verification evidence. The historical 0.2.26 installer and 0.2.15 Mini preview keep their original identities and limitations.

[Release notes](../releases/v0.2.27.md) · [Downloads](DOWNLOADS.md) · [Historical installers](INSTALLER_ARCHIVE.md)
