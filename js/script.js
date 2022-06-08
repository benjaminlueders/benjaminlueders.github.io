var selected_vokable;
var vokable_second_language = [];
var out_of_wordlist = [];
var in_wordlist =  JSON.parse(JSON.stringify(wordlist));
var first_language = "deutsch";
var second_language = "hrvatski";
var words_repeat = "only_false";
var right_words = 0;
var wrong_words = 0;

change_wordlist();
change_vokabluar_input();

function first_language_to_second_language() {
    first_language = "deutsch";
    second_language = "hrvatski";
    change_vokabluar_input();
    change_wordlist();
}

function second_language_to_first_language() {
    first_language = "hrvatski";
    second_language = "deutsch";
    change_vokabluar_input();
    change_wordlist();
}

function words_repeat_all() {
    words_repeat="all";
    document.getElementById("wiederholen").removeAttribute("disabled");
    $("#right_and_wrong").slideUp("slow");
}

function words_repeat_only_false () {
    words_repeat="only_false";
    document.getElementById("wiederholen").removeAttribute("disabled");
    $("#right_and_wrong").slideUp("slow");
}

function words_repeat_none () {
    words_repeat="none";
    document.getElementById("wiederholen").setAttribute("disabled","");
    $("#right_and_wrong").slideDown("slow");
}

function change_vokabluar_input () {    
    var vokabluar_input_wordlist = [];
    if (out_of_wordlist.length==wordlist.length) {
        document.getElementById("vokabluar-input-form-fieldset").setAttribute("disabled","");
        for (s1 = 1; s1 < 7; s1++) {
            $("#vokable"+s1+"-first-language-label").text("");
        }
        document.getElementById("vokabluar-input-form-fieldset").setAttribute("disabled","");
        document.getElementById("pruefen").setAttribute("disabled","");
        document.getElementById("wiederholen").setAttribute("disabled","");
        document.getElementById("loesen").setAttribute("disabled","");
        document.getElementById("naechstes").setAttribute("disabled","");
        return;
    }
    
    for (s2 = 1; s2 < 7; s2++) {
        do {
            selected_vokable = Math.floor(Math.random()*in_wordlist.length);
            if (in_wordlist.length<6) {break;}
        }
        while (vokabluar_input_wordlist.indexOf(selected_vokable) > -1);
        vokabluar_input_wordlist.push(selected_vokable);    
        $("#vokable"+s2+"-first-language-label").text(in_wordlist[selected_vokable][first_language]);
        vokable_second_language[s2-1] = in_wordlist[selected_vokable][second_language];            
    }
    
    glyphion_reset();
    
    for (s3 = 1; s3 < 7; s3++) {
            document.forms["vokabluar-input-form"]["vokable"+s3+"-second-language-input"].value="";
    }    
}
        
$(document).ready(function(){
    $("#loesen").click(function(){
        glyphion_reset();
        for (s4 = 1; s4 < 7; s4++) {
            document.forms["vokabluar-input-form"]["vokable"+s4+"-second-language-input"].value=vokable_second_language[s4-1];
        }
        document.getElementById("vokabluar-input-form-fieldset").setAttribute("disabled","");
        document.getElementById("pruefen").setAttribute("disabled","");
      });
});

$(document).ready(function(){
    $("#wiederholen").click(function(){
        for (s5 = 1; s5 < 7; s5++) {
            document.forms["vokabluar-input-form"]["vokable"+s5+"-second-language-input"].value="";
        }       
        glyphion_reset();
        document.getElementById("vokabluar-input-form-fieldset").removeAttribute("disabled");
        document.getElementById("pruefen").removeAttribute("disabled");
      });
});        
        
$(document).ready(function(){
    $("#pruefen").click(function(){
        var x, y;
        document.getElementById("vokable1-first-language-label").addEventListener("click", take_out_anyway1);
        
        document.getElementById("vokable2-first-language-label").onclick = take_out_anyway2;
        document.getElementById("vokable3-first-language-label").onclick = take_out_anyway3;
        document.getElementById("vokable4-first-language-label").onclick = take_out_anyway4;
        document.getElementById("vokable5-first-language-label").onclick = take_out_anyway5;
        document.getElementById("vokable6-first-language-label").onclick = take_out_anyway6;
        for (s6 = 1; s6 < 7; s6++) {
            x = document.forms["vokabluar-input-form"]["vokable"+s6+"-second-language-input"].value;            
            if (x.toLowerCase() == vokable_second_language[s6-1].toLowerCase()) {
                $("#vokable"+s6).addClass("has-success");
                $("#vokable"+s6).removeClass("has-error");
                $("#vokable"+s6+"-glyphicon").addClass("glyphicon-ok");
                $("#vokable"+s6+"-glyphicon").removeClass("glyphicon-remove");
                if (words_repeat=="none") {right_words++;}
                if (words_repeat=="only_false") {                    
                    for (s15 = 0; s15 < in_wordlist.length; s15++) {                        
                        if (x.toLowerCase() == in_wordlist[s15][second_language].toLowerCase()) {
                            out_of_wordlist.push(in_wordlist[s15]);
                            in_wordlist.splice(s15, 1);
                            change_wordlist();
                        }        
                    }
                }                
            }
            else {
                $("#vokable"+s6).addClass("has-error");
                $("#vokable"+s6+"-glyphicon").addClass("glyphicon-remove");
                if (words_repeat=="none") {wrong_words++;}
                document.forms["vokabluar-input-form"]["vokable"+s6+"-second-language-input"].value += "   ( right is:  ---->  " + vokable_second_language[s6-1] + " )";
            }
            if (words_repeat=="none") {           
                for (s16 = 0; s16 < in_wordlist.length; s16++) {                        
                    if (vokable_second_language[s6-1].toLowerCase() == in_wordlist[s16][second_language].toLowerCase()) {
                        out_of_wordlist.push(in_wordlist[s16]);
                        in_wordlist.splice(s16, 1);
                        change_wordlist();
                    }        
                }
                document.getElementById("words_right_label").innerHTML=right_words;
                document.getElementById("words_wrong_label").innerHTML=wrong_words;
            }
        }
        document.getElementById("vokabluar-input-form-fieldset").setAttribute("disabled","");
        document.getElementById("pruefen").setAttribute("disabled","");
    });
});

function glyphion_reset () {
    for (s7 = 1; s7 < 7; s7++) {
        $("#vokable"+s7).removeClass("has-success");
        $("#vokable"+s7).removeClass("has-error");
        $("#vokable"+s7+"-glyphicon").removeClass("glyphicon-ok");
        $("#vokable"+s7+"-glyphicon").removeClass("glyphicon-remove");            
    }
}

$(document).ready(function(){
    $("#naechstes").click(function(){        
        change_vokabluar_input();
        for (s8 = 1; s8 < 7; s8++) {
             document.forms["vokabluar-input-form"]["vokable"+s8+"-second-language-input"].value="";
        }
        glyphion_reset();        
        if (out_of_wordlist.length!=wordlist.length) {
            document.getElementById("pruefen").removeAttribute("disabled");
            document.getElementById("wiederholen").removeAttribute("disabled");
            document.getElementById("loesen").removeAttribute("disabled");
            document.getElementById("vokabluar-input-form-fieldset").removeAttribute("disabled");
        }
        give_focus_to_vokable_input();
    });
});

function give_focus_to_vokable_input() {
    document.getElementById("vokable1-second-language-input").focus();
}

function reset_wordlist() {    
    in_wordlist =  JSON.parse(JSON.stringify(wordlist));   
    out_of_wordlist = [];
    change_wordlist();
}

function change_wordlist() {
    var wordlist_entry;
    in_wordlist.sort(function(a, b){
            var x = a[first_language].toLowerCase();
            var y = b[first_language].toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
    wordlist_entry = "";    
    for (s8 = 0; s8 < in_wordlist.length; s8++) { 
        wordlist_entry +=  "<option>" + in_wordlist[s8][first_language] + "</option>";
    }
    document.getElementById("in").innerHTML = wordlist_entry;
    out_of_wordlist.sort(function(a, b){
                var x = a[first_language].toLowerCase();
                var y = b[first_language].toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
    wordlist_entry = "";
    for (s9 = 0; s9 < out_of_wordlist.length; s9++) { 
        wordlist_entry +=  "<option>" + out_of_wordlist[s9][first_language] + "</option>";
    }
    document.getElementById("out").innerHTML = wordlist_entry;
    if (out_of_wordlist.length!=wordlist.length) {
        document.getElementById("naechstes").removeAttribute("disabled");
    }
}

function takeout (){
    var selected_options=getSelectValues(document.getElementById("in"));   
    for (s10 = 0; s10 < selected_options.length; s10++) {       
        for (s11 = 0; s11 < in_wordlist.length; s11++) {
            if (selected_options[s10]==in_wordlist[s11][first_language]) {
                out_of_wordlist.push(in_wordlist[s11]);
                in_wordlist.splice(s11, 1);
                change_wordlist();
            }        
        }
    }    
}

function putin (){
    var selected_options=getSelectValues(document.getElementById("out"));    
    for (s12 = 0; s12 < selected_options.length; s12++) {       
        for (s13 = 0; s13 < out_of_wordlist.length; s13++) {
            if (selected_options[s12]==out_of_wordlist[s13][first_language]) {
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

  for (s14=0, s14Len=options.length; s14<s14Len; s14++) {
    opt = options[s14];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}

function take_out_anyway1() {   
    for (s15 = 0; s15 < in_wordlist.length; s15++) {                        
                        if (document.getElementById("vokable1-first-language-label").innerHTML == in_wordlist[s15][first_language]) {
                           document.getElementById("in").selectedIndex = s15;
                           takeout();
                        }        
    }
    document.getElementById("vokable1-first-language-label").removeEventListener("click", take_out_anyway1);
}
function take_out_anyway2() {   
    for (s15 = 0; s15 < in_wordlist.length; s15++) {                        
                        if (document.getElementById("vokable2-first-language-label").innerHTML == in_wordlist[s15][first_language]) {
                           document.getElementById("in").selectedIndex = s15;
                           takeout();
                        }
    document.getElementById("vokable1-first-language-label").removeEventListener("click", take_out_anyway1);    
}
}function take_out_anyway3() {   
    for (s15 = 0; s15 < in_wordlist.length; s15++) {                        
                        if (document.getElementById("vokable3-first-language-label").innerHTML == in_wordlist[s15][first_language]) {
                           document.getElementById("in").selectedIndex = s15;
                           takeout();
                        }
    document.getElementById("vokable1-first-language-label").removeEventListener("click", take_out_anyway1);
}
}function take_out_anyway4() {   
    for (s15 = 0; s15 < in_wordlist.length; s15++) {                        
                        if (document.getElementById("vokable4-first-language-label").innerHTML == in_wordlist[s15][first_language]) {
                           document.getElementById("in").selectedIndex = s15;
                           takeout();
                        }        
    document.getElementById("vokable1-first-language-label").removeEventListener("click", take_out_anyway1);    
}
}function take_out_anyway5() {   
    for (s15 = 0; s15 < in_wordlist.length; s15++) {                        
                        if (document.getElementById("vokable5-first-language-label").innerHTML == in_wordlist[s15][first_language]) {
                           document.getElementById("in").selectedIndex = s15;
                           takeout();
                        }
    document.getElementById("vokable1-first-language-label").removeEventListener("click", take_out_anyway1);    
}
}function take_out_anyway6() {   
    for (s15 = 0; s15 < in_wordlist.length; s15++) {                        
                        if (document.getElementById("vokable6-first-language-label").innerHTML == in_wordlist[s15][first_language]) {
                           document.getElementById("in").selectedIndex = s15;
                           takeout();
                        }        
    }
    document.getElementById("vokable1-first-language-label").removeEventListener("click", take_out_anyway1);
}

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});