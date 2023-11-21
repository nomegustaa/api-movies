import "dotenv/config";

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_DIACLECT,
  DB_PORT,
  BCRYPT_AMOUNT,
  SECRET_KEY,
} = process.env;

export {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_DIACLECT,
  DB_PORT,
  BCRYPT_AMOUNT,
  SECRET_KEY,
};
