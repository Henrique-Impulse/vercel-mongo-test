/* eslint-disable */
import clientPromise from '../lib/mongodb'

export const logToMongo = async (collection: string, data: any) => {
  try {
    const client = await clientPromise
    const db = client.db('vercel_logs')
    const logs = db.collection(collection)

    await logs.insertOne({
      ...data,
      timestamp: new Date()
    })

    console.log(`✅ Log salvo com sucesso na coleção "${collection}"`)
  } catch (error) {
    console.error('❌ Erro ao logar no MongoDB:', error)
  }
} 