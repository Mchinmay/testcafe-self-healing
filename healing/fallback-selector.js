// fallback-selectors.js
const { Selector } = require('testcafe');

module.exports = [
    {
        description: 'button with text "Add Element"',
        selector: Selector('button').withText('Add Element'),
    },
    {
        description: 'button with onclick="addElement()"',
        selector: Selector('[onclick="addElement()"]'),
    },
    {
        description: 'generic button (last resort)',
        selector: Selector('button'),
    }
];
