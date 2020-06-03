import{getLinksByAccountIdsWithProduct} from "../db/dataService/commonDataService"
import _ from 'lodash'

export async function createUserSearchs(){
    const resultDB=await getLinksByAccountIdsWithProduct();
    return _.groupBy(resultDB,'link')
}