
document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var nextComet = 1622088000;

  // Set up FlipDown
  var flipdown = new FlipDown(nextComet)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });


  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});