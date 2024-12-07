//your JS code here. If required.
document.getElementById('remove-item').addEventListener('click', function() {
  // Get the select element and the selected color
  var colorSelect = document.getElementById('colorSelect');
  var selectedColor = colorSelect.value;

  // Loop through the options to find the selected one and remove it
  for (var i = 0; i < colorSelect.options.length; i++) {
    if (colorSelect.options[i].value === selectedColor) {
      colorSelect.remove(i);  // Remove the selected option
      break;  // Exit the loop after removal
    }
  }
});
