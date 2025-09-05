// --- Configuração da Formatura ---
const dataFinal = new Date("Dec 12, 2025 19:00:00").getTime();

// --- Lista de Imagens de Fundo ---
// O caminho agora inclui o nome do seu repositório E a pasta com 'I' maiúsculo
const imagensFundo = [
    '/formatura-nono-2025/Imagens/IMG_20250529_113300.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113358.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113400.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113643.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113704.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113706.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113820.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113841.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113842.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113843_1.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113859.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113913.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113914.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113942.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113947.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113948.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113949.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113949_1.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113950.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113950_1.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_113950_2.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_114002.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_114003.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_114014.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_114016.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_114031.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_114032.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_114034.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250529_114036.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250614_101327.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250614_102302.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250614_102313.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250614_102317.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250614_102327.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250614_102348.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250614_102430.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250614_102608.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250614_181722.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250614_181725.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250614_181728.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250624_085735.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250624_085751.jpg',
    '/formatura-nono-2025/Imagens/IMG_20250624_085757.jpg'
];

// --- Função para definir a imagem de fundo do dia ---
function definirImagemDoDia() {
    const hoje = new Date();
    const diaDoAno = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const indiceImagem = diaDoAno % imagensFundo.length;
    document.body.style.backgroundImage = `url('${imagensFundo[indiceImagem]}')`;
}

// Quando a página for carregada, chame a função para exibir a primeira frase.
document.addEventListener("DOMContentLoaded", exibirFraseAleatoria);


// --- Atualiza o contador a cada 1 segundo ---
const x = setInterval(function() {
    const agora = new Date().getTime();
    const diferenca = dataFinal - agora;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    if (diferenca < 0) {
        clearInterval(x);
        document.getElementById("contador").style.display = "none";
        document.getElementById("mensagem").innerHTML = "Parabéns, formandos! A espera acabou!";
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#3cb371";
    }
}, 1000);