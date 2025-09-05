for (let i = 0; i < 80; i++) {
  let s = document.createElement('div');
  s.className = 'star';
  let size = Math.random() * 3 + 1;
  s.style.width = size + 'px';
  s.style.height = size + 'px';
  s.style.top = Math.random() * 100 + '%';
  s.style.left = Math.random()
