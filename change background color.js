function changeBackgroundColor() {
    var colorInput = document.getElementById('colorInput');
    var color = colorInput.value;
    document.body.style.backgroundColor = color;
    colorInput.value = '';
  }