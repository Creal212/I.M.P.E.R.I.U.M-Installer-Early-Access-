# 0.2.23 release verification

Recorded **2026-09-24**. Scoped early access, not all-device or model-quality certification.

| Field | Verified evidence |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.23_x64-setup.exe` |
| Bytes | 34,223,836 |
| SHA-256 | `B9EE3682DDC4834B95FBD97DE08C28BEEB4AF60C4AEA8046C39E09733470AE52` |
| App version | 0.2.23.0 |
| Installer / app Authenticode | NotSigned / NotSigned |
| Declared change | Free-form Workspace edits sync to clone for Keep/Revert; Main still requires named patch |
| Model quality | Not qualified |
| Physical-device installation / real-data upgrades | Not established |
| Publication | Remote size and SHA-256 verified against this installer |

Focused unit coverage confirmed free-form add-file and code-edit candidates sync to the clone without creating a named patch, while quality failures stay blocked. Final package identity matches the table above.

All four native models remain optional Settings downloads. No new portable archive is supplied; the old 0.2.15 preview remains its original build.