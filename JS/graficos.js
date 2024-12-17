document.addEventListener("DOMContentLoaded", function () {
    // Função para atualizar os gráficos
    function atualizarGrafico(graficoId, valores) {
      const grafico = document.getElementById(graficoId);
      grafico.innerHTML = ""; // Limpa o gráfico antes de atualizar
  
      valores.forEach(valor => {
        const barra = document.createElement("div");
        barra.classList.add("bar");
        barra.style.height = `${valor}%`; // A altura da barra será proporcional ao valor
        grafico.appendChild(barra);
      });
    }
  
    // Seleção dos dropdowns e valores
    document.querySelectorAll(".dropdown-item").forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const dropdownButton = this.closest(".dropdown").querySelector(".dropdown-toggle");
        dropdownButton.textContent = this.textContent; // Atualiza o botão do dropdown
  
        const value = parseInt(this.getAttribute("data-value"));
  
        // Atualiza gráficos com os valores
        if (dropdownButton.id === "daysDropdown") {
          atualizarGrafico("grafico1", gerarValores(value)); // Exemplo: Ticket Created
          atualizarGrafico("grafico2", gerarValores(value)); // Exemplo: Ticket Closed
          atualizarGrafico("grafico3", gerarValores(value)); // Exemplo: Closure Rate
        } else if (dropdownButton.id === "yearDropdown") {
          atualizarGrafico("grafico4", gerarValores(value)); // Exemplo: Within SLA
          atualizarGrafico("grafico5", gerarValores(value)); // Exemplo: Tickets by Priority
        } else if (dropdownButton.id === "clientsDropdown") {
          atualizarGrafico("grafico6", gerarValores(value)); // Exemplo: Tickets by Category
          atualizarGrafico("grafico7", gerarValores(value)); // Exemplo: Tickets by Severity
        } else if (dropdownButton.id === "coinsDropdown") {
          atualizarGrafico("grafico8", gerarValores(value)); // Exemplo: Top IT Agent
          atualizarGrafico("grafico9", gerarValores(value)); // Exemplo: Tickets by Work Type
        }
      });
    });
  
    // Função para gerar valores fictícios para as barras
    function gerarValores(valor) {
      const valores = [];
      for (let i = 0; i < valor; i++) {
        // Gerar valores aleatórios para as barras
        valores.push(Math.floor(Math.random() * 100));
      }
      return valores;
    }
  
    // Resetar os gráficos ao clicar no botão
    const resetButton = document.getElementById("btnfilter");
    resetButton.addEventListener("click", function () {
      document.querySelectorAll(".dropdown-toggle").forEach((dropdown) => {
        dropdown.textContent = "All"; // Resetar os textos dos dropdowns
      });
  
      // Resetar os gráficos
      for (let i = 1; i <= 11; i++) {
        atualizarGrafico(`grafico${i}`, []);
      }
    });
  });
  