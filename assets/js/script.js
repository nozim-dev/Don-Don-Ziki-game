const paper = document.getElementById('paper');
const stone = document.getElementById('stone');
const scissors = document.getElementById('scissors');
const textScore = document.getElementById('textScore');
const sc1 = document.getElementById('sc1');
const sc2 = document.getElementById('sc2');
const score = document.querySelector('.sc0');
const filter = document.querySelector('.goGame');
const ok = document.querySelector('.ok');
const win = new Audio('../assets/audio/win1.wav');
const draw = new Audio('../assets/audio/draw.mp3');
const fail = new Audio('../assets/audio/fail.mp3');
const back = new Audio('../assets/audio/back.mp3');
const Values = ['🖐', '🤜', '✌️']
let user = 0;
let bot = 0;
function LoopMusic(back) {
    if (typeof back.loop == 'boolean') {
        back.loop = true;
    }
    else {
        back.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    back.play();
}
LoopMusic(back)
paper.addEventListener('click', function () {
    let random = Math.floor(Math.random(Values) * 3)
    console.log(Values[random]);
    if (Values[random] === '🖐') {
        textScore.innerHTML = `Durrang! <br> Do'stlik g'alaba qozondi 🙂 <br> Compyuter javobi:🖐`;
        user += 1;
        bot += 1;
        score.classList.add('score');
        filter.classList.add('filter');
        draw.play();
    } else if (Values[random] === '🤜') {
        textScore.innerHTML = `Yutdingiz! <br> Inson g'alaba qozondi 😀 <br> Compyuter javobi:🤜`;
        user += 1;
        score.classList.add('score');
        filter.classList.add('filter');
        win.play();
    } else {
        textScore.innerHTML = `Yutqazdingiz! <br> Computer g'alaba qozondi 🙁 <br> Compyuter javobi:✌️`;
        bot += 1;
        score.classList.add('score');
        filter.classList.add('filter');
        fail.play();
    }
    sc1.innerHTML = user;
    sc2.innerHTML = bot;
})
stone.addEventListener('click', function () {
    let random = Math.floor(Math.random(Values) * 3)
    console.log(Values[random]);
    if (Values[random] === '🖐') {
        textScore.innerHTML = `Yutqazdingiz! <br> Computer g'alaba qozondi 🙁 <br> Compyuter javobi:🖐`;
        bot += 1;
        score.classList.add('score');
        filter.classList.add('filter');
        fail.play();
    } else if (Values[random] === '🤜') {
        textScore.innerHTML = `Durrang! <br> Do'stlik g'alaba qozondi 🙂 <br> Compyuter javobi:🤜`;
        user += 1;
        bot += 1;
        score.classList.add('score');
        filter.classList.add('filter');
        draw.play();
    } else {
        textScore.innerHTML = `Yutdingiz! <br> Inson g'alaba qozondi 😀 <br> Compyuter javobi:✌️`;
        user += 1;
        score.classList.add('score');
        filter.classList.add('filter');
        win.play();
    }
    sc1.innerHTML = user;
    sc2.innerHTML = bot;
})
scissors.addEventListener('click', function () {
    let random = Math.floor(Math.random(Values) * 3)
    console.log(Values[random]);
    if (Values[random] === '🖐') {
        textScore.innerHTML = `Yutdingiz! <br> Inson g'alaba qozondi 😀 <br> Compyuter javobi:🖐`;
        user += 1;
        score.classList.add('score');
        filter.classList.add('filter');
        win.play();
    } else if (Values[random] === '🤜') {
        textScore.innerHTML = `Yutqazdingiz! <br> Computer g'alaba qozondi 🙁 <br> Compyuter javobi:🤜`;
        bot += 1;
        score.classList.add('score');
        filter.classList.add('filter');
        fail.play();
    } else {
        textScore.innerHTML = `Durrang! <br> Do'stlik g'alaba qozondi 🙂 <br> Compyuter javobi:✌️`;
        user += 1;
        bot += 1;
        score.classList.add('score');
        filter.classList.add('filter');
        draw.play();
    }
    sc1.innerHTML = user;
    sc2.innerHTML = bot;
})
sc1.innerHTML = user;
sc2.innerHTML = bot;
ok.addEventListener('click', function () {
    score.classList.remove('score');
    filter.classList.remove('filter');
})