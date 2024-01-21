document.getElementById('tweetContent').addEventListener('input', function() {
    const content = this.value;
    const contador = document.getElementById('contador');
    contador.textContent = `${content.length}/255`;
});

document.getElementById('sendTweet').addEventListener('click', function() {
    const tweet = document.getElementById('tweetContent').value;
    
    if (confirm('¿Desea enviar este tweet?')) {
        console.log(tweet);
        alert('Tweet mandado correctamente');
        document.getElementById('tweetContent').value = '';
        document.getElementById('contador').textContent = '0/255';
    } else {
        alert('Operación cancelada por el usuario');
    }
});
