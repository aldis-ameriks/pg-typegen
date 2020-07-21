'use strict'

const postgres = require('postgres')

const defaultPort = '5435'

function getTestPostgresConnectionString () {
  return process.env.DATABASE_CONNECTION || `postgres://postgres:postgres@localhost:${defaultPort}/test_db`
}

async function setupTestPostgres () {
  let connection = process.env.DATABASE_CONNECTION
  const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

  let sql
  if (!connection) {
    connection = `postgres://postgres:postgres@localhost:${defaultPort}`
    const database = 'test_db'
    sql = postgres(connection, ssl ? { ssl: { rejectUnauthorized: false } } : false)

    try {
      await sql.unsafe(`DROP DATABASE IF EXISTS ${database}`)
      await sql.unsafe(`CREATE DATABASE ${database}`)
    } catch (e) {
      console.error(e)
      throw e
    } finally {
      await sql.end()
    }
    connection = `${connection}/${database}`
  }

  sql = postgres(connection, ssl ? { ssl: { rejectUnauthorized: false } } : false)

  try {
    try {
      await sql`
          CREATE TYPE fruits AS ENUM (
              'apple',
              'orange',
              'banana'
            );
      `
      await sql`
          CREATE TYPE "delicious-kebab" AS ENUM (
              'mix',
              'big-mix'
          );
      `

      await sql`
          CREATE TYPE snakes_on AS ENUM (
              'a_plane'
          );
      `
    } catch (e) { }

    await sql`
        CREATE TABLE IF NOT EXISTS "kebab-test" (
            id int4 NOT NULL
        );
    `

    await sql`
        CREATE TABLE IF NOT EXISTS snake_test (
            id int4 NOT NULL
        );
    `

    await sql`
        CREATE TABLE IF NOT EXISTS histories (
            id int4 NOT NULL
        );
    `

    await sql`
      CREATE TABLE IF NOT EXISTS types (
         email_Lucio         bpchar,
         category_Viola      bpchar            NOT NULL,
         category_Buddy      bpchar[],
         id_William          bpchar[]          NOT NULL,
         comment_Rocio       char,
         avatar_Ernestina    char              NOT NULL,
         title_Haylee        char[],
         avatar_Rozella      char[]            NOT NULL,
         title_Vicenta       varchar,
         id_Gay              varchar           NOT NULL,
         name_Jermain        varchar[],
         token_Kenyon        varchar[]         NOT NULL,
         email_Cleveland     text,
         email_Ressie        text              NOT NULL,
         password_Alessia    text[],
         avatar_Myah         text[]            NOT NULL,
         email_Paula         uuid,
         title_Alexzander    uuid              NOT NULL,
         token_Marianna      uuid[],
         name_Santos         uuid[]            NOT NULL,
         name_Skye           bytea,
         comment_Ella        bytea             NOT NULL,
         id_Joan             bytea[],
         group_Abigayle      bytea[]           NOT NULL,
         name_Amara          inet,
         comment_Cali        inet              NOT NULL,
         updatedAt_Laura     inet[],
         password_Camylle    inet[]            NOT NULL,
         id_Margarita        int8,
         phone_Angelo        int8              NOT NULL,
         group_Ulices        int8[],
         category_April      int8[]            NOT NULL,
         phone_Maryam        time,
         comment_Myles       time              NOT NULL,
         id_Wilmer           time[],
         updatedAt_Ewell     time[]            NOT NULL,
         phone_Keyshawn      timetz,
         token_Rubye         timetz            NOT NULL,
         phone_Erling        timetz[],
         token_Hermann       timetz[]          NOT NULL,
         name_Marielle       interval,
         group_Toby          interval          NOT NULL,
         comment_Delilah     interval[],
         id_Maximilian       interval[]        NOT NULL,
         status_Lori         name,
         email_Paris         name              NOT NULL,
         updatedAt_Brett     name[],
         group_Jay           name[]            NOT NULL,
         password_Elenora    int2,
         phone_Colten        int2              NOT NULL,
         createdAt_Pansy     int2[],
         updatedAt_Melody    int2[]            NOT NULL,
         password_Vladimir   int4,
         password_Korey      int4              NOT NULL,
         email_Keaton        int4[],
         phone_Kendall       int4[]            NOT NULL,
         updatedAt_Rossie    float4,
         status_Amalia       float4            NOT NULL,
         avatar_Darren       float4[],
         title_Vivienne      float4[]          NOT NULL,
         updatedAt_Aaliyah   float8,
         status_Ricky        float8            NOT NULL,
         status_Angelica     float8[],
         status_Cade         float8[]          NOT NULL,
         id_Karelle          numeric,
         category_Amari      numeric           NOT NULL,
         name_Myrtle         numeric[],
         updatedAt_Eli       numeric[]         NOT NULL,
         token_Ryley         money,
         name_Enoch          money             NOT NULL,
         updatedAt_Abe       money[],
         id_Ike              money[]           NOT NULL,
         category_Clementine oid,
         name_Brionna        oid               NOT NULL,
         id_Helen            oid[],
         token_Zora          oid[]             NOT NULL,
         category_Roberta    bool,
         name_Stephanie      bool              NOT NULL,
         status_Sid          bool[],
         updatedAt_Cedrick   bool[]            NOT NULL,
         phone_Rupert        json,
         createdAt_Hulda     json              NOT NULL,
         password_Murphy     json[],
         title_Ilene         json[]            NOT NULL,
         category_Trent      jsonb,
         id_Hailee           jsonb             NOT NULL,
         avatar_Mark         jsonb[],
         updatedAt_Derick    jsonb[]           NOT NULL,
         comment_Easter      date,
         id_Lavern           date              NOT NULL,
         phone_Johanna       date[],
         group_Jedediah      date[]            NOT NULL,
         title_Aidan         timestamp,
         email_Andres        timestamp         NOT NULL,
         password_Felton     timestamp[],
         token_Adella        timestamp[]       NOT NULL,
         category_Marcelle   timestamptz,
         group_Shanny        timestamptz       NOT NULL,
         group_Gabe          timestamptz[],
         phone_Osvaldo       timestamptz[]     NOT NULL,
         
         -- check camel case too
         "camelCase"         bool              DEFAULT FALSE,
    
        -- custom types
         fruit_a             fruits,
         fruit_b             fruits            NOT NULL,
         "kebab-a"           "delicious-kebab",
         "kebab-b"           "delicious-kebab" NOT NULL,
         snakes_on_a         snakes_on,
         snakes_on_b         snakes_on         NOT NULL
    );
  `
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    await sql.end()
  }
  return connection
}

if (require.main === module) {
  (async () => {
    await setupTestPostgres()
  })()
}

module.exports = setupTestPostgres
module.exports.getTestPostgresConnectionString = getTestPostgresConnectionString
