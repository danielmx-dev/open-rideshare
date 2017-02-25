const config = require('config')
const pg = require('pg-promise')()

const pool = pg(config.db.uri)

const setPool = () => async (ctx, next) => {
  ctx.state.pool = pool
  await next()
}

export default setPool
