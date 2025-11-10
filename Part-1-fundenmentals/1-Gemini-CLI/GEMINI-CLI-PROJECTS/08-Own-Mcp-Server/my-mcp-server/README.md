# 🚀 Building Your Own MCP Server — My First MCP Server

**Detailed Guidance Article**  
You will be successfully building your own **MCP (Model Context Protocol) Server** following the guide from [Google Cloud’s Gemini CLI Tutorial Series - Part 8](https://medium.com/google-cloud/gemini-cli-tutorial-series-part-8-building-your-own-mcp-server-74d6add81cca).

This project demonstrates how to create a custom MCP server using **FastMCP**, define tools, and even integrate a prompt that interacts intelligently with them.  
By the end of this setup, you have your own functional server running locally — ready to process requests, analyze text, and communicate smoothly with Gemini or other MCP-compatible clients.

---

## 🧠 Overview

Your MCP server (`MyFirstMCPServer`) comes equipped with:
- **Three tools** that handle greetings, text readability, and language clarity.
- **One intelligent prompt** that uses those tools together to perform technical editing.

This setup allows your server to both **compute** and **reason**, combining automation with language understanding.

---

## 🧩 Code Summary

Here’s the basic structure of your MCP server:

```python
from fastmcp import FastMCP
import re

mcp = FastMCP(name="MyFirstMCPServer")
```
## 🧰 Defined Tools and Prompt

Your MCP Server includes **three tools** and **one intelligent prompt**.  
Each plays a unique role in how your server understands, analyzes, and responds to text.

### 🛠️ Tools

#### 1. `greet(name)`
A simple yet friendly function that returns a personalized greeting.  
It’s perfect for confirming that your MCP Server is responding correctly.  
**Example:**  
```python
greet("Ashna")
# Output: "Hello Ashna! It’s a pleasure to connect from your first MCP Server."
```

### 2. calculate_readability(text)

Analyzes how easy or difficult a piece of text is to read using the Flesch-Kincaid Grade Level formula.
It helps determine whether your content suits a general audience or a more technical one.

**Example:**
```python
calculate_readability("This is a simple sentence.")
# Output: 2.65
```

### 3. check_for_weasel_words(text)

Scans your text for vague or ambiguous words like many, some, often, etc.
These are “weasel words” — they weaken clarity.
This tool returns a list of such words so you can replace them with precise alternatives.

**Example:**
```python
check_for_weasel_words("Many people often think this way.")
# Output: ["many", "often"]
```

### 💬 Prompt

#### `tech_edit(text_to_review)`

This is where your **MCP Server** shows its full potential.  
The `tech_edit` prompt acts like a **senior technical editor**, automatically using the tools defined above to review a piece of text.

It performs **three main tasks:**

1. 🧮 **Calls `calculate_readability`** to determine your text’s reading level.  
2. 🔍 **Uses `check_for_weasel_words`** to detect vague or ambiguous phrasing.  
3. ✍️ **Provides an AI-powered editorial review** — analyzing tone, clarity, and sentence structure.

---

#### 🧾 Output Format

The final output is a clean, structured **Markdown report** containing three sections:

- `### Readability Score`  
- `### Weasel Words`  
- `### General Feedback`

---

#### 🧠 Example Output

```markdown
### Readability Score
Your text scores a **7.8** on the Flesch-Kincaid scale — suitable for most general audiences.

### Weasel Words
Found: *some*, *many*
- **some** → Be more specific for clarity.
- **many** → Consider giving an exact number or example.

### General Feedback
The tone is approachable but can be made more concise.  
Try replacing long sentences with shorter ones to enhance readability.

```
## ⚙️ Tools vs Prompt — Difference Table

Your MCP Server includes both **tools** (which perform specific actions) and a **prompt** (which combines those tools with intelligent analysis).  
Here’s a clear breakdown of how each works:

| **Name** | **Type** | **Purpose** | **Input** | **Output** | **Example Use Case** |
|-----------|-----------|-------------|------------|-------------|----------------------|
| `greet` | 🛠️ Tool | Sends a personalized greeting message | `name: str` | A friendly message string | `"Hello Ashna! It’s a pleasure to connect from your first MCP Server."` |
| `calculate_readability` | 🧮 Tool | Calculates Flesch-Kincaid grade level for a text | `text: str` | `float` (readability score) | Determines if your text suits general or academic audiences |
| `check_for_weasel_words` | 🔍 Tool | Finds vague “weasel words” (like *some*, *many*, *often*) | `text: str` | `list[str]` (unique weasel words) | Helps you spot weak phrasing for clearer writing |
| `tech_edit` | 💬 Prompt | Acts as a senior editor combining all tools + AI analysis | `text_to_review: str` | Markdown report with readability, weasel words, and detailed feedback | Provides a full editorial review and improvement suggestions |

---

## 🌟 Final Words

You’ve just built your **own MCP Server** — not just a simple script, but a dynamic bridge between **language**, **computation**, and **intelligent processing**.  
Now your system can both *calculate* and *converse*, making your text analysis smarter and smoother.

> “From code to cognition — your MCP Server is alive and ready to serve.” 🧩

---

## 🧭 Next Steps

- ⚙️ **Experiment with adding more tools** — e.g., a grammar checker, keyword extractor, or sentiment analyzer.  
- ☁️ **Deploy your MCP Server** on a cloud platform for remote access and scalability.  
- 🤖 **Integrate it with Gemini CLI** to automate writing, reviewing, and data processing workflows seamlessly.  

---

**Made with 💡 FastMCP + Python**  
**by Ashna Ghazanfar**

