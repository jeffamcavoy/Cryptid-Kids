console.log("updated 3/24 with Sprites");
let fishNumber = 8;

//BASS DRUM
const bassDrum = new Howl({
  src: [
    "https://ucarecdn.com/04eb95b8-c762-400f-b2c1-97d97e0ed92a/bassdrum5.MP3"
  ],
  sprite: {
    bassDrum: [33, 6866]
  },
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
  src: ["https://ucarecdn.com/74208a78-a945-4001-acfa-48d9cd779ddb/piano5.MP3"],
  loop: true,
  sprite: {
    piano: [33, 6866]
  },

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
    "https://ucarecdn.com/9ab41ee7-3613-461f-8e6d-cf033ddfc601/trumpet5.MP3"
  ],
  loop: true,
  sprite: {
    trumpet: [33, 6866]
  },
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
    "https://ucarecdn.com/40397a32-3920-4d40-9171-bd5ae18d013b/snare5.MP3"
  ],
  sprite: {
    snareDrum: [33, 6866]
  },
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
    "https://ucarecdn.com/eabd4fe3-ca52-4f00-bfd8-b597070f39f2/bassguitar5.MP3"
  ],
  sprite: {
    bassGuitar: [33, 6866]
  },
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
  src: ["https://ucarecdn.com/9fe23097-7893-4d46-9a72-06a34ac92794/shaker5.MP3"],
  sprite: {
    shaker: [33, 6866]
  },
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
  src: ["https://ucarecdn.com/06d36b47-eb9c-42bb-9f8e-982cbe0cb0cd/vibes5.MP3"],
  sprite: {
    vibes: [33, 6866]
  },
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
    "https://ucarecdn.com/a1db42c3-eca9-4efc-b8d5-b90090f7384a/electricguitar5.MP3"
  ],sprite: {
    electricGuitar: [33, 6866]
  },
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
bassDrum.play('bassDrum');
electricGuitar.play('electricGuitar');
vibes.play('vibes');
shaker.play('shaker');
bassGuitar.play('bassGuitar');
snareDrum.play('snareDrum');
trumpet.play('trumpet');
piano.play('piano');

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
