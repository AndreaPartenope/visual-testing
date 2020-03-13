Feature: Navigate the menu

    Background: The menu is open
        Given I opened the menu

    Scenario: I close the menu
        When I click the cross button on the menu top-right corner
        Then The menu should be closed

    Scenario: I click the homepageButton
        When I click the homepageButton 
        Then I should be redirected to the homepage

    Scenario: I click the newSessionButton
        When I click the newSessionButton 
        Then I should be redirected to the newSession page

    Scenario: I click the sessionListButton
        When I click the sessionListButton
        Then I should be redirected to the session list page
    