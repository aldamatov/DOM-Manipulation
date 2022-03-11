
//(In JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = 'Arial, san-serif';



let nickname = document.querySelector("#nickname");
let favorites = document.querySelector("#favorites");
let hometown = document.querySelector("#hometown");
let listItems = document.querySelectorAll("li");

//(In JavaScript) Replace the content of each of the spans (nickname, favorites, hometown) with your own information.
nickname.textContent = "EJ";
favorites.textContent = "Volley, Tennis";
hometown.textContent = "K-Ata";



//Iterate through each li and add a class of "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

for (let i = 0; i < listItems.length; i++){
    listItems[i].classList.add("listitem");
    listItems[i].style.color = "red";
}



//Create a new img element and set its src attribute to a picture of you. Append that element to the body.
const myImg = document.createElement("img");
document.body.appendChild(myImg);
myImg.src = "https://www.topgear.com/sites/default/files/news-listicle/image/2022/03/12%20Top%20Gear%2010%20out%20of%2010%20cars.jpeg?w=1654&h=930";


//Add 16px Font Side to 1st li element
nickname.style.fontSize = "30px";
