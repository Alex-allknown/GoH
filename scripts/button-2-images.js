export function button2Clicked() {
    function createDropdown(selectedImage, options) {
      const container = document.createElement("div");
      container.classList.add("dropdown-container");
  
      const image = document.createElement("img");
      image.src = selectedImage;
      image.classList.add("selected-image");
      container.appendChild(image);
  
      const select = document.createElement("select");
      for (let i of options) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        select.appendChild(option);
      }
  
      container.appendChild(select);
      return container;
    }
  
    const selectedImages = [
      { src: "images/Kylo/Kylo unmasked.png", options: [7, 6, 5, 4 ,3 ,2, 1, 0] },
      { src: "images/Kylo/FTrooper.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Kylo/Officer.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Kylo/Kyloren.png", options: [7, 6, 5, 4 ,3 ,2, 1, 0] },
      { src: "images/Kylo/Phasma.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Kylo/Executioner.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Kylo/Han.png", options: [3, 2, 1, 0] },
      { src: "images/Kylo/Sithtrooper.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Kylo/SF Tie pilot.png", options: [3, 2, 1, 0] },
      { src: "images/Kylo/Hux.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Kylo/Tie pilot.png", options: [3, 2, 1, 0] },
      { src: "images/Kylo/Palpatineemperor.png", options: [7, 6, 5, 4 ,3 ,2 , 1, 0] },

    ];
  
    const imagesContainer1 = document.querySelector(".images-container-1");
    for (const selectedImage of selectedImages) {
      const dropdownContainer1 = createDropdown(selectedImage.src, selectedImage.options);
      imagesContainer1.appendChild(dropdownContainer1);
    }
  }
  