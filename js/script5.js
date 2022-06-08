var selected_vokable;
var vokable_second_language = [];
var out_of_wordlist = [];
var in_wordlist = JSON.parse(JSON.stringify(wordlist));
var first_language = "deutsch";
var second_language = "hrvatski";
var vocableindex = 0;

var buttons = $("button.btn-block");
change_wordlist();
set_word();

function set_word() {
    var tempwl = JSON.parse(JSON.stringify(wordlist));
    var answer = [];
    if (out_of_wordlist.length == wordlist.length) {
        $("#word").addClass("hide");
        $("#answer1").addClass("hide");
        $("#answer2").addClass("hide");
        $("#answer3").addClass("hide");
        $("#answer4").addClass("hide");
        $("#answer5").addClass("hide");
    } else {
        $("#word").removeClass("hide");
        $("#answer1").removeClass("hide");
        $("#answer2").removeClass("hide");
        $("#answer3").removeClass("hide");
        $("#answer4").removeClass("hide");
        $("#answer5").removeClass("hide");
    }

    document.getElementById("word").innerHTML = in_wordlist[vocableindex][first_language];


    answer = in_wordlist.slice(vocableindex, vocableindex + 1);
    
    for (k = 0; k < tempwl.length; k++) {
        if (in_wordlist[vocableindex][second_language] == tempwl[k][second_language]) {
            tempwl.splice(k, 1);
        }
    }

    randomnr = Math.round(Math.random() * tempwl.length);
    answer.push(tempwl[randomnr]);
    tempwl.splice(randomnr, 1);
    randomnr = Math.round(Math.random() * tempwl.length);
    answer.push(tempwl[randomnr]);
    tempwl.splice(randomnr, 1);
    randomnr = Math.round(Math.random() * tempwl.length);
    answer.push(tempwl[randomnr]);
    tempwl.splice(randomnr, 1);
    randomnr = Math.round(Math.random() * tempwl.length);
    answer.push(tempwl[randomnr]);
    tempwl.splice(randomnr, 1);



    /* answer = in_wordlist.slice(vocableindex, vocableindex + 1);
     answer.push(in_wordlist[Math.round(Math.random() * in_wordlist.length)]);
     answer.push(in_wordlist[Math.round(Math.random() * in_wordlist.length)]);*/
    var shuffle = function () {
        return Math.random() - 0.5;
    }
    answer = answer.sort(shuffle);
    document.getElementById("answer1").innerHTML = answer[0][second_language];
    document.getElementById("answer2").innerHTML = answer[1][second_language];
    document.getElementById("answer3").innerHTML = answer[2][second_language];
    document.getElementById("answer4").innerHTML = answer[3][second_language];
    document.getElementById("answer5").innerHTML = answer[4][second_language];
    buttons[0].classList.remove("btn-danger");
    buttons[0].classList.remove("btn-success");
    buttons[0].classList.add("btn-default");
    buttons[1].classList.remove("btn-danger");
    buttons[1].classList.remove("btn-success");
    buttons[1].classList.add("btn-default");
    buttons[2].classList.remove("btn-danger");
    buttons[2].classList.remove("btn-success");
    buttons[2].classList.add("btn-default");
    buttons[3].classList.remove("btn-danger");
    buttons[3].classList.remove("btn-success");
    buttons[3].classList.add("btn-default");
    buttons[4].classList.remove("btn-danger");
    buttons[4].classList.remove("btn-success");
    buttons[4].classList.add("btn-default");

}

function right_answer(btn) {
    var y1 = in_wordlist[vocableindex][second_language];
    if (buttons[btn].innerHTML == y1) {
        buttons[btn].classList.remove("btn-default");
        buttons[btn].classList.add("btn-success");
        out_of_wordlist.push(in_wordlist[vocableindex]);
        in_wordlist.splice(vocableindex, 1);
        change_wordlist();
        setTimeout(function () {
            next_word();
        }, 1500);
    } else {
        buttons[btn].classList.remove("btn-default");
        buttons[btn].classList.add("btn-danger");
    }

}

function next_word() {
    vocableindex++;
    if (vocableindex >= in_wordlist.length) {
        vocableindex = 0;
    }
    set_word();
}

function first_language_to_second_language() {
    first_language = "deutsch";
    second_language = "hrvatski";
    change_wordlist();
    set_word();
}

function second_language_to_first_language() {
    first_language = "hrvatski";
    second_language = "deutsch";
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
