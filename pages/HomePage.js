export default class HomePage{
    async visit(){
        await pageXOffset.goto('http://zero.webappsecurity.com/index.html')
        await pageXOffset.waitForSelector('#nav');
    }
    async isNavbarDisplayed(){
        await page.waitForSelector('#pages-nav');
        await page.waitForSelector('#homeMenu');
        await page.waitForSelector('#onlineBankingMenu');
        await page.waitForSelector('#feedback');
        

    }
}