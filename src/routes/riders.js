import Router from 'koa-router'

const router = Router({
  prefix: '/riders'
})

router.get('/:id',  async ctx => {
  ctx.body = ctx.params.id
})

export default router
