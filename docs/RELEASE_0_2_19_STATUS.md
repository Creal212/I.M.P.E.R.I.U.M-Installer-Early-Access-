# 0.2.19 release verification

Recorded **2026-09-24**. Scoped early access, not all-device or model-quality certification.

| Field | Verified evidence |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.19_x64-setup.exe` |
| Bytes | 34,258,002 |
| SHA-256 | `886ACB5DBB9E15795F9DAB8CF014CFC12C455E139A6936FED4CFDE7B00FA7D11` |
| App version | 0.2.19.0 |
| Installer / app Authenticode | NotSigned / NotSigned |
| Declared extracted inventory | 15 files; no source overlay; the exact expected Tauri NSIS executable marker change and all other bytes identical |
| Native resources | No model weights or CPU engine archive; exact small VC dependency and required notices retained |
| Native setup | Optional downloads, explicit Start, no automatic download/start on fresh launch |
| Packaging | Per-file LZMA; embedded WebView2 bootstrapper, internet needed if WebView2 is missing |
| Model quality | Not qualified; previous failures and incomplete results retained |
| Physical-device installation / real-data upgrades | Not established |
| Publication | Prepared locally; no public availability claim |

Exact installer extraction, version, resource inventory and release verification passed. The packaged app stayed responsive to Windows input-idle checks during a 15-second isolated process smoke, without automatic native setup, model processes or integrity failure receipts; this was not a full UI or physical-device installation test. Final targeted checks passed: 123 Rust regressions, 122 UI tests and TypeScript. Synthetic NSIS lifecycle checks preserved five project/settings/history/model sentinels. Live Codex requests produced readable greetings and capabilities, a typed clarification, a small Python candidate whose reviewed tests passed, a decoded Workspace PNG and cited web search plus readable HTTPS fetch. Tests used disposable data, preserved outside-file canaries and did not alter real provider permissions. Other providers have protocol fixtures, not universal live certification; native model quality and separate-device installation remain unqualified.

All four native models are optional Settings downloads. Existing models and saved stops are preserved. Runtime identity, memory, artifact and patch review boundaries remain in force. No new portable archive is supplied; the old 0.2.15 preview remains its original build.

A live subscription image-generation smoke is one supported request, not proof of every account, editing flow or media capability. See the exact recorded scope above. Source note SHA-256: `6AF96F7A1483ABBA46BE83AF7F057B884E65960B1F3C0031956EEF1F1584B3E7`.

[Downloads](DOWNLOADS.md) · [Changes](../releases/v0.2.19.md) · [Archive](INSTALLER_ARCHIVE.md)
