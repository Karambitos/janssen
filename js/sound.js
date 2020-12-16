{
    const listSpeakers = document.querySelectorAll(".list-speakers");
    const boxClaps = document.querySelectorAll(".box-clap");
    $('audio').mediaelementplayer();

    let soundUrl = [
      'https://web.opendrive.com/api/v1/download/file.json/OV84MDUyNTM1NF9aSXB6Sw?inline=1',
      './sound/file_example_MP3_700KB.mp3',
      './sound/clap.mp3',
    ];
    if(listSpeakers){
      listSpeakers.forEach(function (speaker) {
        speaker.addEventListener('click', function(event) {
          let cTarget = event.currentTarget;
          const music = cTarget.parentNode.querySelector("audio");
          event.preventDefault();
          let target = event.target;
          music.src = soundUrl[target.dataset.id - 1]
          const speakersRef = Array.from(speaker.children);
          speakersRef.forEach(function(li) {
            li.classList.remove('active');
          });
          target.classList.add('active');
        });
      })

      boxClaps.forEach(function (boxClap) {
        boxClap.addEventListener('click', function(event) {
          let cTarget = event.currentTarget;
          const music = cTarget.nextElementSibling.querySelector("audio");
          const counter = cTarget.nextElementSibling.querySelector(".box-speakers-counter");
          counter.textContent = Number(counter.textContent) +1;
          music.play();
        });
      });
    };
  };



  let audioBox = document.querySelectorAll('.audio-box');
  if(audioBox){
    audioBox.forEach(function (box) {
        box.addEventListener('click', function handler(event){
          let textBox = event.currentTarget.firstElementChild;
          textBox.classList.add('active');
          let target = event.currentTarget;
          const audio = target.querySelector('audio');
          audio.play();
          this.removeEventListener('click', handler);
        });
    });
  };





