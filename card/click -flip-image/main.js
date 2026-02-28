    (() => {
      const cat = document.querySelector('.cat');
      let angle = 0;

      cat.addEventListener('click', () => {
        angle += 180;
        cat.style.transform = `rotateY(${angle}deg)`;
      });
    })();