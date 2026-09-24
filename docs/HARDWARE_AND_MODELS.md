# Hardware and native models

The 0.2.18 installer contains the restored Lite baseline. Larger tiers are optional manual previews, available in native setup; no larger portable archive is implied.

Granite Lite and its CPU engine are included. The installer embeds the Microsoft Edge WebView2 bootstrapper, so installation needs internet if that required runtime is missing. Native inference can run offline after preparation. Optional larger-model downloads and connected providers need their own network connection.

| Tier | Selected model | AI memory allowance | Status |
| --- | --- | --- | --- |
| **Agent 589 Lite** | IBM Granite 4.0 Micro Q4_K_M | 4 GiB | Included restored baseline with known code/test limitations |
| **Agent 589 Mini** | Qwen2.5-Coder 7B Q4_K_M | 8 GiB | Optional manual Experimental preview; complete coding workflows unqualified |
| **Agent 589** | Qwen2.5-Coder 14B Q5_K_M | 16 GiB | Optional manual Experimental preview; complete coding workflows unqualified |
| **Agent 589 Core** | Devstral Small 2 24B Q4_K_M | 20 GiB | Optional Experimental; simulation-only integration evidence, no live qualification |

These are **RAM allowances available to AI**, not total installed system RAM or NVIDIA VRAM requirements. The current packages use the CPU runtime and require additional host headroom of at least 2 GiB. The app checks current memory before starting; download size is not total runtime memory, and an allowance is not a performance guarantee.

One app-managed native runs at a time. Starting another confirms shutdown of the current owned native first. Downloading an optional model does not stop the active one. Imported providers and unrelated processes are separate. Stop/pause choices and older installations are preserved.

Model files, runtime readiness and an authenticated responding model are separate. Only running identity-checked natives appear in task selectors. Larger tiers are not started automatically. If a start fails, inspect the visible setup error instead of assuming a project was lost.

Older retained native models and the 0.2.15 Mini ZIP keep their original model IDs, runtime and requirements; their older GPU recommendations do not describe these four CPU packages. Heavy is not part of the active lineup.

These native packages provide text/code assistance. Image, audio and video generation still require compatible models/providers and actual host tools. Skills do not add a missing engine or extra filesystem authority. Review and test generated work; none of these labels certifies coding correctness.

[Downloads](DOWNLOADS.md) · [Exact release limitations](RELEASE_0_2_18_STATUS.md) · [Third-party notices](THIRD_PARTY_NOTICES.md)
