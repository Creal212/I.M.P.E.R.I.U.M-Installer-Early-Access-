# 0.2.29 release verification

Recorded **2026-10-05**. **Published after exact local package and public-download identity verification.**

| Field | Evidence |
| --- | --- |
| Filename | `I.M.P.E.R.I.U.M_0.2.29_x64-setup.exe` |
| Bytes | 34,391,514 |
| SHA-256 | `93AD17D6CC81D127B1EBF36FAFA46F80DD90A3D32155010E4161D96D7ABAC094` |
| App version | 0.2.29.0 |
| App and installation publisher metadata | Axiom Risk Group LLC |
| Installer / app Authenticode | NotSigned / NotSigned |
| Public download identity | Public asset byte count and SHA-256 match this exact installer |
| Fresh physical-device installation / real-data upgrade | NOT EVALUATED |
| New native-model coding quality / paid-provider support | NOT EVALUATED |

## Scoped source and package checks

The ordinary production build passed the complete 41-stage source-bound regression gate: 865 tests, plus TypeScript and installer lifecycle checks. The selected desktop UI suite passed 340 tests. Those checks overlap the gate and are not additive. All prior release stages and minimum counts remain in place; the new appearance-migration stage checks retired-logo preferences. Opposite-theme picker regressions and browser checks keep both helmet and Windows icon previews visible. The package was built from reviewed committed source without the separate unfinished native updater work.

Release verification checks the aligned 0.2.29 versions, frontend asset hashes and 17 bundled resource hashes. Exact extraction checks the configured payload inventory and native build identity, allowing only Tauri's documented three-byte NSIS bundle marker. No source overlay was performed. Four standalone policy documents are included under `resources/legal`: Privacy, Use and AI Guidance, EULA and third-party notices; matching readable copies are available from Settings.

The existing helmet outline is retained, with Axiom's animated mark replacing its inner insignia. Website and desktop theme fixtures check visible contrast, reduced motion and motion pause. Windows executable, shortcut and installer icons use a static version of the same mark because these operating-system surfaces do not animate. Existing retired logo selections migrate without changing themes, font choices, projects or model data.

The disposable NSIS lifecycle smoke covered synthetic first install, retained choices, upgrade, reinstall, existing data, update mode and payload-only uninstall. Five synthetic Main/Clone/settings/history/model sentinels and an unrelated nested document remained unchanged. This is not a fresh physical-device installation or a real-data upgrade.

Both installer and packaged application are unsigned. This is manual early access, not a signed automatic updater release. No new live inference, provider payment, clean-device installation, model-quality, relocation or universal account qualification is claimed. Existing model/runtime/provider behavior and limitations remain attached to their prior releases. Models are optional Settings downloads; this installer bundles no model or new portable edition. It preserves existing user data and startup choices.

The original 0.2.28 installer and 0.2.15 Mini preview remain available with unchanged identities. A separately versioned Mini branding refresh, if published, has its own artifact and verification record.

[Release notes](../releases/v0.2.29.md) · [Downloads](DOWNLOADS.md) · [Historical installers](INSTALLER_ARCHIVE.md)
