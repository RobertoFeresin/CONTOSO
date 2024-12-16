function toggleCollapse(sectionId) {
    var content = document.getElementById(sectionId);
    var allContents = document.querySelectorAll('.collapsible-content');
    
    allContents.forEach(function (el) {
      if (el !== content) {
        el.style.maxHeight = null;
      }
    });
  
    // Alternar a visibilidade do conteúdo clicado
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
  