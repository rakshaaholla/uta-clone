console.log("Welcome to U T A");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Matsuri", filePath: "./songs/1.mp3", coverPath: "./covers/cover (1).jpg"},
    {songName: "Shinunoga e Wa", filePath: "./songs/2.mp3", coverPath: "./covers/cover (2).jpg"},
    {songName: "Night Dancer", filePath: "./songs/3.mp3", coverPath: "./covers/cover (3).jpg"},
    {songName: "Horimiya OP", filePath: "./songs/4.mp3", coverPath: "./covers/cover (4).jpg"},
    {songName: "Sillhouette - Naruto", filePath: "./songs/5.mp3", coverPath: "./covers/cover (5).jpg"},
    {songName: "Suzume no Tojimari", filePath: "./songs/6.mp3", coverPath: "./covers/cover (6).jpg"},
    {songName: "Idol", filePath: "./songs/7.mp3", coverPath: "./covers/cover (7).jpg"},
    {songName: "Vaundy", filePath: "./songs/8.mp3", coverPath: "./covers/cover (8).jpg"},
    {songName: "Kamisama Hajimemashithe", filePath: "./songs/9.mp3", coverPath: "./covers/cover (9).jpg"},
    {songName: "Gurenge", filePath: "./songs/10.mp3", coverPath: "./covers/cover (10).jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add( 'fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add( 'fa-pause-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex>=9) {
        songIndex = 0
    }
    else {
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex<=0) {
    songIndex = 0
    }
    else {
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})




/*document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fas', 'fa-play');
    masterPlay.classList.add('fas', 'fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fas', 'fa-play');
    masterPlay.classList.add('fas', 'fa-pause');
})

//Initialize the variables
/*let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

console.log("Welcome to U T A");
let songs = [
    {songName: "Matsuri", filePath: "./songs/1.mp3", coverPath: "./covers/cover (1).jpg"},
    {songName: "Shinunoga e Wa", filePath: "./songs/2.mp3", coverPath: "./covers/cover (2).jpg"},
    {songName: "Night Dancer", filePath: "./songs/3.mp3", coverPath: "./covers/cover (3).jpg"},
    {songName: "Horimiya OP", filePath: "./songs/4.mp3", coverPath: "./covers/cover (4).jpg"},
    {songName: "Sillhouette - Naruto", filePath: "./songs/5.mp3", coverPath: "./covers/cover (5).jpg"},
    {songName: "Suzume no Tojimari", filePath: "./songs/6.mp3", coverPath: "./covers/cover (6).jpg"},
    {songName: "Idol", filePath: "./songs/7.mp3", coverPath: "./covers/cover (7).jpg"},
    {songName: "Idol", filePath: "./songs/8.mp3", coverPath: "./covers/cover (8).jpg"},
    {songName: "Idol", filePath: "./songs/9.mp3", coverPath: "./covers/cover (9).jpg"},
    {songName: "Idol", filePath: "./songs/10.mp3", coverPath: "./covers/cover (10).jpg"},
]

let audioElement=new Audio('1.mp3');
// audioElement.play();



/*songItem.forEach((element, i)=>{
   // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click', ()=> {
    masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fas', 'fa-play');
            masterPlay.classList.add('fas', 'fa-pause');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('fas', 'fa-pause');
            masterPlay.classList.add('fas', 'fa-play');
            gif.style.opacity = 0;
        }
    });
       
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //console.log('timeupdate');
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100);
})

const makeAllPlays = (clickedElement) => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        if (!element.classList.contains('fa-step-backward') && !element.classList.contains('fa-step-forward')) {
            element.classList.remove('fas', 'fa-pause');
            element.classList.add('fas', 'fa-play');
        }
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays(e.target);
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fas', 'fa-play');
        e.target.classList.add('fas', 'fa-pause');
        audioElement.src = songs[i].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
    });
});

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex < 1){
        songIndex = songs.length - 1; // Wrap around to the last song
    }
    else {
        songIndex -= 1; // Decrement the songIndex
    }
    playSong(songIndex);
});
// Function to play a song
const playSong = (index) => {
    makeAllPlays(); // Reset all play icons
    songIndex = index;
    let selectedSongItem = songItems[songIndex];
    let selectedSongPlayIcon = selectedSongItem.getElementsByClassName('songItemPlay')[0];
    selectedSongPlayIcon.classList.remove('fas', 'fa-play');
    selectedSongPlayIcon.classList.add('fas', 'fa-pause');
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName; // Update song name
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fas', 'fa-play');
    masterPlay.classList.add('fas', 'fa-pause');
};


// Event listener for song item play buttons
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        playSong(i);
    });
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1; // Wrap around to the last song
    } else {
        songIndex -= 1; // Decrement the songIndex
    }
    playSong(songIndex);
});
*/