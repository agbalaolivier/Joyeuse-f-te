function jouerMusique() {
    const audio = new Audio('noel.mp3');
    audio.play();
  }
  const sound = new Howl({
    src: ['noel.mp3']
  });

  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', () => {
    sound.play();
  });