/* Movies Array */
let movies = [
    {
        title: "Barbie",
        year: "2023",
        categories: "Comédia, Aventura, Fantasia",
        duration: "1h 52min",
        sinopse: "No mundo mágico das Barbies, 'Barbieland', uma das bonecas começa a perceber que não se encaixa como as outras. Depois de ser expulsa, ela parte para uma aventura no 'mundo real', onde descobre que a beleza está no interior de cada um.",
        folder: "./assets/barbie.jpg",
    },
    {
        title: "Velozes & Furiosos 10",
        year: "2023",
        categories: "Ação, Crime, Thriller",
        duration: "2h 22m",
        sinopse: "O fim da estrada está chegando. Velozes & Furiosos 10, é o décimo filme da franquia Velozes & Furiosos, lança os capítulos finais de uma grande saga, uma das mais famosas e populares do cinema, agora com sua terceira década e ainda mais forte. Com o mesmo elenco e personagens principais de quando começou. Ao longo de muitas missões e lutando contra todos os obstáculos impossíveis, Dom Toretto (Vin Diesel) e sua família foram mais espertos, mais furiosos e mais rápidos do que todos os inimigos em seu caminho. Agora, eles enfrentam o seu oponente mais letal: uma ameaça terrível das sombras do passado, alimentada por sede de vingança e determinada a destruir esta família.",
        folder: "./assets/velozes10.jpg",
    },
    {
        title: "O Poderoso Chefão",
        year: "1972",
        categories: "Drama, Crime",
        duration: "2h 55m",
        sinopse: "Em 1945, Don Corleone é o chefe de uma mafiosa família italiana de Nova York. Ele costuma apadrinhar várias pessoas, realizando importantes favores para elas, em troca de favores futuros. Com a chegada das drogas, as famílias começam uma disputa pelo promissor mercado. Quando Corleone se recusa a facilitar a entrada dos narcóticos na cidade, não oferecendo ajuda política e policial, sua família começa a sofrer atentados para que mudem de posição. É nessa complicada época que Michael, um herói de guerra nunca envolvido nos negócios da família, vê a necessidade de proteger o seu pai e tudo o que ele construiu ao longo dos anos.",
        folder: "./assets/poderosochefao.jpg",
    },
    {
        title: "Parasita",
        year: "2019",
        categories: "Comédia, Thriller, Drama",
        duration: "2h 12m",
        sinopse: "Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
        folder: "./assets/parasita.jpg",
    },
    {
        title: "Batman: O Cavaleiro das Trevas",
        year: "2008",
        categories: "Drama, Ação, Crime, Thriller",
        duration: "2h 32m",
        sinopse: "Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.",
        folder: "./assets/batman.jpg",
    },
    {
        title: "The Flash",
        year: "2023",
        categories: "Ação, Aventura, Ficção científica",
        duration: "2h 24m",
        sinopse: "Os mundos colidem quando Barry Allen usa seus superpoderes para viajar no tempo e mudar os acontecimentos do passado. Mas a tentativa de salvar sua família altera inadvertidamente o futuro.",
        folder: "./assets/theflash.jpg",
    },
    {
        title: "Elementos",
        year: "2023",
        categories: "Animação, Comédia, Família, Fantasia, Romance",
        duration: "1h 42m",
        sinopse: "Em uma cidade onde moradores do fogo, da água, da terra e do ar vivem juntos, uma jovem impetuosa e um homem tranquilo estão prestes a descobrir algo elementar: o quanto realmente têm em comum.",
        folder: "./assets/elementos.jpg",
    },
    {
        title: "Transformers: O Despertar das Feras",
        year: "2023",
        categories: "Ação, Aventura, Ficção científica",
        duration: "2h 7m",
        sinopse: "Nesta aventura cheia de adrenalina, Optimus Prime e os Autobots enfrentam seu maior desafio até agora. Quando uma nova ameaça capaz de destruir todo o planeta surge, eles devem se unir a uma poderosa facção conhecida como os Maximals. Com o destino da humanidade em jogo, Noah (Anthony Ramos) e Elena (Dominique Fishback) farão o que for preciso para ajudar os Transformers na batalha final para salvar a Terra.",
        folder: "./assets/transformers.jpg",
    },
    {
        title: "A Freira",
        year: "2018",
        categories: "Terror, Mistério, Thriller",
        duration: "1h 36m",
        sinopse: "Presa em um convento na Romênia, uma freira comete suicídio. Para investigar o caso, o Vaticano envia um padre assombrado e uma noviça prestes a se tornar freira. Arriscando suas vidas, a fé e até suas almas, os dois descobrem um segredo profano e se confrontam com uma força do mal que toma a forma de uma freira demoníaca e transforma o convento em um campo de batalha.",
        folder: "./assets/afreira.jpg",
    },
    {
        title: "Cidade de Deus",
        year: "2002",
        categories: "Drama, Crime",
        duration: "2h 10m",
        sinopse: "Buscapé é um jovem morador da Cidade de Deus que cresce em meio à violência. Com medo de se tornar um bandido, enxerga na fotografia uma oportunidade de ter uma vida digna.",
        folder: "./assets/cidadededeus.jpg",
    },
    {
        title: "O Pianista",
        year: "2002",
        categories: "Drama, Guerra",
        duration: "2h 30m",
        sinopse: "Um pianista judeu polonês vê Varsóvia mudar gradualmente à medida que a Segunda Guerra Mundial começa. Szpilman é forçado a ir para o Gueto de Varsóvia, mas depois é separado de sua família durante a Operação Reinhard. A partir deste momento até que os prisioneiros dos campos de concentração sejam liberados, Szpilman se esconde em vários locais entre as ruínas de Varsóvia.",
        folder: "./assets/opianista.jpg",
    },
    {
        title: "O Rei Leão",
        year: "1994",
        categories: "Família, Animação, Drama",
        duration: "1h 29m",
        sinopse: "Mufasa, o Rei Leão, e a rainha Sarabi apresentam ao reino o herdeiro do trono, Simba. O recém-nascido recebe a bênção do sábio babuíno Rafiki, mas ao crescer é envolvido nas artimanhas de seu tio Scar, o invejoso e maquiavélico irmão de Mufasa, que planeja livrar-se do sobrinho e herdar o trono.",
        folder: "./assets/oreileao.jpg",
    },
    {
        title: "A Milhões de Quilômetros",
        year: "2023",
        categories: "História, Ficção científica, Drama",
        duration: "2h 3m",
        sinopse: "Inspirado na história real do engenheiro da Nasa, José Hernández, este filme acompanha sua família de fazendeiros migrantes em sua jornada desde uma vila rural em Michoacán, no México, para mais de 300 quilômetros acima da Terra na Estação Espacial Internacional. Com o apoio da família, o foco e a determinação de José culminam na oportunidade de alcançar esse objetivo impossível.",
        folder: "./assets/amilhoesdekm.jpg",
    },
    {
        title: "Amor à Primeira Vista",
        year: "2023",
        categories: "Romance, Drama",
        duration: "1h 31m",
        sinopse: "Após perder o voo para Londres, Hadley (Haley Lu Richardson) conhece Oliver (Ben Hardy) no aeroporto e sente na hora uma forte conexão. Juntos, eles encaram um voo longo que parece passar em um piscar de olhos. O casal se separa no aeroporto de Heathrow e tenta se encontrar em meio ao caos, o que parece impossível. Será que o destino vai ajudar essas almas gêmeas?",
        folder: "./assets/amoraprimeiravista.jpg",
    },
    {
        title: "Megatubarão 2",
        year: "2023",
        categories: "Ação, Ficção científica, Terror",
        duration: "1h 56m",
        sinopse: "Um mergulho exploratório nas profundezas do oceano de uma ousada equipe de pesquisa se transforma em caos quando uma operação de mineração malévola ameaça sua missão e os força a uma batalha de alto risco pela sobrevivência.",
        folder: "./assets/meg2.jpg",
    },
    {
        title: "Homem-Aranha: Através do Aranhaverso",
        year: "2023",
        categories: "Animação, Ação, Aventura",
        duration: "2h 20m",
        sinopse: "Miles Morales retorna para o próximo capítulo da saga do Aranhaverso, uma aventura épica que transportará o Homem-Aranha em tempo integral e amigável do bairro do Brooklyn através do Multiverso para unir forças com Gwen Stacy e uma nova equipe de Homens-Aranha para enfrentar com um vilão mais poderoso do que qualquer coisa que eles já encontraram.",
        folder: "./assets/aranhaverso.jpg",
    },
    {
        title: "Um Sonho de Liberdade",
        year: "1994",
        categories: "Drama, Crime",
        duration: "2h 22m",
        sinopse: "Em 1946, Andy Dufresne, um banqueiro jovem e bem sucedido, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela. Ele é mandado para uma prisão que é o pesadelo de qualquer detento, a Penitenciária Estadual de Shawshank, no Maine. Lá ele irá cumprir a pena perpétua. Andy logo será apresentado a Warden Norton, o corrupto e cruel agente penitenciário, que usa a Bíblia como arma de controle e ao Capitão Byron Hadley que trata os internos como animais. Andy faz amizade com Ellis Boyd Redding, um prisioneiro que cumpre pena há 20 anos e controla o mercado negro da instituição.",
        folder: "./assets/umsonhodeliberdade.jpg",
    },
    {
        title: "O Poderoso Chefão: Parte II",
        year: "1974",
        categories: "Drama, Crime",
        duration: "3h 22m",
        sinopse: "Após a máfia matar sua família, o jovem Vito foge da sua cidade na Sicília e vai para a América. Vito luta para manter sua família. Ele mata Black Hand Fanucci, que exigia dos comerciantes uma parte dos seus ganhos. Com a morte de Fanucci, o poderio de Vito cresce, mas sua família é o que mais importa para ele. Agora baseado no Lago Tahoe, Michael planeja fazer incursões em Las Vegas e Havana instalando negócios ligados ao lazer, mas descobre que aliados como Hyman Roth estão tentando matá-lo.",
        folder: "./assets/opoderosochefao2.jpg",
    },
    {
        title: "Intocáveis",
        year: "2011",
        categories: "Drama, Comédia",
        duration: "1h 52m",
        sinopse: "Quando um ex-presidiário é contratado para cuidar de um aristocrata francês, seu novo trabalho se torna uma aventura imprevisível. Acelerar uma Maserati em Paris, seduzir mulheres, e fazer parapente sobre os Alpes é apenas o começo, pois ele vira o mundo da classe alta de Paris de cabeça para baixo.",
        folder: "./assets/intocaveis.jpg",
    },
    {
        title: "Viva: A Vida é uma Festa",
        year: "2017",
        categories: "Família, Animação, Fantasia, Música, Comédia, Aventura",
        duration: "1h 49m",
        sinopse: "O aspirante a músico Miguel, deve lidar com sua família que desaprova seu sonho, acaba entrando na Terra dos Mortos para encontrar seu trisavô, um cantor lendário.",
        folder: "./assets/viva.jpg",
    },
    {
        title: "Matrix",
        year: "1999",
        categories: "Ação, Ficção científica",
        duration: "2h 16m",
        sinopse: "Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador de computador que mora em um cubículo escuro, é atormentado por estranhos pesadelos nos quais encontra-se conectado por cabos e contra sua vontade, em um imenso sistema de computadores do futuro. Em todas essas ocasiões, acorda gritando no exato momento em que os eletrodos estão para penetrar em seu cérebro. À medida que o sonho se repete, Anderson começa a ter dúvidas sobre a realidade. Por meio do encontro com os misteriosos Morpheus (Laurence Fishburne) e Trinity (Carrie-Anne Moss), Thomas descobre que é, assim como outras pessoas, vítima do Matrix, um sistema inteligente e artificial que manipula a mente das pessoas, criando a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia. Morpheus, entretanto, está convencido de que Thomas é Neo, o aguardado messias capaz de enfrentar o Matrix e conduzir as pessoas de volta à realidade e à liberdade.",
        folder: "./assets/matrix.jpg",
    },
    {
        title: "Coringa",
        year: "2019",
        categories: "Crime, Thriller, Drama",
        duration: "2h 2m",
        sinopse: "Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.",
        folder: "./assets/coringa.jpg",
    },
    {
        title: "Minha Mãe é uma Peça 3: O Filme",
        year: "2019",
        categories: "Comédia",
        duration: "1h 51m",
        sinopse: "Dona Hermínia vai ter que se redescobrir e se reinventar porque seus filhos estão formando novas famílias. Essa supermãe vai ter que segurar a emoção para lidar com um novo cenário de vida: Marcelina está grávida e Juliano vai casar. Dona Hermínia está mais ansiosa do que nunca! Para completar as confusões, Carlos Alberto, seu ex-marido, que esteve sempre por perto, agora resolve ficar ainda mais próximo.",
        folder: "./assets/minhamae.jpg",
    },
    {
        title: "O Show de Truman: O Show da Vida",
        year: "1998",
        categories: "Comédia, Drama",
        duration: "1h 43m",
        sinopse: "Truman Burbank é um pacato vendedor de seguros que leva um vida simples com sua esposa Meryl Burbank. Porém algumas coisas ao seu redor fazem com que ele passe a estranhar sua cidade, seus supostos amigos e até sua mulher. Após conhecer a misteriosa Lauren, ele fica intrigado e acaba descobrindo que toda sua vida foi monitorada por câmeras e transmitida em rede nacional.",
        folder: "./assets/truman.jpg",
    },
    {
        title: "Tropa de Elite",
        year: "2007",
        categories: "Drama, Ação, Crime",
        duration: "1h 55m",
        sinopse: "Rio de Janeiro, 1997. Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano por um motivo que ele considera insensato. Mas ele tem que cumprir as ordens enquanto procura por um substituto. Sua mulher, Rosane, está no final da gravidez e todos os dias lhe pede para sair da linha de frente do batalhão. Pressionado, o capitão sente os efeitos do estresse.Neste clima, é chamado para mais uma emergência num morro. Em meio a um tiroteio em um baile funk, Nascimento e sua equipe têm que resgatar dois aspirantes a oficiais da PM: Neto e Matias. Ansiosos por entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
        folder: "./assets/tropadeelite.jpg",
    },
    {
        title: "Com Amor, Simon",
        year: "2018",
        categories: "Comédia, Drama, Romance",
        duration: "1h 50m",
        sinopse: "Aos 17 anos, Simon Spier aparentemente leva uma vida comum, mas sofre por esconder um grande segredo: nunca revelou ser gay para sua família e amigos. E tudo fica mais complicado quando ele se apaixona por um dos colegas de escola, anônimo, com quem troca confidências diariamente via internet.",
        folder: "./assets/comamorsimon.jpg",
    },
    {
        title: "Kill Bill: Volume 1",
        year: "2003",
        categories: "Ação, Crime",
        duration: "1h 51m",
        sinopse: "A ex-assassina conhecida apenas como A Noiva acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento. Ela está motivada a acertar as contas com cada uma das pessoas envolvidas com a perda da filha, da festa de casamento e dos quatro anos da sua vida. Na jornada, A Noiva é submetida a dores físicas agoniantes ao enfrentar a inescrupulosa gangue de Bill, o Esquadrão Assassino de Víboras Mortais.",
        folder: "./assets/killbill.jpg",
    },
    {
        title: "Toy Story: Um Mundo de Aventuras",
        year: "1995",
        categories: "Animação, Aventura, Família, Comédia",
        duration: "1h 21m",
        sinopse: "Buzz Lightyear é o novo e sofisticado astronauta de brinquedo do garoto Andy. Buzz não imaginava que encontraria um rival: Woody, um cowboy de brinquedo que, dominado pelo ciúme, acredita ter perdido um lugar precioso no coração do seu dono. Os dois brinquedos vivem brigando até que vão parar nas garras do vizinho, um verdadeiro destruidor de brinquedos. Agora, mais do que nunca, Buzz e Woody precisam precisam se unir para escapar do perigo. Com a ajuda de seus amigos da caixa de brinquedos, eles vão viver uma incrível aventura.",
        folder: "./assets/toystory.jpg",
    },
    {
        title: "Jurassic Park: O Parque dos Dinossauros",
        year: "1993",
        categories: "Aventura, Ficção científica",
        duration: "2h 7m",
        sinopse: "Um parque construído por um milionário tem dinossauros diversos como habitantes, extintos a sessenta e cinco milhões de anos. Isto é possível por ter sido encontrado um inseto fossilizado, que tinha sugado sangue destes dinossauros, de onde pôde-se isolar o DNA, o código químico da vida e, a partir deste ponto, recriá-los em laboratório. Mas, o que parecia ser um sonho se torna um pesadelo, quando a experiência sai do controle de seus criadores.",
        folder: "./assets/jurassicpark.jpg",
    },
    {
        title: "Divertida Mente",
        year: "2015",
        categories: "Animação, Família, Aventura, Drama, Comédia",
        duration: "1h 35m",
        sinopse: "Baseadas na Sala de Comando, o centro de controle dentro da mente de Riley de 11 anos, cinco emoções trabalham sem parar, lideradas pela otimista Alegria. Ela se esforça muito para garantir que Riley esteja sempre feliz, e trabalha ao lado do Medo, Raiva, Nojinho e Tristeza.",
        folder: "./assets/divertidamente.jpg",
    },
]

/*  Dropdown Menu  */

const linkFilmes = document.querySelector(".header__menu-item--dropdown");
const menuContainer = document.querySelector(".header__dropdown-menu");
const menuItem = document.querySelector(".header__dropdown-menu-item");

let isMenuOpen = false;

linkFilmes.addEventListener("click", function (event) {
    event.stopPropagation();
    if (!isMenuOpen) {
        menuContainer.style.display = "block";
        isMenuOpen = true;
    } else {
        menuContainer.style.display = "none";
        isMenuOpen = false;
    }
});

document.addEventListener("click", function () {
    if (isMenuOpen) {
        menuContainer.style.display = "none";
        isMenuOpen = false;
    }
})

/* Movie Search Results */

const movieSearchInput = document.querySelector("#search__field");
const movieContainer = document.querySelector(".search__movie");
const modalContainer = document.querySelector(".modal__container");
const modalFolder = document.querySelector(".modal__folder");
const modalTitle = document.querySelector(".modal__title");
const modalCategories = document.querySelector(".modal__categories");
const modalYear = document.querySelector(".modal__year");
const modalDuration = document.querySelector(".modal__duration");
const modalSinopse = document.querySelector(".modal__sinopse");
const modalClose = document.querySelector(".modal__close");

let isModalOpen = false;

const movieRatings = {};

// Function to open the modal
function openModal(movieObject) {
    modalFolder.src = movieObject.folder;
    modalTitle.innerHTML = movieObject.title;
    modalCategories.innerHTML = movieObject.categories;
    modalYear.innerHTML = movieObject.year;
    modalDuration.innerHTML = movieObject.duration;
    modalSinopse.innerHTML = movieObject.sinopse;

    const movieTitle = movieObject.title;
    const userRating = movieRatings[movieTitle];

    if (userRating) {
        modalStars.forEach((singleStar, index) => {
            if (userRating > index) {
                singleStar.classList.add("rated");
            } else {
                singleStar.classList.remove("rated");
            }
        });
    } else {
        modalStars.forEach((singleStar) => {
            singleStar.classList.remove("rated");
        });
    }

    modalContainer.style.display = "block";
    isModalOpen = true;
}

// Function to close the modal
function closeModal() {
    modalContainer.style.display = "none";
    isModalOpen = false;
}

// ´Enter´ key event in search field
movieSearchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let movieSearchTitle = movieSearchInput.value.toLowerCase();

        const foundMovies = [];
        for (i = 0; i < movies.length; i++) {
            if (movies[i].title.toLowerCase().includes(movieSearchTitle)) {
                foundMovies.push(movies[i]);
            }
        }

        movieContainer.innerHTML = "";

        if (foundMovies.length > 0) {
            foundMovies.forEach((movie) => {
                const movieDiv = document.createElement("div");
                movieDiv.classList.add("movie__div");

                movieContainer.appendChild(movieDiv);

                const movieLink = document.createElement("a");
                movieLink.href = "#modal";
                movieLink.classList.add("movie__link");

                movieDiv.appendChild(movieLink);

                const movieFolder = document.createElement("img");
                movieFolder.classList.add("movie__folder");
                movieFolder.setAttribute("data-id", movie.title);
                movieFolder.src = movie.folder;

                movieLink.appendChild(movieFolder);

                movieFolder.addEventListener("click", function (event) {
                    event.stopPropagation();
                    let movieTitle = this.getAttribute("data-id");

                    for (i = 0; i < movies.length; i++) {
                        if (movies[i].title === movieTitle) {
                            let movieObject = movies[i];
                            openModal(movieObject);
                        }
                    }
                });
            });
        } else {
            movieContainer.innerHTML = "Nenhum Filme Encontrado";
        }
    }
});

// Selects all stars in the modal
const modalStars = document.querySelectorAll(".modal__star");
let userRating = 0;

// Adds a click event to each star
modalStars.forEach((star) => {
    star.addEventListener("click", () => {
        const rating = parseInt(star.getAttribute("data-rating"));
        userRating = rating;

        const movieTitle = modalTitle.innerHTML;
        movieRatings[movieTitle] = userRating;

        modalStars.forEach((singleStar, index) => {
            if (rating > index) {
                singleStar.classList.add("rated");
            } else {
                singleStar.classList.remove("rated");
            }
        })
    })
})

// Event of clicking on the button to close the modal
modalClose.addEventListener("click", function (event) {
    event.stopPropagation();
    closeModal();
});








