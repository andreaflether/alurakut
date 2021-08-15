import { SiteClient } from 'datocms-client'

export default async function getCommunities(request, response) {
  if(request.method === 'POST') {
    const TOKEN = process.env.TOKEN
    const client = new SiteClient(TOKEN)
    
    const record = client.items.create({
      itemType: '977475',
      ...request.body
    })

    response.json({
      data: 'Data',
      record: record
    })
    return
  }
  
  response.status(404).json({
    message: 'Nada no GET. Mas no POST tem :)'
  })
}