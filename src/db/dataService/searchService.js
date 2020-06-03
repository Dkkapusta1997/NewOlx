import {Search} from "../model/Search"
import knex from "knex";
import {connectionConfig} from "../connection";
const connection = knex(connectionConfig);

export async function GetIdLink(idAccount){
   //czyta mi dobrze id
   return await connection.select("id").where("idAccount",idAccount).from("Search");
}
export async function GetLink(id){
    return await connection.select("link").where('id',id).from("Search");
}
