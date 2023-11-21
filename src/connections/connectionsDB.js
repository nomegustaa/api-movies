import { Sequelize } from "sequelize";

import {
  DB_HOST,
  DB_DATABASE,
  DB_DIACLECT,
  DB_PASSWORD,
  DB_USER,
} from "../config/env.js";

const connetionsDb = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIACLECT,
});

export default connetionsDb;
