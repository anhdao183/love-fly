<script>
const container = document.getElementById('container');
const texts = ['LOVE', 'YÊU', 'ANH', 'EM', 'LỠ NHƯ...', 'TRÁI TIM 💖', 'MÃI MÃI'];
const count = 50;

for (let i = 0; i < count; i++) {
  const word = document.createElement('div');
  word.className = 'word';
  word.innerText = texts[Math.floor(Math.random() * texts.length)];

  // Vị trí ngẫu nhiên trên màn hình
  word.style.left = Math.random() * window.innerWidth + 'px';
  word.style.top = Math.random() * window.innerHeight + 'px';

  // Delay animation ngẫu nhiên để các chữ không bay giống nhau
  word.style.animationDelay = (Math.random() * 5) + 's';

  // Tốc độ khác nhau
  word.style.animationDuration = (Math.random() * 10 + 5) + 's';

  container.appendChild(word);
}
</script>
