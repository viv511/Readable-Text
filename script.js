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
        if(raw[i] === ' ') {
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

    return fullFormattedText;
}

function formatWords() {
    for(let i=0; i<words.length; i++) {
        words[i] = beBold(words[i]);
    }
}

function beBold(wordToBold) {
    // var boldAmt = wordToBold.length/2;
    // var boldedWord = "<b>" + wordToBold.substr(0, boldAmt) + "</b>";
    var boldedWord = "<b>" + wordToBold[0] + "</b>";
    if(wordToBold.length > 1) {
        boldedWord += wordToBold.substring(1);
        // boldedWord += wordToBold.substring(boldAmt);
        // var lastChar = wordToBold[wordToBold.length-1];
        // if((lastChar === ".") || (lastChar === "?") || (lastChar === "!")) {
        //     boldedWord += "<br>";
        // }
    }

    return boldedWord;
}