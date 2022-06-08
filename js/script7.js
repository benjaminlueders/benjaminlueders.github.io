var selected_vokable;
var vokable_second_language = [];
var out_of_wordlist = [];
var in_wordlist = JSON.parse(JSON.stringify(wordlist));
var first_language = "deutsch";
var second_language = "hrvatski";
var vocableindex = 0;

change_wordlist();
set_word();

function set_word() {
    var arr22 = [];
    document.getElementById("word").innerHTML = in_wordlist[vocableindex][first_language];
    var spaceboxes = "";
    var full_word = in_wordlist[vocableindex][second_language];
    var spaced_word = full_word;
    var l = full_word.length;
    space_numbers = Math.floor(l / 2);
    for (i = 0; i < space_numbers; i++) {
        var r = (Math.floor(Math.random() * l));
        if (arr22.indexOf(r) < 0) {
            arr22.push(r);
        }
    }
    arr22.sort();
    for (j = 0; j < arr22.length; j++) {
        spaced_word = spaced_word.substring(0, arr22[j]) + "_" + spaced_word.substring(arr22[j] + 1, full_word.length);

    }
    var arr33 = [...spaced_word];
    for (ff = 0; ff < arr33.length; ff++) {
        if (arr33[ff].toString() == "_") {
            spaceboxes += '<input type="text" maxlength="1" style="width:1em;margin-right:1em" value="">';

        } else {
            spaceboxes += '<input type="text" readonly maxlength="1" style="width:1em;margin-right:1em" value="' + arr33[ff] + '">';
        }
    }

    document.getElementById("spaceboxes").innerHTML = spaceboxes;

}

function check() {
    var typed_word = "";
    var input_tags = document.getElementById("spaceboxes").getElementsByTagName("input");
    for (ff = 0; ff < input_tags.length; ff++) {
        typed_word += input_tags[ff].value;
    }
    if (typed_word.toLowerCase() == in_wordlist[vocableindex][second_language]) {
        for (ff = 0; ff < input_tags.length; ff++) {
            input_tags[ff].setAttribute("readonly", "true");
            document.getElementById("checked").innerHTML = "richtig";
        }
    } else {
        for (ff = 0; ff < input_tags.length; ff++) {
            input_tags[ff].setAttribute("readonly", "true");
            document.getElementById("checked").innerHTML = "falsch";
        }
    }
    setTimeout(function () {
        document.getElementById("checked").innerHTML = "";
        if (typed_word.toLowerCase() == in_wordlist[vocableindex][second_language]) {
            next_word();
        } else {
            set_word();
        }
    }, 1500);
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
