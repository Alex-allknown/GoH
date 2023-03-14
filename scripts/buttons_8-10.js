function clearSum() {
  sum = { 
    H1: 0, H2: 0, H3: 0, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, 
    C1: 0, C2: 0, C3: 0 
  };
}
function restoreMaxValues() {
  const dropdownContainers = document.querySelectorAll('.dropdown-container');

  for (const dropdownContainer of dropdownContainers) {
    const select = dropdownContainer.querySelector('select');
    if (select) {
      const options = select.querySelectorAll('option');
      let maxOptionValue = Math.max(...Array.from(options, (option) => Number(option.value)));
      select.value = maxOptionValue;
    }
  }
  
}

function button9Clicked() {
  clearSum();
  relick_results({ H1: 0, H2: 0, H3: 0, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 0, C2: 0, C3: 0});
  restoreMaxValues();
}

function button8Clicked() {
  clearSum();
  const dropdownContainers = document.querySelectorAll(".dropdown-container");

  const selectedValues = [];
  const maxValues = [];

  for (const container of dropdownContainers) {
    const select = container.querySelector("select");
    const selectedValue = select && parseInt(select.value);
    const options = select && Array.from(select.options);
    const maxValue = options && options.length > 0 ? Math.max(...options.map((option) => parseInt(option.value))) : null;
    if (selectedValue !== null) {
      selectedValues.push(selectedValue);
      maxValues.push(maxValue);
    }
  }
  for (let i = 0; i < selectedValues.length; i++) {
    calculateRelicParts(selectedValues[i], maxValues[i]);
  }
}
function button10Clicked() {
  const imagesContainer1 = document.querySelector(".images-container-1");
  const dropdowns = imagesContainer1.querySelectorAll(".dropdown-container select");

  dropdowns.forEach((dropdown) => {
    dropdown.selectedIndex = dropdown.options.length - 1;
  });
}
