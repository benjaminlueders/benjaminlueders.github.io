var practice_list = [];
var url2;
var xmlhttp2 = new XMLHttpRequest();
url2 = "json/practice_list.json";
xmlhttp2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        practice_list = JSON.parse(this.responseText);
    }
}
xmlhttp2.open("GET", url2, false);
xmlhttp2.send();
document.getElementById("hiddentextarea").innerHTML = JSON.stringify(practice_list);
var list = document.getElementsByTagName("tbody")[0];
for (i = 0; i < vocabulary.length; i++) {
    list.getElementsByTagName("tr")[i].classList.remove("selected");
    for (j = 0; j < practice_list.length; j++) {
        if (vocabulary[i].de_word == practice_list[j].de_word) {
            list.getElementsByTagName("tr")[i].classList.add("selected");
        }
    }
}