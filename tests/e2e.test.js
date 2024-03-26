const puppeteer = require('puppeteer');

let browser; //references browser instance

beforeEach(async () => { //jest code helps structure the tests with puppeteer
  console.log(`Launching Puppeteer`);

  browser = await puppeteer.launch({
    headless: true,
    args: [
      `--no-sandbox`,
      '--disable-setuid-sandbox',
    ]
  });
  console.log('Puppeteer launched successfully');
});

afterEach(async () => { //jest code
  await browser.close();
  browser = undefined; 
}); //this isolates tests, one test can impact the result of another if in the same browser

test('images renders correctly', async () => { //jest code
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000/`);
  
    await page.waitForSelector('h1') //waits for DOM content to load
    const title = await page.$('h1');
    const titleText = await page.evaluate(title => title.textContent, title);
    expect(titleText).toBe("My Projects");
  
}, 10000);