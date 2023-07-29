
// Code for FAQ questions 

var faqQuestions = document.querySelectorAll('.question');
faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
        this.classList.toggle('active');
        var answer = this.querySelector('.answer');
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});


// Code for Media section to allow the cards to spin

const mopedCards = document.querySelectorAll('.mediacard');
mopedCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('clicked');
    });
});

//Code for Slideshow on stats page

window.onload = function() {
    const slideshows = document.querySelectorAll(".slideshow");

    slideshows.forEach(slideshow => {
      const images = slideshow.querySelectorAll("img");
      images.forEach((image, index) => {
        const caption = document.createElement("div");
        caption.className = "caption";
        caption.innerHTML = image.alt;
        image.insertAdjacentElement("afterend", caption);
      });

      let currentIndex = 0;

      const showNextImage = () => {
        images[currentIndex].style.display = "none";
        const currentCaption = images[currentIndex].nextElementSibling;
        currentCaption.style.display = "none";
        currentIndex++;
        if (currentIndex >= images.length) {
          currentIndex = 0;
        }
        images[currentIndex].style.display = "block";
        const nextCaption = images[currentIndex].nextElementSibling;
        nextCaption.style.display = "block";
      };

      const showPrevImage = () => {
        images[currentIndex].style.display = "none";
        const currentCaption = images[currentIndex].nextElementSibling;
        currentCaption.style.display = "none";
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = images.length - 1;
        }
        images[currentIndex].style.display = "block";
        const prevCaption = images[currentIndex].nextElementSibling;
        prevCaption.style.display = "block";
      };

      setInterval(showNextImage, 5000);

      const prevButton = slideshow.querySelector(".prev");
      prevButton.addEventListener("click", showPrevImage);

      const nextButton = slideshow.querySelector(".next");
      nextButton.addEventListener("click", showNextImage);
    });
  };
