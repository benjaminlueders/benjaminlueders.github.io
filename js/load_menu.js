var index = [];
var url;
url = "json/INDEX.json";
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        index = JSON.parse(this.responseText);
    }
}
xmlhttp.open("GET", url, false);
xmlhttp.send();
var ul;
for (var i = 0; i < index.length; i++) {   
    var menuentry = index[i].de_word.replace(/ /g, "%20");  
    ul = $("#cat");
    ul.append("<li><a href=wortauswahl.php?wordlist=" + menuentry + ">" + index[i].de_word +" / " + index[i].hr_word + "</a></li>");
    $("#menu").append(ul);
}
