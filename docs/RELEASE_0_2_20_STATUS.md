# 0.2.20 release verification

Recorded **2026-09-24**. Scoped early access, not all-device or model-quality certification.

| Field | Verified evidence |
| --- | --- |
| Filename | I.M.P.E.R.I.U.M_0.2.20_x64-setup.exe |
| Bytes | 34,252,512 |
| SHA-256 | 0B8AFE6ABD3BE49B470E767873FF62443E9D7E6DCAC6E76F4216636F70D77295 |
| App version | 0.2.20.0 |
| Installer / app Authenticode | NotSigned / NotSigned |
| Declared change | Workspace clone edit reactivation after Read only |
| Native resources | No model weights or CPU engine archive; small VC dependency and required notices retained |
| Native setup | Optional downloads, explicit Start, no automatic download/start on fresh launch |
| Packaging | Per-file LZMA; embedded WebView2 bootstrapper, internet needed if WebView2 is missing |
| Model quality | Not qualified |
| Physical-device installation / real-data upgrades | Not established |
| Publication | Pending remote size and SHA-256 verification against this installer |

Focused unit coverage for clone-mutation phrasing and saved Workspace write grants passed. Final package identity matches the table above. Separate-device installation remains unverified here.

All four native models remain optional Settings downloads. Runtime identity, memory, artifact and patch review boundaries remain in force. No new portable archive is supplied; the old 0.2.15 preview remains its original build.
