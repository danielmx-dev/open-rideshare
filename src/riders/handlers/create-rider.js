import {create} from '../models/rider'

const createRider = async ctx => {
  const rider = await create(ctx.state.pool, ctx.request.body)
  ctx.status = 201
  ctx.body = rider
}

export default createRider
