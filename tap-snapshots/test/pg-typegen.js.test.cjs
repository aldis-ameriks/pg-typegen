/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports['test/pg-typegen.js > TAP > allows hooking into schema result > must match snapshot 1'] = `
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
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "comment": null,
      "isView": false,
      "name": "address",
    },
    Object {
      "columns": Array [
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "comment": null,
      "isView": false,
      "name": "histories",
    },
    Object {
      "columns": Array [
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "comment": null,
      "isView": false,
      "name": "kebab-test",
    },
    Object {
      "columns": Array [
        Object {
          "comment": "",
          "defaultValue": null,
          "indices": Array [],
          "isNullable": true,
          "name": "test",
          "type": "int4",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "indices": Array [],
          "isNullable": true,
          "name": "test_array",
          "type": "_int4",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "indices": Array [],
          "isNullable": true,
          "name": "test_text",
          "type": "text",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "indices": Array [],
          "isNullable": true,
          "name": "test_timestamp",
          "type": "timestamptz",
        },
      ],
      "isView": true,
      "name": "materialized_items",
    },
    Object {
      "columns": Array [
        Object {
          "comment": "",
          "defaultValue": null,
          "indices": Array [],
          "isNullable": true,
          "name": "test",
          "type": "int4",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "indices": Array [],
          "isNullable": true,
          "name": "test_text",
          "type": "text",
        },
      ],
      "isView": true,
      "name": "materialized_other_items",
    },
    Object {
      "columns": Array [
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [
            Object {
              "isPrimaryKey": true,
              "name": "snake_test_pkey",
            },
          ],
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
      ],
      "comment": null,
      "isView": false,
      "name": "snake_test",
    },
    Object {
      "columns": Array [
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "test",
          "type": "int4",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "test_text",
          "type": "text",
        },
      ],
      "comment": null,
      "isView": true,
      "name": "some_view",
    },
    Object {
      "columns": Array [
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "avatar_darren",
          "type": "_float4",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "avatar_ernestina",
          "type": "bpchar",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "avatar_mark",
          "type": "_jsonb",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "avatar_myah",
          "type": "_text",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "avatar_rozella",
          "type": "_bpchar",
        },
        Object {
          "comment": "",
          "defaultValue": "false",
          "hasDefault": true,
          "indices": Array [],
          "isNullable": true,
          "name": "camelCase",
          "type": "bool",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "category_amari",
          "type": "numeric",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "category_april",
          "type": "_int8",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "category_buddy",
          "type": "_bpchar",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "category_clementine",
          "type": "oid",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "category_marcelle",
          "type": "timestamptz",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "category_roberta",
          "type": "bool",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "category_trent",
          "type": "jsonb",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "category_viola",
          "type": "bpchar",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "comment_cali",
          "type": "inet",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "comment_delilah",
          "type": "_interval",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "comment_easter",
          "type": "date",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "comment_ella",
          "type": "bytea",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "comment_myles",
          "type": "time",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "comment_rocio",
          "type": "bpchar",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "createdat_hulda",
          "type": "json",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "createdat_pansy",
          "type": "_int2",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "email_andres",
          "type": "timestamp",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "email_cleveland",
          "type": "text",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "email_keaton",
          "type": "_int4",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "email_lucio",
          "type": "bpchar",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "email_paris",
          "type": "name",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "email_paula",
          "type": "uuid",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "email_ressie",
          "type": "text",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "fruit_a",
          "type": "fruits",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "fruit_b",
          "type": "fruits",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "group_abigayle",
          "type": "_bytea",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "group_gabe",
          "type": "_timestamptz",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "group_jay",
          "type": "_name",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "group_jedediah",
          "type": "_date",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "group_shanny",
          "type": "timestamptz",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "group_toby",
          "type": "interval",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "group_ulices",
          "type": "_int8",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "id_gay",
          "type": "varchar",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "id_hailee",
          "type": "jsonb",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "id_helen",
          "type": "_oid",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "id_ike",
          "type": "_money",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "id_joan",
          "type": "_bytea",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "id_karelle",
          "type": "numeric",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "id_lavern",
          "type": "date",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "id_margarita",
          "type": "int8",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "id_maximilian",
          "type": "_interval",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "id_william",
          "type": "_bpchar",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "id_wilmer",
          "type": "_time",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "kebab-a",
          "type": "delicious-kebab",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "kebab-b",
          "type": "delicious-kebab",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "name_amara",
          "type": "inet",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "name_brionna",
          "type": "oid",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "name_enoch",
          "type": "money",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "name_jermain",
          "type": "_varchar",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "name_marielle",
          "type": "interval",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "name_myrtle",
          "type": "_numeric",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "name_santos",
          "type": "_uuid",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "name_skye",
          "type": "bytea",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "name_stephanie",
          "type": "bool",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "password_alessia",
          "type": "_text",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "password_camylle",
          "type": "_inet",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "password_elenora",
          "type": "int2",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "password_felton",
          "type": "_timestamp",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "password_korey",
          "type": "int4",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "password_murphy",
          "type": "_json",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "password_vladimir",
          "type": "int4",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "phone_angelo",
          "type": "int8",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "phone_colten",
          "type": "int2",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "phone_erling",
          "type": "_timetz",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "phone_johanna",
          "type": "_date",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "phone_kendall",
          "type": "_int4",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "phone_keyshawn",
          "type": "timetz",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "phone_maryam",
          "type": "time",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "phone_osvaldo",
          "type": "_timestamptz",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "phone_rupert",
          "type": "json",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "snakes_on_a",
          "type": "snakes_on",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "snakes_on_b",
          "type": "snakes_on",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "status_amalia",
          "type": "float4",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "status_angelica",
          "type": "_float8",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "status_cade",
          "type": "_float8",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "status_lori",
          "type": "name",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "status_ricky",
          "type": "float8",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "status_sid",
          "type": "_bool",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "title_aidan",
          "type": "timestamp",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "title_alexzander",
          "type": "uuid",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "title_haylee",
          "type": "_bpchar",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "title_ilene",
          "type": "_json",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "title_vicenta",
          "type": "varchar",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "title_vivienne",
          "type": "_float4",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "token_adella",
          "type": "_timestamp",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "token_hermann",
          "type": "_timetz",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "token_kenyon",
          "type": "_varchar",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "token_marianna",
          "type": "_uuid",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "token_rubye",
          "type": "timetz",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "token_ryley",
          "type": "money",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "token_zora",
          "type": "_oid",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "updatedat_aaliyah",
          "type": "float8",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "updatedat_abe",
          "type": "_money",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "updatedat_brett",
          "type": "_name",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "updatedat_cedrick",
          "type": "_bool",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "updatedat_derick",
          "type": "_jsonb",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "updatedat_eli",
          "type": "_numeric",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "updatedat_ewell",
          "type": "_time",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "updatedat_laura",
          "type": "_inet",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "updatedat_melody",
          "type": "_int2",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": true,
          "name": "updatedat_rossie",
          "type": "float4",
        },
      ],
      "comment": null,
      "isView": false,
      "name": "types",
    },
    Object {
      "columns": Array [
        Object {
          "comment": "",
          "defaultValue": "nextval('users_id_seq'::regclass)",
          "hasDefault": true,
          "indices": Array [],
          "isNullable": false,
          "name": "id",
          "type": "int4",
        },
        Object {
          "comment": "Very long long long long long long long long long long long long long long long long long long long long long comment",
          "defaultValue": "''::text",
          "hasDefault": true,
          "indices": Array [],
          "isNullable": true,
          "name": "name",
          "type": "text",
        },
        Object {
          "comment": "",
          "defaultValue": "''::text",
          "hasDefault": true,
          "indices": Array [],
          "isNullable": false,
          "name": "name2",
          "type": "text",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": false,
          "indices": Array [],
          "isNullable": false,
          "name": "name3",
          "type": "text",
        },
        Object {
          "comment": "",
          "defaultValue": null,
          "hasDefault": true,
          "indices": Array [],
          "isNullable": false,
          "name": "other_id",
          "type": "int4",
        },
        Object {
          "comment": "This is the user identifier number",
          "defaultValue": null,
          "hasDefault": true,
          "indices": Array [
            Object {
              "isPrimaryKey": true,
              "name": "users_pkey",
            },
          ],
          "isNullable": false,
          "name": "other_primary_id",
          "type": "int4",
        },
      ],
      "comment": "this is the users table",
      "isView": false,
      "name": "users",
    },
  ],
  "typeMapping": Object {
    "any": Array [
      "json",
      "jsonb",
    ],
    "Array<any>": Array [
      "_json",
      "_jsonb",
    ],
    "Array<bigint>": Array [],
    "Array<boolean>": Array [
      "_bool",
    ],
    "Array<Date>": Array [
      "_timestamp",
      "_timestamptz",
      "_date",
      "_date",
      "_date",
      "_date",
      "_date",
      "_date",
      "_date",
      "_date",
    ],
    "Array<number>": Array [
      "_int2",
      "_int4",
      "_float4",
      "_float8",
      "_oid",
    ],
    "Array<string>": Array [
      "_bpchar",
      "_char",
      "_varchar",
      "_text",
      "_money",
      "_numeric",
      "_uuid",
      "_bytea",
      "_inet",
      "_time",
      "_timetz",
      "_interval",
      "_name",
      "_int8",
      "_int8",
      "_int8",
      "_int8",
      "_int8",
      "_int8",
      "_int8",
      "_int8",
    ],
    "bigint": Array [],
    "boolean": Array [
      "bool",
    ],
    "Date": Array [
      "timestamp",
      "timestamptz",
      "date",
      "date",
      "date",
      "date",
      "date",
      "date",
      "date",
      "date",
    ],
    "number": Array [
      "int2",
      "int4",
      "float4",
      "float8",
      "oid",
    ],
    "string": Array [
      "bpchar",
      "char",
      "varchar",
      "text",
      "numeric",
      "money",
      "uuid",
      "bytea",
      "inet",
      "time",
      "timetz",
      "interval",
      "name",
      "int8",
      "int8",
      "int8",
      "int8",
      "int8",
      "int8",
      "int8",
      "int8",
    ],
  },
}
`

exports['test/pg-typegen.js > TAP > allows hooking into type result > must match snapshot 1'] = `
Object {
  "insertTypeMapping": Object {
    "address": "AddressInsertEntity",
    "histories": "HistoryInsertEntity",
    "kebab-test": "KebabTestInsertEntity",
    "snake_test": "SnakeTestInsertEntity",
    "types": "TypeInsertEntity",
    "users": "UserInsertEntity",
  },
  "typeMapping": Object {
    "address": "AddressEntity",
    "histories": "HistoryEntity",
    "kebab-test": "KebabTestEntity",
    "materialized_items": "MaterializedItemEntity",
    "materialized_other_items": "MaterializedOtherItemEntity",
    "snake_test": "SnakeTestEntity",
    "some_view": "SomeViewEntity",
    "types": "TypeEntity",
    "users": "UserEntity",
  },
  "types": String(
    export enum DeliciousKebab {
      'big-mix' = 'big-mix',
      mix = 'mix',
    }
    
    export enum Fruits {
      apple = 'apple',
      banana = 'banana',
      orange = 'orange',
    }
    
    export enum SnakesOn {
      a_plane = 'a_plane',
    }
    
    export interface AddressEntity {
      id: number
    }
    
    export interface AddressInsertEntity {
      id: number
    }
    
    export interface HistoryEntity {
      id: number
    }
    
    export interface HistoryInsertEntity {
      id: number
    }
    
    export interface KebabTestEntity {
      id: number
    }
    
    export interface KebabTestInsertEntity {
      id: number
    }
    
    export interface MaterializedItemEntity {
      test: number | null
      test_array: Array<number> | null
      test_text: string | null
      test_timestamp: Date | null
    }
    
    export interface MaterializedOtherItemEntity {
      test: number | null
      test_text: string | null
    }
    
    export interface SnakeTestEntity {
      id: number
    }
    
    export interface SnakeTestInsertEntity {
      id: number
    }
    
    export interface SomeViewEntity {
      test: number | null
      test_text: string | null
    }
    
    export interface TypeEntity {
      avatar_darren: Array<number> | null
      avatar_ernestina: string
      avatar_mark: Array<any> | null
      avatar_myah: Array<string>
      avatar_rozella: Array<string>
      camelCase: boolean | null
      category_amari: string
      category_april: Array<string>
      category_buddy: Array<string> | null
      category_clementine: number | null
      category_marcelle: Date | null
      category_roberta: boolean | null
      category_trent: any | null
      category_viola: string
      comment_cali: string
      comment_delilah: Array<string> | null
      comment_easter: Date | null
      comment_ella: string
      comment_myles: string
      comment_rocio: string | null
      createdat_hulda: any
      createdat_pansy: Array<number> | null
      email_andres: Date
      email_cleveland: string | null
      email_keaton: Array<number> | null
      email_lucio: string | null
      email_paris: string
      email_paula: string | null
      email_ressie: string
      fruit_a: Fruits | null
      fruit_b: Fruits
      group_abigayle: Array<string>
      group_gabe: Array<Date> | null
      group_jay: Array<string>
      group_jedediah: Array<Date>
      group_shanny: Date
      group_toby: string
      group_ulices: Array<string> | null
      id_gay: string
      id_hailee: any
      id_helen: Array<number> | null
      id_ike: Array<string>
      id_joan: Array<string> | null
      id_karelle: string | null
      id_lavern: Date
      id_margarita: string | null
      id_maximilian: Array<string>
      id_william: Array<string>
      id_wilmer: Array<string> | null
      'kebab-a': DeliciousKebab | null
      'kebab-b': DeliciousKebab
      name_amara: string | null
      name_brionna: number
      name_enoch: string
      name_jermain: Array<string> | null
      name_marielle: string | null
      name_myrtle: Array<string> | null
      name_santos: Array<string>
      name_skye: string | null
      name_stephanie: boolean
      password_alessia: Array<string> | null
      password_camylle: Array<string>
      password_elenora: number | null
      password_felton: Array<Date> | null
      password_korey: number
      password_murphy: Array<any> | null
      password_vladimir: number | null
      phone_angelo: string
      phone_colten: number
      phone_erling: Array<string> | null
      phone_johanna: Array<Date> | null
      phone_kendall: Array<number>
      phone_keyshawn: string | null
      phone_maryam: string | null
      phone_osvaldo: Array<Date>
      phone_rupert: any | null
      snakes_on_a: SnakesOn | null
      snakes_on_b: SnakesOn
      status_amalia: number
      status_angelica: Array<number> | null
      status_cade: Array<number>
      status_lori: string | null
      status_ricky: number
      status_sid: Array<boolean> | null
      title_aidan: Date | null
      title_alexzander: string
      title_haylee: Array<string> | null
      title_ilene: Array<any>
      title_vicenta: string | null
      title_vivienne: Array<number>
      token_adella: Array<Date>
      token_hermann: Array<string>
      token_kenyon: Array<string>
      token_marianna: Array<string> | null
      token_rubye: string
      token_ryley: string | null
      token_zora: Array<number>
      updatedat_aaliyah: number | null
      updatedat_abe: Array<string> | null
      updatedat_brett: Array<string> | null
      updatedat_cedrick: Array<boolean>
      updatedat_derick: Array<any>
      updatedat_eli: Array<string>
      updatedat_ewell: Array<string>
      updatedat_laura: Array<string> | null
      updatedat_melody: Array<number>
      updatedat_rossie: number | null
    }
    
    export interface TypeInsertEntity {
      avatar_darren?: Array<number> | null
      avatar_ernestina: string
      avatar_mark?: Array<any> | null
      avatar_myah: Array<string>
      avatar_rozella: Array<string>
      camelCase?: boolean | null
      category_amari: string
      category_april: Array<string>
      category_buddy?: Array<string> | null
      category_clementine?: number | null
      category_marcelle?: Date | null
      category_roberta?: boolean | null
      category_trent?: any | null
      category_viola: string
      comment_cali: string
      comment_delilah?: Array<string> | null
      comment_easter?: Date | null
      comment_ella: string
      comment_myles: string
      comment_rocio?: string | null
      createdat_hulda: any
      createdat_pansy?: Array<number> | null
      email_andres: Date
      email_cleveland?: string | null
      email_keaton?: Array<number> | null
      email_lucio?: string | null
      email_paris: string
      email_paula?: string | null
      email_ressie: string
      fruit_a?: Fruits | null
      fruit_b: Fruits
      group_abigayle: Array<string>
      group_gabe?: Array<Date> | null
      group_jay: Array<string>
      group_jedediah: Array<Date>
      group_shanny: Date
      group_toby: string
      group_ulices?: Array<string> | null
      id_gay: string
      id_hailee: any
      id_helen?: Array<number> | null
      id_ike: Array<string>
      id_joan?: Array<string> | null
      id_karelle?: string | null
      id_lavern: Date
      id_margarita?: string | null
      id_maximilian: Array<string>
      id_william: Array<string>
      id_wilmer?: Array<string> | null
      'kebab-a'?: DeliciousKebab | null
      'kebab-b': DeliciousKebab
      name_amara?: string | null
      name_brionna: number
      name_enoch: string
      name_jermain?: Array<string> | null
      name_marielle?: string | null
      name_myrtle?: Array<string> | null
      name_santos: Array<string>
      name_skye?: string | null
      name_stephanie: boolean
      password_alessia?: Array<string> | null
      password_camylle: Array<string>
      password_elenora?: number | null
      password_felton?: Array<Date> | null
      password_korey: number
      password_murphy?: Array<any> | null
      password_vladimir?: number | null
      phone_angelo: string
      phone_colten: number
      phone_erling?: Array<string> | null
      phone_johanna?: Array<Date> | null
      phone_kendall: Array<number>
      phone_keyshawn?: string | null
      phone_maryam?: string | null
      phone_osvaldo: Array<Date>
      phone_rupert?: any | null
      snakes_on_a?: SnakesOn | null
      snakes_on_b: SnakesOn
      status_amalia: number
      status_angelica?: Array<number> | null
      status_cade: Array<number>
      status_lori?: string | null
      status_ricky: number
      status_sid?: Array<boolean> | null
      title_aidan?: Date | null
      title_alexzander: string
      title_haylee?: Array<string> | null
      title_ilene: Array<any>
      title_vicenta?: string | null
      title_vivienne: Array<number>
      token_adella: Array<Date>
      token_hermann: Array<string>
      token_kenyon: Array<string>
      token_marianna?: Array<string> | null
      token_rubye: string
      token_ryley?: string | null
      token_zora: Array<number>
      updatedat_aaliyah?: number | null
      updatedat_abe?: Array<string> | null
      updatedat_brett?: Array<string> | null
      updatedat_cedrick: Array<boolean>
      updatedat_derick: Array<any>
      updatedat_eli: Array<string>
      updatedat_ewell: Array<string>
      updatedat_laura?: Array<string> | null
      updatedat_melody: Array<number>
      updatedat_rossie?: number | null
    }
    
    export interface UserEntity {
      id: number
      name: string | null
      name2: string
      name3: string
      other_id: number
      other_primary_id: number
    }
    
    export interface UserInsertEntity {
      id?: number
      name?: string | null
      name2?: string
      name3: string
      other_id?: number
      other_primary_id?: number
    }
    
  ),
}
`

exports['test/pg-typegen.js > TAP > generates types as return value > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}

`

exports['test/pg-typegen.js > TAP > generates types to file > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}

`

exports['test/pg-typegen.js > TAP > generates types to file > must match snapshot 2'] = `
✔ Generated types from 9 tables and 3 enums
`

exports['test/pg-typegen.js > TAP > generates types with comments > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  /**
   * PRIMARY KEY
  */
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

/**
 * this is the users table
*/
export interface UserEntity {
  id: number
  /**
   * Very long long long long long long long long long long long long long long long long long long long long long comment
  */
  name: string | null
  name2: string
  name3: string
  other_id: number
  /**
   * This is the user identifier number
   * PRIMARY KEY
  */
  other_primary_id: number
}

`

exports['test/pg-typegen.js > TAP > generates types with comments and insert types > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface AddressInsertEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface HistoryInsertEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface KebabTestInsertEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  /**
   * PRIMARY KEY
  */
  id: number
}

export interface SnakeTestInsertEntity {
  /**
   * PRIMARY KEY
  */
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface TypeInsertEntity {
  avatar_darren?: Array<number> | null
  avatar_ernestina: string
  avatar_mark?: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase?: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy?: Array<string> | null
  category_clementine?: number | null
  category_marcelle?: Date | null
  category_roberta?: boolean | null
  category_trent?: any | null
  category_viola: string
  comment_cali: string
  comment_delilah?: Array<string> | null
  comment_easter?: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio?: string | null
  createdat_hulda: any
  createdat_pansy?: Array<number> | null
  email_andres: Date
  email_cleveland?: string | null
  email_keaton?: Array<number> | null
  email_lucio?: string | null
  email_paris: string
  email_paula?: string | null
  email_ressie: string
  fruit_a?: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe?: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices?: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen?: Array<number> | null
  id_ike: Array<string>
  id_joan?: Array<string> | null
  id_karelle?: string | null
  id_lavern: Date
  id_margarita?: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer?: Array<string> | null
  'kebab-a'?: DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara?: string | null
  name_brionna: number
  name_enoch: string
  name_jermain?: Array<string> | null
  name_marielle?: string | null
  name_myrtle?: Array<string> | null
  name_santos: Array<string>
  name_skye?: string | null
  name_stephanie: boolean
  password_alessia?: Array<string> | null
  password_camylle: Array<string>
  password_elenora?: number | null
  password_felton?: Array<Date> | null
  password_korey: number
  password_murphy?: Array<any> | null
  password_vladimir?: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling?: Array<string> | null
  phone_johanna?: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn?: string | null
  phone_maryam?: string | null
  phone_osvaldo: Array<Date>
  phone_rupert?: any | null
  snakes_on_a?: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica?: Array<number> | null
  status_cade: Array<number>
  status_lori?: string | null
  status_ricky: number
  status_sid?: Array<boolean> | null
  title_aidan?: Date | null
  title_alexzander: string
  title_haylee?: Array<string> | null
  title_ilene: Array<any>
  title_vicenta?: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna?: Array<string> | null
  token_rubye: string
  token_ryley?: string | null
  token_zora: Array<number>
  updatedat_aaliyah?: number | null
  updatedat_abe?: Array<string> | null
  updatedat_brett?: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura?: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie?: number | null
}

/**
 * this is the users table
*/
export interface UserEntity {
  id: number
  /**
   * Very long long long long long long long long long long long long long long long long long long long long long comment
  */
  name: string | null
  name2: string
  name3: string
  other_id: number
  /**
   * This is the user identifier number
   * PRIMARY KEY
  */
  other_primary_id: number
}

/**
 * this is the users table
*/
export interface UserInsertEntity {
  id?: number
  /**
   * Very long long long long long long long long long long long long long long long long long long long long long comment
  */
  name?: string | null
  name2?: string
  name3: string
  other_id?: number
  /**
   * This is the user identifier number
   * PRIMARY KEY
  */
  other_primary_id?: number
}

`

exports['test/pg-typegen.js > TAP > generates types with insert types > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface AddressInsertEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface HistoryInsertEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface KebabTestInsertEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  id: number
}

export interface SnakeTestInsertEntity {
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface TypeInsertEntity {
  avatar_darren?: Array<number> | null
  avatar_ernestina: string
  avatar_mark?: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase?: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy?: Array<string> | null
  category_clementine?: number | null
  category_marcelle?: Date | null
  category_roberta?: boolean | null
  category_trent?: any | null
  category_viola: string
  comment_cali: string
  comment_delilah?: Array<string> | null
  comment_easter?: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio?: string | null
  createdat_hulda: any
  createdat_pansy?: Array<number> | null
  email_andres: Date
  email_cleveland?: string | null
  email_keaton?: Array<number> | null
  email_lucio?: string | null
  email_paris: string
  email_paula?: string | null
  email_ressie: string
  fruit_a?: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe?: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices?: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen?: Array<number> | null
  id_ike: Array<string>
  id_joan?: Array<string> | null
  id_karelle?: string | null
  id_lavern: Date
  id_margarita?: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer?: Array<string> | null
  'kebab-a'?: DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara?: string | null
  name_brionna: number
  name_enoch: string
  name_jermain?: Array<string> | null
  name_marielle?: string | null
  name_myrtle?: Array<string> | null
  name_santos: Array<string>
  name_skye?: string | null
  name_stephanie: boolean
  password_alessia?: Array<string> | null
  password_camylle: Array<string>
  password_elenora?: number | null
  password_felton?: Array<Date> | null
  password_korey: number
  password_murphy?: Array<any> | null
  password_vladimir?: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling?: Array<string> | null
  phone_johanna?: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn?: string | null
  phone_maryam?: string | null
  phone_osvaldo: Array<Date>
  phone_rupert?: any | null
  snakes_on_a?: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica?: Array<number> | null
  status_cade: Array<number>
  status_lori?: string | null
  status_ricky: number
  status_sid?: Array<boolean> | null
  title_aidan?: Date | null
  title_alexzander: string
  title_haylee?: Array<string> | null
  title_ilene: Array<any>
  title_vicenta?: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna?: Array<string> | null
  token_rubye: string
  token_ryley?: string | null
  token_zora: Array<number>
  updatedat_aaliyah?: number | null
  updatedat_abe?: Array<string> | null
  updatedat_brett?: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura?: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie?: number | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}

export interface UserInsertEntity {
  id?: number
  name?: string | null
  name2?: string
  name3: string
  other_id?: number
  other_primary_id?: number
}

`

exports['test/pg-typegen.js > TAP > generates types with optionals and with table name prefix > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export type AddressEntity = {
  id: number
} | {
  'address.id': number
}

export type HistoryEntity = {
  id: number
} | {
  'histories.id': number
}

export type KebabTestEntity = {
  id: number
} | {
  'kebab-test.id': number
}

export type MaterializedItemEntity = {
  test?: number
  test_array?: Array<number>
  test_text?: string
  test_timestamp?: Date
} | {
  'materialized_items.test'?: number
  'materialized_items.test_array'?: Array<number>
  'materialized_items.test_text'?: string
  'materialized_items.test_timestamp'?: Date
}

export type MaterializedOtherItemEntity = {
  test?: number
  test_text?: string
} | {
  'materialized_other_items.test'?: number
  'materialized_other_items.test_text'?: string
}

export type SnakeTestEntity = {
  id: number
} | {
  'snake_test.id': number
}

export type SomeViewEntity = {
  test?: number
  test_text?: string
} | {
  'some_view.test'?: number
  'some_view.test_text'?: string
}

export type TypeEntity = {
  avatar_darren?: Array<number>
  avatar_ernestina: string
  avatar_mark?: Array<any>
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase?: boolean
  category_amari: string
  category_april: Array<string>
  category_buddy?: Array<string>
  category_clementine?: number
  category_marcelle?: Date
  category_roberta?: boolean
  category_trent?: any
  category_viola: string
  comment_cali: string
  comment_delilah?: Array<string>
  comment_easter?: Date
  comment_ella: string
  comment_myles: string
  comment_rocio?: string
  createdat_hulda: any
  createdat_pansy?: Array<number>
  email_andres: Date
  email_cleveland?: string
  email_keaton?: Array<number>
  email_lucio?: string
  email_paris: string
  email_paula?: string
  email_ressie: string
  fruit_a?: Fruits
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe?: Array<Date>
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices?: Array<string>
  id_gay: string
  id_hailee: any
  id_helen?: Array<number>
  id_ike: Array<string>
  id_joan?: Array<string>
  id_karelle?: string
  id_lavern: Date
  id_margarita?: string
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer?: Array<string>
  'kebab-a'?: DeliciousKebab
  'kebab-b': DeliciousKebab
  name_amara?: string
  name_brionna: number
  name_enoch: string
  name_jermain?: Array<string>
  name_marielle?: string
  name_myrtle?: Array<string>
  name_santos: Array<string>
  name_skye?: string
  name_stephanie: boolean
  password_alessia?: Array<string>
  password_camylle: Array<string>
  password_elenora?: number
  password_felton?: Array<Date>
  password_korey: number
  password_murphy?: Array<any>
  password_vladimir?: number
  phone_angelo: string
  phone_colten: number
  phone_erling?: Array<string>
  phone_johanna?: Array<Date>
  phone_kendall: Array<number>
  phone_keyshawn?: string
  phone_maryam?: string
  phone_osvaldo: Array<Date>
  phone_rupert?: any
  snakes_on_a?: SnakesOn
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica?: Array<number>
  status_cade: Array<number>
  status_lori?: string
  status_ricky: number
  status_sid?: Array<boolean>
  title_aidan?: Date
  title_alexzander: string
  title_haylee?: Array<string>
  title_ilene: Array<any>
  title_vicenta?: string
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna?: Array<string>
  token_rubye: string
  token_ryley?: string
  token_zora: Array<number>
  updatedat_aaliyah?: number
  updatedat_abe?: Array<string>
  updatedat_brett?: Array<string>
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura?: Array<string>
  updatedat_melody: Array<number>
  updatedat_rossie?: number
} | {
  'types.avatar_darren'?: Array<number>
  'types.avatar_ernestina': string
  'types.avatar_mark'?: Array<any>
  'types.avatar_myah': Array<string>
  'types.avatar_rozella': Array<string>
  'types.camelCase'?: boolean
  'types.category_amari': string
  'types.category_april': Array<string>
  'types.category_buddy'?: Array<string>
  'types.category_clementine'?: number
  'types.category_marcelle'?: Date
  'types.category_roberta'?: boolean
  'types.category_trent'?: any
  'types.category_viola': string
  'types.comment_cali': string
  'types.comment_delilah'?: Array<string>
  'types.comment_easter'?: Date
  'types.comment_ella': string
  'types.comment_myles': string
  'types.comment_rocio'?: string
  'types.createdat_hulda': any
  'types.createdat_pansy'?: Array<number>
  'types.email_andres': Date
  'types.email_cleveland'?: string
  'types.email_keaton'?: Array<number>
  'types.email_lucio'?: string
  'types.email_paris': string
  'types.email_paula'?: string
  'types.email_ressie': string
  'types.fruit_a'?: Fruits
  'types.fruit_b': Fruits
  'types.group_abigayle': Array<string>
  'types.group_gabe'?: Array<Date>
  'types.group_jay': Array<string>
  'types.group_jedediah': Array<Date>
  'types.group_shanny': Date
  'types.group_toby': string
  'types.group_ulices'?: Array<string>
  'types.id_gay': string
  'types.id_hailee': any
  'types.id_helen'?: Array<number>
  'types.id_ike': Array<string>
  'types.id_joan'?: Array<string>
  'types.id_karelle'?: string
  'types.id_lavern': Date
  'types.id_margarita'?: string
  'types.id_maximilian': Array<string>
  'types.id_william': Array<string>
  'types.id_wilmer'?: Array<string>
  'types.kebab-a'?: DeliciousKebab
  'types.kebab-b': DeliciousKebab
  'types.name_amara'?: string
  'types.name_brionna': number
  'types.name_enoch': string
  'types.name_jermain'?: Array<string>
  'types.name_marielle'?: string
  'types.name_myrtle'?: Array<string>
  'types.name_santos': Array<string>
  'types.name_skye'?: string
  'types.name_stephanie': boolean
  'types.password_alessia'?: Array<string>
  'types.password_camylle': Array<string>
  'types.password_elenora'?: number
  'types.password_felton'?: Array<Date>
  'types.password_korey': number
  'types.password_murphy'?: Array<any>
  'types.password_vladimir'?: number
  'types.phone_angelo': string
  'types.phone_colten': number
  'types.phone_erling'?: Array<string>
  'types.phone_johanna'?: Array<Date>
  'types.phone_kendall': Array<number>
  'types.phone_keyshawn'?: string
  'types.phone_maryam'?: string
  'types.phone_osvaldo': Array<Date>
  'types.phone_rupert'?: any
  'types.snakes_on_a'?: SnakesOn
  'types.snakes_on_b': SnakesOn
  'types.status_amalia': number
  'types.status_angelica'?: Array<number>
  'types.status_cade': Array<number>
  'types.status_lori'?: string
  'types.status_ricky': number
  'types.status_sid'?: Array<boolean>
  'types.title_aidan'?: Date
  'types.title_alexzander': string
  'types.title_haylee'?: Array<string>
  'types.title_ilene': Array<any>
  'types.title_vicenta'?: string
  'types.title_vivienne': Array<number>
  'types.token_adella': Array<Date>
  'types.token_hermann': Array<string>
  'types.token_kenyon': Array<string>
  'types.token_marianna'?: Array<string>
  'types.token_rubye': string
  'types.token_ryley'?: string
  'types.token_zora': Array<number>
  'types.updatedat_aaliyah'?: number
  'types.updatedat_abe'?: Array<string>
  'types.updatedat_brett'?: Array<string>
  'types.updatedat_cedrick': Array<boolean>
  'types.updatedat_derick': Array<any>
  'types.updatedat_eli': Array<string>
  'types.updatedat_ewell': Array<string>
  'types.updatedat_laura'?: Array<string>
  'types.updatedat_melody': Array<number>
  'types.updatedat_rossie'?: number
}

export type UserEntity = {
  id: number
  name?: string
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
} | {
  'users.id': number
  'users.name'?: string
  'users.name2': string
  'users.name3': string
  'users.other_id': number
  'users.other_primary_id': number
}

`

exports['test/pg-typegen.js > TAP > generates types with table name prefix > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export type AddressEntity = {
  id: number
} | {
  'address.id': number
}

export type HistoryEntity = {
  id: number
} | {
  'histories.id': number
}

export type KebabTestEntity = {
  id: number
} | {
  'kebab-test.id': number
}

export type MaterializedItemEntity = {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
} | {
  'materialized_items.test': number | null
  'materialized_items.test_array': Array<number> | null
  'materialized_items.test_text': string | null
  'materialized_items.test_timestamp': Date | null
}

export type MaterializedOtherItemEntity = {
  test: number | null
  test_text: string | null
} | {
  'materialized_other_items.test': number | null
  'materialized_other_items.test_text': string | null
}

export type SnakeTestEntity = {
  id: number
} | {
  'snake_test.id': number
}

export type SomeViewEntity = {
  test: number | null
  test_text: string | null
} | {
  'some_view.test': number | null
  'some_view.test_text': string | null
}

export type TypeEntity = {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
} | {
  'types.avatar_darren': Array<number> | null
  'types.avatar_ernestina': string
  'types.avatar_mark': Array<any> | null
  'types.avatar_myah': Array<string>
  'types.avatar_rozella': Array<string>
  'types.camelCase': boolean | null
  'types.category_amari': string
  'types.category_april': Array<string>
  'types.category_buddy': Array<string> | null
  'types.category_clementine': number | null
  'types.category_marcelle': Date | null
  'types.category_roberta': boolean | null
  'types.category_trent': any | null
  'types.category_viola': string
  'types.comment_cali': string
  'types.comment_delilah': Array<string> | null
  'types.comment_easter': Date | null
  'types.comment_ella': string
  'types.comment_myles': string
  'types.comment_rocio': string | null
  'types.createdat_hulda': any
  'types.createdat_pansy': Array<number> | null
  'types.email_andres': Date
  'types.email_cleveland': string | null
  'types.email_keaton': Array<number> | null
  'types.email_lucio': string | null
  'types.email_paris': string
  'types.email_paula': string | null
  'types.email_ressie': string
  'types.fruit_a': Fruits | null
  'types.fruit_b': Fruits
  'types.group_abigayle': Array<string>
  'types.group_gabe': Array<Date> | null
  'types.group_jay': Array<string>
  'types.group_jedediah': Array<Date>
  'types.group_shanny': Date
  'types.group_toby': string
  'types.group_ulices': Array<string> | null
  'types.id_gay': string
  'types.id_hailee': any
  'types.id_helen': Array<number> | null
  'types.id_ike': Array<string>
  'types.id_joan': Array<string> | null
  'types.id_karelle': string | null
  'types.id_lavern': Date
  'types.id_margarita': string | null
  'types.id_maximilian': Array<string>
  'types.id_william': Array<string>
  'types.id_wilmer': Array<string> | null
  'types.kebab-a': DeliciousKebab | null
  'types.kebab-b': DeliciousKebab
  'types.name_amara': string | null
  'types.name_brionna': number
  'types.name_enoch': string
  'types.name_jermain': Array<string> | null
  'types.name_marielle': string | null
  'types.name_myrtle': Array<string> | null
  'types.name_santos': Array<string>
  'types.name_skye': string | null
  'types.name_stephanie': boolean
  'types.password_alessia': Array<string> | null
  'types.password_camylle': Array<string>
  'types.password_elenora': number | null
  'types.password_felton': Array<Date> | null
  'types.password_korey': number
  'types.password_murphy': Array<any> | null
  'types.password_vladimir': number | null
  'types.phone_angelo': string
  'types.phone_colten': number
  'types.phone_erling': Array<string> | null
  'types.phone_johanna': Array<Date> | null
  'types.phone_kendall': Array<number>
  'types.phone_keyshawn': string | null
  'types.phone_maryam': string | null
  'types.phone_osvaldo': Array<Date>
  'types.phone_rupert': any | null
  'types.snakes_on_a': SnakesOn | null
  'types.snakes_on_b': SnakesOn
  'types.status_amalia': number
  'types.status_angelica': Array<number> | null
  'types.status_cade': Array<number>
  'types.status_lori': string | null
  'types.status_ricky': number
  'types.status_sid': Array<boolean> | null
  'types.title_aidan': Date | null
  'types.title_alexzander': string
  'types.title_haylee': Array<string> | null
  'types.title_ilene': Array<any>
  'types.title_vicenta': string | null
  'types.title_vivienne': Array<number>
  'types.token_adella': Array<Date>
  'types.token_hermann': Array<string>
  'types.token_kenyon': Array<string>
  'types.token_marianna': Array<string> | null
  'types.token_rubye': string
  'types.token_ryley': string | null
  'types.token_zora': Array<number>
  'types.updatedat_aaliyah': number | null
  'types.updatedat_abe': Array<string> | null
  'types.updatedat_brett': Array<string> | null
  'types.updatedat_cedrick': Array<boolean>
  'types.updatedat_derick': Array<any>
  'types.updatedat_eli': Array<string>
  'types.updatedat_ewell': Array<string>
  'types.updatedat_laura': Array<string> | null
  'types.updatedat_melody': Array<number>
  'types.updatedat_rossie': number | null
}

export type UserEntity = {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
} | {
  'users.id': number
  'users.name': string | null
  'users.name2': string
  'users.name3': string
  'users.other_id': number
  'users.other_primary_id': number
}

`

exports['test/pg-typegen.js > TAP > returns help when missing connection > must match snapshot 1'] = `
undefined
`

exports['test/pg-typegen.js > TAP > returns help when missing connection > must match snapshot 2'] = `
undefined
`
