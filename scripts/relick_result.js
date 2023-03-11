function relick_results(){
  const resultContainer = document.getElementById("relic-parts");
  // Проходимся по всем деталям реликвии
  for (const material in sum) {
    // Создаем элементы для изображения и количества деталей
    const materialContainer = document.createElement("div");
    const materialImages = {
      H1: 'images/Gear-Carbonite_Circuit_Board.png',
      H2: 'images/Gear-Bronzium_Wiring.png',
      H3: 'images/Gear-Chromium_Transistor.png',
      H4: 'images/Gear-Aurodium_Heatsink.png',
      H5: 'images/Gear-Electrium_Conductor.png',
      H6: 'images/Game-Icon-Zinbiddle_Card.png',
      H7: 'images/Game-Icon-Impulse_Detector.png',
      H8: 'images/Game-Icon-Gyrda_Keypad.png',
      H9: 'images/Game-Icon-Droid_Brain.png',
      C1: 'images/tex.scavenger_data01.png',
      C2: 'images/tex.scavenger_data02.png',
      C3: 'images/tex.scavenger_data03.png',
    };
    
    const materialImage = document.createElement("img");
    const materialCount = document.createElement("p");

    // Устанавливаем атрибуты изображения
    materialImage.src = materialImages[material];
    materialImage.alt = material;

    // Устанавливаем текст для количества деталей
    materialCount.textContent = `${sum[material]} pieces`;

    // Добавляем изображение и количество деталей в контейнер
    materialContainer.appendChild(materialImage);
    materialContainer.appendChild(materialCount);
    resultContainer.appendChild(materialContainer);
  }
}
