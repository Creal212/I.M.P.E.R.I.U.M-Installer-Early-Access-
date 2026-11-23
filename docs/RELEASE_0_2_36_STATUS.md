# 0.2.36 release verification

Recorded **2026-11-23**. The installer was built locally and its byte length and SHA-256 were calculated from that file before upload. The uploaded release asset was downloaded again and matched the same SHA-256.

| Field | Evidence |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.36_x64-setup.exe` |
| Bytes | 34,532,763 |
| SHA-256 | `138b0a0d12cf07763e869204469053d7d3b4717e4aa47368fc69bbc1480fc783` |
| App version | 0.2.36 |
| Installer / app Authenticode | NotSigned / NotSigned |
| Fresh physical-device installation / real-data upgrade | NOT EVALUATED |

The 44-stage release regression passed before this package was bundled. The built app activates keys at `https://www.imperium589.world/api/licenses/activate` and no longer contains the Axiom activation address. It keeps an existing key for this PC, refuses a key bound to another PC, and stops opening for a refunded or disputed purchase at the next start. The Tauri updater signature was not produced because no updater private key was configured; Imperium's update check verifies the installer by SHA-256, as for 0.2.34 and 0.2.35.

[Release notes](../releases/v0.2.36.md)
