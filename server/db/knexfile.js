import dotenv from "dotenv";

// todo prod
dotenv.config({ path: `../.env.${process.env.NODE_ENV}` });

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 *
 *   host: process.env.DB_HOST,
 *   port: process.env.DB_PORT,
 *   user: process.env.DB_USER,
 *   password: process.env.DB_PASSWORD,
 *   database: process.env.DB_NAME,
 */
const config = {
  development: {
    client: "pg",
    connection: {
      connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  // todo
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
};

export default config;
