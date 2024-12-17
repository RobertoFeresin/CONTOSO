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