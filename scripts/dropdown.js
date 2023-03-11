export function button1Clicked() {
    function createDropdown() {
      const container = document.getElementById("dropdown-container");
  
      const select = document.createElement("select");
      for (let i = 0; i <= 9; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        select.appendChild(option);
      }
  
      container.appendChild(select);
    }
    createDropdown();
  }
  