import config from '../config/config'
var { Given, When, Then } = require('cucumber')
let activeCarousel = ""

////////GIVEN/////////

Given(/^I'm on chat-app homepage$/, function () {
    browser.url('http://localhost:3000/')
    expect(browser.getTitle()).to.contain('Chat-room App')
    browser.pause(1500)
});

Given(/^I opened the menu$/, function () {
    browser.url('http://localhost:3000/')
    let menuButton = $(config.menuButton)
    menuButton.waitForDisplayed()
    menuButton.waitForClickable()
    menuButton.click()
    browser.pause(1500)
});

///////WHEN///////  

When(/^I click the menuButton$/, function () {
    let menuButton = $(config.menuButton)
    menuButton.waitForDisplayed()
    menuButton.waitForClickable()
    menuButton.click()
    browser.pause(1500)
})
When(/^I click the newSessionButton$/, function () {
    let newSessionButton = $(config.newSessionButton)
    newSessionButton.waitForDisplayed()
    newSessionButton.waitForClickable()
    newSessionButton.click()
    browser.pause(1500)
})
When(/^I click the cross button on the menu top-right corner$/, function () {
    let closeMenuButton = $(config.closeMenuButton)
    closeMenuButton.waitForDisplayed()
    closeMenuButton.waitForClickable()
    closeMenuButton.click()
    browser.pause(1500)
})
When(/^I click the homepageButton$/, function () {
    let homeButton = $(config.homeButton)
    homeButton.waitForDisplayed()
    homeButton.waitForClickable()
    homeButton.click()
    browser.pause(1500)
})
When(/^I click the sessionListButton$/, function () {
    let sessionListButton = $(config.sessionListButton)
    sessionListButton.waitForDisplayed()
    sessionListButton.waitForClickable()
    sessionListButton.click()
    browser.pause(1500)
})
When(/^I click nextCarouselButton$/, function () {
    let nextCarouselButton = $(config.nextCarouselButton)
    nextCarouselButton.waitForDisplayed()
    nextCarouselButton.waitForClickable()
    nextCarouselButton.click()
    browser.pause(1500)
    activeCarousel = 'carousel_1'
})
When(/^I click previousCarouselButton$/, function () {
    let previousCarouselButton = $(config.previousCarouselButton)
    previousCarouselButton.waitForDisplayed()
    previousCarouselButton.waitForClickable()
    previousCarouselButton.click()
    browser.pause(1500)
    activeCarousel = 'carousel_2'
})

//////THEN//////

Then(/^I should see the menu$/, function () {
    browser.saveElement($(config.menu), 'menuElement', {});
    expect(browser.checkElement($(config.menu), 'menuElement', {})).to.be.equal(0);
})
Then(/^I should be redirected to the homepage$/, function () {
    browser.saveScreen('homepage', {});
    expect(browser.checkScreen('homepage', {})).to.be.equal(0)
})
Then(/^The menu should be closed$/, function () {
    browser.saveScreen('homepage', {});
    expect(browser.checkScreen('homepage', {})).to.be.equal(0)
})
Then(/^I should be redirected to the newSession page$/, function () {
    browser.saveElement($(config.loginForm), 'loginFormElement', {});
    expect(browser.checkElement($(config.loginForm), 'loginFormElement', {})).to.be.equal(0);
})
Then(/^I should be redirected to the session list page$/, function () {
    browser.saveScreen('sessionList', {});
    expect(browser.checkScreen('sessionList', {})).to.be.equal(0)
})
Then(/^The active carousel shold be changed$/, function () {
    browser.saveElement($(config.carousel), activeCarousel, {});
    expect(browser.checkElement($(config.carousel), activeCarousel, {
    })).to.be.equal(0);
})