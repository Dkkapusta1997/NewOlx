import {createUserSearchs} from "./service/userSearch"
import "regenerator-runtime/runtime.js";
import _ from 'lodash'
import {startSearching} from "./parser/parser";

createUserSearchs().then((linksWithProducts)=>{
    _.forEach(linksWithProducts,function(value,key){
        let pageQuantity=Object.keys(_.groupBy(linksWithProducts[key],'pageQuantity'));
        startSearching(linksWithProducts[key],key,pageQuantity);
    })
})

