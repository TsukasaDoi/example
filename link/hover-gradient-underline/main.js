(() => {
  const link = document.querySelector('.js-gradientUnderlineLink');
  if (!link) return;

  // underline-slide-* と同じ「離れる時のアニメ」パターンに合わせる
  link.addEventListener('mouseleave', () => {
    link.classList.add('is-leaving');
    window.setTimeout(() => link.classList.remove('is-leaving'), 450);
  });
})();

