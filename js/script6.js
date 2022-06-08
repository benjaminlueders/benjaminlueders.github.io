var selected_vokable;
var vokable_second_language = [];
var out_of_wordlist = [];
var in_wordlist = JSON.parse(JSON.stringify(wordlist));
var first_language = "de_word";
var second_language = "hr_word";
var first_language_audio = "de_audio_url";
var second_language_audio = "hr_audio_url";
var vocableindex = Math.round(Math.random() * in_wordlist.length);
var ok = true;
var play = false;
var aud = document.getElementById("audio");

var buttons = $("button.btn-block");
change_wordlist();
set_word();

function shuffle_it(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function play_and_stop() {
    if (play == true) {
        aud.pause();
        play = false;
        document.getElementById("play_stop_button").innerHTML="Play";
        $("#play_stop_button").addClass("btn-primary");    
        $("#play_stop_button").removeClass("btn-danger");
    } else {
        play = true;
        document.getElementById("play_stop_button").innerHTML="Stop";
        $("#play_stop_button").addClass("btn-danger");    
        $("#play_stop_button").removeClass("btn-primary");
        play_audio();
    }
}

function play_audio() {
    document.getElementById("audiosrc").src = "audio/pause.mp3";
    aud.load();
    aud.play();
    aud.onended = function () {
        document.getElementById("audiosrc").src = in_wordlist[vocableindex][first_language_audio];
        aud.load();
        aud.play();
        aud.onended = function () {
            document.getElementById("audiosrc").src = "audio/pause.mp3";
            aud.load();
            aud.play();
            aud.onended = function () {
                document.getElementById("audiosrc").src = in_wordlist[vocableindex][second_language_audio];
                aud.load();
                aud.play();
                aud.onended = function () {
                    out_of_wordlist.push(in_wordlist[vocableindex]);
                    in_wordlist.splice(vocableindex, 1);
                    change_wordlist();
                    set_word();
                }
            }
        }
    }
}

function set_word() {
    in_wordlist = shuffle_it(in_wordlist);
    vocableindex = Math.round(Math.random() * in_wordlist.length);
    document.getElementById("german-word").innerHTML = in_wordlist[vocableindex][first_language];
    document.getElementById("croatian-word").innerHTML = in_wordlist[vocableindex][second_language];
    if (play == true) {
        play_audio();
    }
}

function next_word() {
    vocableindex = Math.round(Math.random() * in_wordlist.length);
    set_word();
}

function first_language_to_second_language() {
    first_language = "de_word";
    second_language = "hr_word";
    first_language_audio = "de_audio_url";
    second_language_audio = "hr_audio_url";
    change_wordlist();
    set_word();
}

function second_language_to_first_language() {
    first_language = "hr_word";
    second_language = "de_word";
    first_language_audio = "hr_audio_url";
    second_language_audio = "de_audio_url";
    change_wordlist();
    set_word();
}

function reset_wordlist() {
    in_wordlist = JSON.parse(JSON.stringify(wordlist));
    out_of_wordlist = [];
    change_wordlist();
    set_word();
}

function change_wordlist() {
    var wordlist_entry;
    in_wordlist.sort(function (a, b) {
        var x = a[first_language].toLowerCase();
        var y = b[first_language].toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
    wordlist_entry = "";
    for (s8 = 0; s8 < in_wordlist.length; s8++) {
        wordlist_entry += "<option>" + in_wordlist[s8][first_language] + "</option>";
    }
    document.getElementById("in").innerHTML = wordlist_entry;
    out_of_wordlist.sort(function (a, b) {
        var x = a[first_language].toLowerCase();
        var y = b[first_language].toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
    wordlist_entry = "";
    for (s9 = 0; s9 < out_of_wordlist.length; s9++) {
        wordlist_entry += "<option>" + out_of_wordlist[s9][first_language] + "</option>";
    }
    document.getElementById("out").innerHTML = wordlist_entry;

}

function takeout() {
    var selected_options = getSelectValues(document.getElementById("in"));
    for (s10 = 0; s10 < selected_options.length; s10++) {
        for (s11 = 0; s11 < in_wordlist.length; s11++) {
            if (selected_options[s10] == in_wordlist[s11][first_language]) {
                out_of_wordlist.push(in_wordlist[s11]);
                in_wordlist.splice(s11, 1);
                change_wordlist();
            }
        }
    }
    set_word();
}

function putin() {
    var selected_options = getSelectValues(document.getElementById("out"));
    for (s12 = 0; s12 < selected_options.length; s12++) {
        for (s13 = 0; s13 < out_of_wordlist.length; s13++) {
            if (selected_options[s12] == out_of_wordlist[s13][first_language]) {
                in_wordlist.push(out_of_wordlist[s13]);
                out_of_wordlist.splice(s13, 1);
                change_wordlist();
            }
        }
    }
    set_word();
}

function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (s14 = 0, s14Len = options.length; s14 < s14Len; s14++) {
        opt = options[s14];

        if (opt.selected) {
            result.push(opt.value || opt.text);
        }
    }
    return result;
}

$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });
});
