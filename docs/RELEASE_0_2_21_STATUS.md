# 0.2.21 release verification

Recorded **2026-09-24**. Scoped early access, not all-device or model-quality certification.

| Field | Verified evidence |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.21_x64-setup.exe` |
| Bytes | 34,203,636 |
| SHA-256 | `8221AD315628E54A3127BE271CF9CBE06CD1FB450FBA76EBA2ECFB047526BCDE` |
| App version | 0.2.21.0 |
| Installer / app Authenticode | NotSigned / NotSigned |
| Declared change | Clone write lease sync across connection profiles; Console auto-scroll |
| Native resources | No model weights or CPU engine archive; small VC dependency and required notices retained |
| Native setup | Optional downloads, explicit Start, no automatic download/start on fresh launch |
| Packaging | Per-file LZMA; embedded WebView2 bootstrapper, internet needed if WebView2 is missing |
| Model quality | Not qualified |
| Physical-device installation / real-data upgrades | Not established |
| Publication | Remote size and SHA-256 verified against this installer |

Focused unit coverage for related-profile permission sync and lease-aligned guidance passed. Final package identity matches the table above. Separate-device installation remains unverified here.

All four native models remain optional Settings downloads. Runtime identity, memory, artifact and patch review boundaries remain in force. No new portable archive is supplied; the old 0.2.15 preview remains its original build.
