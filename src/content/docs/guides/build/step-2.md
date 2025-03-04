---
title: 🏗️ Buidling My First App
description: Buidling using Imagine Kit.
---

## 📝 Step 2: Create the Storytelling Logic

### Add an Assistant Node:
- Click the **Assistant** node to add it to the workflow.
- Set its instruction to:  
  > *"You are a storyteller. Tell intriguing African tales accompanied by images."*
- *(Optional)* Upload a knowledge base to provide more context.

### Define Inputs and Outputs:
- Connect the **Trigger Button** to the **Assistant** node’s **Run** input.
- Add outputs:
  - **Story**: Main text of the generated story.
  - **Story Image Prompt**: Text prompt to generate an image matching the story’s theme.
