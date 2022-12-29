require('dotenv').config()
const express = require('express')
const PORT = 5450;
const Parser = require('./headless-brow/parser');
const connection = require('./db')
const cors = require('cors')
const router = require('./router/index')

const app = express();
app.use(cors())
app.use(express.json());
app.use('/api' ,router);

const start = async () => {
  try {
    await connection.createDB()
    await connection.connectToDb();
    await Parser.getAdds(connection)
    app.listen(PORT, () => console.log('server started on port :', PORT))
  }
  catch (e) {
    console.log(e)
  }
}
start();






// let titles = ()=>{
//   let rawElements = document.querySelectorAll(".title")
//   let rawSpans = [];
//   for (let i = 3; i < rawElements.length; i++) {
//     rawSpans.push(rawElements[i].querySelector("span").innerHTML)
//   }
//   return rawSpans;
// };
// let images = ()=>{
//   let rawElements = document.querySelectorAll("._2xzMRvpz7TDA2twKCXTS4R")
//   let rawImages = [];
//   for ( const element of rawElements){
//     rawImages.push(element.querySelector("img").src)
//   }
//   return rawImages;
// }
