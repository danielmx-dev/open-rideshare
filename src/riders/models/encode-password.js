import Promise from 'bluebird'
import crypto from 'crypto'

const pbkdf2 = Promise.promisify(crypto.pbkdf2)

const ITERATIONS = 100000
const KEYLEN = 512
const ALGORITHM = 'sha512'

export default async function encode (password, secret) {
  return await pbkdf2(password, secret, ITERATIONS, KEYLEN, ALGORITHM)
}
