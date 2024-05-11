function displayAlert() {
    alert("Hello, world!");
}

function enlargeText() {
    var textArea = document.getElementById("textInput");
    textArea.style.fontSize = "24pt";
}

function applyTextStyles() {
    var fancyRadio = document.getElementById("fancyRadio");
    var textArea = document.getElementById("textInput");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.textDecoration = "underline";
        textArea.style.color = "blue";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.textDecoration = "none";
        textArea.style.color = "inherit";
    }
}

function makeTextFancy() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;

    textArea.value = text.toUpperCase();

    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            var lastWordIndex = words.length - 1;
            words[lastWordIndex] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    textArea.value = sentences.join(".");
}
