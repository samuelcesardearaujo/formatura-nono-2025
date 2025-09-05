// --- Configuração da Formatura ---
const dataFinal = new Date("Dec 12, 2025 19:00:00").getTime();

// --- Lista de Imagens de Fundo ---
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

// --- Lista de Frases de Despedida e Motivação ---
const frases = [
    {
        texto: "Não chore porque terminou, sorria porque aconteceu.",
        autor: "Gabriel García Márquez"
    },
    {
        texto: "A despedida é uma dor tão suave que o homem a sente como um prazer.",
        autor: "William Shakespeare"
    },
    {
        texto: "Para viver e ser feliz, não se deve ter medo da mudança.",
        autor: "Anatole France"
    },
    {
        texto: "Não podemos mudar o que fomos, mas podemos mudar o que seremos.",
        autor: "Osho"
    },
    {
        texto: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        autor: "Robert Collier"
    },
    {
        texto: "A melhor maneira de prever o futuro é criá-lo.",
        autor: "Peter Drucker"
    },
    {
        texto: "Um diploma é uma passagem para uma nova jornada.",
        autor: "Frase motivacional"
    },
    {
        texto: "Que o futuro seja um livro em branco esperando para ser preenchido com suas maiores conquistas.",
        autor: "Frase motivacional"
    },
    {
        texto: "Hoje vocês se despedem de uma fase, mas abraçam um mundo de possibilidades.",
        autor: "Frase motivacional"
    }
];

// --- Função para definir a imagem de fundo do dia ---
function definirImagemDoDia() {
    const hoje = new Date();
    const diaDoAno = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const indiceImagem = diaDoAno % imagensFundo.length;
    document.body.style.backgroundImage = `url('${imagensFundo[indiceImagem]}')`;
}

// --- Função para exibir uma frase aleatória ---
function exibirFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const fraseSelecionada = frases[indiceAleatorio];

    document.getElementById("frase-texto").innerHTML = `"${fraseSelecionada.texto}"`;
    document.getElementById("autor").innerHTML = `- ${fraseSelecionada.autor}`;
}

definirImagemDoDia();
exibirFraseAleatoria();


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