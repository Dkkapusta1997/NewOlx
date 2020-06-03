import {Product} from "../model/Product"
import knex from "knex";
import {connectionConfig} from "../connection"
const connection=knex(connectionConfig);

export async function GetProducts(idSearch){
    return await connection.select("id","name","priceMin",'priceMax',"priceGood").where("idSearch",idSearch).from("Product");
}