const btn = document.querySelector('.btn')
const next = document.querySelector('.next')
const pause = document.querySelector('.pause')

const audio = new Audio("./s1.mp3")

function playMusic() {
    audio.play();
    console.log(audio)
}
function pauseSong() {
    audio.pause()
}

function changeSong(){
    audio.src = `./s2.mp3`
    playMusic()
}

btn.addEventListener('click', playMusic)
next.addEventListener('click',changeSong)
pause.addEventListener('click',pauseSong)
