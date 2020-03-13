Feature: Navigate the homepage

    Background: I'm on the homepage
        Given I'm on chat-app homepage

    Scenario: Navigate the carousel forward
        When I click nextCarouselButton
        Then The active carousel shold be changed
        
    Scenario: Navigate the carousel backward
        When I click previousCarouselButton
        Then The active carousel shold be changed
    Scenario: Open Menu
        When I click the menuButton 
        Then I should see the menu
    