# 0.2.25 release verification

Recorded **2026-09-27**. **Published unsigned early access.** Scoped early access, not all-device or model-quality certification.

| Field | Current evidence |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.25_x64-setup.exe` |
| Bytes | 34,921,188 |
| SHA-256 | `964135793EDE09BAA4AD4CF2644B629CA3F468F8F22C477A150D9CF95B604359` |
| App version | 0.2.25.0 |
| Installer / app Authenticode | NotSigned / NotSigned |
| Package extraction / resource inventory | Passed exact installer extraction, allowlisted resource identity and packaged native-build comparison |
| Isolated packaged-app startup | Passed one 15-second run: reached input idle, no integrity-failure receipt or automatic model download; owned processes cleaned up |
| Publication / public download identity | Verified public asset byte count and SHA-256 match this installer |
| Focused desktop interface/helper checks | **331/331 passed across 9 files**, covering themes, Home, Settings/guide behavior and related regression cases |
| Website companion/release helpers | **26/26 passed**; separate website evidence, not desktop package certification |
| Broader suite | Documented preexisting failures remain; not an all-tests-pass claim |
| Native or imported model quality | **NOT EVALUATED** in this interface release |
| Fresh physical-device installation / real-data upgrades | **NOT EVALUATED** |

## What this update changes

Eight palettes (six new), coordinated Home motion, Agent 589's configurable local companion, About's developer portrait and rotating asides, first-paint reduced-motion restoration, Settings shortcuts and three explicit IPC command grants used by clone-permission controls and confirmed State 0 recovery.

The companion uses prewritten local guidance and a local quip rotation. It does not require model inference or add a cloud service. This feature does not grant an agent wider access to the computer. Restored IPC grants retain the underlying project checks and recovery confirmation.

## Distribution limits

The package is unsigned with manual installation/updates; leave Windows protection enabled. The published asset byte count and SHA-256 match the verified local installer and these release notes.

All four native models remain optional Settings downloads. No new portable archive is supplied; the historical 0.2.15 Mini preview retains its original launcher, startup and relocation limitations. The exact 0.2.24 package remains in [Historical installers](INSTALLER_ARCHIVE.md).

[Release notes](../releases/v0.2.25.md) · [Downloads](DOWNLOADS.md) · [Release status](RELEASE_STATUS.md)
