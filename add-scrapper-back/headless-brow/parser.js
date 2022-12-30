const puppeteer = require("puppeteer")
const addController = require("../controllers/add-controller")


class Parser {
  async getAdds(connection) {
    const fullList = [];
    console.log('starting browser')
    const browser = await puppeteer.launch({headless: true,args: ['--no-sandbox'],ignoreDefaultArgs: ['--disable-extensions']})
    console.log('browser started')
    const page = await browser.newPage()
    console.log('new page created')
    for (let i = 1; i <= 3; i++) {
      await page.goto(`https://www.sreality.cz/en/search/for-sale/apartments?page=`+i,{waitUntil: ['networkidle0', 'domcontentloaded']})
      console.log('page loaded')
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
    }
    await browser.close()
    console.log(fullList)
    await addController.insertAdverts(fullList,connection)
  }
}

module.exports = new Parser();
