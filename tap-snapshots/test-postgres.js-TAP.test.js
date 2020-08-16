/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports['test/postgres.js TAP retrieves database schema > must match snapshot 1'] = `
Object {
  "enums": Array [
    Object {
      "name": "delicious-kebab",
      "values": Array [
        "big-mix",
        "mix",
      ],
    },
    Object {
      "name": "fruits",
      "values": Array [
        "apple",
        "banana",
        "orange",
      ],
    },
    Object {
      "name": "snakes_on",
      "values": Array [
        "a_plane",
      ],
    },
  ],
  "tables": Array [
    Object {
      "columns": Array [
        Object {
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "name": "histories",
    },
    Object {
      "columns": Array [
        Object {
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "name": "kebab-test",
    },
    Object {
      "columns": Array [
        Object {
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "name": "snake_test",
    },
    Object {
      "columns": Array [
        Object {
          "isNullable": true,
          "name": "avatar_darren",
          "type": "_float4",
        },
        Object {
          "isNullable": false,
          "name": "avatar_ernestina",
          "type": "bpchar",
        },
        Object {
          "isNullable": true,
          "name": "avatar_mark",
          "type": "_jsonb",
        },
        Object {
          "isNullable": false,
          "name": "avatar_myah",
          "type": "_text",
        },
        Object {
          "isNullable": false,
          "name": "avatar_rozella",
          "type": "_bpchar",
        },
        Object {
          "isNullable": true,
          "name": "camelCase",
          "type": "bool",
        },
        Object {
          "isNullable": false,
          "name": "category_amari",
          "type": "numeric",
        },
        Object {
          "isNullable": false,
          "name": "category_april",
          "type": "_int8",
        },
        Object {
          "isNullable": true,
          "name": "category_buddy",
          "type": "_bpchar",
        },
        Object {
          "isNullable": true,
          "name": "category_clementine",
          "type": "oid",
        },
        Object {
          "isNullable": true,
          "name": "category_marcelle",
          "type": "timestamptz",
        },
        Object {
          "isNullable": true,
          "name": "category_roberta",
          "type": "bool",
        },
        Object {
          "isNullable": true,
          "name": "category_trent",
          "type": "jsonb",
        },
        Object {
          "isNullable": false,
          "name": "category_viola",
          "type": "bpchar",
        },
        Object {
          "isNullable": false,
          "name": "comment_cali",
          "type": "inet",
        },
        Object {
          "isNullable": true,
          "name": "comment_delilah",
          "type": "_interval",
        },
        Object {
          "isNullable": true,
          "name": "comment_easter",
          "type": "date",
        },
        Object {
          "isNullable": false,
          "name": "comment_ella",
          "type": "bytea",
        },
        Object {
          "isNullable": false,
          "name": "comment_myles",
          "type": "time",
        },
        Object {
          "isNullable": true,
          "name": "comment_rocio",
          "type": "bpchar",
        },
        Object {
          "isNullable": false,
          "name": "createdat_hulda",
          "type": "json",
        },
        Object {
          "isNullable": true,
          "name": "createdat_pansy",
          "type": "_int2",
        },
        Object {
          "isNullable": false,
          "name": "email_andres",
          "type": "timestamp",
        },
        Object {
          "isNullable": true,
          "name": "email_cleveland",
          "type": "text",
        },
        Object {
          "isNullable": true,
          "name": "email_keaton",
          "type": "_int4",
        },
        Object {
          "isNullable": true,
          "name": "email_lucio",
          "type": "bpchar",
        },
        Object {
          "isNullable": false,
          "name": "email_paris",
          "type": "name",
        },
        Object {
          "isNullable": true,
          "name": "email_paula",
          "type": "uuid",
        },
        Object {
          "isNullable": false,
          "name": "email_ressie",
          "type": "text",
        },
        Object {
          "isNullable": true,
          "name": "fruit_a",
          "type": "fruits",
        },
        Object {
          "isNullable": false,
          "name": "fruit_b",
          "type": "fruits",
        },
        Object {
          "isNullable": false,
          "name": "group_abigayle",
          "type": "_bytea",
        },
        Object {
          "isNullable": true,
          "name": "group_gabe",
          "type": "_timestamptz",
        },
        Object {
          "isNullable": false,
          "name": "group_jay",
          "type": "_name",
        },
        Object {
          "isNullable": false,
          "name": "group_jedediah",
          "type": "_date",
        },
        Object {
          "isNullable": false,
          "name": "group_shanny",
          "type": "timestamptz",
        },
        Object {
          "isNullable": false,
          "name": "group_toby",
          "type": "interval",
        },
        Object {
          "isNullable": true,
          "name": "group_ulices",
          "type": "_int8",
        },
        Object {
          "isNullable": false,
          "name": "id_gay",
          "type": "varchar",
        },
        Object {
          "isNullable": false,
          "name": "id_hailee",
          "type": "jsonb",
        },
        Object {
          "isNullable": true,
          "name": "id_helen",
          "type": "_oid",
        },
        Object {
          "isNullable": false,
          "name": "id_ike",
          "type": "_money",
        },
        Object {
          "isNullable": true,
          "name": "id_joan",
          "type": "_bytea",
        },
        Object {
          "isNullable": true,
          "name": "id_karelle",
          "type": "numeric",
        },
        Object {
          "isNullable": false,
          "name": "id_lavern",
          "type": "date",
        },
        Object {
          "isNullable": true,
          "name": "id_margarita",
          "type": "int8",
        },
        Object {
          "isNullable": false,
          "name": "id_maximilian",
          "type": "_interval",
        },
        Object {
          "isNullable": false,
          "name": "id_william",
          "type": "_bpchar",
        },
        Object {
          "isNullable": true,
          "name": "id_wilmer",
          "type": "_time",
        },
        Object {
          "isNullable": true,
          "name": "kebab-a",
          "type": "delicious-kebab",
        },
        Object {
          "isNullable": false,
          "name": "kebab-b",
          "type": "delicious-kebab",
        },
        Object {
          "isNullable": true,
          "name": "name_amara",
          "type": "inet",
        },
        Object {
          "isNullable": false,
          "name": "name_brionna",
          "type": "oid",
        },
        Object {
          "isNullable": false,
          "name": "name_enoch",
          "type": "money",
        },
        Object {
          "isNullable": true,
          "name": "name_jermain",
          "type": "_varchar",
        },
        Object {
          "isNullable": true,
          "name": "name_marielle",
          "type": "interval",
        },
        Object {
          "isNullable": true,
          "name": "name_myrtle",
          "type": "_numeric",
        },
        Object {
          "isNullable": false,
          "name": "name_santos",
          "type": "_uuid",
        },
        Object {
          "isNullable": true,
          "name": "name_skye",
          "type": "bytea",
        },
        Object {
          "isNullable": false,
          "name": "name_stephanie",
          "type": "bool",
        },
        Object {
          "isNullable": true,
          "name": "password_alessia",
          "type": "_text",
        },
        Object {
          "isNullable": false,
          "name": "password_camylle",
          "type": "_inet",
        },
        Object {
          "isNullable": true,
          "name": "password_elenora",
          "type": "int2",
        },
        Object {
          "isNullable": true,
          "name": "password_felton",
          "type": "_timestamp",
        },
        Object {
          "isNullable": false,
          "name": "password_korey",
          "type": "int4",
        },
        Object {
          "isNullable": true,
          "name": "password_murphy",
          "type": "_json",
        },
        Object {
          "isNullable": true,
          "name": "password_vladimir",
          "type": "int4",
        },
        Object {
          "isNullable": false,
          "name": "phone_angelo",
          "type": "int8",
        },
        Object {
          "isNullable": false,
          "name": "phone_colten",
          "type": "int2",
        },
        Object {
          "isNullable": true,
          "name": "phone_erling",
          "type": "_timetz",
        },
        Object {
          "isNullable": true,
          "name": "phone_johanna",
          "type": "_date",
        },
        Object {
          "isNullable": false,
          "name": "phone_kendall",
          "type": "_int4",
        },
        Object {
          "isNullable": true,
          "name": "phone_keyshawn",
          "type": "timetz",
        },
        Object {
          "isNullable": true,
          "name": "phone_maryam",
          "type": "time",
        },
        Object {
          "isNullable": false,
          "name": "phone_osvaldo",
          "type": "_timestamptz",
        },
        Object {
          "isNullable": true,
          "name": "phone_rupert",
          "type": "json",
        },
        Object {
          "isNullable": true,
          "name": "snakes_on_a",
          "type": "snakes_on",
        },
        Object {
          "isNullable": false,
          "name": "snakes_on_b",
          "type": "snakes_on",
        },
        Object {
          "isNullable": false,
          "name": "status_amalia",
          "type": "float4",
        },
        Object {
          "isNullable": true,
          "name": "status_angelica",
          "type": "_float8",
        },
        Object {
          "isNullable": false,
          "name": "status_cade",
          "type": "_float8",
        },
        Object {
          "isNullable": true,
          "name": "status_lori",
          "type": "name",
        },
        Object {
          "isNullable": false,
          "name": "status_ricky",
          "type": "float8",
        },
        Object {
          "isNullable": true,
          "name": "status_sid",
          "type": "_bool",
        },
        Object {
          "isNullable": true,
          "name": "title_aidan",
          "type": "timestamp",
        },
        Object {
          "isNullable": false,
          "name": "title_alexzander",
          "type": "uuid",
        },
        Object {
          "isNullable": true,
          "name": "title_haylee",
          "type": "_bpchar",
        },
        Object {
          "isNullable": false,
          "name": "title_ilene",
          "type": "_json",
        },
        Object {
          "isNullable": true,
          "name": "title_vicenta",
          "type": "varchar",
        },
        Object {
          "isNullable": false,
          "name": "title_vivienne",
          "type": "_float4",
        },
        Object {
          "isNullable": false,
          "name": "token_adella",
          "type": "_timestamp",
        },
        Object {
          "isNullable": false,
          "name": "token_hermann",
          "type": "_timetz",
        },
        Object {
          "isNullable": false,
          "name": "token_kenyon",
          "type": "_varchar",
        },
        Object {
          "isNullable": true,
          "name": "token_marianna",
          "type": "_uuid",
        },
        Object {
          "isNullable": false,
          "name": "token_rubye",
          "type": "timetz",
        },
        Object {
          "isNullable": true,
          "name": "token_ryley",
          "type": "money",
        },
        Object {
          "isNullable": false,
          "name": "token_zora",
          "type": "_oid",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_aaliyah",
          "type": "float8",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_abe",
          "type": "_money",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_brett",
          "type": "_name",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_cedrick",
          "type": "_bool",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_derick",
          "type": "_jsonb",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_eli",
          "type": "_numeric",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_ewell",
          "type": "_time",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_laura",
          "type": "_inet",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_melody",
          "type": "_int2",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_rossie",
          "type": "float4",
        },
      ],
      "name": "types",
    },
  ],
  "typeMapping": Object {
    "Array<boolean>": Array [
      "_bool",
    ],
    "Array<Date>": Array [
      "_date",
      "_timestamp",
      "_timestamptz",
    ],
    "Array<number>": Array [
      "_int2",
      "_int4",
      "_float4",
      "_float8",
      "_numeric",
      "_money",
      "_oid",
    ],
    "Array<object>": Array [
      "_json",
      "_jsonb",
    ],
    "Array<string>": Array [
      "_bpchar",
      "_char",
      "_varchar",
      "_text",
      "_uuid",
      "_bytea",
      "_inet",
      "_int8",
      "_time",
      "_timetz",
      "_interval",
      "_name",
    ],
    "bigint": Array [],
    "boolean": Array [
      "bool",
    ],
    "Date": Array [
      "date",
      "timestamp",
      "timestamptz",
    ],
    "number": Array [
      "int2",
      "int4",
      "float4",
      "float8",
      "numeric",
      "money",
      "oid",
    ],
    "object": Array [
      "json",
      "jsonb",
    ],
    "string": Array [
      "bpchar",
      "char",
      "varchar",
      "text",
      "uuid",
      "bytea",
      "inet",
      "time",
      "timetz",
      "interval",
      "name",
      "int8",
    ],
  },
}
`

exports['test/postgres.js TAP returns typeMapping with int8 to bigint mapping > must match snapshot 1'] = `
Object {
  "enums": Array [
    Object {
      "name": "delicious-kebab",
      "values": Array [
        "big-mix",
        "mix",
      ],
    },
    Object {
      "name": "fruits",
      "values": Array [
        "apple",
        "banana",
        "orange",
      ],
    },
    Object {
      "name": "snakes_on",
      "values": Array [
        "a_plane",
      ],
    },
  ],
  "tables": Array [
    Object {
      "columns": Array [
        Object {
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "name": "histories",
    },
    Object {
      "columns": Array [
        Object {
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "name": "kebab-test",
    },
    Object {
      "columns": Array [
        Object {
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "name": "snake_test",
    },
    Object {
      "columns": Array [
        Object {
          "isNullable": true,
          "name": "avatar_darren",
          "type": "_float4",
        },
        Object {
          "isNullable": false,
          "name": "avatar_ernestina",
          "type": "bpchar",
        },
        Object {
          "isNullable": true,
          "name": "avatar_mark",
          "type": "_jsonb",
        },
        Object {
          "isNullable": false,
          "name": "avatar_myah",
          "type": "_text",
        },
        Object {
          "isNullable": false,
          "name": "avatar_rozella",
          "type": "_bpchar",
        },
        Object {
          "isNullable": true,
          "name": "camelCase",
          "type": "bool",
        },
        Object {
          "isNullable": false,
          "name": "category_amari",
          "type": "numeric",
        },
        Object {
          "isNullable": false,
          "name": "category_april",
          "type": "_int8",
        },
        Object {
          "isNullable": true,
          "name": "category_buddy",
          "type": "_bpchar",
        },
        Object {
          "isNullable": true,
          "name": "category_clementine",
          "type": "oid",
        },
        Object {
          "isNullable": true,
          "name": "category_marcelle",
          "type": "timestamptz",
        },
        Object {
          "isNullable": true,
          "name": "category_roberta",
          "type": "bool",
        },
        Object {
          "isNullable": true,
          "name": "category_trent",
          "type": "jsonb",
        },
        Object {
          "isNullable": false,
          "name": "category_viola",
          "type": "bpchar",
        },
        Object {
          "isNullable": false,
          "name": "comment_cali",
          "type": "inet",
        },
        Object {
          "isNullable": true,
          "name": "comment_delilah",
          "type": "_interval",
        },
        Object {
          "isNullable": true,
          "name": "comment_easter",
          "type": "date",
        },
        Object {
          "isNullable": false,
          "name": "comment_ella",
          "type": "bytea",
        },
        Object {
          "isNullable": false,
          "name": "comment_myles",
          "type": "time",
        },
        Object {
          "isNullable": true,
          "name": "comment_rocio",
          "type": "bpchar",
        },
        Object {
          "isNullable": false,
          "name": "createdat_hulda",
          "type": "json",
        },
        Object {
          "isNullable": true,
          "name": "createdat_pansy",
          "type": "_int2",
        },
        Object {
          "isNullable": false,
          "name": "email_andres",
          "type": "timestamp",
        },
        Object {
          "isNullable": true,
          "name": "email_cleveland",
          "type": "text",
        },
        Object {
          "isNullable": true,
          "name": "email_keaton",
          "type": "_int4",
        },
        Object {
          "isNullable": true,
          "name": "email_lucio",
          "type": "bpchar",
        },
        Object {
          "isNullable": false,
          "name": "email_paris",
          "type": "name",
        },
        Object {
          "isNullable": true,
          "name": "email_paula",
          "type": "uuid",
        },
        Object {
          "isNullable": false,
          "name": "email_ressie",
          "type": "text",
        },
        Object {
          "isNullable": true,
          "name": "fruit_a",
          "type": "fruits",
        },
        Object {
          "isNullable": false,
          "name": "fruit_b",
          "type": "fruits",
        },
        Object {
          "isNullable": false,
          "name": "group_abigayle",
          "type": "_bytea",
        },
        Object {
          "isNullable": true,
          "name": "group_gabe",
          "type": "_timestamptz",
        },
        Object {
          "isNullable": false,
          "name": "group_jay",
          "type": "_name",
        },
        Object {
          "isNullable": false,
          "name": "group_jedediah",
          "type": "_date",
        },
        Object {
          "isNullable": false,
          "name": "group_shanny",
          "type": "timestamptz",
        },
        Object {
          "isNullable": false,
          "name": "group_toby",
          "type": "interval",
        },
        Object {
          "isNullable": true,
          "name": "group_ulices",
          "type": "_int8",
        },
        Object {
          "isNullable": false,
          "name": "id_gay",
          "type": "varchar",
        },
        Object {
          "isNullable": false,
          "name": "id_hailee",
          "type": "jsonb",
        },
        Object {
          "isNullable": true,
          "name": "id_helen",
          "type": "_oid",
        },
        Object {
          "isNullable": false,
          "name": "id_ike",
          "type": "_money",
        },
        Object {
          "isNullable": true,
          "name": "id_joan",
          "type": "_bytea",
        },
        Object {
          "isNullable": true,
          "name": "id_karelle",
          "type": "numeric",
        },
        Object {
          "isNullable": false,
          "name": "id_lavern",
          "type": "date",
        },
        Object {
          "isNullable": true,
          "name": "id_margarita",
          "type": "int8",
        },
        Object {
          "isNullable": false,
          "name": "id_maximilian",
          "type": "_interval",
        },
        Object {
          "isNullable": false,
          "name": "id_william",
          "type": "_bpchar",
        },
        Object {
          "isNullable": true,
          "name": "id_wilmer",
          "type": "_time",
        },
        Object {
          "isNullable": true,
          "name": "kebab-a",
          "type": "delicious-kebab",
        },
        Object {
          "isNullable": false,
          "name": "kebab-b",
          "type": "delicious-kebab",
        },
        Object {
          "isNullable": true,
          "name": "name_amara",
          "type": "inet",
        },
        Object {
          "isNullable": false,
          "name": "name_brionna",
          "type": "oid",
        },
        Object {
          "isNullable": false,
          "name": "name_enoch",
          "type": "money",
        },
        Object {
          "isNullable": true,
          "name": "name_jermain",
          "type": "_varchar",
        },
        Object {
          "isNullable": true,
          "name": "name_marielle",
          "type": "interval",
        },
        Object {
          "isNullable": true,
          "name": "name_myrtle",
          "type": "_numeric",
        },
        Object {
          "isNullable": false,
          "name": "name_santos",
          "type": "_uuid",
        },
        Object {
          "isNullable": true,
          "name": "name_skye",
          "type": "bytea",
        },
        Object {
          "isNullable": false,
          "name": "name_stephanie",
          "type": "bool",
        },
        Object {
          "isNullable": true,
          "name": "password_alessia",
          "type": "_text",
        },
        Object {
          "isNullable": false,
          "name": "password_camylle",
          "type": "_inet",
        },
        Object {
          "isNullable": true,
          "name": "password_elenora",
          "type": "int2",
        },
        Object {
          "isNullable": true,
          "name": "password_felton",
          "type": "_timestamp",
        },
        Object {
          "isNullable": false,
          "name": "password_korey",
          "type": "int4",
        },
        Object {
          "isNullable": true,
          "name": "password_murphy",
          "type": "_json",
        },
        Object {
          "isNullable": true,
          "name": "password_vladimir",
          "type": "int4",
        },
        Object {
          "isNullable": false,
          "name": "phone_angelo",
          "type": "int8",
        },
        Object {
          "isNullable": false,
          "name": "phone_colten",
          "type": "int2",
        },
        Object {
          "isNullable": true,
          "name": "phone_erling",
          "type": "_timetz",
        },
        Object {
          "isNullable": true,
          "name": "phone_johanna",
          "type": "_date",
        },
        Object {
          "isNullable": false,
          "name": "phone_kendall",
          "type": "_int4",
        },
        Object {
          "isNullable": true,
          "name": "phone_keyshawn",
          "type": "timetz",
        },
        Object {
          "isNullable": true,
          "name": "phone_maryam",
          "type": "time",
        },
        Object {
          "isNullable": false,
          "name": "phone_osvaldo",
          "type": "_timestamptz",
        },
        Object {
          "isNullable": true,
          "name": "phone_rupert",
          "type": "json",
        },
        Object {
          "isNullable": true,
          "name": "snakes_on_a",
          "type": "snakes_on",
        },
        Object {
          "isNullable": false,
          "name": "snakes_on_b",
          "type": "snakes_on",
        },
        Object {
          "isNullable": false,
          "name": "status_amalia",
          "type": "float4",
        },
        Object {
          "isNullable": true,
          "name": "status_angelica",
          "type": "_float8",
        },
        Object {
          "isNullable": false,
          "name": "status_cade",
          "type": "_float8",
        },
        Object {
          "isNullable": true,
          "name": "status_lori",
          "type": "name",
        },
        Object {
          "isNullable": false,
          "name": "status_ricky",
          "type": "float8",
        },
        Object {
          "isNullable": true,
          "name": "status_sid",
          "type": "_bool",
        },
        Object {
          "isNullable": true,
          "name": "title_aidan",
          "type": "timestamp",
        },
        Object {
          "isNullable": false,
          "name": "title_alexzander",
          "type": "uuid",
        },
        Object {
          "isNullable": true,
          "name": "title_haylee",
          "type": "_bpchar",
        },
        Object {
          "isNullable": false,
          "name": "title_ilene",
          "type": "_json",
        },
        Object {
          "isNullable": true,
          "name": "title_vicenta",
          "type": "varchar",
        },
        Object {
          "isNullable": false,
          "name": "title_vivienne",
          "type": "_float4",
        },
        Object {
          "isNullable": false,
          "name": "token_adella",
          "type": "_timestamp",
        },
        Object {
          "isNullable": false,
          "name": "token_hermann",
          "type": "_timetz",
        },
        Object {
          "isNullable": false,
          "name": "token_kenyon",
          "type": "_varchar",
        },
        Object {
          "isNullable": true,
          "name": "token_marianna",
          "type": "_uuid",
        },
        Object {
          "isNullable": false,
          "name": "token_rubye",
          "type": "timetz",
        },
        Object {
          "isNullable": true,
          "name": "token_ryley",
          "type": "money",
        },
        Object {
          "isNullable": false,
          "name": "token_zora",
          "type": "_oid",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_aaliyah",
          "type": "float8",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_abe",
          "type": "_money",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_brett",
          "type": "_name",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_cedrick",
          "type": "_bool",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_derick",
          "type": "_jsonb",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_eli",
          "type": "_numeric",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_ewell",
          "type": "_time",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_laura",
          "type": "_inet",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_melody",
          "type": "_int2",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_rossie",
          "type": "float4",
        },
      ],
      "name": "types",
    },
  ],
  "typeMapping": Object {
    "Array<boolean>": Array [
      "_bool",
    ],
    "Array<Date>": Array [
      "_date",
      "_timestamp",
      "_timestamptz",
    ],
    "Array<number>": Array [
      "_int2",
      "_int4",
      "_float4",
      "_float8",
      "_numeric",
      "_money",
      "_oid",
    ],
    "Array<object>": Array [
      "_json",
      "_jsonb",
    ],
    "Array<string>": Array [
      "_bpchar",
      "_char",
      "_varchar",
      "_text",
      "_uuid",
      "_bytea",
      "_inet",
      "_int8",
      "_time",
      "_timetz",
      "_interval",
      "_name",
    ],
    "bigint": Array [
      "int8",
    ],
    "boolean": Array [
      "bool",
    ],
    "Date": Array [
      "date",
      "timestamp",
      "timestamptz",
    ],
    "number": Array [
      "int2",
      "int4",
      "float4",
      "float8",
      "numeric",
      "money",
      "oid",
    ],
    "object": Array [
      "json",
      "jsonb",
    ],
    "string": Array [
      "bpchar",
      "char",
      "varchar",
      "text",
      "uuid",
      "bytea",
      "inet",
      "time",
      "timetz",
      "interval",
      "name",
      "int8",
      "int8",
    ],
  },
}
`

exports['test/postgres.js TAP returns typeMapping with int8 to string mapping > must match snapshot 1'] = `
Object {
  "enums": Array [
    Object {
      "name": "delicious-kebab",
      "values": Array [
        "big-mix",
        "mix",
      ],
    },
    Object {
      "name": "fruits",
      "values": Array [
        "apple",
        "banana",
        "orange",
      ],
    },
    Object {
      "name": "snakes_on",
      "values": Array [
        "a_plane",
      ],
    },
  ],
  "tables": Array [
    Object {
      "columns": Array [
        Object {
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "name": "histories",
    },
    Object {
      "columns": Array [
        Object {
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "name": "kebab-test",
    },
    Object {
      "columns": Array [
        Object {
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "name": "snake_test",
    },
    Object {
      "columns": Array [
        Object {
          "isNullable": true,
          "name": "avatar_darren",
          "type": "_float4",
        },
        Object {
          "isNullable": false,
          "name": "avatar_ernestina",
          "type": "bpchar",
        },
        Object {
          "isNullable": true,
          "name": "avatar_mark",
          "type": "_jsonb",
        },
        Object {
          "isNullable": false,
          "name": "avatar_myah",
          "type": "_text",
        },
        Object {
          "isNullable": false,
          "name": "avatar_rozella",
          "type": "_bpchar",
        },
        Object {
          "isNullable": true,
          "name": "camelCase",
          "type": "bool",
        },
        Object {
          "isNullable": false,
          "name": "category_amari",
          "type": "numeric",
        },
        Object {
          "isNullable": false,
          "name": "category_april",
          "type": "_int8",
        },
        Object {
          "isNullable": true,
          "name": "category_buddy",
          "type": "_bpchar",
        },
        Object {
          "isNullable": true,
          "name": "category_clementine",
          "type": "oid",
        },
        Object {
          "isNullable": true,
          "name": "category_marcelle",
          "type": "timestamptz",
        },
        Object {
          "isNullable": true,
          "name": "category_roberta",
          "type": "bool",
        },
        Object {
          "isNullable": true,
          "name": "category_trent",
          "type": "jsonb",
        },
        Object {
          "isNullable": false,
          "name": "category_viola",
          "type": "bpchar",
        },
        Object {
          "isNullable": false,
          "name": "comment_cali",
          "type": "inet",
        },
        Object {
          "isNullable": true,
          "name": "comment_delilah",
          "type": "_interval",
        },
        Object {
          "isNullable": true,
          "name": "comment_easter",
          "type": "date",
        },
        Object {
          "isNullable": false,
          "name": "comment_ella",
          "type": "bytea",
        },
        Object {
          "isNullable": false,
          "name": "comment_myles",
          "type": "time",
        },
        Object {
          "isNullable": true,
          "name": "comment_rocio",
          "type": "bpchar",
        },
        Object {
          "isNullable": false,
          "name": "createdat_hulda",
          "type": "json",
        },
        Object {
          "isNullable": true,
          "name": "createdat_pansy",
          "type": "_int2",
        },
        Object {
          "isNullable": false,
          "name": "email_andres",
          "type": "timestamp",
        },
        Object {
          "isNullable": true,
          "name": "email_cleveland",
          "type": "text",
        },
        Object {
          "isNullable": true,
          "name": "email_keaton",
          "type": "_int4",
        },
        Object {
          "isNullable": true,
          "name": "email_lucio",
          "type": "bpchar",
        },
        Object {
          "isNullable": false,
          "name": "email_paris",
          "type": "name",
        },
        Object {
          "isNullable": true,
          "name": "email_paula",
          "type": "uuid",
        },
        Object {
          "isNullable": false,
          "name": "email_ressie",
          "type": "text",
        },
        Object {
          "isNullable": true,
          "name": "fruit_a",
          "type": "fruits",
        },
        Object {
          "isNullable": false,
          "name": "fruit_b",
          "type": "fruits",
        },
        Object {
          "isNullable": false,
          "name": "group_abigayle",
          "type": "_bytea",
        },
        Object {
          "isNullable": true,
          "name": "group_gabe",
          "type": "_timestamptz",
        },
        Object {
          "isNullable": false,
          "name": "group_jay",
          "type": "_name",
        },
        Object {
          "isNullable": false,
          "name": "group_jedediah",
          "type": "_date",
        },
        Object {
          "isNullable": false,
          "name": "group_shanny",
          "type": "timestamptz",
        },
        Object {
          "isNullable": false,
          "name": "group_toby",
          "type": "interval",
        },
        Object {
          "isNullable": true,
          "name": "group_ulices",
          "type": "_int8",
        },
        Object {
          "isNullable": false,
          "name": "id_gay",
          "type": "varchar",
        },
        Object {
          "isNullable": false,
          "name": "id_hailee",
          "type": "jsonb",
        },
        Object {
          "isNullable": true,
          "name": "id_helen",
          "type": "_oid",
        },
        Object {
          "isNullable": false,
          "name": "id_ike",
          "type": "_money",
        },
        Object {
          "isNullable": true,
          "name": "id_joan",
          "type": "_bytea",
        },
        Object {
          "isNullable": true,
          "name": "id_karelle",
          "type": "numeric",
        },
        Object {
          "isNullable": false,
          "name": "id_lavern",
          "type": "date",
        },
        Object {
          "isNullable": true,
          "name": "id_margarita",
          "type": "int8",
        },
        Object {
          "isNullable": false,
          "name": "id_maximilian",
          "type": "_interval",
        },
        Object {
          "isNullable": false,
          "name": "id_william",
          "type": "_bpchar",
        },
        Object {
          "isNullable": true,
          "name": "id_wilmer",
          "type": "_time",
        },
        Object {
          "isNullable": true,
          "name": "kebab-a",
          "type": "delicious-kebab",
        },
        Object {
          "isNullable": false,
          "name": "kebab-b",
          "type": "delicious-kebab",
        },
        Object {
          "isNullable": true,
          "name": "name_amara",
          "type": "inet",
        },
        Object {
          "isNullable": false,
          "name": "name_brionna",
          "type": "oid",
        },
        Object {
          "isNullable": false,
          "name": "name_enoch",
          "type": "money",
        },
        Object {
          "isNullable": true,
          "name": "name_jermain",
          "type": "_varchar",
        },
        Object {
          "isNullable": true,
          "name": "name_marielle",
          "type": "interval",
        },
        Object {
          "isNullable": true,
          "name": "name_myrtle",
          "type": "_numeric",
        },
        Object {
          "isNullable": false,
          "name": "name_santos",
          "type": "_uuid",
        },
        Object {
          "isNullable": true,
          "name": "name_skye",
          "type": "bytea",
        },
        Object {
          "isNullable": false,
          "name": "name_stephanie",
          "type": "bool",
        },
        Object {
          "isNullable": true,
          "name": "password_alessia",
          "type": "_text",
        },
        Object {
          "isNullable": false,
          "name": "password_camylle",
          "type": "_inet",
        },
        Object {
          "isNullable": true,
          "name": "password_elenora",
          "type": "int2",
        },
        Object {
          "isNullable": true,
          "name": "password_felton",
          "type": "_timestamp",
        },
        Object {
          "isNullable": false,
          "name": "password_korey",
          "type": "int4",
        },
        Object {
          "isNullable": true,
          "name": "password_murphy",
          "type": "_json",
        },
        Object {
          "isNullable": true,
          "name": "password_vladimir",
          "type": "int4",
        },
        Object {
          "isNullable": false,
          "name": "phone_angelo",
          "type": "int8",
        },
        Object {
          "isNullable": false,
          "name": "phone_colten",
          "type": "int2",
        },
        Object {
          "isNullable": true,
          "name": "phone_erling",
          "type": "_timetz",
        },
        Object {
          "isNullable": true,
          "name": "phone_johanna",
          "type": "_date",
        },
        Object {
          "isNullable": false,
          "name": "phone_kendall",
          "type": "_int4",
        },
        Object {
          "isNullable": true,
          "name": "phone_keyshawn",
          "type": "timetz",
        },
        Object {
          "isNullable": true,
          "name": "phone_maryam",
          "type": "time",
        },
        Object {
          "isNullable": false,
          "name": "phone_osvaldo",
          "type": "_timestamptz",
        },
        Object {
          "isNullable": true,
          "name": "phone_rupert",
          "type": "json",
        },
        Object {
          "isNullable": true,
          "name": "snakes_on_a",
          "type": "snakes_on",
        },
        Object {
          "isNullable": false,
          "name": "snakes_on_b",
          "type": "snakes_on",
        },
        Object {
          "isNullable": false,
          "name": "status_amalia",
          "type": "float4",
        },
        Object {
          "isNullable": true,
          "name": "status_angelica",
          "type": "_float8",
        },
        Object {
          "isNullable": false,
          "name": "status_cade",
          "type": "_float8",
        },
        Object {
          "isNullable": true,
          "name": "status_lori",
          "type": "name",
        },
        Object {
          "isNullable": false,
          "name": "status_ricky",
          "type": "float8",
        },
        Object {
          "isNullable": true,
          "name": "status_sid",
          "type": "_bool",
        },
        Object {
          "isNullable": true,
          "name": "title_aidan",
          "type": "timestamp",
        },
        Object {
          "isNullable": false,
          "name": "title_alexzander",
          "type": "uuid",
        },
        Object {
          "isNullable": true,
          "name": "title_haylee",
          "type": "_bpchar",
        },
        Object {
          "isNullable": false,
          "name": "title_ilene",
          "type": "_json",
        },
        Object {
          "isNullable": true,
          "name": "title_vicenta",
          "type": "varchar",
        },
        Object {
          "isNullable": false,
          "name": "title_vivienne",
          "type": "_float4",
        },
        Object {
          "isNullable": false,
          "name": "token_adella",
          "type": "_timestamp",
        },
        Object {
          "isNullable": false,
          "name": "token_hermann",
          "type": "_timetz",
        },
        Object {
          "isNullable": false,
          "name": "token_kenyon",
          "type": "_varchar",
        },
        Object {
          "isNullable": true,
          "name": "token_marianna",
          "type": "_uuid",
        },
        Object {
          "isNullable": false,
          "name": "token_rubye",
          "type": "timetz",
        },
        Object {
          "isNullable": true,
          "name": "token_ryley",
          "type": "money",
        },
        Object {
          "isNullable": false,
          "name": "token_zora",
          "type": "_oid",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_aaliyah",
          "type": "float8",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_abe",
          "type": "_money",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_brett",
          "type": "_name",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_cedrick",
          "type": "_bool",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_derick",
          "type": "_jsonb",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_eli",
          "type": "_numeric",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_ewell",
          "type": "_time",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_laura",
          "type": "_inet",
        },
        Object {
          "isNullable": false,
          "name": "updatedat_melody",
          "type": "_int2",
        },
        Object {
          "isNullable": true,
          "name": "updatedat_rossie",
          "type": "float4",
        },
      ],
      "name": "types",
    },
  ],
  "typeMapping": Object {
    "Array<boolean>": Array [
      "_bool",
    ],
    "Array<Date>": Array [
      "_date",
      "_timestamp",
      "_timestamptz",
    ],
    "Array<number>": Array [
      "_int2",
      "_int4",
      "_float4",
      "_float8",
      "_numeric",
      "_money",
      "_oid",
    ],
    "Array<object>": Array [
      "_json",
      "_jsonb",
    ],
    "Array<string>": Array [
      "_bpchar",
      "_char",
      "_varchar",
      "_text",
      "_uuid",
      "_bytea",
      "_inet",
      "_int8",
      "_time",
      "_timetz",
      "_interval",
      "_name",
    ],
    "bigint": Array [],
    "boolean": Array [
      "bool",
    ],
    "Date": Array [
      "date",
      "timestamp",
      "timestamptz",
    ],
    "number": Array [
      "int2",
      "int4",
      "float4",
      "float8",
      "numeric",
      "money",
      "oid",
    ],
    "object": Array [
      "json",
      "jsonb",
    ],
    "string": Array [
      "bpchar",
      "char",
      "varchar",
      "text",
      "uuid",
      "bytea",
      "inet",
      "time",
      "timetz",
      "interval",
      "name",
      "int8",
      "int8",
    ],
  },
}
`
