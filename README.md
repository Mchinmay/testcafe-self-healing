# 🛠️ TestCafe Self-Healing Utility

A plug-and-play utility for making your TestCafe tests **resilient** to UI changes. When selectors break, this module attempts **fallback selectors** automatically — keeping your tests running with minimal maintenance.

## 🚀 Features

- Self-heals broken TestCafe selectors during runtime
- Plug-and-play with existing TestCafe projects
- Predefined set of 20+ commonly used fallback selectors
- Easy to customize and extend

---

## 📦 Installation

```bash
npm install testcafe-self-healing

```
## Usage
const { handleTestFailure } = require('testcafe-self-healing')

fixture('Broken Selector Test')
  .page('https://example.com')
  .afterEach(async (t, testInfo) => {
    await handleTestFailure(t, testInfo.errs[0])
  })

test('Test with broken selector', async t => {
  await t.click('.non-existing-button') // Triggers fallback mechanism
})
If the selector fails, the fallback selectors are tried one by one until a match is found and clicked.


🧠 How It Works
Detects if an error is due to "Element not found".
Iterates through a list of fallback selectors.
If a fallback exists, it clicks that element and continues.
If none match, the test still fails, but after intelligent attempts.

