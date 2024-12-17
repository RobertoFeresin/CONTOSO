document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase().trim();
    const graphs = document.querySelectorAll('.content-grid .grafico');

    graphs.forEach(graph => {
      const title = graph.querySelector('h6').textContent.toLowerCase();
      if (title.includes(searchValue)) {
        graph.style.display = 'block'; 
      } else {
        graph.style.display = 'none'; 
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Selecionar todos os itens de dropdown
    document.querySelectorAll(".dropdown-item").forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault(); // Prevenir comportamento padrão do link
  
        // Obter o valor do item selecionado
        const value = this.getAttribute("data-value");
  
        // Encontrar o botão de dropdown correspondente
        const dropdownButton = this.closest(".dropdown").querySelector(".dropdown-toggle");
  
        // Atualizar o texto do botão com o valor selecionado
        dropdownButton.textContent = value;
      });
    });
  });
  