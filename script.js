let btnGame = document.querySelectorAll('.btnGame');
let gamesLink = [
    './games/game1.html',
    './games/game2.html',
    './games/game3.html',
    './games/game4.html',
    './games/game5.html',
    './games/game6.html',
    './games/game7.html',
    './games/game8.html',
    './games/game9.html'
];

btnGame.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
        window.location.href = gamesLink[index];
    });
});