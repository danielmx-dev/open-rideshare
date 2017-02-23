import Koa from 'koa'
import config from 'config'

// Routers
import riders from './routes/riders'

const app = new Koa()

app.use(riders.routes())

app.listen(config.port, () => console.log(`server started ${config.port}`))

export default app
