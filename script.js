// Variável de ESTADO: Ela SEMPRE lembra em qual etapa o usuário está.
let etapaAtual = 1;

// Total de etapas do formulário
const totalEtapas = 3;

// Função para avançar de etapa
function avancarEtapa() {
    // 1. Ocultar a etapa atual (se não for a última)
    const etapaAnterior = document.getElementById(`etapa-${etapaAtual}`);
    if (etapaAnterior) {
        etapaAnterior.style.display = 'none';
    }

    // 2. Mudar o ESTADO: Aumenta o contador para a próxima etapa
    etapaAtual++;

    // 3. Mostrar a próxima etapa (se houver)
    if (etapaAtual <= totalEtapas) {
        const etapaProxima = document.getElementById(`etapa-${etapaAtual}`);
        etapaProxima.style.display = 'block';
    }
}

// Função para voltar de etapa
function voltarEtapa() {
    // 1. Ocultar a etapa atual
    const etapaAtualElemento = document.getElementById(`etapa-${etapaAtual}`);
    if (etapaAtualElemento) {
        etapaAtualElemento.style.display = 'none';
    }

    // 2. Mudar o ESTADO: Diminui o contador
    etapaAtual--;

    // 3. Mostrar a etapa anterior (se for maior que 0)
    if (etapaAtual >= 1) {
        const etapaAnteriorElemento = document.getElementById(`etapa-${etapaAtual}`);
        etapaAnteriorElemento.style.display = 'block';
    }
}

// Função placeholder para o final (iremos desenvolvê-la a seguir)
function finalizarAnalise() {
    alert("Análise em processamento... Agora vamos trabalhar na lógica de pontuação!");
}