document.addEventListener('DOMContentLoaded', () => {
  console.log('Js file loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener( 'submit', handleFormSubmit);

  const button = document.querySelector('#button');
  button.addEventListener("click", handleButtonClick);

  colorChange();

})

/////////////////////// Functionality //////////////////////


const radioButtonValue = (rating) => {
  for (var i=0; i<rating.length; i++)  {
    if (rating[i].checked)  {

      return rating[i].value;
    }
  }
};

const checkValues = (comments) => {
  if (comments.value === ""){
    return "";
  }

  return `, Additional Comments: ${comments.value}`;
};


const handleFormSubmit = (event) => {
  event.preventDefault();
  const result = document.querySelector('#rating_display');
  const newRating = document.createElement("li");
  result.appendChild(newRating);

  let rating = radioButtonValue(this.rating);
  let comment = checkValues(this.comments)

  newRating.textContent = `Restaurant Name: ${this.restaurant.value}, Date Attended: ${this.date.value}, Rating Given: ${rating}${comment}`;

  document.getElementById('new-item-form').reset();
};

const handleButtonClick = () => {
  const clearResults = document.querySelector('#rating_display');
  clearResults.textContent = "";
}


////////////////////////// Colour Changes //////////////////////////////////////

const colorChange = () => {
  formColorChange();
  formElementColourChange();
  titleColorChange();
  resultsColorChange();
  sideColorChange();
  backgroundColourChange();
};


const changeColor = (area, colour) => {
  area.addEventListener("mouseenter", function(event) {
    event.target.style.color = colour;

    setTimeout(function() {
      event.target.style.color = "";

    }, 5000);
  }, false);
}

const changeElementColor = (area, colour) => {
  area.addEventListener("mouseenter", function(event) {
    event.target.style.background = colour;

    setTimeout(function() {
      event.target.style.background = "";

    }, 5000);
  }, false);
}

const changeSideColor = (area, colour) => {
  area.addEventListener("mouseenter", function(event) {
    area.body.style.background = colour;

    setTimeout(function() {
      area.body.style.background = "";

    }, 5000);
  }, false);
}

const changeBackoColor = (area, colour) => {
  area.addEventListener("mouseenter", function(event) {
    event.target.style.background = colour;

    setTimeout(function() {
      event.target.style.background = "";

    }, 5000);
  }, false);
}


const backgroundColourChange = () => {
  let changingColors = document.getElementById("wrapper");
  changeBackoColor(changingColors, "#eaccff");
};

const formColorChange = () => {
  let changingColors = document.getElementById("form");
  changeColor(changingColors, "#9800ff");
};

const titleColorChange = () => {
  let changingColors = document.getElementById("header");
  changeColor(changingColors, "#9800ff");
};

const resultsColorChange = () => {
  let changingColors = document.getElementById("results");
  changeColor(changingColors, "#9800ff");
};

const formElementColourChange = () => {
  let area1 = document.getElementById("restaurant");
  let area2 = document.getElementById("date");
  let area3 = document.getElementById("rating");
  let area4 = document.getElementById("comments");
  let area5 = document.getElementById("save");
  let area6 = document.getElementById("button");

  changeElementColor(area1, "#c166ff");
  changeElementColor(area2, "#c166ff");
  changeElementColor(area3, "#c166ff");
  changeElementColor(area4, "#c166ff");
  changeElementColor(area5, "#c166ff");
  changeElementColor(area6, "#c166ff");
};

const sideColorChange = () => {
  let changingColors = document;
  changeSideColor(changingColors, "#9800ff");
};
