import {createUserSearchs} from "./service/userSearch"
import "regenerator-runtime/runtime.js";
import _ from 'lodash'
import {startSearching} from "./parser/parser";

createUserSearchs().then((linksWithProducts)=>{
    _.forEach(linksWithProducts,function(value,key){
        startSearching(linksWithProducts[key]);
    })
})

