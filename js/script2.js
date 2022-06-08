var selected_verb = Math.floor(Math.random()*wordlist.length);
var first_language_infinitiv, second_language_infinitiv, first_language_first_person_singular_personalpronomen, second_language_first_person_singular_personalpronomen, first_language_second_person_singular_personalpronomen, second_language_second_person_singular_personalpronomen, first_language_third_person_singular_personalpronomen, second_language_third_person_singular_personalpronomen, first_language_first_person_plural_personalpronomen, second_language_first_person_plural_personalpronomen, first_language_second_person_plural_personalpronomen, second_language_second_person_plural_personalpronomen, first_language_third_person_plural_personalpronomen, second_language_third_person_plural_personalpronomen;
first_language_to_second_language();


function change_infinitiv_list () {
    var first_language_infinitiv_list = "";
    wordlist.sort(function(a, b){
        var x = a[first_language_infinitiv].toLowerCase();
        var y = b[first_language_infinitiv].toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    for (s1 = 0; s1 < wordlist.length; s1++) { 
        first_language_infinitiv_list +=  "<option>" + wordlist[s1][first_language_infinitiv] + "</option>";
    }
    document.getElementById("first-language-infinitiv-select").innerHTML = first_language_infinitiv_list;
}

function first_language_to_second_language() {
    var temp = wordlist[selected_verb]["deutsch"];
    first_language_infinitiv = "deutsch";
    second_language_infinitiv = "hrvatski";
    first_language_first_person_singular_personalpronomen = "ich";
    second_language_first_person_singular_personalpronomen = "ja";
    first_language_second_person_singular_personalpronomen = "du";
    second_language_second_person_singular_personalpronomen = "ti";
    first_language_third_person_singular_personalpronomen = "er";
    second_language_third_person_singular_personalpronomen = "on";
    first_language_first_person_plural_personalpronomen = "wir";
    second_language_first_person_plural_personalpronomen = "mi";
    first_language_second_person_plural_personalpronomen = "ihr";
    second_language_second_person_plural_personalpronomen = "vi";
    first_language_third_person_plural_personalpronomen = "sie";
    second_language_third_person_plural_personalpronomen = "oni";
    
    change_infinitiv_list();
    
    for (t1 = 0; t1 < wordlist.length; t1++) { 
        if ( wordlist[t1]["deutsch"] == temp ) {
            selected_verb = t1;
            break;
        }
    }
    
    document.getElementById("first-language-infinitiv-select").selectedIndex = selected_verb;
    change_vokabluar_input();
}

function second_language_to_first_language() {
    var temp = wordlist[selected_verb]["deutsch"];
    first_language_infinitiv = "hrvatski";
    second_language_infinitiv = "deutsch";
    first_language_first_person_singular_personalpronomen = "ja";
    second_language_first_person_singular_personalpronomen = "ich";
    first_language_second_person_singular_personalpronomen = "ti";
    second_language_second_person_singular_personalpronomen = "du";
    first_language_third_person_singular_personalpronomen = "on";
    second_language_third_person_singular_personalpronomen = "er";
    first_language_first_person_plural_personalpronomen = "mi";
    second_language_first_person_plural_personalpronomen = "wir";
    first_language_second_person_plural_personalpronomen = "vi";
    second_language_second_person_plural_personalpronomen = "ihr";
    first_language_third_person_plural_personalpronomen = "oni";
    second_language_third_person_plural_personalpronomen = "sie";
        
    change_infinitiv_list();
    
    for (t1 = 0; t1 < wordlist.length; t1++) { 
        if ( wordlist[t1]["deutsch"] == temp ) {
            selected_verb = t1;
            break;
        }
    }
    
    document.getElementById("first-language-infinitiv-select").selectedIndex = selected_verb;
    change_vokabluar_input();
}

function show_second_language_infinitiv() {
    if (document.forms["vokabluar-input-form"]["second-language-infinitiv-input"].value=="") {
        document.forms["vokabluar-input-form"]["second-language-infinitiv-input"].value=wordlist[selected_verb][second_language_infinitiv];
       
    }
    else {
        document.forms["vokabluar-input-form"]["second-language-infinitiv-input"].value="";
        
    }
}

function change_vokabluar_input() {
    document.getElementById("first-language-infinitiv-select").selectedIndex = selected_verb;
    document.forms["vokabluar-input-form"]["second-language-infinitiv-input"].value="";
    
    document.getElementById("first-language-first-person-singular").innerHTML=first_language_first_person_singular_personalpronomen+" "+
    wordlist[selected_verb][first_language_first_person_singular_personalpronomen];
    document.getElementById("second-language-first-person-singular-personalpronomen").innerHTML=second_language_first_person_singular_personalpronomen;
    document.forms["vokabluar-input-form"]["second-language-first-person-singular_input"].value="";
    
    document.getElementById("first-language-second-person-singular").innerHTML=first_language_second_person_singular_personalpronomen+" "+
    wordlist[selected_verb][first_language_second_person_singular_personalpronomen];
    document.getElementById("second-language-second-person-singular-personalpronomen").innerHTML=second_language_second_person_singular_personalpronomen;
    document.forms["vokabluar-input-form"]["second-language-second-person-singular_input"].value="";
    
    document.getElementById("first-language-third-person-singular").innerHTML=first_language_third_person_singular_personalpronomen+" "+
    wordlist[selected_verb][first_language_third_person_singular_personalpronomen];
    document.getElementById("second-language-third-person-singular-personalpronomen").innerHTML=second_language_third_person_singular_personalpronomen;
    document.forms["vokabluar-input-form"]["second-language-third-person-singular_input"].value="";
    
    document.getElementById("first-language-first-person-plural").innerHTML=first_language_first_person_plural_personalpronomen+" "+
    wordlist[selected_verb][first_language_first_person_plural_personalpronomen];
    document.getElementById("second-language-first-person-plural-personalpronomen").innerHTML=second_language_first_person_plural_personalpronomen;
    document.forms["vokabluar-input-form"]["second-language-first-person-plural_input"].value="";
    
    document.getElementById("first-language-second-person-plural").innerHTML=first_language_second_person_plural_personalpronomen+" "+
    wordlist[selected_verb][first_language_second_person_plural_personalpronomen];
    document.getElementById("second-language-second-person-plural-personalpronomen").innerHTML=second_language_second_person_plural_personalpronomen;
    document.forms["vokabluar-input-form"]["second-language-second-person-plural_input"].value="";
    
    document.getElementById("first-language-third-person-plural").innerHTML=first_language_third_person_plural_personalpronomen+" "+
    wordlist[selected_verb][first_language_third_person_plural_personalpronomen];
    document.getElementById("second-language-third-person-plural-personalpronomen").innerHTML=second_language_third_person_plural_personalpronomen;
    document.forms["vokabluar-input-form"]["second-language-third-person-plural_input"].value="";
    glyphion_reset();
} 

function pruefen() {
    if (document.forms["vokabluar-input-form"]["second-language-first-person-singular_input"].value.toLowerCase() == wordlist[selected_verb][second_language_first_person_singular_personalpronomen].toLowerCase()) {
        $("#first-person-singular").addClass("has-success");
        $("#first-person-singular-glyphicon").addClass("glyphicon-ok");
    }
    else {
        $("#first-person-singular").addClass("has-error");
        $("#first-person-singular-glyphicon").addClass("glyphicon-remove");            
    }
    
    if (document.forms["vokabluar-input-form"]["second-language-second-person-singular_input"].value.toLowerCase() == wordlist[selected_verb][second_language_second_person_singular_personalpronomen].toLowerCase()) {
        $("#second-person-singular").addClass("has-success");
        $("#second-person-singular-glyphicon").addClass("glyphicon-ok");
    }
    else {
        $("#second-person-singular").addClass("has-error");
        $("#second-person-singular-glyphicon").addClass("glyphicon-remove");            
    }
    
    if (document.forms["vokabluar-input-form"]["second-language-third-person-singular_input"].value.toLowerCase() == wordlist[selected_verb][second_language_third_person_singular_personalpronomen].toLowerCase()) {
        $("#third-person-singular").addClass("has-success");
        $("#third-person-singular-glyphicon").addClass("glyphicon-ok");
    }
    else {
        $("#third-person-singular").addClass("has-error");
        $("#third-person-singular-glyphicon").addClass("glyphicon-remove");            
    }
    
    if (document.forms["vokabluar-input-form"]["second-language-first-person-plural_input"].value.toLowerCase() == wordlist[selected_verb][second_language_first_person_plural_personalpronomen].toLowerCase()) {
        $("#first-person-plural").addClass("has-success");
        $("#first-person-plural-glyphicon").addClass("glyphicon-ok");
    }
    else {
        $("#first-person-plural").addClass("has-error");
        $("#first-person-plural-glyphicon").addClass("glyphicon-remove");            
    }
    
    if (document.forms["vokabluar-input-form"]["second-language-second-person-plural_input"].value.toLowerCase() == wordlist[selected_verb][second_language_second_person_plural_personalpronomen].toLowerCase()) {
        $("#second-person-plural").addClass("has-success");
        $("#second-person-plural-glyphicon").addClass("glyphicon-ok");
    }
    else {
        $("#second-person-plural").addClass("has-error");
        $("#second-person-plural-glyphicon").addClass("glyphicon-remove");            
    }
    
    if (document.forms["vokabluar-input-form"]["second-language-third-person-plural_input"].value.toLowerCase() == wordlist[selected_verb][second_language_third_person_plural_personalpronomen].toLowerCase()) {
        $("#third-person-plural").addClass("has-success");
        $("#third-person-plural-glyphicon").addClass("glyphicon-ok");
    }
    else {
        $("#third-person-plural").addClass("has-error");
        $("#third-person-plural-glyphicon").addClass("glyphicon-remove");            
    }
    
        document.getElementById("vokabluar-input-form-fieldset").setAttribute("disabled","");
        document.getElementById("button_pruefen").setAttribute("disabled","");
}

function loesen() {    
    glyphion_reset(); 
    
    document.forms["vokabluar-input-form"]["second-language-first-person-singular_input"].value=wordlist[selected_verb][second_language_first_person_singular_personalpronomen];
    
    document.forms["vokabluar-input-form"]["second-language-second-person-singular_input"].value=wordlist[selected_verb][second_language_second_person_singular_personalpronomen];
    
    document.forms["vokabluar-input-form"]["second-language-third-person-singular_input"].value=wordlist[selected_verb][second_language_third_person_singular_personalpronomen];
    
    document.forms["vokabluar-input-form"]["second-language-first-person-plural_input"].value=wordlist[selected_verb][second_language_first_person_plural_personalpronomen];
    
    document.forms["vokabluar-input-form"]["second-language-second-person-plural_input"].value=wordlist[selected_verb][second_language_second_person_plural_personalpronomen];
    
    document.forms["vokabluar-input-form"]["second-language-third-person-plural_input"].value=wordlist[selected_verb][second_language_third_person_plural_personalpronomen];
    
    document.getElementById("vokabluar-input-form-fieldset").setAttribute("disabled","");
    document.getElementById("button_pruefen").setAttribute("disabled","");
}

function wiederholen() {    
    change_vokabluar_input();
    document.getElementById("button_pruefen").removeAttribute("disabled");
    document.getElementById("button_loesen").removeAttribute("disabled");
    document.getElementById("button_wiederholen").removeAttribute("disabled");
    document.getElementById("vokabluar-input-form-fieldset").removeAttribute("disabled");
    give_focus_to_vokable_input();
}

function zufall() {
    
   selected_verb = Math.floor(Math.random()*wordlist.length);
   change_vokabluar_input();
   document.getElementById("button_pruefen").removeAttribute("disabled");
   document.getElementById("button_loesen").removeAttribute("disabled");
   document.getElementById("button_wiederholen").removeAttribute("disabled");
   document.getElementById("vokabluar-input-form-fieldset").removeAttribute("disabled");
   give_focus_to_vokable_input();
}

function naechstes() {
    
    if (selected_verb==(wordlist.length-1)) {
        selected_verb=0;
    }
    else {
        selected_verb++;
    }
    change_vokabluar_input();
    document.getElementById("button_pruefen").removeAttribute("disabled");
    document.getElementById("button_loesen").removeAttribute("disabled");
    document.getElementById("button_wiederholen").removeAttribute("disabled");
    document.getElementById("vokabluar-input-form-fieldset").removeAttribute("disabled");
    give_focus_to_vokable_input();
}

function change_selected_verb() {
    document.getElementById("button_naechstes").innerHTML="Nächstes Verb";
    selected_verb=document.getElementById("first-language-infinitiv-select").selectedIndex;
    change_vokabluar_input();
    document.getElementById("button_pruefen").removeAttribute("disabled");
    document.getElementById("button_loesen").removeAttribute("disabled");
    document.getElementById("button_wiederholen").removeAttribute("disabled");
    document.getElementById("vokabluar-input-form-fieldset").removeAttribute("disabled");
    give_focus_to_vokable_input();
}

function glyphion_reset() {    
    $("#first-person-singular").removeClass("has-success");
    $("#first-person-singular").removeClass("has-error");
    $("#first-person-singular-glyphicon").removeClass("glyphicon-ok");
    $("#first-person-singular-glyphicon").removeClass("glyphicon-remove");
    
    $("#second-person-singular").removeClass("has-success");
    $("#second-person-singular").removeClass("has-error");
    $("#second-person-singular-glyphicon").removeClass("glyphicon-ok");
    $("#second-person-singular-glyphicon").removeClass("glyphicon-remove");
    
    $("#third-person-singular").removeClass("has-success");
    $("#third-person-singular").removeClass("has-error");
    $("#third-person-singular-glyphicon").removeClass("glyphicon-ok");
    $("#third-person-singular-glyphicon").removeClass("glyphicon-remove");
    
    $("#first-person-plural").removeClass("has-success");
    $("#first-person-plural").removeClass("has-error");
    $("#first-person-plural-glyphicon").removeClass("glyphicon-ok");
    $("#first-person-plural-glyphicon").removeClass("glyphicon-remove");
    
    $("#second-person-plural").removeClass("has-success");
    $("#second-person-plural").removeClass("has-error");
    $("#second-person-plural-glyphicon").removeClass("glyphicon-ok");
    $("#second-person-plural-glyphicon").removeClass("glyphicon-remove");
    
    $("#third-person-plural").removeClass("has-success");
    $("#third-person-plural").removeClass("has-error");
    $("#third-person-plural-glyphicon").removeClass("glyphicon-ok");
    $("#third-person-plural-glyphicon").removeClass("glyphicon-remove");
}

function give_focus_to_vokable_input() {
    document.getElementById("second-language-first-person-singular_input").focus();
}

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");           
    });
});