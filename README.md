## 🚀 README: RPG Master Assistant with LLM for One-Shot Narrative Creation

### 🔗 Project Link

**RPG Master Assistant:** [https://nlp-rpg-narrative-assistant.vercel.app/](https://nlp-rpg-narrative-assistant.vercel.app/)

-----

## 📖 Project Overview

The **RPG Master Assistant** is a web application developed as a **Course Conclusion Paper (TCC)** project. Its primary goal is to **accelerate and structure the creation of One-Shot adventures** (single session) for Tabletop Role-Playing Games (TTRPGs).

The project functions as a **digital scaffolding**, guiding masters—especially beginners or those short on time—through a structured **9-step questionnaire**. The user's input is combined with specific system instructions and processed by a **Large Language Model (LLM) from Google (Gemini)**, resulting in a coherent, formatted, and ready-to-play adventure script.

The source code (front-end) is built with **React** and **TypeScript**, while the integration with the LLM API is managed securely via a **Serverless Function on Vercel**.

-----

## 🎓 Academic Context

This work serves as the **final Course Conclusion Paper (TCC)** for the **Postgraduate Specialization Degree** in **Natural Language Processing (NLP)**.

The course is an initiative of the **Federal University of Goiás (UFG) – Goiânia Regional**, forming part of the Training and Qualification Plan for the **EMBRAPII Competence Center in Immersive Technologies (AKCIT)**.

The project aims to explore the innovative application of LLMs to structure narrative creation and combat **creative block** in TTRPGs, focusing on the pedagogical philosophy of **scaffolding** to aid the master's design process.

-----

## 🎯 Methodology of Design (9-Step Scaffolding)

The core of the project is the structured questionnaire, based on a **Narrative Modulation** methodology focused on single-session games. This method ensures the user provides all essential elements for the story's coherence.

| Pillar | Main Focus (Foco Principal) | Key Question (Example) |
| :--- | :--- | :--- |
| **INTRO** | Immediate Action | Where does the adventure begin and what is happening? |
| **PICK ONE GOAL** | Goal Clarity | What is the one thing that must be achieved? |
| **PACE** | Rhythm and Time | What is the main confrontation/scene that will consume most of the playtime? |
| **STRUCTURE** | Flexibility | List 3 challenges/scenes you can insert at any moment. |
| **STREAMLINE** | Simplification | Which complex rule or lore information will you ignore or simplify? |

-----

## ✨ Key Technologies

| Category | Technology | Project Use |
| :--- | :--- | :--- |
| **Front-end** | **React & TypeScript** | Development of the user interface and data typing. |
| **Styling** | **Tailwind CSS** | Responsive and modular design. |
| **LLM Engine** | **Google Gemini (gemini-2.0-flash)** | Content engine for narrative generation. |
| **Backend/Deployment** | **Vercel** | Hosting the application and executing the Serverless API. |
| **Utilities** | **Vite** | Modern module bundler. |
| **Export** | **html-to-image, jspdf** | Functionality for exporting the generated script. |

-----

## 🔒 Security and Platform Rationale

The project utilizes **Google Gemini** and **Vercel** services due to their **robust free tiers**, which are sufficient for the research phase and initial operation, while providing efficient and secure solutions for the TTRPG community.

### Google Gemini (API)

  * **Model Used:** `gemini-2.0-flash`
  * **Rationale:** A fast and efficient model, ideal for structured text generation tasks. The **free tier** ensures the project can operate without cost during the validation phase.
  * **Key Security:** The API key (`process.env.GEMINI_API_KEY`) is **not exposed** on the front-end. All calls to the model are made securely via Vercel's **Serverless Function** (`/api/ai-generator/genai-generate`).

### Vercel (Hosting)

  * **Functionality:** Hosts the Front-end (React) and executes the Backend (*Serverless Functions*).
  * **Rationale:** Vercel offers a **Hobby (free) plan** that easily integrates static hosting and server-side code execution, which is **crucial for hiding the Gemini LLM key** and maintaining the project's security.

-----

## ⚙️ Configuration and Development

### Application Structure

The project uses a **Mono-repo Front-end/API** model, utilizing Vercel to manage the *Serverless Function* that encapsulates the Gemini API call logic.

| File/Directory | Function |
| :--- | :--- |
| `package.json` | List of dependencies (React 19, Gemini SDK, Tailwind). |
| `api/ai-generator/genai-generate.ts` | **Backend:** Serverless function that handles the secure call to the Gemini API. |
| `src/constants/system-prompt.ts` | Defines the specific rules and output format for the LLM. |

### Development Commands

Ensure Node.js and the Vercel CLI are installed.

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Local Development (Front-end):**
    ```bash
    npm run dev
    ```
3.  **Full Development (Front-end + Serverless):**
      * Requires Vercel CLI.
    <!-- end list -->
    ```bash
    npm run dev:full
    ```

-----

## 💡 Contribution and Research

This project is open to the community and will remain active beyond the TCC to assist masters.

  * **Application Link:** [https://nlp-rpg-narrative-assistant.vercel.app/](https://nlp-rpg-narrative-assistant.vercel.app/)
  * **Feedback Form:** To contribute to the research and validation of the TCC, please fill out the form after testing the application. Your feedback is essential to validate the research hypothesis.
      * [Validation Form](https://docs.google.com/forms/d/e/1FAIpQLSdL9s87E32DWUFfMZsgJ85XHEhps243Xi8rDhKMVyea21yLpw/viewform)

Thank you for your interest\!

**Developers:**

  * Cristiano Cesar da Silva Oliveira
  * Paulo Cesar Ferreira Junior
