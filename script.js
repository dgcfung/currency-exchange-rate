
// pull data w/ USD as a base

const exchangeBase= "https://api.exchangeratesapi.io/latest?base=USD";
console.log(exchangeBase)

// const convertCurrency="http://data.fixer.io/api/convert? access_key=5c0aeca61856c8f978ae76dfa949649b";
// console.log(convertCurrency)

const api_key="5c0aeca61856c8f978ae76dfa949649b";
console.log(api_key)


// on load animation
// window.addEventListener("load", () => {
//     document.querySelector("header").classList.add("loaded"); 
//    });


let newBase= document.querySelector('#getExchange')
newBase.addEventListener('click', getInfo);

// let searchBar = document.querySelector('#currency-conversion')
// searchBar.addEventListener('mouseover', barEffect)
// let convertButton = document.querySelector('#getExchange')
// convertButton.addEventListener('mouseover', buttonEffect)

// function barEffect(event){

// }

// function convertButton(event){

// }

function getInfo(event){
    event.preventDefault()
    let inputValue=document.querySelector("#currency-conversion").value
    console.log(inputValue)

    base.innerHTML="Base Currency"
    base.append(": "+ inputValue)

    let convertInput= inputValue.toUpperCase()

    base.innerHTML="Base Currency"
    base.append(": "+ convertInput)

    let url = (`https://api.exchangeratesapi.io/latest?base=${convertInput}`)
    console.log(url)

    // http://data.fixer.io/api/latest?access_key=API_KEY&base=USD&symbols=GBP,JPY,EUR

    // http://data.fixer.io/api/latest?access_key=5c0aeca61856c8f978ae76dfa949649b&base=usd

    // // http://data.fixer.io/api/latest?access_key=5c0aeca61856c8f978ae76dfa949649b

    let dataCurrent= axios.get(url).then(res=>{
        //console.log(res.data.main.temp)
        console.log(res.data)
        let eUr=document.querySelector('.euro')
        eUr.innerHTML= "EUR"
        eUr.append(": " + res.data.rates.EUR)
        let uSd=document.querySelector('.us')
        uSd.innerHTML= "USD"
        uSd.append(": " + res.data.rates.USD)
        let jPy=document.querySelector(".japan")
        jPy.innerHTML= "JPY"
        jPy.append(": " + res.data.rates.JPY)
        let uK=document.querySelector('.uk')
        uK.innerHTML="GBP"
        uK.append(": " + res.data.rates.GBP)
        let cHf=document.querySelector('.swiss')
        cHf.innerHTML= "CHF"
        cHf.append(": " + res.data.rates.CHF)
        let cAd=document.querySelector('.canada')
        cAd.innerHTML= "CAD"
        cAd.append(": " + res.data.rates.CAD)
        let aUd=document.querySelector('.australia')
        aUd.innerHTML= "AUD"
        aUd.append(": " + res.data.rates.AUD)
        let zAr=document.querySelector('.sa')
        zAr.innerHTML= "ZAR"
        zAr.append(": " + res.data.rates.ZAR)
        let mXn=document.querySelector('.mexico')
        mXn.innerHTML = "MXN"
        mXn.append(": " + res.data.rates.MXN)
        let hKg=document.querySelector('.hk')
        hKg.innerHTML = "HKG"
        hKg.append(": " + res.data.rates.HKD)
    })

    document.querySelector("#currency-conversion").value= ""

}

// make axios call to news api

let googleNews = (`https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=f57cf770ce4741b99bc83aac6b19c03a`)

let newsTicker = axios.get(googleNews).then(res=>{
    console.log(res.data)
    let newsOne=document.querySelector('.news-1')
    
    let imageOne=document.createElement('div');
    imageOne.innerHTML=`
    <a href=\"${res.data.articles[0]["url"]}\" target=\"_blank\">
    <div class="news-item">
    <div class= "image-container" style='background-image: url("${res.data.articles[0]["urlToImage"]}")' >
    </div>
        <h3>${res.data.articles[0]["title"]}</h3>
        <p>${res.data.articles[0]["description"]}</p>
    </div>
    </a>
    `
    imageOne.style.width='100%'
    imageOne.style.height= 'fit-content'
     // target blank- opens in new browser
    newsOne.appendChild(imageOne);
    



    console.log(imageOne)
    // imageOne.append(res.data.articles[0]["urlToImage"])
    // newsOne.append(res.data.articles[0]["title"])
    // newsOne.append(res.data.articles[0]["description"])
})

// append image url, create element of div, acess DIV's innerHTML and write in an a tag and img tag, interpolating the appropriate URLs from the jsonto and then append url to 

// inside atag place html.

let koreaNews=(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=f57cf770ce4741b99bc83aac6b19c03a`)

let newsTicker2= axios.get(koreaNews).then(res=>{
    console.log(res.data)
    let newsTwo=document.querySelector('.news-2')

    let imageTwo=document.createElement('div');
    imageTwo.innerHTML=`
    <a href=\"${res.data.articles[0]["url"]}\" target=\"_blank\">
    <div class="news-item">
    <div class= "image-container" style='background-image: url("${res.data.articles[0]["urlToImage"]}")' >
    </div>
    <h3>${res.data.articles[0]["title"]}</h3>
    <p>${res.data.articles[0]["description"]}</p>
    </div>
    </a>
    `

    // <div class="news-item">
    // <div class= "image-container" style='background-image: url("${res.data.articles[0]["urlToImage"]}")' >

     // target blank- opens in new browser

    imageTwo.style.width='100%'
    imageTwo.style.height= 'fit-content'
    newsTwo.appendChild(imageTwo);
    
    // let newsOne=document.querySelector('.news-2')
    // newsOne.append(res.data.articles[0]["urlToImage"])
    // newsOne.append(res.data.articles[0]["title"])
    // newsOne.append(res.data.articles[0]["description"])
})


let hkNews= (`https://newsapi.org/v2/top-headlines?country=hk&apiKey=f57cf770ce4741b99bc83aac6b19c03a`)

let newsTicker3= axios.get(hkNews).then(res=>{
    console.log(res.data)
    let newsThree=document.querySelector('.news-3')

    let imageThree=document.createElement('div');
    imageThree.innerHTML=`
    <a href=\"${res.data.articles[0]["url"]}\" target=\"_blank\">
    <div class="news-item">
    <div class= "image-container" style='background-image: url("${res.data.articles[0]["urlToImage"]}")' >
    </div>
    <h3>${res.data.articles[0]["title"]}</h3>
    <p>${res.data.articles[0]["description"]}</p>
    </div>
    </a>
    `
    imageThree.style.width='100%'
    imageThree.style.height= 'fit-content'
     // target blank- opens in new browser
    newsThree.appendChild(imageThree);
    
    // let newsOne=document.querySelector('.news-3')
    // newsOne.append(res.data.articles[0]["urlToImage"])
    // newsOne.append(res.data.articles[0]["title"])
    // newsOne.append(res.data.articles[0]["description"])
})