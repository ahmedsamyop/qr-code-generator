const app = document.querySelector('.app'),
inputText = document.querySelector('input'),
btnGenerator = document.getElementById('btn-generator'),
resultArea = document.querySelector('img'),
btnDownload = document.getElementById('btn-download');

btnGenerator.addEventListener('click', () => {
  if (inputText.value !== "") {
    app.classList.add('change-height');
    fetchReqest(inputText.value);
  }
  else {
    alert("NoT Falid !!");
  }

});

btnDownload.addEventListener('click', () => {
  let a = document.createElement('a');
  a.href = resultArea.src;
  a.download = 'Qr-Code';
  document.body.appendChild(a);
  a.click();
  a.remove();
})

function fetchReqest(text) {
  fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${text}&size=250x250`)
  .then(res => res.blob())
  .then(data => {
    let url = URL.createObjectURL(data);
    resultArea.src = url;
  })
  .catch((err) => console.log(err))
}



