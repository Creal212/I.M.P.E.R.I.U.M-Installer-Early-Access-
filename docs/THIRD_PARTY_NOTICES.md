# Third-party components and notices

The product's proprietary terms do not override third-party licenses. Required license/attribution texts must accompany the exact package. This overview is not a complete software bill of materials or a substitute for those texts.

## Current download-only installer

From 0.2.19, all four model weights and the CPU engine are optional downloads. The installer retains the exact small Microsoft runtime dependency and required notices. Original model attribution, licensing and quality limitations remain. The following section records the unchanged older package.

## Historical four-tier contents for 0.2.18

The 0.2.18 installer includes the restored Lite baseline; larger models remain optional downloads. Read the exact version's release notes and supplied offline notices. Package availability does not establish model quality.

| Component | Selected artifact / attribution | License or notice |
| --- | --- | --- |
| Agent 589 Lite | IBM Granite 4.0 Micro Q4_K_M, from IBM's `granite-4.0-micro-GGUF` repository | Apache-2.0; original IBM license and attribution retained. The user-restored baseline is not a code-quality certification. |
| Agent 589 Mini | Qwen2.5-Coder-7B-Instruct Q4_K_M, Qwen / Alibaba Cloud | Apache-2.0; exact publisher/conversion provenance and supplied notices retained. Optional manual preview. |
| Agent 589 | Qwen2.5-Coder-14B-Instruct Q5_K_M, Qwen / Alibaba Cloud | Apache-2.0; exact publisher/conversion provenance and supplied notices retained. Optional manual preview. |
| Agent 589 Core | Devstral-Small-2-24B-Instruct-2512 Q4_K_M, Mistral AI; GGUF from lmstudio-community | Apache-2.0; publisher and conversion provenance retained. Optional Experimental package with simulation-only integration evidence. |
| Local syntax checks | tree-sitter 0.26.13 and tree-sitter-python 0.25.0 | Original MIT texts and Max Brunsfeld attributions retained. These parse syntax without installing Python or executing project code. |
| CPU engine / app-local C++ runtime | llama.cpp b10809 / Microsoft 14.51.36247 x64 runtime | Original engine/dependency notices and applicable Microsoft redistribution terms remain required. |

The restored Lite artifact is `granite-4.0-micro-Q4_K_M.gguf`, revision `ec48475f0c811d812fbfb61975717a9c36eeb652`, SHA-256 `97c417dcc0534b0737c74016fb2af083cb17c3b51eaac621192d23961b7024eb`. The installer payload preparation contains its original model license/notice, the engine license and Microsoft runtime notice. Settings also retains the other selected model notices and explicitly labeled older provenance. The app's Agent 589 identity and host guidance do not claim authorship of the underlying model weights or endorsement by their publishers.

Official model sources: [IBM Granite](https://huggingface.co/ibm-granite/granite-4.0-micro-GGUF), [Qwen Coder 7B](https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct), [Qwen Coder 14B](https://huggingface.co/Qwen/Qwen2.5-Coder-14B-Instruct), [Mistral Devstral Small 2](https://huggingface.co/mistralai/Devstral-Small-2-24B-Instruct-2512). Parser licenses: [tree-sitter](https://github.com/tree-sitter/tree-sitter/blob/v0.26.13/LICENSE), [Python grammar](https://github.com/tree-sitter/tree-sitter-python/blob/v0.25.0/LICENSE).

Baseline/preview availability, license rights, verified bytes and model quality are separate. Known Granite code/test failures remain recorded; Mini/regular coding qualification is incomplete, and Core has no live model-quality/loading result here. Neither a license nor a checksum guarantees safe or correct generated output. No newer portable archive is implied by in-app optional-model availability.

The 0.2.18 installer includes the Granite Lite weights and CPU engine, plus the Microsoft Edge WebView2 bootstrapper rather than its full offline runtime installer. If WebView2 is missing, setup needs internet to obtain that required Microsoft runtime. WebView2 retains Microsoft's own terms and notices. This prerequisite does not turn native inference into a cloud model, but it means the entire first installation is not guaranteed offline. Optional model downloads and connected features have their separate network requirements.

## Audited 0.2.15 evaluation contents

| Component | Recorded identity | Notice requirement |
| --- | --- | --- |
| CPU Mini model | Qwen3-0.6B Q8_0 | Preserve the supplied model license and applicable upstream notices. |
| CPU engine | llama.cpp b10809 | Preserve its license and dependency notices. |
| App-local Microsoft C++ runtime | 14.51.36247 | Use under applicable Microsoft redistribution terms; publisher entitlement has been confirmed. |

Axiom Risk confirmed the required Visual Studio/Build Tools redistribution license. This records the publisher's confirmation, not independent legal certification. Microsoft's guidance explains that redistribution rights and permitted files are governed by the applicable license: [Redistributing Visual C++ files](https://learn.microsoft.com/en-us/cpp/windows/redistributing-visual-cpp-files?view=msvc-170).

Other app dependencies, preview components, fonts, account helpers, optional engines and skills require their corresponding notices in the actual distribution. A documentation link does not satisfy every license requirement. Exact inventory review remains a release responsibility.

## Optional models and portable editions

A model name or benchmark is not permission to redistribute every conversion. Record origin, immutable version, hash, conversion and applicable terms for each shipped artifact. The same applies to imported skills and bundled scripts/resources.

QA candidates are not distributed merely because they were researched. The restored baseline and explicit optional previews above are deliberate distribution choices with their limitations retained. Portable editions each need their own exact inventory, required notices and package/lifecycle validation; older preview ZIPs keep their original version. Third-party license rights remain intact regardless of the product's proprietary status.

For notice or rights questions, contact [Primepeace2003@gmail.com](mailto:Primepeace2003@gmail.com).
