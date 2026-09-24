# Latest installer and verification

[**Download the latest installer · 0.2.18 · Windows x64**](https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-/releases/download/v0.2.18/I.M.P.E.R.I.U.M_0.2.18_x64-setup.exe) · [Changes](../releases/v0.2.18.md) · [Historical installers](INSTALLER_ARCHIVE.md)

Only official attached release assets are app packages. GitHub repository/source archives are not installers. This is an unsigned early-access build with manual updates.

## Editions

| Edition | Status |
| --- | --- |
| **Windows x64 installer 0.2.18** | Current installer includes restored Granite Lite and CPU engine. WebView2 bootstrapper needs internet if that runtime is missing. Larger-model downloads are optional; checks are scoped. |
| **Earlier 0.2.15 Mini preconfigured preview ZIP** | Original older app/model; no 0.2.17 or 0.2.18 changes. Launcher, model startup, fresh-device behavior and relocation remain untested. |
| **Portable Agent 589 / Core** | Planned; no new portable archive is supplied by this release. |

See [four-tier hardware and model guidance](HARDWARE_AND_MODELS.md). Memory allowances mean RAM available for AI, plus host headroom. One app-managed native runs at a time. Downloading does not stop the current native; starting another confirms its owned shutdown first. Larger previews are not automatically started. Older model files/preferences stay distinct.

The entire first installation is not guaranteed offline: Microsoft Edge WebView2 is required, and its embedded bootstrapper downloads the runtime if it is missing. Granite weights and the CPU engine do not need a model download. Native inference can run offline once prepared; optional downloads, cloud providers and connected features still need internet.

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
| Filename | `I.M.P.E.R.I.U.M_0.2.18_x64-setup.exe` |
| Size | **2,121,086,979 bytes** |
| SHA-256 | `26C020C6EBC451D329B8A40FEB6008DFC79119E2F0623E94B59688D79A6E2D6B` |
| Application file/product version | **0.2.18.0** |
| Installer / application Authenticode | **NotSigned / NotSigned** |
| Update route | Manual official download; no signed automatic updater claimed |

The exact 17-file declared extracted payload passed inventory checks, with the exact expected Tauri NSIS executable marker change and all other bytes identical and no source overlay. [Read the scoped verification record](RELEASE_0_2_18_STATUS.md). The exact remote download matches this identity. Rebuilding or signing changes the bytes and requires a new audit.

Axiom Risk confirmed the required Microsoft runtime redistribution entitlement. This is a publisher confirmation, not independent legal certification; original notices and applicable terms still matter.

## Verify before running

1. Download the exact official asset above.
2. In PowerShell, run `Get-FileHash -Algorithm SHA256 -LiteralPath "path-to-downloaded-installer.exe"` and compare the complete result with the hash above.
3. Read the unsigned status and limitations. A checksum does not establish a signed publisher.
4. Save work, close the app and keep independent backups before upgrading.

Do not disable antivirus to bypass a concern. Fresh physical-device installation and upgrades of real customer data remain unverified here. Normal upgrades replace installed program files while preserving data outside that tree. Uninstalling is not complete data erasure.

## Portable qualification

Portable editions require their own exact archive, dependency, clean-profile/relocation and lifecycle checks. An optional in-app model download is not a preconfigured portable edition. Old ZIPs keep their original version and limitations.

[Getting started](GETTING_STARTED.md) · [Release status](RELEASE_0_2_18_STATUS.md) · [Hardware](HARDWARE_AND_MODELS.md)
