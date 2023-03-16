document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".Rey, .Kylo, .Luke, .Palpatine, .Obiwan, .Vader, .Jabba");
  const button8 = document.querySelector('.GetResult');
  const button9 = document.querySelector('.ClearAll');
  const button10 = document.querySelector('.FullAll');

  button8.innerText = 'Get Result';
  button8.style.left = "50%";
  button8.addEventListener('click', function() {
  button8Clicked(button8);
});
  button9.innerText = 'Clear All';
  button9.style.left = "30%";
  button9.addEventListener('click', function() {
  button9Clicked(button9);
});
  button10.innerText = 'Full All';
  button10.style.left = "70%";
  button10.addEventListener('click', function() {
  button10Clicked(button10);
});

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
          button8.style.display = 'none';
          button9.style.display = 'none';
          button10.style.display = 'none';
        } else {
          button8.style.display = 'inline-block';
          button9.style.display = 'inline-block';
          button10.style.display = 'inline-block';
        }
        const buttonsContainer = document.querySelector('div[style*="height"]');
        buttonsContainer.appendChild(button8);
        buttonsContainer.appendChild(button9);
        buttonsContainer.appendChild(button10);

      } else {
        buttons.forEach(function (b) {
          if (b !== button) {
            b.style.display = "none";
          }
        });

        if (button.classList.contains("Rey")) {
          import('./button-1-images.js').then(module => {
            module.button1Clicked(button);
          });
        }  
        if (button.classList.contains("Kylo")) {
          import('./button-2-images.js').then(module => {
            module.button2Clicked(button);
          });
        }
        if (button.classList.contains("Luke")) {
          import('./button-3-images.js').then(module => {
            module.button3Clicked(button);
          });
        }
        if (button.classList.contains("Palpatine")) {
          import('./button-4-images.js').then(module => {
            module.button4Clicked(button);
          });
        }
        if (button.classList.contains("Obiwan")) {
          import('./button-5-images.js').then(module => {
            module.button5Clicked(button);
          });
        }
        if (button.classList.contains("Vader")) {
          import('./button-6-images.js').then(module => {
            module.button6Clicked(button);
          });
        }
        if (button.classList.contains("Jabba")) {
          import('./button-7-images.js').then(module => {
            module.button7Clicked(button);
          });
        }


        button.style.position = "relative";
        button.style.transform = "translate(20%,-220%)";
        button.setAttribute("data-selected", "true");
        if (areAllButtonsVisible()) {
          button8.style.display = 'none';
          button9.style.display = 'none';
          button10.style.display = 'none';
        } else {
          button8.style.display = 'inline-block';
          button9.style.display = 'inline-block';
          button10.style.display = 'inline-block';
        }
      }
    });
  }
  function areAllButtonsVisible() {
    const visibleButtons = document.querySelectorAll(".Rey:not([style*='none']), .Kylo:not([style*='none']), .Luke:not([style*='none']), .Palpatine:not([style*='none']), .Obiwan:not([style*='none']), .Vader:not([style*='none']), .Jabba:not([style*='none'])");
    if (visibleButtons.length === 7) {
      document.getElementById("relic-parts").style.display = "none";
      return true;
    }
  }
  
});
