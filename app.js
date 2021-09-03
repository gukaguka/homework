
//const url = "https://opentdb.com/api.php?amount=10";

async function fetchData(){

    const result = await fetch("https://opentdb.com/api.php?amount=10");
    let data = await result.json();
    if(data){
        return data;
};


//const request = ;
const quiz = fetchData();
function trigger(){
    document.getElementsByClassName("quiz_question").innerHTML = quiz;
};

document.getElementsByClassName("difficulty").addEventListener("click", trigger);