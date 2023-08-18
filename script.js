let words = [];

function getRawText() {
    words = []
    var fullText = document.getElementById("rawText").value;
    rawToWords(fullText);
    formatWords(words)
    newText = combine();

    document.getElementById("output").innerHTML = newText;
}



function rawToWords(raw) {
    for(let i=0; i<raw.length; i++) {
        if(raw[i] == ' ') {
            var word = raw.substr(0, i);
            words.push(word);
            raw = raw.substring(i+1);
        }
    }
}

function combine() {
    var fullFormattedText = "";
    for(let i=0; i<words; i++) {
        fullFormattedText += words[i] + " ";
    }

    return fullFormattedText;
}

function formatWords(listOfWords) {
    for(let i=0; i<listOfWords; i++) {
        listOfWords[i] = beBOLD(listOfWords[i]);
    }
}

function beBOLD(wordToBold) {
    var boldedWord = "<b>" + wordToBold[0] + "<b>";
    if(wordToBold.length > 1) {
        boldedWord += wordToBold.substring(1);
    }

    return boldedWord;
}