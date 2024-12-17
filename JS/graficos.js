function gerarGrafico(id, valores) {
  const container = document.querySelector(`#${id} .grafico-container`);
  container.innerHTML = ''; // Limpa o container antes de criar as barras

  const maxValue = Math.max(...valores); // Encontra o maior valor

  valores.forEach(valor => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${(valor / maxValue) * 100}%`;
    bar.textContent = valor;
    container.appendChild(bar);
  });
}

// Dados para os gráficos
const dados = {
  grafico1: [50, 75, 100, 125, 150],
  grafico2: [30, 60, 90, 120, 150],
  grafico3: [10, 40, 70, 100, 130],
};

// Gera os gráficos
for (const [id, valores] of Object.entries(dados)) {
  gerarGrafico(id, valores);
}