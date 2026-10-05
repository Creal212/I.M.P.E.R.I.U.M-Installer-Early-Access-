# Latest installer and verification — 0.2.29

[**Download 0.2.29 · Windows x64**](https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-/releases/download/v0.2.29/I.M.P.E.R.I.U.M_0.2.29_x64-setup.exe) · [Changes](../releases/v0.2.29.md) · [Historical installers](INSTALLER_ARCHIVE.md). Use the versioned asset and compare its complete checksum.

Only attached official release assets are app packages. This release is unsigned and uses manual installation and updates. Repository/source archives are not the application.

All four native models are optional downloads in **Settings → Agent 589**. Download files, then select Start. This installer bundles no model and does not initiate a new model download; existing model setup and startup preferences remain in effect. The first Start may download the pinned CPU engine. The installer retains only the small licensed Windows dependency and notices. WebView2 may need internet if missing; native inference runs offline after preparation.

## Mini preconfigured preview

[Download the legacy Mini 0.2.15-axiom.1 branded refresh](https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-/releases/download/v0.2.15-axiom.1/IMPERIUM-0.2.15-axiom.1-Mini-preconfigured-preview-win-x64.zip) · [Separate verification](RELEASE_0_2_15_AXIOM_1_STATUS.md)

- Filename: `IMPERIUM-0.2.15-axiom.1-Mini-preconfigured-preview-win-x64.zip`
- Size: **1,410,851,054 bytes**
- SHA-256: `A4688A78B43886D51AE07CA476052D05255D39DA57B96912DDE1215423864BF8`
- Checks: all 67 ZIP member hashes, exact package inventory, focused UI/native/integrity regressions and exact public download identity.
- Preserved: all 40 original Data files, model/runtime/setup values, 13 original App resources and VBS launcher.
- **Not tested:** launcher execution, actual app/model startup, clean-device behavior or moving the package.

This separate unsigned manual prerelease is an **Axiom-branded refresh of the legacy 0.2.15 Mini preview**. It preserves that preview's bundled model, runtime and setup behavior; it is not the current 0.2.29 installer or its optional model catalog. It includes a newly built executable, updated publisher/brand/policy documents and the original README/manifest archived unchanged. No populated user profile or development environment is copied.

The [original 0.2.15 ZIP](https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-/releases/download/v0.2.15/IMPERIUM-0.2.15-Mini-preconfigured-preview-win-x64.zip) is unchanged: 1,300,627,851 bytes, SHA-256 `E6273706210C8669E14517F94DCE2271FF05A91B017F8BC60CD87763E0C71566`. Its historical qualifications remain intact.

Extract the complete archive to a new writable folder. Windows x64, **Microsoft Edge WebView2** and Windows Script Host are prerequisites; WebView2 is not bundled in this ZIP. Do not disable Windows security settings if the launcher is restricted. Read the included README and [preview license](PREVIEW_LICENSE.md).

Use `Launch I.M.P.E.R.I.U.M.vbs`, which is designed to open the GUI without a console and sets absolute application/WebView data paths inside that extracted folder. **Do not open the App executable directly:** it bypasses the separate profile. Then use the in-app Agent 589 Mini setup/start action; the model must actually respond before it is ready. Nothing is pre-running or marked falsely healthy.

Stop the model and close the app before moving/backing up the folder. Main paths and provider/OS credentials are not guaranteed portable. **Never upload or redistribute Data after using the app:** it can contain private conversations, settings or credentials. Retain the untouched official ZIP instead.

## Exact installer identity

| Field | Verified value |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.29_x64-setup.exe` |
| Size | 34,391,514 |
| SHA-256 | `93AD17D6CC81D127B1EBF36FAFA46F80DD90A3D32155010E4161D96D7ABAC094` |
| App version | 0.2.29.0 |
| Installer / app Authenticode | NotSigned / NotSigned |

Exact extraction, embedded resource inventory, version and public-download identity checks passed for 0.2.29. [Read the scoped evidence](RELEASE_0_2_28_STATUS.md). No new portable version is implied.

Use PowerShell `Get-FileHash -Algorithm SHA256 -LiteralPath "path-to-downloaded-installer.exe"` and compare the complete hash. Save work, close the app and keep backups. Keep Windows protection enabled. Real-data upgrade and separate-device installation remain unverified here.

[Getting started](GETTING_STARTED.md) · [Hardware](HARDWARE_AND_MODELS.md)
