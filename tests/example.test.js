import jestConfig from "../jest.config";
import HomePage from "../pages/HomePage";


describe('Example', ()=> {
    let homepage

    beforeAll(async()=> {
        jestConfig.setTimeout(15000)
        homepage = new HomePage();
    })

    it('homepage should work', async()=>{
        await homepage.visit();
    })

    it('navbar should be displayed', async()=>{
        await homepage.isNavbarDisplayed();
    })

})