export function button5Clicked() {
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
      { src: "images/Obiwan/Obiwangeneral.png", options: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      { src: "images/Obiwan/Windu.png", options: [0, 1, 2, 3] },
      { src: "images/Obiwan/Secura.png", options: [0, 1, 2, 3] },
      { src: "images/Obiwan/Bokatan.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Obiwan/Quigon.png", options: [0, 1, 2, 3] },
      { src: "images/Obiwan/Magnaguard.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Obiwan/Clone.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Obiwan/Tambor.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Obiwan/Grievous.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Obiwan/Cadbane.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Obiwan/Cody.png", options: [0, 1, 2, 3, 4, 5] },
      { src: "images/Obiwan/Jangofett.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Obiwan/Shaakti.png", options: [0, 1, 2, 3, 4, 5, 6, 7] },
      { src: "images/Obiwan/Yoda.png", options: [0, 1, 2, 3, 4, 5, 6, 7, 8] }

    ];
  
    const imagesContainer1 = document.querySelector(".images-container-1");
    for (const selectedImage of selectedImages) {
      const dropdownContainer1 = createDropdown(selectedImage.src, selectedImage.options);
      imagesContainer1.appendChild(dropdownContainer1);
    }
  }