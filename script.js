let words = [];

function getRawText() {
    words = []
    var fullText = document.getElementById("rawText").value;
    rawToWords(fullText);

    document.getElementById("demo").innerHTML = fullText;
}

function rawToWords(raw) {
    for(let i=0; i<raw.length; i++) {
        
    }

}