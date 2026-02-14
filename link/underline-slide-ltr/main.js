const links = document.querySelectorAll('.js-animatedLink');

links.forEach(link => {
  link.addEventListener('mouseenter', function () {
    this.classList.remove('is-leaving');
  });

  link.addEventListener('mouseleave', function () {
    this.classList.add('is-leaving');

    setTimeout(() => {
      this.classList.remove('is-leaving');
    }, 400);
  });
});