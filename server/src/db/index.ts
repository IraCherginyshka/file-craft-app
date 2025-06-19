import knex from 'knex';
import config from './knexfile';

// todo set up for prod
const db = knex(config);

export default db;
