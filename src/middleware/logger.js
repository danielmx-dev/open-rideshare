import config from 'config'
import {get} from 'lodash'
import createLogger from 'concurrency-logger'

const loggerOptions = get(config, 'logger', {})

const logger = () => createLogger(loggerOptions)

export default logger
