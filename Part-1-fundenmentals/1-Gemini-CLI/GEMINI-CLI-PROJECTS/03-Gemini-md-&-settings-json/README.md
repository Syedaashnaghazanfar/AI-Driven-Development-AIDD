# Gemini.md Usage Guidelines

When working with `GEMINI.md` files, please keep the following in mind:

*   **Saving Changes:** After adding any new information to a `GEMINI.md` file, always remember to save the file.

*   **Restarting Gemini Server:** After saving changes to `GEMINI.md`, it's crucial to restart the Gemini server for the changes to take effect.

*   **Two Types of `GEMINI.md` Files:**

    *   **Global `GEMINI.md`:** This file is set globally (e.g., `C:\Users\ashna\.gemini\GEMINI.md`). It stores information that applies across all your projects.

    *   **Project-Level `GEMINI.md`:** Each project will have its own `GEMINI.md` file (e.g., `03-Gemini-md\GEMINI.md`). This file stores information specific to that particular project.

    *  **Local Context Files `plan.md`:**  Files in sub-directories for highly specific instructions about a particular module or component (Eg: `03-Gemini-md\plan.md`).

*   **Using `/memory add`:**
    *   Use the `/memory add` command (e.g., `/memory add my name is Ashna Ghazanfar`) when you want to save information to the **global `GEMINI.md` file**. This is for facts that should be remembered across all projects.

    *   For example, if you add "my name is Ashna Ghazanfar" using `/memory add`, Gemini will remember your name globally.

*   **Saving to Project-Level `GEMINI.md`:**

    *   When you ask Gemini to save information to a `GEMINI.md` file *without* using the `/memory add` command, it will always add the provided context to the **project-level `GEMINI.md` file** (the one within your current project directory).

    *   This is ideal for project-specific notes, configurations, or instructions.

*   **Using `settings.json` for Context Management:**

    *   To avoid confusion with general project files like `plan.md` or `execution.md`, we create a `.gemini` folder within your project directory.

    *   Inside this `.gemini` folder, you'll find a `settings.json` file.

    *   This `settings.json` file allows you to define which specific file names should be included in the context for Gemini to use.

    *   Beyond context management, `settings.json` can be used for various other configurations, such as:

        *   **Customizing AI behavior:** Adjusting parameters for how Gemini processes information or generates responses.

        *   **Defining project-specific commands:** Creating shortcuts or custom shell commands that Gemini can execute within your project.

        *   **Managing ignored files:** Specifying patterns for files or directories that Gemini should ignore during searches or operations.
