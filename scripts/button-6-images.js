export function button6Clicked() {
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
      { src: "images/Vader/Hunter.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Vader/Tech.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Vader/Wrecker.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Vader/Tusken.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Vader/Padme.png", options: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      { src: "images/Vader/Embo.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Vader/Echo501.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Vader/Echo.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Vader/Dooku.png", options: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      { src: "images/Vader/Zamwesell.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Vader/Tarkin.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Vader/Arctroope.png", options: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      { src: "images/Vader/Generalanakin.png", options: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      { src: "images/Vader/Nutegunray.png", options: [0, 1, 2, 3, 4, 5, 6, 7] }

    ];
  
    const imagesContainer1 = document.querySelector(".images-container-1");
    for (const selectedImage of selectedImages) {
      const dropdownContainer1 = createDropdown(selectedImage.src, selectedImage.options);
      imagesContainer1.appendChild(dropdownContainer1);
    }
  }