let red = 'https://i.imgur.com/rnGgDAu.png';
let green = 'https://i.imgur.com/yfxHLoG.png';

let mainLoop = () => {
  let dayGainEl = Array.from(document.querySelectorAll('div')).find(el => el.textContent === 'Day Gain');
  let dayGain = dayGainEl.parentElement.childNodes[1].innerHTML.includes('positiveColor');
  let oldIcons = document.querySelectorAll('link[rel*="icon"]');
  let newIcon = document.createElement('link');
  newIcon.rel = 'icon';
  if (dayGain) {
    newIcon.href = green;
  } else {
    newIcon.href = red;
  }
  for (let i=0; i < oldIcons.length; i++) {
    document.head.removeChild(oldIcons[i]);
  }
  document.head.appendChild(newIcon);
};

setTimeout(mainLoop, 3000);
setInterval(mainLoop, 30000);
