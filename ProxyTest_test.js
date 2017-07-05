/// <reference path="./steps.d.ts" />
Feature('ProxyTest');

Scenario('test something', (I) => {
    I.amOnPage("/");
    I.wait(60);
});
