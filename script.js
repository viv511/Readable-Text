let words = [];

function getRawText() {
    words = [];
    var fullText = document.getElementById("rawText").value;
    rawToWords(fullText);
    formatWords()
    newText = combine();

    document.getElementById("output").innerHTML = newText;
}


function rawToWords(raw) {
    for(let i=0; i<raw.length; i++) {
        if((raw[i] === ' ') || (raw[i] === '\n')) {
            words.push(raw.substr(0, i+1));
            raw = raw.substring(i+1);
            i = 0;
        }
    }
    words.push(raw);
}

function combine() {
    var fullFormattedText = "";
    for(let i=0; i<words.length; i++) {
        fullFormattedText += words[i];
    }
    console.log(fullFormattedText);
    return fullFormattedText;
}

function formatWords() {
    for(let i=0; i<words.length; i++) {
        words[i] = beBold(words[i]);
    }
}

function beBold(wordToBold) {
    var boldedWord = "";
    
    if(wordToBold[0] == "\"") {
        boldedWord += "<br><br>‎ ‎ ‎ ‎ ‎ ‎ ‎\"<b>" + wordToBold[1] + "</b>";
        if(wordToBold.length > 1) {
            boldedWord += wordToBold.substring(2);
        }
    }
    else {
        boldedWord += "<b>" + wordToBold[0] + "</b>";
        if(wordToBold.length > 1) {
            boldedWord += wordToBold.substring(1);
        }
    }
    
    

    return boldedWord;
}