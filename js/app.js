document.addEventListener('DOMContentLoaded', () => {
  console.log('Js file loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener( 'submit', handleFormSubmit);

  const button = document.querySelector('#button');
  button.addEventListener("click", handleButtonClick);
})

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

  console.dir(rating);

  document.getElementById('new-item-form').reset();
};

const handleButtonClick = () => {
  const clearResults = document.querySelector('#rating_display');
  clearResults.textContent = "";
}
