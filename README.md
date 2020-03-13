# Visual testing

In this tests i'll use the new [webdriver-image-comparison module]. This is a lightweight module to retrieve the needed data and screenshots for all browsers / devices. The comparison power comes from [ResembleJS].
# Libraries used:
- [webdriverio] version 5.19.0
- [Chai] version 4.1.2
- [@wdio/selenium-standalone-service] version 5.11.2
- [wdio-chromedriver-service] version 5.0.2
- [@wdio/cucumber-framework] version 5.20.0

# Examples

In the first example we catch a misspelled word ("Heme Pago" instead of "Home Page"):
![first example](https://github.com/AndreaPartenope/visual-testing/blob/master/1.png)
The error margin is 0.28

In the first example we have the "Subscribe" button with a wrong text dimension and height: 
![second example](https://github.com/AndreaPartenope/visual-testing/blob/master/2.png)
In this case the error margin is 4.6

[webdriver-image-comparison module]: <https://github.com/wswebcreation/webdriver-image-comparison>
[ResembleJS]: <https://github.com/rsmbl/Resemble.js>
[webdriverio]: <https://webdriver.io/>
[Chai]: <https://www.npmjs.com/package/chai>
[@wdio/selenium-standalone-service]: <https://www.npmjs.com/package/@wdio/selenium-standalone-service>
[wdio-chromedriver-service]: <https://www.npmjs.com/package/wdio-chromedriver-service>
[@wdio/cucumber-framework]: <https://www.npmjs.com/package/@wdio/cucumber-framework>
