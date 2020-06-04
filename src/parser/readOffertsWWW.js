import {parserWWW} from './parserWWW'

export async function getOffersFromWWW(link, numberOfPage,page){

        let tempURL = link + numberOfPage;
        try {
            await page.goto(tempURL);
        } catch (e) {
            console.log('Canot connecting with www');
            getOffersFromWWW(link, numberOfPage, page)
        }
        const content = await page.content();
        return await parserWWW(content)

}



