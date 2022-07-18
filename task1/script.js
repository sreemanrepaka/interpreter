var textArea = document.getElementById("editorBox");
var previewArea = document.getElementById("previewBox");

function onCodeChange() {
    console.log(textArea.value);
    previewArea.innerHTML = textArea.value;
}
