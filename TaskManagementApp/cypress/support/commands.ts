// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
declare namespace Cypress {
    interface Chainable<Subject = any> {
        customCommand(param: any): typeof customCommand;
        preserveLocalStorage(): Chainable<WindowLocalStorage>;
        restoreLocalStorage(): Chainable<void>;
        clearLocalStorage(): Chainable<void>;
    }
}

function customCommand(param: any): void {
    console.warn(param);
}
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('preserveLocalStorage', () => {
    cy.window().then((win) => {
        cy.wrap(win.localStorage).as('localStorage');
    });
});

Cypress.Commands.add('restoreLocalStorage', () => {
    cy.get('@localStorage').then((localStorage) => {
        cy.window().then((win) => {
            Object.keys(localStorage).forEach((key) => {
                win.localStorage.setItem(key, localStorage[key]);
            });
        });
    });
});

Cypress.Commands.add('clearLocalStorage', () => {
    cy.window().then((win) => {
        win.localStorage.clear();
    });
});