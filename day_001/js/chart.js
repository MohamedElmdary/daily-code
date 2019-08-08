function chart(id) {
  const canvas = document.getElementById(id);
  // const canvas = document.querySelector('canvas');

  const parent = canvas.parentElement;
  const { offsetHeight, offsetWidth } = parent;
  canvas.height = offsetHeight;
  canvas.width = 500;
  const c = canvas.getContext('2d');

  c.clearRect(0, 0, offsetHeight, offsetWidth);

  for (let i = 15, x = 0; x < 5; i += 60, x++) {
    c.beginPath();
    c.moveTo(50, offsetHeight - i - 35);
    c.lineTo(500, offsetHeight - i - 35);
    c.lineWidth = 0.5;
    c.strokeStyle = 'rgba(64, 64, 64, 0.5)';
    c.stroke();
  }

  const points = [];

  for (let i = 50, x = 0; x < 7; i += 62, x++) {
    points.push({ high: +(Math.random() * 70 + 50).toFixed(2) });
    c.beginPath();
    c.moveTo(i + 50, offsetHeight - 58);
    c.lineTo(i + 50, points[x].high);
    c.lineWidth = 12;
    c.strokeStyle = '#feb177';
    c.stroke();

    c.beginPath();
    c.moveTo(i + 50, offsetHeight - 58);
    points[x].low = +(
      points[x].high +
      Math.random() * points[x].high +
      50
    ).toFixed(2);
    c.lineTo(i + 50, points[x].low);
    c.lineWidth = 12;
    c.strokeStyle = '#919eff';
    c.stroke();
  }

  for (let i = 50, x = 0; x < 7; i += 62, x++) {
    c.beginPath();
    c.arc(i + 50, offsetHeight - 56, 6, 0, Math.PI * 2, false);
    c.fillStyle = '#919eff';
    c.fill();

    c.beginPath();
    c.arc(i + 50, points[x].high, 6, 0, Math.PI * 2, false);
    c.fillStyle = '#feb177';
    c.fill();

    c.beginPath();
    c.arc(i + 50, points[x].low, 6, 0, Math.PI * 2, false);
    c.fillStyle = '#919eff';
    c.fill();
  }
}
