
function cardMaker(title,image,description) {
    return {
        title: title,
        image: image,
        description: description
      };
}

const cardsGallery = [
    cardMaker("Castlevania Symphony of the Night(1997)","https://upload.wikimedia.org/wikipedia/pt/e/e0/Castlevania_Symphony_of_the_Night_Capa.jpg","Lançado em 1997 para PlayStation e Sega Saturn, revolucionou a indústria dos videogames ao introduzir um mapa expansivo e completamente explorável, permitindo uma jogabilidade não linear que se tornou a marca registrada do gênero metroidvania. Com uma combinação de exploração profunda, combate dinâmico e elementos de RPG, o jogo redefiniu os padrões de design de níveis e influenciou inúmeras franquias futuras."),
    cardMaker("Richter Belmont","https://i.pinimg.com/564x/ac/21/a3/ac21a37c8636423601d2dad9279c3744.jpg","Personagem principal de Castlevania: Rondo of Blood. Ele usa um chicote para enfrentar monstros e salvar o mundo das trevas."),
    cardMaker("Koji Igarashi","https://upload.wikimedia.org/wikipedia/commons/2/27/10.5.17KojiIgarashiPortraitByLuigiNovi1.jpg","Um produtor e designer conhecido por seu trabalho na franquia Castlevania, ajudando a popularizar o estilo metroidvania. Ele também liderou o desenvolvimento de Bloodstained: Ritual of the Night, considerado o sucessor espiritual da série."),
    cardMaker("Ayami Kojima","https://preview.redd.it/feel-like-i-need-to-share-this-every-once-in-a-while-ayami-v0-vepcx0iu7nie1.jpeg?auto=webp&s=b2394523abb2e0f224952dfbf6138defc8dda03e","Artista principal por trás do estilo detalhado da série Castlevania, especialmente em Symphony of the Night. Seu trabalho definiu a identidade visual da franquia e é muito admirado pelos fãs."),
    cardMaker("Konami","https://upload.wikimedia.org/wikipedia/commons/3/34/Konami_3rd_logo.png","Empresa responsável por Castlevania. Após anos focando em pachinko e outros negócios, recentemente começou a mostrar interesse em retomar suas franquias clássicas.")
]

const cardContainers = document.querySelectorAll(".card");

cardsGallery.forEach((card, i) => {
    const container = cardContainers[i]
    container.querySelector("img").src = card.image;
    container.querySelector(".title").textContent = card.title;
    container.querySelector(".description").textContent = card.description;
});