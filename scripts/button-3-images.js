export function button3Clicked() {
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
      { src: "images/Old Ben.png", options: [5, 4 ,3 ,2, 1, 0] },
      { src: "images/Rey Jedi.png", options: [7, 6, 5, 4 ,3 ,2, 1, 0] },
      { src: "images/c3p0.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Mon Motma.png", options: [5, 4 ,3 ,2, 1, 0] },
      { src: "images/Chewbacca_c3po.png", options: [5, 4, 3, 2, 1, 0] },
      { src: "images/Luke jediknight.png", options: [7, 6, 5, 4, 3, 2, 1, 0] },
      { src: "images/r2d2.png", options: [7, 6, 5, 4, 3, 2, 1, 0] },
      { src: "images/Han Solo.png", options: [6, 5, 4, 3, 2, 1, 0] },
      { src: "images/Chuwi.png", options: [6, 5, 4, 3, 2, 1, 0] },
      { src: "images/leia princess.png", options: [3, 2, 1, 0] },
      { src: "images/Hermit.png", options: [5, 4 ,3 ,2, 1, 0] },
      { src: "images/Wedge.png", options: [3, 2, 1, 0] },
      { src: "images/Biggs.png", options: [3, 2, 1, 0] },
      { src: "images/Lando.png", options: [5, 4, 3, 2, 1, 0] }

    ];
  
    const imagesContainer1 = document.querySelector(".images-container-1");
    for (const selectedImage of selectedImages) {
      const dropdownContainer1 = createDropdown(selectedImage.src, selectedImage.options);
      imagesContainer1.appendChild(dropdownContainer1);
    }
  }