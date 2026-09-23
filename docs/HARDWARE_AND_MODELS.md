# Hardware and models

| Tier | Intended role | Distribution status |
| --- | --- | --- |
| **Agent 589 Mini** | Smaller CPU text assistant for short requests | The 0.2.17 installer retains the bundled Qwen3-0.6B Q8_0 model and its matched CPU runtime. Complex coding and exact-output quality remain limited. |
| **Agent 589** | Regular local model for more capable work on suitable hardware | Optional setup; no qualified portable package is claimed here. |
| **Agent 589 Core** | Larger optional local model for substantial hardware | Do not infer compatibility from Mini working. Portable qualification remains pending. |

The product name does not prove a provider entitlement or capability. Exact underlying-model identity should appear in package notes and the app.

Model files, engine readiness and a responding model are separate states. Check measured RAM, GPU and storage guidance before starting. Multiple models and other apps reduce available resources; a weight file's size is not total runtime memory. Stop a running model deliberately if your device cannot support another.

No universal minimum or performance promise is made for planned portable editions. Publish requirements only for their actual bytes and clean-machine measurements. Development model folders are not package specifications.

Mini is text-only in the recorded release guidance. Image, audio, video and file creation need actual compatible models/providers and host tools. A skill cannot add a missing engine.

Native-model quality work remains paused and incomplete. The 0.2.16 version is a source-only milestone; the 0.2.17 visual and reliability changes do not replace or qualify native models. QA candidates are not adopted merely because of upstream scores or isolated correct answers.
