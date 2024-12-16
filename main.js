function gerarGrafico() {
    // Coleta os valores dos inputs
    const vendas = [
        document.getElementById('jan').value,
        document.getElementById('fev').value,
        document.getElementById('mar').value,
        document.getElementById('abr').value,
        document.getElementById('mai').value,
        document.getElementById('jun').value
    ];

    // Cores para cada mês (de Janeiro a Junho)
    const cores = ['#FF5733', '#33FF57', '#3357FF', '#F4A300', '#9B33FF', '#FF33F6'];

    // Cria a área do gráfico
    const grafico = document.getElementById('Espaco-grafico-Within-SLA');
    grafico.innerHTML = ''; // Limpa o gráfico existente

    // Encontra o valor máximo para normalizar as barras
    const maxVendas = Math.max(...vendas);

    // Cria as barras para cada valor de vendas
    vendas.forEach((venda, index) => {
        const barra = document.createElement('div');
        barra.classList.add('barra');

        // Calcula a altura da barra proporcionalmente ao valor das vendas
        const altura = (venda / maxVendas) * 100;
        barra.style.height = `${altura}%`;

        // Atribui a cor da barra com base no mês
        barra.style.backgroundColor = cores[index];

        // Adiciona a barra ao gráfico
        grafico.appendChild(barra);
    });
}