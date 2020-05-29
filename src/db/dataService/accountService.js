import {Account} from "../model/Account";
import knex from "knex";
import {connectionConfig} from "../connection";

const connection = knex(connectionConfig);

export function GetIdAccounts() {
    connection.select("id").from("Account");
}
