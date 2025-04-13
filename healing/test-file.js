import { Selector } from 'testcafe';
const { handleTestFailure } = require('./self-healing'); // Import the self-healing function

fixture `Broken Selector Test`
    .page `https://the-internet.herokuapp.com/add_remove_elements/`;

test('Test with broken selector and fallback', async t => {
    const target = Selector('.non-existing-button');
    
    // Check if the element exists before trying to interact with it
    const exists = await target.exists;
    
    if (!exists) {
        // If the element doesn't exist, attempt self-healing
        try {
            await handleTestFailure(t, new Error('Element not found: .non-existing-button'));
        } catch (error) {
            console.error('❌ Self-healing failed:', error.message);
        }
    } else {
        // If the element exists, click it
        await t.click(target);
    }
});
