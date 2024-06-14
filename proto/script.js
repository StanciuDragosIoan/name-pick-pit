function spin() {
  const duration = 3000; // Spin duration in ms
  const reels = document.querySelectorAll(".reel");

  reels.forEach((reel, index) => {
    startSpin(reel, duration + index * 500); // Staggered start times for each reel
  });

  setTimeout(() => {
    reels.forEach((reel) => {
      stopSpin(reel);
    });
  }, duration + 1500); // Ensure the longest spin finishes before stopping
}

function startSpin(reel, duration) {
  const emojis = reel.children;
  const emojiHeight = emojis[0].clientHeight;
  const totalHeight = emojiHeight * emojis.length;

  // Create a continuous loop by cloning emojis
  for (let i = 0; i < emojis.length; i++) {
    const clone = emojis[i].cloneNode(true);
    reel.appendChild(clone);
  }

  reel.style.animation = `spin ${duration}ms linear infinite`;

  setTimeout(() => {
    reel.style.animation = "";
    reel.style.transform = `translateY(-${Math.random() * totalHeight}px)`;
  }, duration);
}

function stopSpin(reel) {
  const emojis = reel.children;
  const emojiHeight = emojis[0].clientHeight;
  const totalHeight = (emojiHeight * emojis.length) / 2;
  const randomSymbolIndex = Math.floor(Math.random() * (emojis.length / 2));
  const offset = randomSymbolIndex * emojiHeight * -1;

  reel.style.transform = `translateY(${offset}px)`;
}
