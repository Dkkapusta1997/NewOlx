import {createUsersSearchs} from "./service/userService"
import {startSearching} from "./service/userService"
import "regenerator-runtime/runtime.js";
import _ from 'lodash'


createUsersSearchs().then((Products)=>{
    //Product are groupBy of links where we will look for their
    _.forEach(Products,function(value,linkToPage){
        startSearching(Products[linkToPage],linkToPage);
    })
})

