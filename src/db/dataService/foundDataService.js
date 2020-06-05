import knex from "knex";
import {connectionConfig} from "../connection";
const connection = knex(connectionConfig);

export async function saveFound(Found){
   await connection('Found').insert(Found)
        .then(console.log("Added")).catch((err)=>{console.log(err)})

}
export async function existOfferInDB(offerLink){
return await connection.select('idSearch').from('Found').where('link',offerLink);
}

