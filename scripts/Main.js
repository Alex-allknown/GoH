document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".button1, .button2, .button3, .button4, .button5, .button6, .button7");
  const button8 = document.querySelector('.button8');
  button8.addEventListener('click', function() {
  button8Clicked();
});
  button8.innerText = 'Get Result';
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
        const imagesContainers = document.querySelectorAll(".images-container-1, .images-container-2");
        for (const container of imagesContainers) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        }
        if (areAllButtonsVisible()) {
          button8.style.display = 'none';
        } else {
          button8.style.display = 'inline-block';
        }
        const buttonsContainer = document.querySelector('div[style*="height"]');
        buttonsContainer.appendChild(button8);
      } else {
        buttons.forEach(function (b) {
          if (b !== button) {
            b.style.display = "none";
          }
        });

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
        button.style.position = "relative";
        button.style.top = "-180";
        button.style.left = 120;
        button.style.transform = "translate(-50%, -50%)";
        button.setAttribute("data-selected", "true");
        if (areAllButtonsVisible()) {
          button8.style.display = 'none';
        } else {
          button8.style.display = 'inline-block';
        }
        const buttonsContainer = document.querySelector('div[style*="height"]');
        buttonsContainer.appendChild(button8);
      }
    });
  }
  function areAllButtonsVisible() {
    const visibleButtons = document.querySelectorAll(".button1:not([style*='none']), .button2:not([style*='none']), .button3:not([style*='none']), .button4:not([style*='none']), .button5:not([style*='none']), .button6:not([style*='none']), .button7:not([style*='none'])");
    return visibleButtons.length === 7;
  }
});
