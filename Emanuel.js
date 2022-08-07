const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://contractorsinsurancereview.com/ExampleForm/');

  await page.type('#name' , 'Emanuel')
  await page.type('#email' , 'manu4you@gmail.com')
  await page.type('#phone' , '0548088088')
  await page.type('#company' , 'Jones')
  await page.select('#employees', '51-500')


  await page.screenshot({path: 'example.png'});

  await Promise.all([
      await page.click('body > div > div.row > div.large-5.medium-5.columns > div > form > p:nth-child(8) > button')
    ]);
  await page.on('console', async e => {
    const args = await Promise.all(e.args().map(a => a.jsonValue()));
    console.log("Mo' Money Mo' Problems");
  });

  await page.screenshot({path: 'finish.png'});

  await browser.close();
})();