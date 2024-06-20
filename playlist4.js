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
var songs = ['music/chilling/Doi_317_52Hz.mp3','music/chilling/Mien_Man_324_Minh_Huy.mp3',
    'music/chilling/Quen_Dan_Quen_412_Captain_Boy.mp3','music/chilling/Thay_Chua_355_Ngot.mp3'
    ,'music/chilling/Toi_Va_Em_401_Pink_Frog.mp3', 'music/chilling/Bai_Nay_Chill_Phet_434_Den_Vau.mp3'];
var namesong = ['Đợi','Miên Man','Quên Dần Quên','Thấy Chưa','Tôi Và Em','Bài Này Chill Phết'];
var author=['52Hz','Minh Huy','Captain Boy','Ngọt','Pink Frog','Đen Vâu'];
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

  function heart() {
    const element0 = document.getElementById("hearticon");  // Get the DIV element
    if (element0.classList.contains("fa-regular")) {
      element0.classList.remove("fa-regular");
      element0.classList.add("fa-solid");
    } else {
      element0.classList.remove("fa-solid");
      element0.classList.add("fa-regular");
    }
  }
  
  function heart1() {
    const element1 = document.getElementById("hearticon1");  // Get the DIV element
    if (element1.classList.contains("fa-regular")) {
      element1.classList.remove("fa-regular");
      element1.classList.add("fa-solid");
    } else {
      element1.classList.remove("fa-solid");
      element1.classList.add("fa-regular");
    }
  }
  
  function heart2() {
    const element2 = document.getElementById("hearticon2");  // Get the DIV element
    if (element2.classList.contains("fa-regular")) {
      element2.classList.remove("fa-regular");
      element2.classList.add("fa-solid");
    } else {
      element2.classList.remove("fa-solid");
      element2.classList.add("fa-regular");
    }
  }
  
  function heart3() {
    const element3 = document.getElementById("hearticon3");  // Get the DIV element
    if (element3.classList.contains("fa-regular")) {
      element3.classList.remove("fa-regular");
      element3.classList.add("fa-solid");
    } else {
      element3.classList.remove("fa-solid");
      element3.classList.add("fa-regular");
    }
  }
  
  function heart4() {
    const element4 = document.getElementById("hearticon4");  // Get the DIV element
    if (element4.classList.contains("fa-regular")) {
      element4.classList.remove("fa-regular");
      element4.classList.add("fa-solid");
    } else {
      element4.classList.remove("fa-solid");
      element4.classList.add("fa-regular");
    }
  }
  
  function heart5() {
    const element5 = document.getElementById("hearticon5");  // Get the DIV element
    if (element5.classList.contains("fa-regular")) {
      element5.classList.remove("fa-regular");
      element5.classList.add("fa-solid");
    } else {
      element5.classList.remove("fa-solid");
      element5.classList.add("fa-regular");
    }
  }
  
  function heart6() {
    const element6 = document.getElementById("hearticon6");  // Get the DIV element
    if (element6.classList.contains("fa-regular")) {
      element6.classList.remove("fa-regular");
      element6.classList.add("fa-solid");
    } else {
      element6.classList.remove("fa-solid");
      element6.classList.add("fa-regular");
    }
  }

  // function song4_1() {
  //   var song = document.getElementById('song');
  //   var sourceMp3 = document.getElementById('song');
  //   sourceMp3.src ='music/chilling/Bai_Nay_Chill_Phet_434_Den_Vau.mp3';
  //   document.getElementById('Namesong').innerText='Bài Này Chill Phết';
  //   ddocument.getElementById('author').innerText='Đen Vâu';
  //   if (ctrlIcon.classList.contains("fa-circle-play")) {
  //     ctrlIcon.classList.remove("fa-circle-play");
  //     ctrlIcon.classList.add("fa-circle-pause");
  //     }
  //   song.load();
  //   song.play();
  // }


  function song4_2() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/chilling/Doi_317_52Hz.mp3';
    document.getElementById('Namesong').innerText='Đợi';
    document.getElementById('author').innerText='52Hz';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song4_7() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/chilling/Bai_Nay_Chill_Phet_434_Den_Vau.mp3';
    document.getElementById('Namesong').innerText='Bài Này Chill Phết';
    document.getElementById('author').innerText='Đen';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }


  function song4_3() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/chilling/Mien_Man_324_Minh_Huy.mp3';
    document.getElementById('Namesong').innerText='Miên Man';
    document.getElementById('author').innerText='Minh Huy';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song4_4() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/chilling/Quen_Dan_Quen_412_Captain_Boy.mp3';
    document.getElementById('Namesong').innerText='Quên Dần Quên';
    document.getElementById('author').innerText='Captain Boy';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song4_5() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/chilling/Thay_Chua_355_Ngot.mp3';
    document.getElementById('Namesong').innerText='Thấy Chưa';
    document.getElementById('author').innerText='Ngọt';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song4_6() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/chilling/Toi_Va_Em_401_Pink_Frog.mp3';
    document.getElementById('Namesong').innerText='Tôi Và Em';
    document.getElementById('author').innerText='Pink Frog';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  
    }
    return array;
  }
  // function

  function shuffle2() {
    shuffle(rancount);
    document.getElementById('iconmusic').setAttribute('style','text-shadow: 0 0 20px #034128');
    playNextSong();
  }
  
  function playsong() {
    document.getElementById("song").src ='/music/chilling/Bai_Nay_Chill_Phet_434_Den_Vau.mp3';
    document.getElementById('Namesong').innerText='Bài Này Chill Phết';
    document.getElementById('author').innerText='Đen Vâu';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");}
    document.getElementById("song").play();
    count=0;
  }
  
  function backward() {
    if (count == 0) {
      count = songs.length - 1;
      document.getElementById('Namesong').innerText= namesong[rancount[count]];
      document.getElementById("song").src = songs[rancount[count]];
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