document.addEventListener("DOMContentLoaded", function () {
  
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function () {
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
  