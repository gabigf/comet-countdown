
document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  const nextComet = 1631912400;

  // Set up FlipDown
  const flipdown = new FlipDown(nextComet)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });


  // Show version number
  const ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});