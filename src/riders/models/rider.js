export async function create (pool, rider) {
  const result = await pool.query(
    `INSERT INTO riders(username, email, password) VALUES ($1, $2, $3)`,
    [rider.username, rider.email, rider.password]
  )
  console.log(result)
  return rider
}
