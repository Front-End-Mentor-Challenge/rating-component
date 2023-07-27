const submitbtn = document.getElementById('submitbtn');
const rating = document.querySelectorAll('.rating_circle');
  let value = 0;
  function handelRating(event) {
    value = parseInt(event.target.getAttribute('data-rating'));//event.target refers to the element which triggers the event
    
  }
  rating.forEach(circle => {
    circle.addEventListener('click', handelRating)
  });

  function avaliar() {
    localStorage.setItem("avaliacao", value)
    window.location.href = "./Submit.html"
  }
  let ratingbox = document.querySelector(".rating_given")
      ratingbox.innerHTML = `You selected ${localStorage.getItem(
        "avaliacao"
      )} out of 5`
      