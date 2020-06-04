import knex from "knex";
import {connectionConfig} from "../connection";
const connection = knex(connectionConfig);

export async function getLinksByAccountIdsWithProduct(){
   return await connection.from('Search').innerJoin("Product","Search.id","Product.idSearch");
}