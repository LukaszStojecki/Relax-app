const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.video-container video');

    const sounds = document.querySelectorAll('.sound-picker button');

    const time = document.querySelector('.time-display');

    const outlineLength = outline.getTotalLength();
    console.log(outlineLength);

    let duration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;


play.addEventListener('click', () =>{
    checkPlaying(song);
});


const checkPlaying = song =>{
    if(song.paused){
        song.play();
        video.play();
        play.src = './svg/pause.svg';
    }else{
        song.pause();
        video.pause();
        play.src = './svg/play.svg';
    }
}

}

app();