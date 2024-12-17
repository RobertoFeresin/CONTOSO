document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".dropdown-item").forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault(); 
  
        const value = this.getAttribute("data-value");
  
        const dropdownButton = this.closest(".dropdown").querySelector(".dropdown-toggle");
  
        dropdownButton.textContent = value;
      });
    });
  
    const resetButton = document.getElementById("btnfilter");
    resetButton.addEventListener("click", function () {
      // Resetar o campo de busca
      const searchInput = document.getElementById("searchInput");
      searchInput.value = "";
  
      document.querySelectorAll(".dropdown-toggle").forEach((dropdown) => {
        dropdown.textContent = "All";
      });
  
      const graphs = document.querySelectorAll(".content-grid .grafico");
      graphs.forEach((graph) => {
        graph.style.display = "block";
      });
    });
  });
  