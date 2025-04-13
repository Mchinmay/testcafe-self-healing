// self-healing.js or healing-handler.js (your core utility)
const fallbackSelectors = require('./fallback-selector')

async function handleTestFailure(t, error) {
    const message = error?.message || '';
    console.log('⚠️ Test failed. Error:', message);

    if (/Element not found/i.test(message)) {
        console.log('🔁 Initiating TestCafe Self-Healing Mechanism...');
        await applyFallbackSelectors(t);
    } else {
        throw error;
    }
}

async function applyFallbackSelectors(t) {
    for (const { selector, description } of fallbackSelectors) {
        const sel = selector(); 
        const exists = await sel.exists;
        console.log(`🧐 Checking fallback selector: "${description}" — Exists: ${exists ? '✔️ Yes' : '❌ No'}`);

        if (exists) {
            console.log(`✅ Successfully found element using fallback selector: "${description}"`);
            await t.click(sel);
            return;
        }
    }

    console.log('❌ No suitable fallback selectors found. Test failed.');
}

module.exports = { handleTestFailure };
