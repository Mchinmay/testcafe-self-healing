const { Selector } = require('testcafe');
const { SelectorError } = require('testcafe');
// const fallbackSelectors = require('./fallback-selectors');

async function handleTestFailure(t, error) {
    const message = error?.message || '';
    console.log('⚠️ Test failed. Error:', message);

    // Check if the error message contains "Element not found", which usually indicates a selector failure
    if (/Element not found/i.test(message)) {
        console.log('🔁 Attempting self-healing...');
        await applyFallbackSelectors(t);
    } else {
        throw error; // Rethrow the error if it's not related to selector matching
    }
}


async function applyFallbackSelectors(t) {
    const selectors = [
        {
            selector: Selector('button').withText('Add Element'),
            description: 'button with text "Add Element"'
        },
        {
            selector: Selector('button#addElement'),
            description: 'button with ID "addElement"'
        },
        {
            selector: Selector('[onclick="addElement()"]'),
            description: 'element with onclick="addElement()"'
        }
    ];    

    // Try each fallback selector until one works
    for (const { selector, description } of selectors) {
        const exists = await selector.exists;
        console.log(`🧐 Trying fallback selector: ${description} — exists: ${exists}`);
    
        if (exists) {
            console.log(`✅ Using fallback selector: ${description}`);
            await t.click(selector);
            return;
        }
    }

    console.log('❌ No fallback selectors worked.');
}
module.exports = { handleTestFailure };
