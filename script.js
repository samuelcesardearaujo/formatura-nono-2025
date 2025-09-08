// --- CÓDIGO DO CONTADOR ---
// Data do evento
const dataEvento = new Date("December 12, 2025 23:59:59").getTime();

// Atualiza o contador a cada segundo
const x = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataEvento - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Exibe os resultados nos elementos HTML
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    // Se o contador chegar a zero
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contador").style.display = "none";
        document.getElementById("mensagem").innerHTML = "É HOJE! A FORMATURA CHEGOU!";
        // Altera a imagem de fundo para a imagem final da formatura
        document.getElementById("background-overlay").style.backgroundImage = 'url("./Imagens/final.jpg")';
    }
}, 1000);

// --- CÓDIGO PARA FRASES ALEATÓRIAS ---
// Lista de frases
const frases = [
    {
        texto: "A persistência é o caminho do êxito.",
        autor: "Charles Chaplin"
    },
    {
        texto: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
        autor: "Eleanor Roosevelt"
    },
    {
        texto: "Acredite em si mesmo, e o resto virá naturalmente.",
        autor: "Chris Noth"
    },
    {
        texto: "Não espere por oportunidades extraordinárias. Agarre ocasiões comuns e torne-as grandes.",
        autor: "Orison Swett Marden"
    },
    {
        texto: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        autor: "Vidal Sassoon"
    },
    {
        texto: "Comece onde você está. Use o que você tem. Faça o que você pode.",
        autor: "Arthur Ashe"
    },
    {
        texto: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
        autor: "Nelson Mandela"
    },
    {
        texto: "O sucesso é a soma de pequenos esforços, repetidos dia após dia.",
        autor: "Robert Collier"
    },
    {
        texto: "Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo.",
        autor: "Martin Luther King Jr."
    },
    {
        texto: "Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.",
        autor: "Thomas Edison"
    },
    {
        texto: "O sucesso não é o segredo da felicidade. A felicidade é o segredo do sucesso.",
        autor: "Albert Schweitzer"
    },
    {
        texto: "Se você pode sonhar, você pode fazer.",
        autor: "Walt Disney"
    },
    {
        texto: "Aprender é a única coisa que a mente nunca se cansa, nunca tem medo e nunca se arrepende.",
        autor: "Leonardo da Vinci"
    },
    {
        texto: "A jornada de mil milhas começa com um simples passo.",
        autor: "Lao Tzu"
    }
];

// Função para exibir uma frase aleatória
function exibirFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const frase = frases[indiceAleatorio];
    document.getElementById("frase-texto").innerHTML = `"${frase.texto}"`;
    document.getElementById("autor").innerHTML = `- ${frase.autor}`;
}

// --- CÓDIGO PARA FOTOS DE FUNDO ALEATÓRIAS ---
const fotosFundo = [
    './Imagens/481905504_1182511180548586_1173723184234039614_n.jpg',
    './Imagens/482191889_1182511160548588_2654326171114075940_n.jpg',
    './Imagens/IMG_20250614_181722.jpg',
    './Imagens/IMG_20250904_094556.jpg',
    './Imagens/488241962_1208465731286464_1929841697365931912_n.jpg',
    './Imagens/IMG_20250529_112921.jpg',
    './Imagens/IMG_20250904_094640.jpg',
    './Imagens/486781652_1199558125510558_3308824441585123866_n.jpg',
    './Imagens/484145554_1188883696578001_2829287374392200078_n.jpg',
    './Imagens/481057934_1178911854241852_4523145677122243378_n.jpg',
    './Imagens/489758577_1210931304373240_6181541114574695786_n.jpg',
    './Imagens/IMG_20250614_121345.jpg',
    './Imagens/488472286_1208465861286451_7596511022917566816_n.jpg',
    './Imagens/IMG_20250624_085735.jpg',
    './Imagens/IMG_20250904_094815.jpg',
    './Imagens/IMG_20250529_113857.jpg',
    './Imagens/IMG_20250826_085211.jpg',
    './Imagens/474486413_18294760306208135_388702176737206868_n.jpg',
    './Imagens/486833534_1199908038808900_5606213333024825953_n.jpg',
    './Imagens/IMG_20250529_113950_1.jpg',
    './Imagens/IMG_20250529_112937.jpg',
    './Imagens/IMG_20250826_085233.jpg',
    './Imagens/IMG_20250826_085413.jpg',
    './Imagens/IMG_20250529_112731.jpg',
    './Imagens/482193236_1182509960548708_5646857393473278568_n.jpg',
    './Imagens/481044064_1173854024747635_2348164642931037437_n.jpg',
    './Imagens/481259426_1178911907575180_340373455425905530_n.jpg',
    './Imagens/IMG_20250904_094742.jpg',
    './Imagens/468939868_18288808081208135_8594683423316492506_n.jpg',
    './Imagens/IMG_20250416_095402.jpg',
    './Imagens/483473305_1186312543501783_571966203388026806_n.jpg',
    './Imagens/481511846_1181055160694188_2109526658678184972_n.jpg',
    './Imagens/IMG_20250310_080946.jpg',
    './Imagens/IMG_20240326_075928015_MP.jpg',
    './Imagens/468659783_18288483859208135_6869433202178236802_n.jpg',
    './Imagens/IMG_20250904_094724.jpg',
    './Imagens/IMG_20250614_102317.jpg',
    './Imagens/IMG_20250904_094801.jpg',
    './Imagens/IMG_20250904_093540.jpg',
    './Imagens/484112755_1187386203394417_1666847874578384134_n.jpg',
    './Imagens/IMG_20250901_084425.jpg',
    './Imagens/IMG_20250904_094738.jpg',
    './Imagens/IMG_20250529_113913.jpg',
    './Imagens/486664874_1199908032142234_126067576652773274_n.jpg',
    './Imagens/IMG_20250529_113843.jpg',
    './Imagens/482254241_1182511163881921_557905821003280109_n.jpg',
    './Imagens/IMG_20250515_100213.jpg',
    './Imagens/IMG_20250529_113859.jpg',
    './Imagens/IMG_20250529_114002.jpg',
    './Imagens/IMG_20250614_101327.jpg',
    './Imagens/482960216_1182510213882016_6221804429899415459_n.jpg',
    './Imagens/488654616_1208454894620881_2062688410936206824_n.jpg',
    './Imagens/IMG_20241210_144711.jpg',
    './Imagens/IMG_20250310_080926.jpg',
    './Imagens/486641808_1199558498843854_3698654214562700348_n.jpg',
    './Imagens/490594216_1218122610320776_4623790758736514102_n.jpg',
    './Imagens/IMG_20250529_113300.jpg',
    './Imagens/493830511_1228408409292196_8928138290516245701_n.jpg',
    './Imagens/IMG_20250529_113358.jpg',
    './Imagens/IMG_20241210_142908.jpg',
    './Imagens/491210167_1218122540320783_6153475127758457348_n.jpg',
    './Imagens/IMG_20250904_093549.jpg',
    './Imagens/IMG_20241010_104744.jpg',
    './Imagens/484478924_1188883726577998_7777582197373407038_n.jpg',
    './Imagens/IMG_20250416_095321.jpg',
    './Imagens/IMG_20250310_081358.jpg',
    './Imagens/487434822_1199908175475553_4097459389055258788_n.jpg',
    './Imagens/468852789_18288807010208135_4654771951017135106_n.jpg',
    './Imagens/IMG_20250529_113643.jpg',
    './Imagens/IMG_20250529_114032.jpg',
    './Imagens/480670496_1173853931414311_8900256605031878518_n.jpg',
    './Imagens/IMG_20250614_152428.jpg',
    './Imagens/468708348_18288483856208135_2472570018367828623_n.jpg',
    './Imagens/IMG_20250529_113644.jpg',
    './Imagens/IMG_20250614_102302.jpg',
    './Imagens/IMG_20250310_115514.jpg',
    './Imagens/480790100_1173853938080977_4272438727385890468_n.jpg',
    './Imagens/IMG_20250904_094735.jpg',
    './Imagens/IMG_20250310_081017.jpg',
    './Imagens/IMG_20250529_113949.jpg',
    './Imagens/IMG_20250624_085757.jpg',
    './Imagens/487333083_1199908142142223_3999021788304844025_n.jpg',
    './Imagens/474537767_18294760336208135_5935243772340743083_n.jpg',
    './Imagens/481914446_1182510087215362_6873295837880125631_n.jpg',
    './Imagens/IMG_20250529_114016.jpg',
    './Imagens/481250025_1182510167215354_6127857037479383879_n.jpg',
    './Imagens/IMG_20250529_113820.jpg',
    './Imagens/IMG_20250904_094619.jpg',
    './Imagens/IMG_20250529_113704.jpg',
    './Imagens/492917672_1229102795889424_3423426232627841792_n.jpg',
    './Imagens/IMG_20241010_095805.jpg',
    './Imagens/489786613_1212850427514661_2066828804083594533_n.jpg',
    './Imagens/IMG_20250310_080912.jpg',
];

// Função para escolher e aplicar uma foto de fundo aleatória
function trocarFotoFundo() {
    const fotoAleatoria = fotosFundo[Math.floor(Math.random() * fotosFundo.length)];
    document.getElementById("background-overlay").style.backgroundImage = `url('${fotoAleatoria}')`;
}

// Quando a página é carregada, executa as duas funções
window.onload = function() {
    exibirFraseAleatoria();
    trocarFotoFundo();
};
