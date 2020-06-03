import {GetIdAccounts} from "./db/dataService/accountService"
import {GetIdLink} from "./db/dataService/searchService"
import "regenerator-runtime/runtime.js";
import {CreateUserSearch} from "./service/createUserSearch";

GetIdAccounts().then((data)=>{
    for(const account of data){
        GetIdLink(account.id).then((links)=>{
           for(const link of links){
               CreateUserSearch(account.id,link.id);
           }
        })
    }
});
