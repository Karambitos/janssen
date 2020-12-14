{
    const music = document.getElementById("music");
    const listSpeakers = document.querySelector(".list-speakers");
    const boxClap = document.querySelector(".box-clap");
    const counter = document.querySelector(".box-speakers-counter");

    let soundUrl = [
      'https://web.opendrive.com/api/v1/download/file.json/OV84MDUyNTM1NF9aSXB6Sw?inline=1',
      './sound/file_example_MP3_700KB.mp3',
      './sound/clap.mp3',
    ];
    if(listSpeakers){
      listSpeakers.addEventListener('click', function(event) {
        event.preventDefault();
        let target = event.target;
        music.src = soundUrl[target.dataset.id - 1]
        const listSpeakersRef = Array.from(listSpeakers.children);
        listSpeakersRef.forEach(function(li) {
          li.classList.remove('active');
        });
        target.classList.add('active');
      });

      boxClap.addEventListener('click', function(event) {
        counter.textContent = Number(counter.textContent) +1;
        music.play();
      });
    };
  };

  let audioBox = document.querySelectorAll('.audio-box');
  if(audioBox){
    audioBox.forEach(function (box) {
        box.addEventListener('click', function (event){
          let textBox = event.currentTarget.firstElementChild;
          textBox.classList.add('active');
        });
    });
  };




