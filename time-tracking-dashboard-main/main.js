const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly");

daily.addEventListener("click", () => {
    updateDailyContent();
})

weekly.addEventListener("click", () => {
    alert("You clicked weekly");
})

monthly.addEventListener("click", () => {
    alert("You clicked monthly");
})

fetch('data.json').then((response) => {
    if(!response.ok) return console.log("Oops, something went wrong");

    return response.json();
}).then((data) => {
    console.log(data[0].timeframes.daily.current);
    updateDailyContent(data);
}).catch((error) => {
    alert(`Could not fetch data: ${error}`)
});


function updateDailyContent(obj) {
    const workCurrentHours = document.querySelector("#work-current");

    workCurrentHours.textContent = `${obj[0].timeframes.daily.current}hrs`;
}


/* the data from json file will replace these data 
ones the time period is clicked 

Algorithm 
1. fetch data.json
2. select where you want to change content 
3. Ones a certain timeframe is selected then the current data will
   will be replaced with the data from that time frame

NB: the fetch can be inside a function in which the function will be inside an eventlistener when i call it
*/