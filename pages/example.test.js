import TopBar from "../pages/components/TopBar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";


describe('Example', ()=> {
    let homepage;
    let loginpage;
    let feedbackpage;
    let topbar;
    

    beforeAll(async()=> {
        jest.setTimeout(15000)
        homepage = new HomePage();
        loginpage = new LoginPage();
        topbar = new TopBar();
        feedbackpage = new FeedbackPage();
    })

    it('homepage should work', async()=>{
        await homepage.visit();
    })

    it('navbar should be displayed', async()=>{
        await homepage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed()
    })
/*     it('login', async()=>{
        await loginpage.visit();
        await loginpage.isLoginFormDisplayed();
        await loginpage.login('bla', 'bla')
        await loginpage.wait(5000);
    }) */

    it('feedback', async()=>{
        await feedbackpage.visit();
        await feedbackpage.isFeedbackFomDisplayed();
        await feedbackpage.submitFeedback('blablabla', 'shhdhd@sdsd.ccs','blablabla', 'blablabla',)

  
    })

})