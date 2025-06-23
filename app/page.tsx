'use client'

import { useState } from 'react'

export default function Home() {
  const [phonology, setPhonology] = useState('Welsh')
  const [syntax, setSyntax] = useState('Tagalog')
  const [morphology, setMorphology] = useState('Turkish')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const generateLanguage = async () => {
    setLoading(true)
    setOutput('')

    const res = await fetch('/api/language', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phonology_language: phonology,
        syntax_language: syntax,
        morphology_language: morphology
      })
    })

    const data = await res.json()
    setOutput(data.output || 'No output received.')
    setLoading(false)
  }

  return (
    <main className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Enchiridictionary</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label>Phonology</label>
          <select
            value={phonology}
            onChange={e => setPhonology(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option>Welsh</option>
            <option>Japanese</option>
            <option>Arabic</option>
            <option>Swahili</option>
            <option>French</option>
          </select>
        </div>

        <div>
          <label>Syntax</label>
          <select
            value={syntax}
            onChange={e => setSyntax(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option>Tagalog</option>
            <option>English</option>
            <option>Japanese</option>
            <option>Classical Arabic</option>
            <option>Tuvan</option>
          </select>
        </div>

        <div>
          <label>Morphology</label>
          <select
            value={morphology}
            onChange={e => setMorphology(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option>Turkish</option>
            <option>Latin</option>
            <option>Finnish</option>
            <option>Mandarin Chinese</option>
            <option>Navajo</option>
          </select>
        </div>
      </div>

      <button
        onClick={generateLanguage}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Generating...' : 'Generate Language'}
      </button>

      <textarea
        className="w-full h-64 border p-4 rounded font-mono"
        value={output}
        readOnly
      />
    </main>
  )
}


