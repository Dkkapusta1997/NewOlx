import cheerio from 'cheerio'
import {Offert} from '../class/Offert';

export async function parserWWW(websiteContent){

    let $=await cheerio.load(websiteContent)
    let offertArray=new Array();

        await $('.wrap').each(function (i, e) {

            const titleOffer=$(e).find('.lheight22').text().trim();
            const price=$(e).find('.price').text().trim();
            const link=$(e).find('a').attr('href').trim();
            offertArray.push(new Offert(titleOffer,price,link));
        });

return offertArray;

}