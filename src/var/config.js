/** @type {number} */
export const PORT= 3000
/** @type {string} */
export const ROUTES_DIR = './dist/routes/**/*.js'
/** @type {string} */
export const MODELS_DIR = './dist/models/**/*.js'
/** @type {boolean} */
export const USE_DB  = false
/** @type {string} */
export const DB_CONNECTION_STRING =
  process.env.NODE_ENV === 'docker'
    ? 'mongodb://mongo:27017/express-typescript-starter'
    : 'mongodb://localhost:27017/express-typescript-starter'
