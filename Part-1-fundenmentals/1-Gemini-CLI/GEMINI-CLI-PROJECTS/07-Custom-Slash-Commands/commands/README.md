## ⚡ Custom Slash Commands

### 🔗 Reference  
📖 [Gemini CLI Tutorial Series — Part 7: Custom Slash Commands](https://medium.com/google-cloud/gemini-cli-tutorial-series-part-7-custom-slash-commands-64c06195294b)

---

### 💡 Purpose  
Custom Slash Commands allow you to **extend your Gemini CLI** with personalized commands that trigger actions or tools instantly.  
They’re shortcuts to your most-used operations — whether it’s launching a server, testing a tool, or connecting to your MCP.  

Instead of typing long or repetitive instructions, you can define a single `/command` and let Gemini handle the rest.  
It’s all about **speed, automation, and creative control** over your development environment.

---

### 🧩 Use Cases  

Here are a few practical scenarios where custom slash commands make your life easier:

| **Use Case** | **Description** |
|---------------|----------------|
| 🚀 **Start your MCP Server** | Create a `/runserver` command that starts your MCP instantly without retyping the full Python command. |
| 🧠 **Call a Tool Quickly** | Define `/greet Ashna` or `/analyze "text"` to test your MCP tools directly through Gemini CLI. |
| 🧰 **Manage Multiple Projects** | If you work with several servers, you can make project-specific slash commands like `/connect-mcp1` or `/deploy-vercel`. |
| 💬 **Automate Prompts** | Set up `/edit` or `/review` commands that send text directly to your custom prompt (like `tech_edit`) for analysis. |

---

### 🧭 Complete Guidance  

If you want to build and customize your own slash commands step by step — from defining their syntax to executing them inside Gemini — check out the full Medium guide below 👇  

> 📘 **Complete Article:**  
> [Gemini CLI Tutorial Series - Part 7: Building Custom Slash Commands](https://medium.com/google-cloud/gemini-cli-tutorial-series-part-7-custom-slash-commands-64c06195294b)  
> This walkthrough explains:  
> - How to **structure commands** inside the `.gemini` folder.  
> - The role of the **manifest file**.  
> - Linking your commands to specific **MCP tools or prompts**.  
> - Debugging and testing custom commands in real time.  

---

## ⚙️ Notes

> 🧠 **Heads up!**  
> All these commands belong inside your `.gemini` folder — **not anywhere else**.  
> Think of it as your project’s control room 💻 — keep your commands there so everything runs smooth and connected.  

### ✅ Quick Tip
If something doesn’t work:
1. Double-check you’re *inside* the `.gemini` directory.  
2. Run your commands again.  
3. Still stuck? Run `pwd` (on macOS/Linux) or `cd` (on Windows) to confirm your path.  

---

💬 *Pro move:* Treat `.gemini` like your secret command center — keep it clean, keep it powerful.
