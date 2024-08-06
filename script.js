document.addEventListener('DOMContentLoaded', function() {
  const readMoreButtons = document.querySelectorAll('.read-more-btn');

  readMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
          const parent = this.parentElement;
          const dots = parent.querySelector('.dots');
          const moreText = parent.querySelector('.more');

          if (dots.style.display === 'none') {
              dots.style.display = 'inline';
              this.innerHTML = 'Read More';
              moreText.style.display = 'none';
          } else {
              dots.style.display = 'none';
              this.innerHTML = 'Read Less';
              moreText.style.display = 'inline';
          }
      });
  });
});
