const imageUpload = document.getElementById("imageUpload");
const resultBox = document.getElementById("result");

imageUpload.addEventListener("change", () => {
  const file = imageUpload.files[0];
  if (!file) return;

  resultBox.textContent = " Analyzing image integrity...";
  resultBox.style.background = "rgba(255, 255, 255, 0.15)";

  setTimeout(() => {
    const fakeChance = Math.random();

    if (fakeChance < 0.4) {
      resultBox.textContent = " Image seems authentic!";
      resultBox.style.background = "rgba(46, 204, 113, 0.3)";
    } else if (fakeChance < 0.8) {
      resultBox.textContent = " Possible AI-generated image!";
      resultBox.style.background = "rgba(241, 196, 15, 0.3)";
    } else {
      resultBox.textContent = " Highly likely AI-generated!";
      resultBox.style.background = "rgba(231, 76, 60, 0.3)";
    }
  }, 2000);
});
