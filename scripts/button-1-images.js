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
      { src: "images/Rey Jedi.png", options: [7, 6, 5, 4 ,3 ,2, 1, 0] },
      { src: "images/Fin.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Trooper.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Rey Scavenger.png", options: [7, 6, 5, 4 ,3 ,2, 1, 0] },
      { src: "images/Pilot.png", options: [3, 2, 1, 0] },
      { src: "images/Poe.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Fin Hero.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Holdo.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Rose.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Poe Hero.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/BB8.png", options: [7, 6, 5, 4 ,3 ,2, 1, 0] },
      { src: "images/Chewbacca.png", options: [3, 2, 1, 0] }
    ];
  
    const imagesContainer1 = document.querySelector(".images-container-1");
    for (const selectedImage of selectedImages) {
      const dropdownContainer1 = createDropdown(selectedImage.src, selectedImage.options);
      imagesContainer1.appendChild(dropdownContainer1);
    }
  }
  