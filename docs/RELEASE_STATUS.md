# Release status

Recorded **22 September 2026**.

## Built early-access line

The verified built artifact is the Windows x64 **0.2.15 installer** identified in [Downloads](DOWNLOADS.md). It is unsigned and intended for a disclosed manual early-access installation/update route.

Retained local checks covered 130 UI assets and 14 resources, plus an extracted-distribution guard. Packaged-UI evidence was partial: six passed cases and two not applicable. These are scoped checks, not all-features or physical-device certification. Fresh physical-device installation, upgrade and complete real-account sign-in remain unverified in that audit.

Axiom Risk confirmed the required Microsoft runtime redistribution entitlement. Exact bundled notices and the remaining inventory review still apply; publisher confirmation is not an independent legal opinion.

## Unbuilt work

**0.2.16 is not an installer.** Agent/model improvement work was explicitly paused on 22 September. Scoped response/context and loading/activity evidence exists, but native quality remains open. The frozen QA format variation passed nine checks and one synthetic integration; its two live prompts have not run. Those changes are not included in 0.2.15.

## Portable editions

The **Mini preconfigured preview ZIP** was published with the installer on 22 September 2026 in [the 0.2.15 release](https://github.com/Creal212/I.M.P.E.R.I.U.M-Installer-Early-Access-/releases/tag/v0.2.15). Exact file/inventory and archive CRC checks passed. GitHub's uploaded byte counts and SHA-256 digests match both pinned files, and their public download URLs return successfully. Its launcher, app/model startup, clean-device behavior and relocation have not been executed or tested. Packaging alone does not establish offline or hardware behavior. No qualified regular/Core portable package is published by this document.

Each actual portable package needs its own exact files, checksums, runtime/model notices, clean bootstrap, data-location explanation and relocation qualification. Do not ship a development virtual environment or a loose executable from another build as a substitute.

A published binary must match its exact release notes, signature disclosure and checksum. A new signed/rebuilt package needs new verification. Website claims and historical note dates are not proof of asset availability.
