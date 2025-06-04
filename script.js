
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#bling");

    if(button) {
        button.addEventListener("click", () => {
            document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
    }
});

// const cardContent = [
//     {
//         image: "https://upload.wikimedia.org/wikipedia/pt/e/e0/Castlevania_Symphony_of_the_Night_Capa.jpg",
//         title: "Castlevania Symphony of the Night(1997)",
//         description: "O clássico jogo metroidvania lançado em 1997 no PS1 e Sega Saturn, revolucionou a indústria de jogos ao introduzir um mapa completamente explorável de forma não linear."
//     },

//     {
//         image: "https://i.pinimg.com/564x/ac/21/a3/ac21a37c8636423601d2dad9279c3744.jpg",
//         title: "Richter Belmont",
//         description: "Protagonista do jogo Castlevania: Rondo of Blood."
//     },

//     {
//         image: "https://upload.wikimedia.org/wikipedia/commons/2/27/10.5.17KojiIgarashiPortraitByLuigiNovi1.jpg",
//         title: "Koji Igarashi",
//         description: "Produtor de vários jogos da franquia e do recente sucesso Bloodstained."
//     },

//     {
//         image: "https://preview.redd.it/feel-like-i-need-to-share-this-every-once-in-a-while-ayami-v0-vepcx0iu7nie1.jpeg?auto=webp&s=b2394523abb2e0f224952dfbf6138defc8dda03e",
//         title: "Ayami Kojima",
//         description: "Artista principal de Castlevania."
//     },

//     {
//         image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Konami_3rd_logo.png",
//         title: "Konami",
//         description: "Empresa que produzia Castlevania, abandonou tudo pra fazer pachinko, recentemente aparenta voltar a dar atenção para suas séries."
//     }
// ]