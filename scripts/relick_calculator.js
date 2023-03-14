
function calculateRelicParts(selectedValues, maxValues) {
  const relicData = {
    R0: { H1: 0, H2: 0, H3: 0, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 0, C2: 0, C3: 0},
    R1: { H1: 40, H2: 0, H3: 0, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 0, C2: 0, C3: 0},
    R2: { H1: 70, H2: 40, H3: 0, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 15, C2: 0, C3: 0},
    R3: { H1: 100, H2: 80, H3: 20, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 35, C2: 15, C3: 0},
    R4: { H1: 130, H2: 120, H3: 60, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 55, C2: 40, C3: 0},
    R5: { H1: 160, H2: 160, H3: 90, H4: 20, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 75, C2: 65, C3: 15 },
    R6: { H1: 180, H2: 190, H3: 120, H4: 40, H5: 20, H6: 0, H7: 0, H8: 0, H9: 0, C1: 95, C2: 90, C3: 40 },
    R7: { H1: 200, H2: 220, H3: 140, H4: 60, H5: 40, H6: 10, H7: 0, H8: 0, H9: 0, C1: 115, C2: 115, C3: 75 },
    R8: { H1: 200, H2: 220, H3: 160, H4: 80, H5: 60, H6: 30, H7: 20, H8: 0, H9: 0, C1: 135, C2: 140, C3: 120 },
    R9: { H1: 200, H2: 220, H3: 180, H4: 100, H5: 80, H6: 50, H7: 40, H8: 20, H9: 20, C1: 165, C2: 170, C3: 175 }
  };

  const selectedRelic = `R${selectedValues}`;
  const maxRelic = `R${maxValues}`;
  const selectedRelicData = relicData[selectedRelic];
  const maxRelicData = relicData[maxRelic];
  const relicParts = {};

  for (const material in maxRelicData) {
    relicParts[material] = maxRelicData[material] - selectedRelicData[material];
  }
relicSum(relicParts)
}

let sum = { 
  H1: 0, H2: 0, H3: 0, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, 
  C1: 0, C2: 0, C3: 0 
};

function relicSum(relicParts) { 
  for (let material in relicParts) {
    if (relicParts.hasOwnProperty(material) && sum.hasOwnProperty(material)) {
      sum[material] += relicParts[material];
    }
  }
relick_results(sum)
}

function relick_results(sum){
  const resultContainer = document.getElementById("relic-parts");
  resultContainer.innerHTML = "";
  document.getElementById("relic-parts").style.display = "flex";
  
  for (const material in sum) {
    const materialContainer = document.createElement("div");
    const materialImages = {
      H1: 'images/Relick/Gear-Carbonite_Circuit_Board.png',
      H2: 'images/Relick/Gear-Bronzium_Wiring.png',
      H3: 'images/Relick/Gear-Chromium_Transistor.png',
      H4: 'images/Relick/Gear-Aurodium_Heatsink.png',
      H5: 'images/Relick/Gear-Electrium_Conductor.png',
      H6: 'images/Relick/Game-Icon-Zinbiddle_Card.png',
      H7: 'images/Relick/Game-Icon-Impulse_Detector.png',
      H8: 'images/Relick/Game-Icon-Gyrda_Keypad.png',
      H9: 'images/Relick/Game-Icon-Droid_Brain.png',
      C1: 'images/Relick/tex.scavenger_data01.png',
      C2: 'images/Relick/tex.scavenger_data02.png',
      C3: 'images/Relick/tex.scavenger_data03.png',
    };
    
    const materialImage = document.createElement("img");
    const materialCount = document.createElement("p");

    materialImage.src = materialImages[material];
    materialImage.alt = material;

    materialCount.textContent = `${sum[material]} pieces`;

    materialContainer.appendChild(materialImage);
    materialContainer.appendChild(materialCount);
    resultContainer.appendChild(materialContainer);
  }
}
