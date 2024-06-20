
let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let forward = document.getElementById('forward');

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playpause() {
  if (ctrlIcon.classList.contains("fa-circle-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-circle-pause");
    ctrlIcon.classList.add("fa-circle-play");
  }
  else {
    song.play();
    ctrlIcon.classList.add("fa-circle-pause");
    ctrlIcon.classList.remove("fa-circle-play");
  }
}
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-circle-pause");
  ctrlIcon.classList.remove("fa-circle-play");
}



var count = 0;
var rancount = [0,1,2,3,4,5];
  var songs = ['music/USUK/USUK/Confident.mp3','music/USUK/USUK/Get_you.mp3',
    'music/USUK/USUK/Kiss_Me_More.mp3','music/USUK/USUK/Streets.mp3'
    ,'music/USUK/USUK/Unforgettable.mp3', 'music/USUK/USUK/After_last_night.mp3'];
  var namesongs= ['Confident','Get You','Kiss Me More','Streets','Unforgettable','After last night'];
  var author=['Justin Bieber','Daniel Caesar','Doja Cat','Doja Cat','Swae Lee','Bruno Mars']
function playNextSong() {
  do {
    var max = 6;
    document.getElementById("song").src = songs[rancount[count]];
    document.getElementById("Namesong").innerText=namesongs[rancount[count]];
    document.getElementById('author').innerText=author[rancount[count]];
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    count++;
    document.getElementById("song").play();
    if (count == max) {
      count = 0;
    }
  } while (max == 100);
}




slider.oninput = () => {
  console.log("Volume set to", ~~(slider.value))

  document.getElementById("song").volume = ~~(slider.value) * 0.01
}

function redirect() {
  myInput.addEventListener("keyup", function (e) {
    if (e.code === "Enter") {
      var input = document.getElementById('myInput').value.toLowerCase();
      switch (input) {

        case 'abroading':
          window.location.replace('playlistsetting.html');
          break;
        case 'sad':
          window.location.replace('playlist2.html');
          break;
        case 'happy':
          window.location.replace('playlist3.html');
          break;
        case 'chill':
          window.location.replace('playlist4.html');
          break;
        case 'vpop':
          window.location.replace('playlist5.html');
          break;
      }
    }
  })
}


function song1_1() {
  var song = document.getElementById('song');
  var sourceMp3 = document.getElementById('song');
  sourceMp3.src = 'music/USUK/USUK/After_last_night.mp3';
  document.getElementById("Namesong").innerText='After last night';
  document.getElementById('author').innerText='Bruno Mars';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
    }
  song.load();
  song.play();
}
function song1_2() {
  var song = document.getElementById('song');
  var sourceMp3 = document.getElementById('song');
  sourceMp3.src = 'music/USUK/USUK/Confident.mp3';
  document.getElementById("Namesong").innerText='Confident';
  document.getElementById('author').innerText='Justin Bieber';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
    }
  song.load();
  song.play();
}
function song1_3() {
  var song = document.getElementById('song');
  var sourceMp3 = document.getElementById('song');
  sourceMp3.src = 'music/USUK/USUK/Get_you.mp3';
  document.getElementById("Namesong").innerText='Get You';
  document.getElementById('author').innerText='Daniel Caesar';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
    }
  song.load();
  song.play();
}
function song1_4() {
  var song = document.getElementById('song');
  var sourceMp3 = document.getElementById('song');
  sourceMp3.src = 'music/USUK/USUK/Kiss_Me_More.mp3';
  document.getElementById("Namesong").innerText='Kiss Me More';
  document.getElementById('author').innerText='Doja Cat';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
    }
  song.load();
  song.play();
}
function song1_5() {
  var song = document.getElementById('song');
  var sourceMp3 = document.getElementById('song');
  sourceMp3.src = 'music/USUK/USUK/Streets.mp3';
  document.getElementById("Namesong").innerText='Streets';
  document.getElementById('author').innerText='Doja Cat';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
    }
  song.load();
  song.play();
}
function song1_6() {
  var song = document.getElementById('song');
  var sourceMp3 = document.getElementById('song');
  sourceMp3.src = 'music/USUK/USUK/Unforgettable.mp3';
  document.getElementById("Namesong").innerText='Unforgettable';
  document.getElementById('author').innerText='Swae Lee';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
    }
  song.load();
  song.play();
}


function heart() {
  const element0 = document.getElementById("hearticon");  
  if (element0.classList.contains("fa-regular")) {
    element0.classList.remove("fa-regular");
    element0.classList.add("fa-solid");
  } else {
    element0.classList.remove("fa-solid");
    element0.classList.add("fa-regular");
  }
}

function heart1() {
  const element1 = document.getElementById("hearticon1");  
  if (element1.classList.contains("fa-regular")) {
    element1.classList.remove("fa-regular");
    element1.classList.add("fa-solid");
  } else {
    element1.classList.remove("fa-solid");
    element1.classList.add("fa-regular");
  }
}

function heart2() {
  const element2 = document.getElementById("hearticon2");  
  if (element2.classList.contains("fa-regular")) {
    element2.classList.remove("fa-regular");
    element2.classList.add("fa-solid");
  } else {
    element2.classList.remove("fa-solid");
    element2.classList.add("fa-regular");
  }
}

function heart3() {
  const element3 = document.getElementById("hearticon3");  
  if (element3.classList.contains("fa-regular")) {
    element3.classList.remove("fa-regular");
    element3.classList.add("fa-solid");
  } else {
    element3.classList.remove("fa-solid");
    element3.classList.add("fa-regular");
  }
}

function heart4() {
  const element4 = document.getElementById("hearticon4"); 
  if (element4.classList.contains("fa-regular")) {
    element4.classList.remove("fa-regular");
    element4.classList.add("fa-solid");
  } else {
    element4.classList.remove("fa-solid");
    element4.classList.add("fa-regular");
  }
}

function heart5() {
  const element5 = document.getElementById("hearticon5");  
  if (element5.classList.contains("fa-regular")) {
    element5.classList.remove("fa-regular");
    element5.classList.add("fa-solid");
  } else {
    element5.classList.remove("fa-solid");
    element5.classList.add("fa-regular");
  }
}

function heart6() {
  const element6 = document.getElementById("hearticon6");  
  if (element6.classList.contains("fa-regular")) {
    element6.classList.remove("fa-regular");
    element6.classList.add("fa-solid");
  } else {
    element6.classList.remove("fa-solid");
    element6.classList.add("fa-regular");
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function shuffle2() {
shuffle(rancount);
playNextSong();
}

function playsong() {
  document.getElementById("song").src = 'music/USUK/USUK/After_last_night.mp3';
  document.getElementById("Namesong").innerText="After last night";
  document.getElementById('author').innerText='Bruno Mars';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
    }
  document.getElementById("song").play();
  count=0;
}

function backward() {

  if (count == 0) {
    count = songs.length - 1;
    document.getElementById("song").src = songs[count];
    document.getElementById("Namesong").innerText=namesongs[count];
    document.getElementById('author').innerText=author[rancount[count]];
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    document.getElementById("song").play();
  } else {
    count--;
    document.getElementById("Namesong").innerText=namesongs[count];
    document.getElementById("song").src = songs[count];
    document.getElementById('author').innerText=author[rancount[count]];
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    document.getElementById("song").play();
  }
}

function openlmao1() {
  window.location.replace('playlistsetting.html');
}
function openlmao2() {
  window.location.replace('playlist2.html');
}
function openlmao3() {
  window.location.replace('playlist4.html');
}
function openlmao4() {
  window.location.replace('playlistsetting.html');
}
function openlmao5() {
  window.location.replace('playlistsetting.html');
}
function openlmao6() {
  window.location.replace('playlistsetting.html');
}
function openlmao7() {
  window.location.replace('playlistsetting.html');
}
function openlmao8() {
  window.location.replace('playlistsetting.html');
}
function openlmao9() {
  window.location.replace('playlistsetting.html');
}
function openprofile() {
  window.location.replace('viewingprofile.html');
}



function follow(){
var follow=document.getElementById('Follow');
if(follow.innerText=='Follow'){
  follow.innerText='Followed';
}else{
  follow.innerText='Follow';
}
}

function addf(){
  var addfriend=document.getElementById('addfriend');
  if(addfriend.innerText=='Add friend'){
    addfriend.innerText='Friend ✓ ';
  }else{
    addfriend.innerText='Add friend';
  }
}
function redirect2() {
  myinput2.addEventListener("keyup", function (e) {
    if (e.code === "Enter") {
      var input2 = document.getElementById('myinput2').value.toLowerCase();
      switch (input2) {
        case '@nttduy':
          window.location.replace('viewingprofile.html');
          break;
      }
    }
  })
}