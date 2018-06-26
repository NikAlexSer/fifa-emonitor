var fs = require('fs');
var str = fs.readFileSync('./fifa_with_watson.json', 'utf8')


var strArray = str.split("\n");

//console.log(objArray[1])



var objArray = [];

strArray.forEach(function(item, index) {
    objArray[index] = JSON.parse(item)
})

var emoCountryData = {};

function formEmoCountryData(lang) {
    var ruTweets = objArray.filter(function (item, index) {
        return item.language === lang
    })


    var emo = {sadness: 0, joy: 0, fear: 0, disgust: 0, anger: 0};
    var count = 0;
    ruTweets.forEach(function(item) {
        if (item.hasOwnProperty('keywords')) {
            item.keywords.forEach(function (elem) {
                if (elem.hasOwnProperty('emotion')) {
                    count++;
                    if (elem.emotion.sadness.$numberDouble) {
                        emo.sadness += +elem.emotion.sadness.$numberDouble
                    }
                    if (elem.emotion.joy.$numberDouble) {
                        emo.joy += +elem.emotion.joy.$numberDouble
                    }
                    if (elem.emotion.fear.$numberDouble) {
                        emo.fear += +elem.emotion.fear.$numberDouble
                    }
                    if (elem.emotion.disgust.$numberDouble) {
                        emo.disgust += +elem.emotion.disgust.$numberDouble
                    }
                    if (elem.emotion.anger.$numberDouble) {
                        emo.anger += +elem.emotion.anger.$numberDouble
                    }
                }
            })
        }
    });

    emo.sadness = emo.sadness / count * 100
    emo.joy = emo.joy / count * 100
    emo.fear = emo.fear / count * 100
    emo.disgust = emo.disgust / count * 100
    emo.anger = emo.anger / count * 100
    //console.log(emo)
    return [emo.sadness, emo.joy, emo.fear, emo.disgust, emo.anger]
}

emoCountryData.ru = formEmoCountryData('ru');
emoCountryData.fr = formEmoCountryData('fr');
emoCountryData.es = formEmoCountryData('es');
emoCountryData.en = formEmoCountryData('en');
emoCountryData.pt = formEmoCountryData('pt');
console.log(emoCountryData)


function topWords() {
    var allKeywords = []
    objArray.forEach(function(item) {
        if (item.hasOwnProperty('keywords')) {
            item.keywords.forEach(function (elem) {
                allKeywords.push(elem.text)
            })
        }
    });
    //console.log(allKeywords)

    var a = [], b = [], prev;
    var keys = {}
    allKeywords.sort();
    for ( var i = 0; i < allKeywords.length; i++ ) {
        if ( allKeywords[i] !== prev ) {
            a.push(allKeywords[i]);
            b.push(1);
            keys[allKeywords[i]] = 1
        } else {
            b[b.length-1]++;
            keys[allKeywords[i]] += 1
        }
        prev = allKeywords[i];
    }

    for (var key in keys) {
        if (keys[key] === 1 || keys[key] === 2 || keys[key] === 3 || keys[key] === 4 || keys[key] === 5) {
            delete keys[key]
        }
    }
    console.log([a, b])
    console.log(keys)
}

topWords()


function divideLang() {
    var ruTweets = objArray.filter(function (item, index) {
        return item.language === 'ru'
    })
    var enTweets = objArray.filter(function (item, index) {
        return item.language === 'en'
    })
    var frTweets = objArray.filter(function (item, index) {
        return item.language === 'fr'
    })
    var spTweets = objArray.filter(function (item, index) {
        return item.language === 'sp'
    })
    var ptTweets = objArray.filter(function (item, index) {
        return item.language === 'pt'
    })

    console.log([ruTweets.length, enTweets.length, frTweets.length, spTweets.length, ptTweets.length])

    console.log(enTweets)
}

divideLang()

function formPolarityCountryData(lang) {
    var ruTweets = objArray.filter(function (item, index) {
        return item.language === lang
    })


    var polarityPos = 0, polarityNeg = 0;
    var countPos = 0, countNeg = 0;
    ruTweets.forEach(function(item) {
        if (item.polarity.$numberDouble > 0) {
            polarityPos += +item.polarity.$numberDouble;
            countPos += 1
        } else {
            polarityNeg += Math.abs(+item.polarity.$numberDouble);
            countNeg += 1
        }
    });

    polarityPos = polarityPos / countPos * 100;
    polarityNeg = polarityNeg / countNeg * 100;
    return [lang, polarityPos, polarityNeg]
}

console.log(formPolarityCountryData('ru'), formPolarityCountryData('fr'), formPolarityCountryData('es'), formPolarityCountryData('en'), formPolarityCountryData('pt'))