document.addEventListener('DOMContentLoaded', () => {
  console.log('Js file loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener( 'submit', handleFormSubmit);

  const button = document.querySelector('#button');
  button.addEventListener("click", handleButtonClick);
})



const handleFormSubmit = (event) => {
  event.preventDefault();
  const result = document.querySelector('#rating_display');
  const newRating = document.createElement("li");
  result.appendChild(newRating);

  newRating.textContent = `Restaurant Name: ${this.restaurant.value}, Date Attended: ${this.date.value}, Rating Given: ${this.rating.value}, Additional Comments: ${this.comments.value}`;

  document.getElementById('new-item-form').reset();
};

const handleButtonClick = () => {
  const clearResults = document.querySelector('#rating_display');
  clearResults.textContent = "";
}
