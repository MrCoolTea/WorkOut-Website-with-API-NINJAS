const btnarm = document.getElementById("btn-arms");
const btnchest = document.getElementById("btn-chest");
const btnabs = document.getElementById("btn-abs");
const btnlegs = document.getElementById("btn-legs");
const btnback = document.getElementById("btn-back");
const images = document.getElementById("image");

const apiKey = "GH9r0/f+mzMSA6bb2CQ6pw==mz5Yc0Z8vpsxrfOJ";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey
  },
};

const apiBaseURL = "https://api.api-ninjas.com/v1/exercises";

async function getBack() {
  const muscle = this.getAttribute('data-muscle');
  const apiURL = `${apiBaseURL}?muscle=${muscle}`;

  try {
  const response = await fetch(apiURL, options);
  const data = await response.json(); 

  for (let i = 0; i < data.length; i++) {
    const exercise = data[i];
    
    const named = document.getElementById("workout-figure" + (i + 1));

    named.innerText = exercise.name;

  }
} catch (error) {
  console.error('Error fetching exercises', error);
}
}




async function getDefaultExercises() {
  btnarm.click();
}

btnback.addEventListener("click", getBack);
btnabs.addEventListener("click", getBack);
btnlegs.addEventListener("click", getBack);
btnchest.addEventListener("click", getBack);
btnarm.addEventListener("click", getBack);

getDefaultExercises();