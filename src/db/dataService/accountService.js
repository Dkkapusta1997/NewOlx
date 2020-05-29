import {Account} from "../model/Account";
const connection=require('knex')(require('../connection'));

export function GetIdAccounts(){
connection.select("id").from("Account");
}