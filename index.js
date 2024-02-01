const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

const docsPdf = [
    {
        id: 1,
        titulo_rel: 'Guia de Simbologia',
        link: 'https://drive.google.com/file/d/16AII8VWLco2I0lJP9jivZ6imO-eS_ycg/view'
    },
    {
        id: 2,
        titulo_rel: 'Alimentador de peças',
        link: 'https://drive.google.com/file/d/1uDKVqP8IwPAQbtbSGTwB7DeB-7yuJNZb/view'
    },
    {
        id: 3,
        titulo_rel: 'Abertura da porta de ônibus',
        link: 'https://drive.google.com/file/d/1NqkqN6GMKE8PBZDw_QM4KFJe0YAX-f6V/view'
    },
    {
        id: 4,
        titulo_rel: 'Válvula "e"',
        link: 'https://drive.google.com/file/d/1GmOaQ--pYLqMb6wcJAz50c3zmctSBG3c/view'
    }
];

const videoAulas = [
    {
        id: 1,
        titulo_video: 'Simulação do alimentador de peças',
        link_video: 'https://www.youtube.com/embed/tkp6eVCu2VU'
    },
    {
        id: 2,
        titulo_video: 'Simulação da porta de ônibus',
        link_video: 'https://www.youtube.com/embed/KQorZ9jGjTA'
    },
    {
        id: 3,
        titulo_video: 'Sistema com incremento da Válvula "E"',
        link_video: 'https://www.youtube.com/embed/g5cn3z28NkI'
    },
    {
        id: 4,
        titulo_video: 'Sistema com introdução ao relé temporizador',
        link_video: 'https://www.youtube.com/embed/ch7e3RDs2rI'
    },
    {
        id: 5,
        titulo_video: 'Sistema A+C+B+ A-C-B-',
        link_video: 'https://www.youtube.com/embed/lylwxjsZ_-k'
    },
    {
        id: 6,
        titulo_video: 'Simulação de conformação de parafusos',
        link_video: 'https://www.youtube.com/embed/6e653iynWRo'
    },
    {
        id: 7,
        titulo_video: 'Simulação do Eixo motriz A+ B+ A- B-',
        link_video: 'https://www.youtube.com/embed/WxRfFq_gasQ'
    }
];

// Rota para obter os dados combinados
app.get('/', (req, res) => {
    const combinedData = {
        docs_pdf: docsPdf,
        video_aulas: videoAulas
    };

    res.json(combinedData);
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
