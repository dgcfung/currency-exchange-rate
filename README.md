# Project Overview

## Project Name

Currency Exchange Rate

## Project Description

App will display the current exchange rate for 10 major cities. It will allow the user to search for additional exchange rates for countries(API has 170 total countries) and convert to USD. If time permits, the repo will allow the user to convert any two exchange rates of their choice.

## API and Data Sample

Repository Name: Fixer.io

![image](https://media.git.generalassemb.ly/user/25138/files/327f9d80-2d71-11ea-8a81-2538ee4329a4)

Update: Fixer.io API needed subscription to access certain data. Changed API to use api.exchangeratesapi.io. 

## Wireframes
![image](https://media.git.generalassemb.ly/user/25138/files/f3514c80-2d70-11ea-8c74-826aaf41c3cf)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use Fixer.io API
- Render major currencies exchange rate 
- Allow currency conversion of USD to user selected currencies.

Update: Currency exchange rates for major currencies and currency conversion completed.

#### PostMVP 

- Allow user to convert currency for two user chosen currencies.
- Use local storage to save user favorites
- Advanced CSS mouseover.

Update: Converting two currencies was completed in step one. Mouse over complete. Local storage to save user favorites not complete. 

Last day 1/8/2020: Working on last post-MVP converting currency amount to new dollar amount or working a pull down menu for any two currencies.

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Jan 2rd| Complete wireframes and creation of repository. | Complete
|Jan 3rd| Core Application Structure (HTML, CSS, etc.)/Pseudocode for JS Complete
|Jan 5th| Get API Display for ten cities & search button  | Complete
|Jan 6th| Add mouseover to button & mobile implementation|  Complete
|Jan 7th| Add CSS styling  | Complete- last fixes on styling required.
|Jan 8th| Post MVP | In progess
|Jan 9th| Present | In progress

## Priority Matrix
![image](https://media.git.generalassemb.ly/user/25138/files/fbf75200-2d73-11ea-835f-b8e898e396f3)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setup HTML CSS | H | 4hrs |
| Access API for 10 cities | H | 4hrs |
| Build Search for user input city | H | 8hrs| 
| CSS + mouseover| H | 8hrs| 
| Post-MVP: Multi-city exchange rate| H | 8hrs|
| Post-MVP: CSS mouseovers| H | 4hrs|

## API Data Sample
See Above.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

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

This coding sample was referenced from a couple my classmates. It allowed me to access the news article API and create image, article header, and article descirption in a condensed snippet of code. 

This was as opposed using several querySelector and createElement calls.

I later went back and appended CSS styling for the purpose of fitting content onto the page.



## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.

 I needed to use a different API than my original API to avoid subscription keys. The second API actually worked more efficiently without API Key. My post-MVP's were of converting any two currencies as opposed to only converting USD were achieved in my MVP due to the API change.

 I'm currently working on new post-MVP's including diplaying exchange rates for all 170 countries in the API. See post-MVP section for additional post-MVP adjustments.  
