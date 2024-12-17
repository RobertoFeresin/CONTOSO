function renderGrafico(id, valores) {
  const container = document.querySelector(`#${id} .grafico-container`);
  container.innerHTML = ''; 

  if (!valores || valores.length === 0) {
    container.innerHTML = '<p style="color: white;">No data available</p>';
    return;
  }

  const maxValue = Math.max(...valores);

  valores.forEach((valor) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${(valor / maxValue) * 100}%`;
    bar.textContent = valor;
    container.appendChild(bar);
  });
}

const dataByYear = {
  2030: {
    grafico1: [10, 30, 20, 40],
    grafico2: [25, 5, 15, 35],
    grafico3: [30, 40, 20, 50],
    grafico4: [10, 37, 54, 21],
    grafico5: [15, 32, 15, 57],
    grafico6: [20, 30, 40, 50],
    grafico7: [25, 17, 45, 57],
    grafico8: [30, 40, 50, 60],
    grafico9: [30, 30, 30, 30],
  },
  2035: {
    grafico1: [15, 25, 35, 45],
    grafico2: [10, 20, 30, 40],
    grafico3: [25, 35, 45, 55],
    grafico4: [45, 55, 65, 35],
    grafico5: [20, 30, 40, 50],
    grafico6: [25, 35, 45, 55],
    grafico7: [30, 40, 50, 60],
    grafico8: [35, 45, 55, 65],
    grafico9: [40, 50, 60, 70],
  },
  2040: {
    grafico1: [20, 10, 70, 60],
    grafico2: [15, 25, 35, 45],
    grafico3: [30, 35, 50, 60],
    grafico4: [50, 60, 70, 40],
    grafico5: [25, 35, 45, 55],
    grafico6: [30, 40, 50, 60],
    grafico7: [35, 45, 55, 65],
    grafico8: [40, 50, 60, 70],
    grafico9: [45, 55, 65, 75],
  },
  2045: {
    grafico1: [20, 30, 40, 50],
    grafico2: [15, 25, 35, 45],
    grafico3: [30, 40, 50, 60],
    grafico4: [60, 70, 80, 50],
    grafico5: [30, 40, 50, 60],
    grafico6: [35, 45, 55, 65],
    grafico7: [40, 50, 60, 70],
    grafico8: [45, 55, 65, 75],
    grafico9: [50, 60, 70, 80],
  },
  2050: {
    grafico1: [20, 30, 40, 50],
    grafico2: [15, 25, 35, 45],
    grafico3: [10, 20, 30, 70],
    grafico4: [55, 65, 75, 45],
    grafico5: [25, 35, 45, 55],
    grafico6: [30, 40, 50, 60],
    grafico7: [35, 45, 55, 65],
    grafico8: [40, 50, 60, 70],
    grafico9: [45, 55, 65, 75],
  },
};

function initGrafico(ano = '2030') {
  const graficos = dataByYear[ano];
  if (graficos) {
    Object.entries(graficos).forEach(([id, data]) => renderGrafico(id, data));
  }
}

const dropdownItems = document.querySelectorAll('#yearDropdown + .dropdown-menu .dropdown-item');
dropdownItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    const selectedYear = event.target.getAttribute('data-value');
    const yearText = event.target.textContent;

    document.getElementById('yearDropdown').textContent = yearText; 
    initGrafico(selectedYear); 
  });
});


initGrafico('2030');
