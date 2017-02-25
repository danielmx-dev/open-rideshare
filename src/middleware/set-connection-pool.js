const config = require('config')
const pg = require('pg-promise')()

const pool = pg(config.db.uri)

const setPool = () => (ctx, next) => {
  ctx.state.pool = pool
  next()
}

export default setPool
