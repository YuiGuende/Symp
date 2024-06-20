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
var rancount = [0, 1, 2, 3, 4, 5];
var songs = ['music/Vietpop/Anh_la_ngoai_le_cua_em.mp3', 'music/Vietpop/Cho_doi_co_dang_so.mp3'
  , 'music/Vietpop/Chung_ta_cua_hien_tai.mp3', 'music/Vietpop/Da_lo_yeu_em_nhieu.mp3'
  , 'music/Vietpop/Du_bao_thoi_tiet_hom_nay_mua.mp3', 'music/Vietpop/2AM.mp3'];
var namesong = ['Anh là ngoại lệ của em', 'Chờ đợi có đáng sợ', 'Chúng ta của hiện tại', 'Đã lỡ yêu em nhiều', 'Dự báo thời tiết hôm nay mưa', '2AM']
var author = ['Phương Ly', 'Andiez', 'Sơn Tùng Mtp', 'JustaTee', 'Grey D', 'JustaTee']
function playNextSong() {
  do {
    var max = 6;
    document.getElementById('Namesong').innerText = namesong[rancount[count]];
    document.getElementById("song").src = songs[rancount[count]];
    document.getElementById('author').innerText = author[rancount[count]];
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


function song5_1() {
  var song = document.getElementById('song');
  var sourceMp3 = document.getElementById('song');
  sourceMp3.src = 'music/Vietpop/2AM.mp3';
  document.getElementById('Namesong').innerText = '2AM';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
  }
  song.load();
  song.play();
}
function song5_2() {
  var song = document.getElementById('song');
  var sourceMp3 = document.getElementById('song');
  sourceMp3.src = 'music/Vietpop/Anh_la_ngoai_le_cua_em.mp3';
  document.getElementById('Namesong').innerText = 'Anh là ngoại lệ của em';
  document.getElementById('author').innerText = 'Phương Ly';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
  }
  song.load();
  song.play();
}
function song5_3() {
  var song = document.getElementById('song');
  var sourceMp3 = document.getElementById('song');
  sourceMp3.src = 'music/Vietpop/Cho_doi_co_dang_so.mp3';
  document.getElementById('Namesong').innerText = 'Chờ đợi có đáng sợ';
  document.getElementById('author').innerText = 'Andiez';
  song.load();
  song.play();
}
function song5_4() {
  var song = document.getElementById('song');
  var sourceMp3 = document.getElementById('song');
  sourceMp3.src = 'music/Vietpop/Chung_ta_cua_hien_tai.mp3';
  document.getElementById('Namesong').innerText = 'Chúng ta của hiện tại';
  document.getElementById('author').innerText = 'Sơn Tùng MTP';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
  }
  song.load();
  song.play();
}
function song5_5() {
  var song = document.getElementById('song');
  var sourceMp3 = document.getElementById('song');
  sourceMp3.src = 'music/Vietpop/Da_lo_yeu_em_nhieu.mp3';
  document.getElementById('Namesong').innerText = 'Đã lỡ yêu em nhiều';
  document.getElementById('author').innerText = 'JustaTee';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
  }
  song.load();
  song.play();
}
function song5_6() {
  var song = document.getElementById('song');
  var sourceMp3 = document.getElementById('song');
  sourceMp3.src = 'music/Vietpop/Du_bao_thoi_tiet_hom_nay_mua.mp3';
  document.getElementById('Namesong').innerText = 'Dự báo thời tiết hôm nay mưa';
  document.getElementById('author').innerText = 'Grey D';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
  }
  song.load();
  song.play();
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
  shuffle(songs);
  song.playNextSong();
}

function playsong() {
  document.getElementById("song").src = 'music/Vietpop/2AM.mp3';
  document.getElementById('Namesong').innerText = '2AM';
  document.getElementById('author').innerText = '2AM';
  if (ctrlIcon.classList.contains("fa-circle-play")) {
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
  }
  document.getElementById("song").play();
  count = 0;
}

function backward() {
  if (count == 0) {
    count = songs.length - 1;
    document.getElementById('Namesong').innerText = namesong[rancount[count]];
    document.getElementById("song").src = songs[rancount[count]];
    document.getElementById('author').innerText = author[rancount[count]];
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
    }
    document.getElementById("song").play();
  } else {
    count--;
    document.getElementById('Namesong').innerText = namesong[rancount[count]];
    document.getElementById("song").src = songs[rancount[count]];
    document.getElementById('author').innerText = author[rancount[count]];
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