const createImageFromOpenAPI = async (prompt: string, num_images: number) => {
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.MY_API_KEY as string}`
    },
    body: JSON.stringify({
      model: 'image-alpha-001',
      prompt,
      num_images,
      size: '1024x1024'
    })
  })

  const data = await response.json()
  return data
}

export { createImageFromOpenAPI }