# 0.2.34 release verification

Recorded **2026-11-21**. The installer was built locally and its byte length and SHA-256 were calculated from that file before upload.

| Field | Evidence |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.34_x64-setup.exe` |
| Bytes | 34,492,103 |
| SHA-256 | `11544e74d6ef56d5aecec7a03bc91c3ed46d608a234f1a39dc0aaf0695896345` |
| App version | 0.2.34 |
| Installer / app Authenticode | NotSigned / NotSigned |
| Fresh physical-device installation / real-data upgrade | NOT EVALUATED |
| Live paid-provider compatibility / new model quality | NOT EVALUATED |

## License gate

The installed app asks for a purchased license key before the workspace can start. Native commands stay closed until the Axiom license service accepts that key for this PC's Windows machine id. The installer itself does not consume the key. Copying the installed app or its local license file to another PC does not unlock it.

## Verification scope

The desktop 44-stage release regression passed before this package was bundled. That is not a clean-device installation, a real-data upgrade, or a native-model quality qualification. The package is unsigned. A SHA-256 checksum identifies the file; it is not a publisher signature.

The GitHub release `v0.2.34` stores this file. That repository is private, so an anonymous visit to the GitHub asset address does not download it. After payment, the public sites give the buyer the same bytes from the current installer on imperium589.world. The address is not listed on the page before payment, and it is not derived from the checksum. Older installers are not copied to that site.

[Release notes](../releases/v0.2.34.md) · [Downloads](DOWNLOADS.md)
