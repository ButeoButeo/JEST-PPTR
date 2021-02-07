import TopBar from "../pages/components/TopBar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";

import { username, password, timeout } from "../config";


describe('Example', ()=> {
    let homepage;
    let loginpage;
    let feedbackpage;
    let topbar;
    
    beforeAll(async()=> {
        jest.setTimeout(timeout)
        homepage = new HomePage();
        loginpage = new LoginPage();
        topbar = new TopBar();
        feedbackpage = new FeedbackPage();
    })

    it('should load homepage', async()=>{
        homepage.visit();
        homepage.isNavbarDisplayed();
    })

    it('should submit feedback', async()=>{
        homepage.clickFeedbackLink();
        feedbackpage.isFeedbackFomDisplayed();
        feedbackpage.submitFeedback("blablabla","blablabla@blablabla.com","blablabla","blablabla")
    })
    it('should login ', async()=>{
        homepage.visit()
        topbar.isTopBarDisplayed()
        topbar.clickSignInButton()
        loginpage.isLoginFormDisplayed()
        loginpage.login(username, password)
    })

})