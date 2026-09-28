# 0.2.28 release verification

Recorded **2026-09-28**. **Published after exact local package and public-download identity verification.**

| Field | Evidence |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.28_x64-setup.exe` |
| Bytes | 34,997,417 |
| SHA-256 | `0AD3B4B6492BE3DA41AA9FECD16701AE3224E464D472C98C34A5A29EF1B78B06` |
| App version | 0.2.28.0 |
| Installer / app Authenticode | NotSigned / NotSigned |
| Exact extraction / embedded resources | Exact extraction, embedded resource inventory and native-build identity verified |
| Public download identity | Public asset byte count and SHA-256 match this exact installer |
| Fresh physical-device installation / real-data upgrade | NOT EVALUATED |
| Native model coding quality / universal provider support | NOT EVALUATED |

## Scoped source and package checks

The ordinary production build passed the mandatory 40-stage source-bound regression gate: 799 tests, plus TypeScript and installer lifecycle checks. Separate integration runs passed 87 desktop Studio tests, 41 Workspace live-session tests, 26 supervisor tests and 99 tool-loop tests. These counts overlap the gate and are not additive. Two real-native-model tests were intentionally not run.

Release verification passed for version 0.2.28 with 132 frontend asset hashes and 13 bundled resource hashes. Extraction verified the exact packaged resource inventory, executable version 0.2.28.0 and native build identity, allowing only Tauri's documented three-byte NSIS bundle marker. No source overlay was performed.

Both installer and packaged application are unsigned (NotSigned). This is a manual early-access update, not a signed automatic updater release. The optional isolated process-startup check did not launch: available RAM was below the existing QA guard's reserve plus job allowance. No new live-provider inference, native-model quality, fresh-device installation, upgrade or uninstall qualification is claimed.

The selected release UI suite passed 296 tests. An additional Workspace-shell suite had 41 passes and 16 provider-readiness fixture failures; the same 16 failures reproduced against the prior committed main component. Those baseline failures are documented and are not counted as passing checks. StudioChatPanel's broader 45 tests passed.

Pause is cooperative at a safe boundary; an in-flight provider response can finish first. Opaque external tools and older preset paths retain checkpoint/restart behavior. These tests protect the repaired paths but do not guarantee every future model, provider or hardware combination.

Unsigned early access with manual updates. Main and unrelated local files remain outside agent authority; only the app applies reviewed patches to Main. Native models remain optional Settings downloads; this installer bundles no model or new portable edition. Existing user settings remain in effect.

Pause takes effect at the next supported boundary, so an in-flight provider request may finish first. Stop cannot undo completed work or guarantee that a remote provider avoids a charge. Unsupported external worker transports retain their documented checkpoint/restart behavior. A late correction received during final verification may require a follow-up or explicit Resume.

These repairs do not qualify every provider or improve a model's intrinsic coding ability. No new live model inference, paid-provider request, fresh physical-device installation or real-data migration is claimed unless separately recorded in final verification evidence. Existing image, archive and scan limitations remain documented in earlier releases. The historical 0.2.27 installer and 0.2.15 Mini preview keep their original identities and limitations.

[Release notes](../releases/v0.2.28.md) · [Downloads](DOWNLOADS.md) · [Historical installers](INSTALLER_ARCHIVE.md)
