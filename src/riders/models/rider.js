import {flow, assign, omit} from 'lodash/fp'
import encode from './encode-password'
import config from 'config'

export async function create (pool, rider) {
  const secretPassword = await encode(rider.password, config.riders.secret)
  const {id} = await pool.one(
    `INSERT INTO riders(username, email, password) VALUES ($1, $2, $3) returning id`,
    [rider.username, rider.email, secretPassword]
  )
  return flow(
    omit(['password']),
    assign({id})
  )(rider)
}
