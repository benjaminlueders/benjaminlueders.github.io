var vocabulary = [];
var url;

url = "json/" + document.getElementsByTagName("th")[1].innerHTML + ".json";
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        vocabulary = JSON.parse(this.responseText);
    }
}
xmlhttp.open("GET", url, false);
xmlhttp.send();
var tr;
for (var i = 0; i < vocabulary.length; i++) {
    tr = $('<tr/>');
    tr.append("<td><img src=" + vocabulary[i].pic_url + " width=20px height=20px></td>");
    tr.append("<td><b>" + vocabulary[i].de_word + "</b></td>");
    tr.append("<td><b>" + vocabulary[i].hr_word + "</b></td>");
    $('table').append(tr);
}
