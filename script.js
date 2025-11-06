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

// Continuação do seu script.js

// Ocultamos as etapas 1 e 2 no final. Vamos adicionar o HTML para a seção de resultado.
// Adicione esta div vazia ao seu index.html, logo após o fechamento da tag </form>
/* <div id="resultado-analise" style="display: none;">
    </div>
*/

function finalizarAnalise() {
    // 1. CAPTURAR OS VALORES
    // A função parseInt() é crucial porque o valor do HTML é lido como TEXTO, e precisamos de NÚMEROS.
    
    // EIXO 1: Comunicação (apenas um exemplo, você adicionará mais perguntas aqui)
    const comunicacao1 = parseInt(document.getElementById('comunicacao-1').value);

    // EIXO 2: Conflito
    const conflito1 = parseInt(document.getElementById('conflito-1').value);
    
    // EIXO 3: Futuro
    const futuro1 = parseInt(document.getElementById('futuro-1').value);

    // 2. CALCULAR AS PONTUAÇÕES POR EIXO
    // (A soma dos pontos de cada pergunta neste eixo)
    
    const pontuacaoComunicacao = comunicacao1; // + Comunicação 2, 3, etc.
    const pontuacaoConflito = conflito1;       // + Conflito 2, 3, etc.
    const pontuacaoFuturo = futuro1;           // + Futuro 2, 3, etc.
    
    // 3. CALCULAR A PONTUAÇÃO TOTAL
    const pontuacaoTotal = pontuacaoComunicacao + pontuacaoConflito + pontuacaoFuturo;

    // 4. OCULTAR A ÚLTIMA ETAPA DO FORMULÁRIO
    document.getElementById(`etapa-${totalEtapas}`).style.display = 'none';

    // 5. GERAR E MOSTRAR O RESULTADO
    gerarDiagnostico(pontuacaoTotal, pontuacaoComunicacao, pontuacaoConflito, pontuacaoFuturo);
}

// Continuação do seu script.js

function gerarDiagnostico(total, pCom, pConfl, pFut) {
    const elementoResultado = document.getElementById('resultado-analise');
    elementoResultado.style.display = 'block'; // Torna a seção de resultado visível
    
    let tituloAnalise = "";
    let mensagemGeral = "";

    // Lógica IF/ELSE para a Análise GERAL (baseada na pontuação total)
    // Supondo que a pontuação máxima possível seja 30 (3 perguntas * 10 pontos)
    if (total >= 25) {
        tituloAnalise = "Conexão Forte e Saudável!";
        mensagemGeral = "A base do seu relacionamento parece sólida e alinhada. Continue priorizando a comunicação aberta e o respeito mútuo. Seus desafios são provavelmente ajustes finos.";
    } else if (total >= 15) {
        tituloAnalise = "Base Sólida, Necessita de Atenção!";
        mensagemGeral = "O relacionamento tem pontos fortes, mas áreas de atenção foram destacadas. É o momento de focar nas conversas mais difíceis e entender onde as visões divergem para construir um futuro mais harmonioso.";
    } else {
        tituloAnalise = "Fase de Reflexão Profunda!";
        mensagemGeral = "Suas respostas indicam grandes lacunas em eixos cruciais do relacionamento. É essencial fazer uma reflexão profunda e honesta, buscando comunicação aberta e, talvez, ajuda externa para entender o próximo passo.";
    }
    
    // Analisar o Ponto de Maior Desafio (o eixo com a menor pontuação)
    let desafioMaximo = "Não identificado";
    
    if (pCom <= pConfl && pCom <= pFut) {
        desafioMaximo = "Comunicação (Vocês precisam se abrir mais)";
    } else if (pConfl <= pCom && pConfl <= pFut) {
        desafioMaximo = "Conflitos (A forma como vocês discordam precisa mudar)";
    } else {
        desafioMaximo = "Futuro (As metas de longo prazo não estão claras)";
    }

    // Estrutura o HTML de resultado para ser injetado na página
    elementoResultado.innerHTML = `
        <div class="analise-box">
            <h2>${tituloAnalise}</h2>
            <p>${mensagemGeral}</p>
            <hr>
            <h3>Seus Resultados Chave:</h3>
            <p><strong>Pontuação Total:</strong> ${total} / 30 (Ajuste este valor quando adicionar mais perguntas)</p>
            <p><strong>🚨 Maior Área de Desafio:</strong> ${desafioMaximo}</p>
            
            <h4>Pontuação por Eixo:</h4>
            <ul>
                <li>Comunicação: ${pCom}</li>
                <li>Conflitos: ${pConfl}</li>
                <li>Futuro: ${pFut}</li>
            </ul>
            
            <button onclick="window.location.reload()">Fazer Nova Análise</button>
        </div>
    `;
    
    // Adicione estilos CSS para a classe .analise-box no seu style.css!
}