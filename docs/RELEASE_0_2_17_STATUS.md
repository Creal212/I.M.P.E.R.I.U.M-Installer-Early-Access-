# 0.2.17 verification and limits

Recorded **23 September 2026**. The [0.2.17 early-access release](https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-/releases/tag/v0.2.17) is public. Uploaded installer, checksum-file and validation-record sizes and SHA-256 digests match the verified local files.

## Completed local checks

- **375 focused interface and access-control checks** passed for the saved application source.
- **22 distribution-contract checks** passed.
- **8 isolated native integrity checks** passed against the actual integrity module. This is not a completed test run of the entire native application.
- **11 package checks** passed for the generated 0.2.17 installer payload.
- The NSIS installer lifecycle checks passed using a synthetic, isolated test installation. This exercises the installer mechanism; it is not proof of installation on a separate physical device or of an upgrade using a real user's data.
- Visual review covered the refreshed interface and both themes. Website release-catalog and reference-guide checks also passed independently; website tests do not qualify desktop model behavior.

## Final artifact checks

The NSIS package was built successfully. Exact extracted-inventory verification passed for **130 interface assets and 14 resources**. The packaged application reports version **0.2.17.0**.

| Field | Verified local value |
| --- | --- |
| Installer filename | `I.M.P.E.R.I.U.M_0.2.17_x64-setup.exe` |
| Installer bytes | **879,908,507** |
| Installer SHA-256 | `DD41DD02E70639866CB4CB54700A505ED6B023CBD046D83551B3ECB340899896` |
| Signing | **NotSigned**; no adjacent updater signature |

The packaged application passed an isolated startup check using a fresh application-data profile: it reached input-idle readiness, remained running for 15 seconds, and reported no integrity or startup errors. No model was started automatically. The test process was cleaned up. This is a bounded process-start observation, not a test of every screen or workflow.

The public release contains the exact installer, [SHA256SUMS.txt](https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-/releases/download/v0.2.17/SHA256SUMS.txt), and [machine-readable validation record](https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-/releases/download/v0.2.17/VALIDATION-0.2.17.json). The validation record's SHA-256 is `BE9C9DFAD2ADCBE489A1EA28FD492F787EB0A9D34420C088FC0F2ADBC841F4A5`. Neither model execution nor fresh-device qualification is inferred from successful packaging or this startup check.

## Coverage limits

The full native application test target was not completed. The focused source and isolated-module checks above must not be described as a full native-suite pass.

Fresh-device installation, a real-data upgrade, every connected provider's sign-in and end-to-end tasks, and universal hardware compatibility are not qualified by these checks. Synthetic installer evidence does not remove those gaps.

Native model files and defaults are unchanged. Native-model intelligence/quality qualification remains incomplete and paused. No experimental replacement model or developer evaluation data is distributed. AI may give incorrect or incomplete answers; inspect important work and use a suitable model for the task.

The preconfigured Mini ZIP remains a separate **0.2.15 preview** with its original limitations. No 0.2.17 Mini, Regular or Core portable ZIP is implied by this installer.

[Release notes](../releases/v0.2.17.md) · [Latest installer](DOWNLOADS.md) · [Historical installers](INSTALLER_ARCHIVE.md)
