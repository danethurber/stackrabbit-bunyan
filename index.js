const assert = require('assert')
const omit = require('omit')

module.exports = function bunyanMiddleware(logger, omittedKeys) {
  omittedKeys = omittedKeys || ['app']

  assert.ok(logger && logger.info, 'A bunyan logger is required')

  return function * bunyanMiddleware(next) {
    logger.info(omit(omittedKeys, this), '--> Message Received')

    try {
      yield next
    } catch(err) {
      logger.error(omit(omittedKeys, Object.assign({ err }, this)), 'Error Processing Message')
      throw err
    } finally {
      logger.info(omit(omittedKeys, this), '<-- Message Processed')
    }
  }
}
