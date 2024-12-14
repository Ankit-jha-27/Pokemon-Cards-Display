// adding multiple html elements content using js




let x = document.querySelector("#main");
let arr = ["https://tse3.mm.bing.net/th?id=OIP.pE9x3KupNesbCIP6f-EpTwHaF3&pid=Api&P=0&h=180","https://tse2.mm.bing.net/th?id=OIP.Jo3RvBEhkbTtJ-wDCFfO7gHaGq&pid=Api&P=0&h=180","https://tse1.mm.bing.net/th?id=OIP.6LkprkrfXQXNV4E0VrFSfQHaF9&pid=Api&P=0&h=180","https://tse4.mm.bing.net/th?id=OIP.7WxvjHdbCTiZTaJdLNaZzQHaJi&pid=Api&P=0&h=180","https://tse2.mm.bing.net/th?id=OIP.UZmuGvxPLJNvnT7Q8PL7wgHaIX&pid=Api&P=0&h=180","https://tse2.mm.bing.net/th?id=OIP.yvjCr7-r9FqCGJkb1CE57QHaHa&pid=Api&P=0&h=180","https://tse1.mm.bing.net/th?id=OIP.wR1Qviil_CKHkfcoW2818AHaHa&pid=Api&P=0&h=180","https://tse3.mm.bing.net/th?id=OIP.dBI6X4wRiethDACz9kqbWAHaIQ&pid=Api&P=0&h=180","https://tse3.mm.bing.net/th?id=OIP.ekkqr1dKqw997zesCIelNQHaGo&pid=Api&P=0&h=180","https://tse3.mm.bing.net/th?id=OIP.thSYnuMhPQ3uPG-0dCOFRAHaHI&pid=Api&P=0&h=180"];
let s = "";
for(let i = 0; i < 65;i++){
    
    s += `<div class="card">
            <img src=${arr[Math.floor(Math.random()*arr.length)]}>
        </div>`
}
x.innerHTML = s;
