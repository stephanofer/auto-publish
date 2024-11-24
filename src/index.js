import puppeteer from 'puppeteer';

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://facebook.com');
    console.log(await page.title());
