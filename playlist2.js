let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let forward = document.getElementById('forward');

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playpause() {
  if (ctrlIcon.classList.contains("fa-circle-play")) {
  song.play();
  ctrlIcon.classList.remove("fa-circle-play");
  ctrlIcon.classList.add("fa-circle-pause");
  }
  else {
  song.pause();
  ctrlIcon.classList.add("fa-circle-play");
  ctrlIcon.classList.remove("fa-circle-pause");
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
var songs = ['music/sad/Chuyen_Doi_Ta_329_Emcee_L.mp3','music/sad/id_072019_502_Wn.mp3',
    'music/sad/id_T41104_347_Wn.mp3','music/sad/Nang_Co_Mang_Em_Ve_412_Shartnuss.mp3',
     'music/sad/Sai_Gon_Toi_Mua_558_Tuyen.mp3', 'music/sad/Ai_Dua_Em_Ve_423_TIA.mp3'];
var namesong = ['Chuyện Đôi Ta','Id 072019','Id T41104','Nắng Có Mang Em Về','Sài Gòn Tôi Mưa','Ai Đưa Em Về']
var author=['Emcee','Wn','Wn','Shartnuss','Tuyen','TIA'];
function playNextSong() {
 
  do {
    var max = 6;
    document.getElementById("song").src = songs[rancount[count]];
    document.getElementById('Namesong').innerText= namesong[rancount[count]];
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

  function song2_1() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/sad/Ai_Dua_Em_Ve_423_TIA.mp3';
    document.getElementById('Namesong').innerText='Ai Đưa Em Về';
    document.getElementById('author').innerText='TIA';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song2_2() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/sad/Chuyen_Doi_Ta_329_Emcee_L.mp3';
    document.getElementById('Namesong').innerText='Chuyện Đôi Ta';
    document.getElementById('author').innerText='Emcee';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song2_3() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/sad/id_072019_502_Wn.mp3';
    document.getElementById('Namesong').innerText='Id 072019';
    document.getElementById('author').innerText='Wn';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song2_4() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/sad/id_T41104_347_Wn.mp3';
    document.getElementById('Namesong').innerText='Id T41104';
    document.getElementById('author').innerText='Wn';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song2_5() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/sad/Nang_Co_Mang_Em_Ve_412_Shartnuss.mp3';
    document.getElementById('Namesong').innerText='Nắng Có Mang Em Về';
    document.getElementById('author').innerText='Shartnuss';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song2_6() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/sad/Sai_Gon_Toi_Mua_558_Tuyen.mp3';
    document.getElementById('Namesong').innerText='Sài Gòn Tôi Mưa';
    document.getElementById('author').innerText='Tuyen';
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
  
   
    while (0 !== currentIndex) {
  
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
    document.getElementById("song").src ='music/sad/Ai_Dua_Em_Ve_423_TIA.mp3';
    document.getElementById('Namesong').innerText='Ai Đưa Em Về';
    document.getElementById('author').innerText='TIA';
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
      document.getElementById("song").src = songs[rancount[count]];
      document.getElementById('Namesong').innerText= namesong[rancount[count]];
      document.getElementById('author').innerText=author[rancount[count]];
      if (ctrlIcon.classList.contains("fa-circle-play")) {
        ctrlIcon.classList.remove("fa-circle-play");
        ctrlIcon.classList.add("fa-circle-pause");
        }
      document.getElementById("song").play();
    } else {
      count--;
      document.getElementById('Namesong').innerText= namesong[rancount[count]];
      document.getElementById("song").src = songs[rancount[count]];
      document.getElementById('author').innerText=author[rancount[count]];
      if (ctrlIcon.classList.contains("fa-circle-play")) {
        ctrlIcon.classList.remove("fa-circle-play");
        ctrlIcon.classList.add("fa-circle-pause");
        }
      document.getElementById("song").play();
    }
  }
  
  function openlmao() {
    window.location.replace('playlistsetting.html');
  }
  function openprofile() {
    window.location.replace('viewingprofile.html');
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