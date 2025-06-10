import knex from "knex";
import config from "./knexfile.js";

// todo set up for prod
const db = knex(config.development);

export default db;
