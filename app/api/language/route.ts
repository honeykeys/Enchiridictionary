import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { phonology_language, syntax_language, morphology_language } = body

  const langflowURL = "http://localhost:7868/api/v1/run/b595777b-9a63-4f64-9ecc-d2e04c598dac"

  const payload = {
    input_values: {
      "phonology_name": phonology_language,
      "syntax_name": syntax_language,
      "morphology_name": morphology_language
    },
    session_id: "enchiridictionary_demo"
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }

  try {
    const res = await fetch(langflowURL, options)

    if (!res.ok) {
      const errorText = await res.text()
      console.error("Langflow API returned an error:", errorText)
      return NextResponse.json(
        { error: 'Langflow API error', details: errorText },
        { status: res.status }
      )
    }

    const data = await res.json()
    console.log("Langflow raw response:", data)
    const messageContent = data?.outputs?.[0]?.outputs?.[0]?.results?.message?.text

    if (!messageContent) {
        console.error("Could not find messageContent in the expected path.", data);
        return NextResponse.json({ error: 'Could not parse output from Langflow', details: data });
    }

    return NextResponse.json({
      status: 'success',
      output: messageContent
    })
        
  } catch (error) {
    console.error("Failed to make a request to Langflow:", error)
    return NextResponse.json(
      { error: 'Request to Langflow failed', details: String(error) },
      { status: 500 }
    )
  }
}