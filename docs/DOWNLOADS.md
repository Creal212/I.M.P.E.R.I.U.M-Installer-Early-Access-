# Latest installer and verification

[**Download 0.2.23 · Windows x64**](https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-/releases/download/v0.2.23/I.M.P.E.R.I.U.M_0.2.23_x64-setup.exe) · [Changes](../releases/v0.2.23.md) · [Historical installers](INSTALLER_ARCHIVE.md)

Only attached official release assets are app packages. This installer is unsigned and uses manual updates. Repository/source archives are not the application.

All four native models are optional downloads in **Settings → Agent 589**. Download files, then select Start. No automatic model download/start occurs. The first Start may download the pinned CPU engine. The installer retains only the small licensed Windows dependency and notices. WebView2 may need internet if missing; native inference runs offline after preparation.

## Mini preconfigured preview

[Download the 0.2.15 Mini preview ZIP](https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-/releases/download/v0.2.15/IMPERIUM-0.2.15-Mini-preconfigured-preview-win-x64.zip)

- Filename: `IMPERIUM-0.2.15-Mini-preconfigured-preview-win-x64.zip`
- Size: **1,300,627,851 bytes**
- SHA-256: `E6273706210C8669E14517F94DCE2271FF05A91B017F8BC60CD87763E0C71566`
- Checks: original app/resource identities, pinned model/runtime inventory, all 60 archive files/lengths and archive CRC.
- **Not tested:** launcher execution, actual app/model startup, clean-device behavior or moving the package.

This is an earlier **0.2.15 preconfigured preview**, not a qualified portable edition or a 0.2.18 build. It contains the exact installer-extracted 0.2.15 app and a new `Data` folder seeded only with pinned Mini model/runtime files and incomplete setup preferences. It does not contain the 0.2.18 themes, interface or response improvements. No user account, conversation, project or developer GPU environment was copied.

Extract the complete archive to a new writable folder. Windows x64, **Microsoft Edge WebView2** and Windows Script Host are prerequisites; WebView2 is not bundled in this ZIP. Do not disable Windows security settings if the launcher is restricted. Read the included README and [preview license](PREVIEW_LICENSE.md).

Use `Launch I.M.P.E.R.I.U.M.vbs`, which is designed to open the GUI without a console and sets absolute application/WebView data paths inside that extracted folder. **Do not open the App executable directly:** it bypasses the separate profile. Then use the in-app Agent 589 Mini setup/start action; the model must actually respond before it is ready. Nothing is pre-running or marked falsely healthy.

Stop the model and close the app before moving/backing up the folder. Main paths and provider/OS credentials are not guaranteed portable. **Never upload or redistribute Data after using the app:** it can contain private conversations, settings or credentials. Retain the untouched official ZIP instead.

## Exact installer identity

| Field | Verified value |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.23_x64-setup.exe` |
| Size | 34,223,836 bytes |
| SHA-256 | `B9EE3682DDC4834B95FBD97DE08C28BEEB4AF60C4AEA8046C39E09733470AE52` |
| App version | 0.2.23.0 |
| Installer / app Authenticode | NotSigned / NotSigned |

The exact extracted inventory passed checks. [Read the scoped evidence](RELEASE_0_2_23_STATUS.md). No new portable version is implied.

Use PowerShell `Get-FileHash -Algorithm SHA256 -LiteralPath "path-to-downloaded-installer.exe"` and compare the complete hash. Save work, close the app and keep backups. Keep Windows protection enabled. Real-data upgrade and separate-device installation remain unverified here.

[Getting started](GETTING_STARTED.md) · [Hardware](HARDWARE_AND_MODELS.md)
