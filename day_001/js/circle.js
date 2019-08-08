function Circle(id) {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext('2d');
  const circles = {
    total: 15392,
    circles: [
      {
        color: '#5cc4fe',
        value: 7126.49
      },
      {
        color: '#fdbc71',
        value: 5017.79
      },
      {
        color: '#6edb6d',
        value: 3247.72
      }
    ]
  };

  function drawCircle(current, prev, { total }) {
    const start = prev ? prev.end + 0.03 : 0;
    const end = Math.PI * 2 * (current.value / total) - 0.03 + start;
    current.end = end;
    ctx.beginPath();
    ctx.arc(125, 125, 100, start, end, false);
    ctx.lineWidth = 35;
    ctx.strokeStyle = current.color;
    ctx.stroke();
  }

  circles.circles.forEach((circle, index, others) => {
    drawCircle(circle, index > 0 ? others[index - 1] : null, circles);
  });
}
