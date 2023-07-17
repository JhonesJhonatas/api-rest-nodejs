import fastify from 'fastify'
import { env } from './.env'
import { transactionsRoutes } from './routes/transactions'
import coockie from '@fastify/cookie'

const app = fastify()

app.register(coockie)

app.addHook('preHandler', async (request) => {
  console.log(`[${request.method}] ${request.url}`)
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Http Server Running')
  })
