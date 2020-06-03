import {Search} from "../model/Search"
import knex from "knex";
import {connectionConfig} from "../connection";
const connection = knex(connectionConfig);

//zamiast tego
export async function getIdLinkByIdAccount(idAccount){
   //czyta mi dobrze id
   return await connection.select("id").where("idAccount",idAccount).from("Search");
}
//to
export async function getIDLink(Account){
    return await connection.select("id").where("idAccount",Account.id).from("Search");
}



export async function getLinkById(id){
    return await connection.select("link").where('id',id).from("Search");
}



