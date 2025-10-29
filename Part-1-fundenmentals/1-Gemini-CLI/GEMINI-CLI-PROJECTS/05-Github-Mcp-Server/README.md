# 🚀 How to Connect Gemini CLI with GitHub’s MCP Server

This guide will walk you **step-by-step** through connecting your **Gemini CLI** to **GitHub’s MCP (Model Context Protocol) Server**.
By the end, your GitHub will be fully integrated and ready to use directly inside Gemini CLI — allowing you to interact with repositories, fetch data, and use GitHub tools seamlessly.

---

## 🧩 Prerequisites

Before starting, make sure you have the following ready:

1. ✅ **Gemini CLI Installed**
   - You must have the Gemini CLI installed on your machine.
   - If not installed, you can get it from [Gemini CLI Tutorial][(https://medium.com/google-cloud/gemini-cli-tutorial-series-77da7d494718)] or follow Google’s setup guide.

2. ✅ **A GitHub Account**
   - You’ll need access to your GitHub account where you’ll generate a personal access token.

3. ✅ **A Command-Line Interface (CLI)**
   - Use **Command Prompt**, **PowerShell**, **Terminal**, or **VS Code Terminal** — anywhere you can run commands for Gemini CLI.

---

## 🪪 Step 1: Create a GitHub Personal Access Token

This token will authorize Gemini CLI to connect securely with your GitHub.

### 🔧 Instructions:
1. Go to your GitHub account and click on your **profile picture → Settings**.
 
2. Inside the URL bar, navigate manually to:
https://github.com/settings/personal-access-tokens

3. Now, click **“Generate new token (classic)”** or navigate to:
https://github.com/settings/personal-access-tokens/new

4. Under **Token Description**, name it something like:
Gemini MCP Access

. Under **Select Scopes**, check:
- ✅ `repo` (for repository access)
- ✅ `read:user` (for reading user details)
  
5. Click **Generate Token**.
   
6. **Copy** the token shown — and **store it safely**.
⚠️ You won’t be able to view it again later, so keep it secure!

---

## ⚙️ Step 2: Set Up the GitHub MCP Server

Now that you have the token, let’s connect it with Gemini CLI.

### 🧠 1. Open Your Command-Line Interface
Make sure Gemini CLI is installed and accessible.

Run:
```bash
gemini -m gemini-2.5-flash
```

This launches Gemini CLI using the 2.5 Flash model.


### 🗂️ 2. Create a New Repository for MCP GitHub

Inside your CLI, create or navigate to a project directory.

```bash
mkdir mcp-server-github
cd mcp-server-github
```


### 🪄 3. Create a .gemini Folder and a settings.json File
Inside your mcp-server-github directory, run these commands after activating gemini! (or do them manually):

```bash
mkdir .gemini
cd .gemini
```

Now create a new file called settings.json:

```bash
touch settings.json
```

### 🧾 4. Add the Following Code to settings.json

Paste this exact code inside the file:

```bash
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}
```
📝 Important:
Replace <YOUR_TOKEN> with the personal access token you copied from GitHub.

### 🔁 Step 3: Restart Gemini CLI and Verify Connection

Now we’ll confirm that the MCP GitHub server is connected correctly.

Restart the Server:
In your command line:

Press Ctrl + C twice to stop the current Gemini process.

Restart it using:

```bash
gemini -m gemini-2.5-flash
```

✅ Verify MCP Server Connection
Now type:

```bash
/mcp list
```
You should see:

arduino
1 MCP server connected
github

That means your GitHub MCP Server is successfully connected! 🎉

### 🧠 Step 4: Test Your GitHub MCP Tools
You can now use all the tools provided by GitHub’s MCP.
Here are some examples:

🧰 Example Commands
🔍 Check Your Connected Servers

```bash
/mcp list
```

🗂️ List All Repositories for Your Username

```bash
/github list-repositories <your-username>
```
🧑‍💻 Get Details About Another User’s Repositories

```bash
/github list-repositories <another-username>
```

These commands use the GitHub MCP’s built-in tools to interact directly with GitHub’s API — right from Gemini CLI.

## 🎯 Final Confirmation

If you see:

1 MCP server connected
github

and the commands respond correctly —
✨ Congratulations! You’ve successfully connected GitHub’s MCP server to Gemini CLI.

Now your Gemini CLI can:

Access repositories

Read GitHub data

Use GitHub tools programmatically

And power your agent workflows with real GitHub context
