export function button1Clicked() {
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
      { src: "images/Rey/Rey Jedi.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Rey/Fin.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Rey/Trooper.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Rey/Rey Scavenger.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Rey/Pilot.png", options: [0, 1, 2, 3] },
      { src: "images/Rey/Poe.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Rey/Fin Hero.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Rey/Holdo.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Rey/Rose.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Rey/Poe Hero.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Rey/BB8.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Rey/Chewbacca.png", options: [0, 1, 2, 3] }
    ];
  
    const imagesContainer1 = document.querySelector(".images-container-1");
    for (const selectedImage of selectedImages) {
      const dropdownContainer1 = createDropdown(selectedImage.src, selectedImage.options);
      imagesContainer1.appendChild(dropdownContainer1);
    }
  }