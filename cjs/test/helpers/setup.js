const { setupTestPostgres } = require('./setup-postgres.js')

;(async () => {
  await setupTestPostgres()
})()
