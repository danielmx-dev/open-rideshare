import Koa from 'koa'
import config from 'config'

// Routers
import riders from './riders/routes'

const app = new Koa()

app.use(riders.routes())

app.listen(config.port, () => console.log(`server started ${config.port}`))

export default app
