import puppeteer from "puppeteer";

export async function browser() {
    const browser = await puppeteer.launch({headless: false, args: ["--disable-notifications"]});
    const page = await browser.newPage();
    await page.setViewport({width: 800, height: 600});
    return page;
}