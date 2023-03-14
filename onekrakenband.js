console.log("loaded");
//BASS DRUM
const bassDrum = new Howl({
  src: [
    "https://ucarecdn.com/10c905a5-f93e-44e0-b328-377f74811907/BassDrum.wav"
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
  src: ["https://ucarecdn.com/0ce5008d-c4cd-4ab7-8bdf-37f4c417277d/Piano.wav"],
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
    "https://ucarecdn.com/b3671dde-b3eb-49ff-b0d1-ee77fdcfd921/Trumpet.wav"
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
    "https://ucarecdn.com/a0c612e6-84df-4dcf-b8e0-fca36a24c5ad/SnareDrum.wav"
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
    "https://ucarecdn.com/ca7dff2b-9b62-4ced-96f0-3bcad9d40095/BassGuitar.wav"
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
  src: ["https://ucarecdn.com/599ea77a-a176-499f-bc3a-a445c6e5415d/Shaker.wav"],
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
    "https://ucarecdn.com/1983453b-3e7c-40ce-b8ba-f61fc4b49caf/Vibraphone.wav"
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
    "https://ucarecdn.com/2aab7444-1295-4e0c-8d26-3465dfd710ae/ElectricGuitar.wav"
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

//PLAY INSTRUMENTS
bassDrum.play();
electricGuitar.play();
vibes.play();
shaker.play();
bassGuitar.play();
trumpet.play();
piano.play();
snareDrum.play();

const rgame = new rive.Rive({
  src:
    "https://ucarecdn.com/05d6c77c-47f5-4e12-983b-9a21deb76f0d/one_kraken_band.riv",
  canvas: document.getElementById("oneKrakenBand"),
  autoplay: true,
  artboard: "New Artboard",
  stateMachines: ["State Machine 1"],
  onLoad: () => {
    rgame.resizeDrawingSurfaceToCanvas();
  },
  onStateChange: (riveEvent) => {
    const newStates = riveEvent.data;
    newStates.forEach((state) => {
      if (state.indexOf("Bass Drum 100") > -1) {
        playBassDrum();
      } else if (state.indexOf("Bass Drum 0") > -1) {
        pauseBassDrum();
      } else if (state.indexOf("Snare 100") > -1) {
        playSnareDrum();
      } else if (state.indexOf("Snare 0") > -1) {
        pauseSnareDrum();
      } else if (state.indexOf("Piano 100") > -1) {
        playPiano();
      } else if (state.indexOf("Piano 0") > -1) {
        pausePiano();
      } else if (state.indexOf("Trumpet 100") > -1) {
        playTrumpet();
      } else if (state.indexOf("Trumpet 0") > -1) {
        pauseTrumpet();
      } else if (state.indexOf("Bass Guitar 100") > -1) {
        playBassGuitar();
      } else if (state.indexOf("Bass Guitar 0") > -1) {
        pauseBassGuitar();
      } else if (state.indexOf("Shaker 100") > -1) {
        playShaker();
      } else if (state.indexOf("Shaker 0") > -1) {
        pauseShaker();
      } else if (state.indexOf("Vibes 100") > -1) {
        playVibes();
      } else if (state.indexOf("Vibes 0") > -1) {
        pauseVibes();
      } else if (state.indexOf("Electric Guitar 100") > -1) {
        playElectricGuitar();
      } else if (state.indexOf("Electric Guitar 0") > -1) {
        pauseElectricGuitar();
      }
    });
  }
});