const { Selector } = require('testcafe')

const fallbackSelectors = [
    {
        description: 'button with text "Add Element"',
        selector: () => Selector('button').withText('Add Element'),
    },
    {
        description: 'button with onclick="addElement()"',
        selector: () => Selector('[onclick="addElement()"]'),
    },
    {
        description: 'generic button',
        selector: () => Selector('button'),
    },
    {
        description: 'button with text "Submit"',
        selector: Selector('button').withText('Submit'),
    },
    {
        description: 'button with class "submit-btn"',
        selector: Selector('.submit-btn'),
    },
    {
        description: 'button with ID "submitBtn"',
        selector: Selector('#submitBtn'),
    },
    {
        description: 'button with name "confirm"',
        selector: Selector('button[name="confirm"]'),
    },
    
    // Input fields
    {
        description: 'input field with name "email"',
        selector: Selector('input[name="email"]'),
    },
    {
        description: 'input field with ID "password"',
        selector: Selector('#password'),
    },
    {
        description: 'input field with placeholder "Search"',
        selector: Selector('input[placeholder="Search"]'),
    },
    {
        description: 'input field with name "username"',
        selector: Selector('input[name="username"]'),
    },
    
    // Links
    {
        description: 'link with text "Forgot Password"',
        selector: Selector('a').withText('Forgot Password'),
    },
    {
        description: 'link with class "reset-link"',
        selector: Selector('a.reset-link'),
    },
    {
        description: 'link with href "/login"',
        selector: Selector('a[href="/login"]'),
    },
    
    // Checkboxes/Radio buttons
    {
        description: 'checkbox with name "rememberMe"',
        selector: Selector('input[name="rememberMe"]'),
    },
    {
        description: 'radio button with name "gender"',
        selector: Selector('input[name="gender"]'),
    },
    
    // Dropdowns/Selects
    {
        description: 'select field with name "country"',
        selector: Selector('select[name="country"]'),
    },
    {
        description: 'select field with ID "language"',
        selector: Selector('#language'),
    },

    // Other commonly used elements
    {
        description: 'modal with class "modal-dialog"',
        selector: Selector('.modal-dialog'),
    },
    {
        description: 'form with ID "contact-form"',
        selector: Selector('#contact-form'),
    },
    {
        description: 'div with class "alert"',
        selector: Selector('.alert'),
    },
    {
        description: 'span with class "error-message"',
        selector: Selector('.error-message'),
    },
    {
        description: 'div with ID "main-container"',
        selector: Selector('#main-container'),
    },
    {
        description: 'nav with class "navbar"',
        selector: Selector('.navbar'),
    },
    {
        description: 'footer with class "footer"',
        selector: Selector('.footer'),
    }
];

module.exports = fallbackSelectors;

