export default class BasePage{
    async wait(time){
        await pageXOffset.waitFor(time);
    }
    async getTitle(){
        return await pageXOffset.title();
    }
    async getUrl(){
        return await pageXOffset.url();
    }
}