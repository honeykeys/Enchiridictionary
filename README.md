# 🧬 Enchiridictionary

**A multi-agent fantasy language engine that brings your fictional worlds to life.**  
🏆 Winner of 3rd Place at the London Hacking Agents Hackathon

## ✨ What is Enchiridictionary?

**Enchiridictionary** is a generative linguistics engine inspired by the world-building genius of J.R.R. Tolkien. Using a team of AI agents and real-world linguistic data, it constructs **original, believable fantasy languages**—complete with syntax, phonology, and morphology.

Built using:
- 🧠 **Mistral** for language feature agents (phonology, syntax, morphology)
- 🧠 **Claude Opus** as the orchestrator agent
- 🔁 **Langflow** for agent orchestration and prompt chaining
- 🌐 **Next.js** frontend
- ⚙️ **Langflow API** backend integration

## 💡 Why It Matters

LLMs are powerful, but they often hallucinate when asked to follow complex rules. Enchiridictionary solves this with **multi-agent specialization** and **structured prompting**, giving writers and designers the power to build unique languages without needing a linguistics degree.

It’s not about replacing creators—it’s about **empowering imagination** at scale.

## 🛠️ How It Works

1. **Users select** three real-world languages to inspire:
   - Phonology (sound system)
   - Syntax (word order/grammar)
   - Morphology (word formation)

2. These are passed to a Langflow pipeline with three Mistral agents:
   - Each agent handles one linguistic domain

3. A Claude Opus orchestrator:
   - Synthesizes the parts into a full language
   - Translates famous quotes (e.g., “One Ring to rule them all…”)

4. The result is displayed in a readable lexicon format with translations.

## 📦 Features

- ⚙️ Multi-agent LLM architecture
- 📚 Lexicon generation (10–15 words)
- 🔤 Custom phonology/syntax/morphology
- 🌍 Translation of famous literary or historical quotes
- 🧪 Built-in experimentation with chaining + few-shot prompting

## 🧪 Example Output

```plaintext
Thaloran: A Fantasy Language
Word Order: VSO
Phonology: French-inspired
Morphology: Fusional

Lexicon:
vaire - fire
montair - mountain
reine - queen
kombat - to fight
...

“One ring to rule them all...” → Translated into your custom conlang!
