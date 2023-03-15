export function button4Clicked() {
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
      { src: "images/Palpatine/Palpatineemperor.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Palpatine/Vader.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Palpatine/Guard.png", options: [0, 1, 2, 3] },
      { src: "images/Palpatine/Piett.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Palpatine/Krennic.png", options: [0, 1, 2, 3, 4] },
      { src: "images/Palpatine/Sidious.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Palpatine/Dartmaul.png", options: [0, 1, 2, 3, 4] },
      { src: "images/Palpatine/Dooku.png", options: [0, 1, 2, 3, 4, 5, 6] },
      { src: "images/Palpatine/Sithmarauder.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Palpatine/Anakinknight.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Palpatine/Thrawn.png", options: [0, 1, 2, 3, 4, 5, 6] },
      { src: "images/Palpatine/Tarkin.png", options: [0, 1, 2, 3] },
      { src: "images/Palpatine/Veers.png", options: [0, 1, 2, 3] },
      { src: "images/Palpatine/Stark.png", options: [0, 1, 2, 3] }

    ];
  
    const imagesContainer1 = document.querySelector(".images-container-1");
    for (const selectedImage of selectedImages) {
      const dropdownContainer1 = createDropdown(selectedImage.src, selectedImage.options);
      imagesContainer1.appendChild(dropdownContainer1);
    }
  }