"use strict";


const ad = document.querySelectorAll(".adv"),
books = document.querySelectorAll('.book'),
titles = document.querySelectorAll('h2'),
bcknd = document.querySelector('body');
let h2_arr = [];


function restoreBookOrder() {
    titles.forEach(e => {
        h2_arr.push({nod: e, num: e.innerText.substring(6, 7)});
        h2_arr.sort(function(a,b) {
            return a.num - b.num;
        })
    })

    h2_arr.forEach(value => { 
        value.nod.parentNode.style.order = value.num;
        value.nod.parentNode.style.display = "flex";
        value.nod.parentNode.style.flexDirection = "column";
    })
}


function removeAd() {
    ad.forEach(e => {
        e.remove('div');
    })
}


function replaceBackground() {
    bcknd.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
}


function fixName() {
    titles.forEach(e => {
        if (e.innerText == "Книга 3. this и Пропопипы Объектов") {
            e.innerText = "Книга 3. this и Прототипы Объектов";
            e.style.color = "darkkhaki";
            
        }
    });
}


function restoreBookTitles() {
    let firstBookSort = [],
    firstBookUl = [],
    secondBookSort = [],
    secondBookUl = [];
    
    titles.forEach(e => {
        if (e.innerText == "Книга 2. Область видимости и замыкания") {
            firstBookSort = e.parentNode.lastElementChild.innerText.split('\n');
            firstBookUl = e.parentNode.lastElementChild;
            e.parentNode.lastElementChild.innerHTML = "";
        } else if (e.innerText == "Книга 5. Асинхронность и Производительность") {
            secondBookSort = e.parentNode.lastElementChild.innerText.split('\n');
            secondBookUl = e.parentNode.lastElementChild;
            e.parentNode.lastElementChild.innerHTML = "";
        }
        })
        firstBookSort.sort();
        secondBookSort.sort();
        for(let c = 0, item; c < firstBookSort.length; c++) {
            item = document.createElement("li");
            item.innerHTML = firstBookSort[c];
            firstBookUl.appendChild(item);
        }
        for(let c = 0, item; c < secondBookSort.length; c++) {
            item = document.createElement("li");
            item.innerHTML = secondBookSort[c];
            secondBookUl.appendChild(item);
        };
        
    }


function addTitle() {
    let firstBookSort = [],
    firstBookUl = [];
    titles.forEach(e => {
        if (e.innerText == "Книга 6. ES6 и не только") {
            firstBookSort = e.parentNode.lastElementChild.innerText.split('\n');
            firstBookUl = e.parentNode.lastElementChild;
            e.parentNode.lastElementChild.innerHTML = "";
        }
    })
    firstBookSort.push("Глава 8: За пределами ES6")
    firstBookSort.sort();
    for(let c = 0, item; c < firstBookSort.length; c++) {
        item = document.createElement("li");
        item.innerHTML = firstBookSort[c];
        firstBookUl.appendChild(item);
    };
}


addTitle();
restoreBookTitles();
fixName();
restoreBookOrder();
removeAd();
replaceBackground();
