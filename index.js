async function getJoke()
{
    let url="https://official-joke-api.appspot.com/random_joke";

    let response=await fetch(url);
    
    let data=await response.json();
    
    return [data.setup,data.punchline];

}
document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("spinner").classList.remove("hidden");
    

    getJoke().then((jokeData)=>{
        document.getElementById("spinner").classList.add("hidden");
        document.getElementById("setup").innerHTML=jokeData[0];
        document.getElementById("reveal").addEventListener("click",()=>{
            document.getElementById("punchline").innerHTML=jokeData[1];
            document.getElementById("punchline").classList.remove("hidden");
            document.getElementById("reveal").innerHTML= "Get Another Joke";
            document.getElementById("reveal").addEventListener("click",()=>{
                window.location.reload();
            });

        });
    });
});


