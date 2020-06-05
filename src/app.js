import {createUsersSearchs} from "./service/mainQueryService"
import {startSearching} from "./service/searcheService"
import "regenerator-runtime/runtime.js";
import _ from 'lodash'


createUsersSearchs().then((Products)=>{
    //Product are groupBy of links where we will look for their
    _.forEach(Products,function(value,linkToPage){
        console.log(value);
        console.log(linkToPage);
        startSearching(Products[linkToPage],linkToPage);
    })
})

