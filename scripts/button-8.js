function button8Clicked() {
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
