console.log('updated 3/16')
let fishNumber = 8;

//BASS DRUM
const bassDrum = new Howl({
  src: [
    "https://ucarecdn.com/7da2070e-e50c-4558-8153-ee7a52b6ef6f/bassdrum.mp3"
  ],
  loop: true,
  // mute: true,
  volume: 0.0
});

function playBassDrum() {
  bassDrum.volume(1.0);
}
function pauseBassDrum() {
  bassDrum.volume(0.0);
}

//PIANO
const piano = new Howl({
  src: ["https://ucarecdn.com/19679629-2281-4337-b4f2-2213a96c912a/piano.mp3"],
  loop: true,
  // mute: true,
  volume: 0.0
});

function playPiano() {
  piano.volume(0.6);
}
function pausePiano() {
  piano.volume(0.0);
}
//TRUMPET
const trumpet = new Howl({
  src: [
    "https://ucarecdn.com/c68ac461-fe1f-4e0e-97d9-fa292b592a1d/trumpet.mp3"
  ],
  loop: true,
  // mute: true,
  volume: 0.0
});

function playTrumpet() {
  trumpet.volume(0.6);
}
function pauseTrumpet() {
  trumpet.volume(0.0);
}

//SNARE DRUM
const snareDrum = new Howl({
  src: [
    "https://ucarecdn.com/83e56c6d-5a15-44e2-85db-2b6b04795ae4/snaredrum.mp3"
  ],
  loop: true,
  volume: 0.0
});

function playSnareDrum() {
  snareDrum.volume(1.0);
}
function pauseSnareDrum() {
  snareDrum.volume(0.0);
}

//BASS GUITAR
const bassGuitar = new Howl({
  src: [
    "https://ucarecdn.com/cfeed590-a2f2-4203-bc67-5c393855c364/bassguitar.mp3"
  ],
  loop: true,
  volume: 0.0
});

function playBassGuitar() {
  bassGuitar.volume(1.0);
}
function pauseBassGuitar() {
  bassGuitar.volume(0.0);
}

//SHAKER
const shaker = new Howl({
  src: ["https://ucarecdn.com/c199a47c-581a-4b83-ba42-69c720339f06/shaker.mp3"],
  loop: true,
  volume: 0.0
});

function playShaker() {
  shaker.volume(0.5);
}
function pauseShaker() {
  shaker.volume(0.0);
}

//VIBES
const vibes = new Howl({
  src: [
    "https://ucarecdn.com/5d84c936-7cd0-4e58-ac9d-4f1915ddd26c/vibraphone.mp3"
  ],
  loop: true,
  volume: 0.0
});

function playVibes() {
  vibes.volume(1.0);
}
function pauseVibes() {
  vibes.volume(0.0);
}

//ELECTRIC GUITAR
const electricGuitar = new Howl({
  src: [
    "https://ucarecdn.com/576c85bd-5502-4e90-99e9-450ccbda89e8/electricguitar.mp3"
  ],
  loop: true,
  volume: 0.0
});



function playElectricGuitar() {
  electricGuitar.volume(0.3);
}
function pauseElectricGuitar() {
  electricGuitar.volume(0.0);
}

//PLAY ALL INSTRUMENTS
bassDrum.play();
electricGuitar.play();
vibes.play();
shaker.play();
bassGuitar.play();
snareDrum.play();
trumpet.play();
piano.play();

let fishInput;
const rgame = new rive.Rive({
  src:

    "https://ucarecdn.com/f8905f17-cf6c-4642-ba3b-bce57ea299a9/one_kraken_band.riv",

  canvas: document.getElementById("oneKrakenBand"),
  autoplay: true,
  artboard: "New Artboard",
  stateMachines: ["State Machine 1"],
  onLoad: () => {
    rgame.resizeDrawingSurfaceToCanvas();
    fishInput = rgame.stateMachineInputs("State Machine 1")[9];
    fishInput.value = 0;
  },

  onStateChange: (riveEvent) => {
    function increaseNumber() {
      fishNumber++;
      fishInput.value = fishNumber;
      //console.log(fishInput);
    }

    function decreaseNumber() {
      fishNumber--;
      fishInput.value = fishNumber;
      //console.log(fishInput);
    }
    const newStates = riveEvent.data;
    newStates.forEach((state) => {
      if (state.indexOf("Bass Drum 100") > -1) {
        playBassDrum();
        increaseNumber();
        //console.log("fishInput", fishInput);
      } else if (state.indexOf("Bass Drum 0") > -1) {
        pauseBassDrum();
        decreaseNumber();
        //console.log("fishInput", fishInput);
      } else if (state.indexOf("Snare 100") > -1) {
        playSnareDrum();
        increaseNumber();
      } else if (state.indexOf("Snare 0") > -1) {
        pauseSnareDrum();
        decreaseNumber();
      } else if (state.indexOf("Piano 100") > -1) {
        playPiano();
        increaseNumber();
      } else if (state.indexOf("Piano 0") > -1) {
        pausePiano();
        decreaseNumber();
      } else if (state.indexOf("Trumpet 100") > -1) {
        playTrumpet();
        increaseNumber();
      } else if (state.indexOf("Trumpet 0") > -1) {
        pauseTrumpet();
        decreaseNumber();
      } else if (state.indexOf("Bass Guitar 100") > -1) {
        playBassGuitar();
        increaseNumber();
      } else if (state.indexOf("Bass Guitar 0") > -1) {
        pauseBassGuitar();
        decreaseNumber();
      } else if (state.indexOf("Shaker 100") > -1) {
        playShaker();
        increaseNumber();
      } else if (state.indexOf("Shaker 0") > -1) {
        pauseShaker();
        decreaseNumber();
      } else if (state.indexOf("Vibes 100") > -1) {
        playVibes();
        increaseNumber();
      } else if (state.indexOf("Vibes 0") > -1) {
        pauseVibes();
        decreaseNumber();
      } else if (state.indexOf("Electric Guitar 100") > -1) {
        playElectricGuitar();
        increaseNumber();
      } else if (state.indexOf("Electric Guitar 0") > -1) {
        pauseElectricGuitar();
        decreaseNumber();
      }
    });
  }
});
