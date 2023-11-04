const btn = document.getElementById("btn");
const apiKey = "RI1IQUYP0pdVu9Lj2RBEPQ==42NlXVXHsWeQd0yT";
const joke = document.getElementById("joke");

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function genJoke() {
    const response = await fetch(apiURL, options);
    const data = await response.json();

    console.log(data[0].joke);
    joke.innerText = data[0].joke;
}

btn.addEventListener("click", genJoke);
