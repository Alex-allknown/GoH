document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".button1, .button2, .button3, .button4, .button5, .button6, .button7");
  const button9 = document.querySelector('.button9');
  const button8 = document.querySelector('.button8');
  const button10 = document.querySelector('.button10');

  button9.addEventListener('click', function() {
  button9Clicked(button9);
});
  button8.addEventListener('click', function() {
  button8Clicked(button8);
});
  button10.addEventListener('click', function() {
  button10Clicked(button10);
});

button9.innerText = 'Clear All';
button8.innerText = 'Get Result';
button10.innerText = 'Full All';

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (button.getAttribute("data-selected") === "true") {
        buttons.forEach(function (b) {
          b.style.display = "inline-block";
          b.style.position = "";
          b.style.top = "";
          b.style.left = "";
          b.style.transform = "";
          b.setAttribute("data-selected", "false");
        });
        const imagesContainers = document.querySelectorAll(".images-container-1");
        for (const container of imagesContainers) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        }
        if (areAllButtonsVisible()) {
          button9.style.display = 'none';
          button8.style.display = 'none';
          button10.style.display = 'none';
        } else {
          button9.style.display = 'inline-block';
          button8.style.display = 'inline-block';
          button10.style.display = 'inline-block';
        }
        const buttonsContainer = document.querySelector('div[style*="height"]');
        buttonsContainer.appendChild(button9);
        buttonsContainer.appendChild(button8);
        buttonsContainer.appendChild(button10);

      } else {
        buttons.forEach(function (b) {
          if (b !== button) {
            b.style.display = "none";
          }
        });
        const relicPartsElement = document.getElementById("relic-parts");
        relicPartsElement.style.display = "none";

        if (button.classList.contains("button1")) {
          import('./button-1-images.js').then(module => {
            module.button1Clicked(button);
          });
        }  
        if (button.classList.contains("button2")) {
          import('./button-2-images.js').then(module => {
            module.button2Clicked(button);
          });
        }
        if (button.classList.contains("button3")) {
          import('./button-3-images.js').then(module => {
            module.button3Clicked(button);
          });
        }
        button.style.position = "relative";
        button.style.top = "-28%";
        button.style.left = "29%";
        button.style.transform = "translate(-50%, -50%)";
        button.setAttribute("data-selected", "true");
        if (areAllButtonsVisible()) {
          button9.style.display = 'none';
          button8.style.display = 'none';
          button10.style.display = 'none';
        } else {
          button9.style.display = 'inline-block';
          button8.style.display = 'inline-block';
          button10.style.display = 'inline-block';
        }
      }
    });
  }
  function areAllButtonsVisible() {
    const visibleButtons = document.querySelectorAll(".button1:not([style*='none']), .button2:not([style*='none']), .button3:not([style*='none']), .button4:not([style*='none']), .button5:not([style*='none']), .button6:not([style*='none']), .button7:not([style*='none'])");
    if (visibleButtons.length === 7) {
      document.getElementById("relic-parts").style.display = "none";
      return true;
    }
  }
  
});
