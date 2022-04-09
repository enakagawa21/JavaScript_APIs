console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const GIPHY_URL ="https://api.giphy.com/v1/gifs/translate"
const GIPHY_KEY = "DGMvsLE46BgtiJYuhuRmE8DwFy7u5y02"


let searchEle = document.querySelector("#gifSearch")
let btnEle = document.querySelector("#searchBtn")
let imgEle = document.querySelector("#mainGif")
    imgEle.src = ("https://media3.giphy.com/media/xT1XGxEHCmzlM340hi/giphy.gif?cid=609b475988vv5h30y1itzel7j2l5tinujrsuiooiyzgzo5ua&rid=giphy.gif&ct=g")

btnEle.addEventListener("click", searchGif)
searchEle.addEventListener("keyup", (event) => {
     if (event.key === 'Enter') {
     return searchGif()}
 })
 
 

// Search function
function searchGif() {
let userSearch = searchEle.value

fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${userSearch}`)

     .then((response) => response.json())
     .then((content) => {
          console.log(content)
          imgEle.src = content.data.images.original.url
          })
          .catch((err) => console.error(err))

}
