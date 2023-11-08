function capturePhoto() {
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
    .then(function(stream) {
      var video = document.createElement('video');
      video.srcObject = stream;
      video.onloadedmetadata = function(e) {
        video.play();
      };
      var canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      var context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      var dataURL = canvas.toDataURL('image/png');
      // Enviar dataURL para o servidor para salvar a imagem anonimamente
    })
    .catch(function(err) {
      console.log(err);
    });
}