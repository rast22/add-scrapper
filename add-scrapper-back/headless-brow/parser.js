const puppeteer = require("puppeteer")
const addController = require("../controllers/add-controller")


class Parser {
  async getAdds(connection) {
    const fullList = [];
    const addAmount = 500
    let pageCounter = 1;
    console.log('starting browser')
    const browser = await puppeteer.launch({headless: true,args: ['--no-sandbox'],ignoreDefaultArgs: ['--disable-extensions']})
    console.log('browser started')
    const page = await browser.newPage()
    while (fullList.length !== addAmount){
      await page.goto(`https://www.sreality.cz/en/search/for-sale/apartments?page=`+pageCounter ,{waitUntil: ['networkidle0', 'domcontentloaded']})
      console.log(`page #${pageCounter} loaded`)
      const data = await page.evaluate( () => {
        const rawAdds = document.querySelector(".dir-property-list").querySelectorAll(".property");
        const items = []
        for (const rawProperty of rawAdds) {
          items.push({
            title: rawProperty.querySelector(".title").innerText,
            image: rawProperty.querySelectorAll("._2xzMRvpz7TDA2twKCXTS4R")[0].querySelector("img").src,
          })
        }
        return items;
      })
      fullList.push(...data)
      console.log(`took ${fullList.length} of ${addAmount} adverts`)
      pageCounter++
    }
    await browser.close()
    await addController.insertAdverts(fullList,connection)
  }
}

module.exports = new Parser();
