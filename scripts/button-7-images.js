export function button7Clicked() {
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
      { src: "images/Jabba/Krsantan.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Jabba/HanSolo.png", options: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      { src: "images/Jabba/Gamorrean.png", options: [0, 1, 2, 3] },
      { src: "images/Jabba/Greedo.png", options: [0, 1, 2, 3, 4, 5, 6] },
      { src: "images/Jabba/Lando.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Jabba/Lukejediknight.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Jabba/Jawa.png", options: [0, 1, 2, 3] },
      { src: "images/Jabba/Ur.png", options: [0, 1, 2, 3, 4] },
      { src: "images/Jabba/c3p0.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Jabba/Boushh.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Jabba/Aurrasing.png", options: [0, 1, 2, 3, 4, 5, 6] },
      { src: "images/Jabba/Fennec.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Jabba/Bobafett.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Jabba/Mob.png", options: [0, 1, 2, 3] }

    ];
  
    const imagesContainer1 = document.querySelector(".images-container-1");
    for (const selectedImage of selectedImages) {
      const dropdownContainer1 = createDropdown(selectedImage.src, selectedImage.options);
      imagesContainer1.appendChild(dropdownContainer1);
    }
  }