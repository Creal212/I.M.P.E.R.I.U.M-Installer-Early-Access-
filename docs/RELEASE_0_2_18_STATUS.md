# 0.2.18 release verification

Source-record date: **2026-09-24**. This is a scoped early-access record, not certification of every feature, model or device.

| Area | Recorded evidence |
| --- | --- |
| Package | `I.M.P.E.R.I.U.M_0.2.18_x64-setup.exe` |
| Installer size | **2,121,086,979 bytes** |
| Installer SHA-256 | `26C020C6EBC451D329B8A40FEB6008DFC79119E2F0623E94B59688D79A6E2D6B` |
| Application file/product version | **0.2.18.0** |
| Installer / application Authenticode | **NotSigned / NotSigned** |
| Extracted declared payload | **17 files**, exact inventory and pinned Lite/runtime identities checked |
| Built vs packaged native | Exact documented Tauri NSIS bundle-marker patch only; all other bytes identical |
| Installer compression | Per-file LZMA; exact model/application resources retained |
| WebView2 prerequisite | Embedded bootstrapper; internet required if the Microsoft runtime is missing |
| Final release/inventory checks | Passed for this exact artifact |
| Desktop tests / installer lifecycle smoke | Passed within their recorded local/model-free scope |
| App behavior | Partial; not an all-features or every-provider qualification |
| Native models | Granite Lite restored baseline; Mini/regular manual previews; Core Experimental simulation-only |
| Model quality | **Not qualified**; recorded failures and incomplete results remain limitations |
| Fresh physical-device installation / real-data upgrade | **Not run / not established** by this record |
| New portable package | None; old 0.2.15 Mini preview stays its own version |
| Publication | Exact remote download size and SHA-256 match the verified local installer. |

Exact installer extraction, pinned Granite/runtime payload, 15 resource hashes, 130 UI asset hashes and native version/build comparison passed. Scoped model-free desktop and installer lifecycle checks passed. A 15-second isolated app-process startup check passed with native setup dismissed and no inference. Native coding quality remains unqualified; fresh-device installation, real-data upgrades and all-provider live behavior remain unverified.

The initial solid-compression NSIS attempt failed with a mapped-resource size overflow after the native application compiled. The per-file LZMA retry with the full WebView2 installer then exceeded NSIS's total package limit. Final packaging retains per-file LZMA and the exact Granite/application resources, and embeds the WebView2 bootstrapper instead of its full offline runtime installer. Both failed attempts remain recorded; only the completed final package and its checks are the artifact above. The source lifecycle smoke guards the selected compression and WebView2 mode.

Granite Lite weights and the CPU engine are included. If Microsoft Edge WebView2 is missing, setup needs internet to install that required Microsoft runtime. Native inference can run offline after these dependencies are prepared; optional model downloads and connected features retain their separate network requirements. This package does not promise fully offline installation on every device.

The included model uses the exact restored Granite artifact and original attribution. Lite has known incorrect-code/test outcomes. Mini and regular have incomplete coding-workflow qualification; Core has no live loading, speed, memory or quality result here. Distribution eligibility is separate from verified bytes, owned-runtime readiness and correct output. Model auditions have stopped.

Host tool scope, identity checks, memory admission, Change Review and patch/rollback gates remain active. Syntax acceptance does not prove execution or behavioral correctness. A confident model reply does not override host verification. Default-disabled Laya hooks and incomplete Auto desktop/preset continuation are not new production capability claims.

Local lifecycle/fixture checks are not a substitute for installation on a separate physical device or upgrades of real customer data. The update route remains manual; no signed automatic updater is claimed. Never disable antivirus to install the app.

The frozen source version note SHA-256 is `95FB19D613ED0C192E9266735AEBFFEA0C43F8FF4956A99BD58D8BA37720F39E`. This is source-note provenance, not the installer checksum. Historical installer identities remain in the [archive](INSTALLER_ARCHIVE.md). Public artifacts exclude source trees, private keys and developer/customer data.

[Latest downloads](DOWNLOADS.md) · [0.2.18 changes](../releases/v0.2.18.md) · [Third-party notices](THIRD_PARTY_NOTICES.md)
