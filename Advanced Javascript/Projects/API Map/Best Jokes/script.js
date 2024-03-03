const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#btn');

const setHeader = {
    headers: {
        Accept: "application/json"
    }
}

const generatejokes = () => { 
    fetch('https://icanhazdadjoke.com',setHeader)
    .then((res) => res.json())
    .then((data) => jokes.innerHTML = data.joke)
    .catch((error) => console.log(error))
}

jokebtn.addEventListener('click',generatejokes);
generatejokes();