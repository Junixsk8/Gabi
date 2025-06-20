document.getElementById('btnMostrar').addEventListener('click', function() {
  // Esconde a capa
  document.getElementById('capa').style.display = 'none';

  // Mostra a mensagem
  const mensagem = document.getElementById('mensagem');
  mensagem.style.display = 'block';

  // Toca a música
  const musica = document.getElementById('bg-music');
  musica.play();
});
