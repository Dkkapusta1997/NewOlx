import {Account} from "../model/Account";
import knex from "knex";
import {connectionConfig} from "../connection";
const connection = knex(connectionConfig);

export async function GetIdAccounts() {
             return await connection.select("id").from("Account");
}