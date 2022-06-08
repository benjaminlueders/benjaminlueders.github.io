var selected_vokable;
var vokable_second_language = [];
var out_of_wordlist = [];
var in_wordlist = JSON.parse(JSON.stringify(wordlist));
var first_language = "deutsch";
var second_language = "hrvatski";
var show_right_table_side = 0;

change_wordlist();

function first_language_to_second_language() {
    first_language = "deutsch";
    second_language = "hrvatski";

    change_wordlist();
}

function second_language_to_first_language() {
    first_language = "hrvatski";
    second_language = "deutsch";

    change_wordlist();
}

function reset_wordlist() {
    in_wordlist = JSON.parse(JSON.stringify(wordlist));
    out_of_wordlist = [];
    change_wordlist();
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
    sortedList();
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

function right_table_side_show() {
    show_right_table_side = 0;
    set_table();
}

function right_table_side_hide() {
    show_right_table_side = 1;
    set_table();
}

function right_table_side_spaces() {
    show_right_table_side = 2;
    set_table();
}

function set_table() {
    var full_word, spaced_word;
    var arr = [];
    wordlist_entry = "<tr style=border:solid;background-color:brown><th>" + first_language.toUpperCase() + "</th><th>" + second_language.toUpperCase() + "</th></tr>";
    if (show_right_table_side == 0) {
        for (s2 = 0; s2 < in_wordlist.length; s2++) {
            wordlist_entry += "<tr><td>" + in_wordlist[s2][first_language] + "</td><td>" + in_wordlist[s2][second_language] + "</td></tr>";
        }
    } else if (show_right_table_side == 1) {
        for (s2 = 0; s2 < in_wordlist.length; s2++) {
            wordlist_entry += "<tr><td>" + in_wordlist[s2][first_language] + "</td><td></td></tr>";
        }
    } else if (show_right_table_side == 2) {
        for (s2 = 0; s2 < in_wordlist.length; s2++) {
            full_word = in_wordlist[s2][second_language];
            spaced_word = full_word;
            l = full_word.length;
            space_numbers = Math.floor(l / 2);
            arr = [];
            for (i = 0; i < space_numbers; i++) {
                r = (Math.floor(Math.random() * l));
                if (arr.indexOf(r) < 0) {
                    arr.push(r);
                }
            }
            arr.sort();
            for (j = 0; j < arr.length; j++) {
                spaced_word = spaced_word.substring(0, arr[j]) + "_" + spaced_word.substring(arr[j]+1,full_word.length);

            }
            wordlist_entry += "<tr><td>" + in_wordlist[s2][first_language] + "</td><td>" + spaced_word + "</td></tr>";
        }
    }


    document.getElementById("in2").innerHTML = wordlist_entry;
}

function sortedList() {
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
    set_table();
}

function shuffle(array) {
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

function randomizedList() {
    in_wordlist = shuffle(in_wordlist);
    set_table();
}

function print_this_page() {    
    document.getElementById("selector").setAttribute("hidden", "true");
    window.print();    
    document.getElementById("selector").removeAttribute("hidden");
}
