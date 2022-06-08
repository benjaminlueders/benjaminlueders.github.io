<!DOCTYPE html>
<html lang="en">

<head>
    <title>Language course</title>
    <meta charset="utf-8">

    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <style>
        .selected {
            background: darkseagreen;
        }
        
        .fixedbutton {
            position: fixed;
            bottom: 0px;
            background-color: green;
            width: 100%;
        }

    </style>
</head>

<body style="background-color:green;">

    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span> 
                </button>
                <a class="navbar-brand" href="index.html">Language course</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="">Practice<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li class="active"><a href="1von3.html">Multiple choice test</a></li>
                            <li><a href="wort_uebung.html">Type word test</a></li>
                            <li><a href="vorlesen.html">Listen</a></li>
                            <li class="divider"></li>
                            <li><a href="Vokabeln.html">Vokable test</a></li>
                            <li><a href="verben_konjugieren.html">Verb conjugation</a></li>
                        </ul>
                    </li>
                    <li id="menu" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="">Wordlist1<span class="caret"></span></a>
                        <ul id="cat" class="dropdown-menu">
                        </ul>
                    </li>
                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="">Wordlist2<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="wortauswahl.php?wordlist=Vokabeln1">Vokabeln1</a></li>
                            <li><a href="wortauswahl.php?wordlist=Dialogtext1">Dialogtext1</a></li>
                        </ul>
                    </li>
                    <li><a href="change_practice_list.php">Practice list</a></li>
                </ul>
            </div>
        </div>
    </nav>


    <div class="container">
        <div class="col-sm-6">


            <h4>Practice list</h4>


            <table class="table table-bordered table-condensed">

                <thead>
                    <tr style="background-color:darkgreen">
                        <th></th>
                        <th>German Word</th>
                        <th>Croatian Word</th>
                        <th>Category</th>
                    </tr>
                </thead>
            </table>


            <form class="fixedbutton" id="form" method="post" action="php/change_practice_list2.php">
                <textarea rows="15" cols="130" name="practice_list" id="hiddentextarea" hidden></textarea>
                <button style="margin:5px" type="button" class="btn" onclick="select_all()">Select all</button>
                <button style="margin:5px" type="button" class="btn" onclick="clear_all()">Clear All</button>
                <button style="margin:5px" type="submit" class="btn">Save changes</button>
                <button style="margin:5px" type="button" class="btn" onClick="window.location.reload()">Discard changes</button>
            </form>

            <script src="js/load_menu.js"></script>
            <script>
                var vocabulary = [];
                var url;

                url = "json/practice_list.json";
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
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
                    tr.append("<td>" + vocabulary[i].category + "</td>");
                    $('table').append(tr);
                }

            </script>
            <script src="js/toggle_language.js"></script>
            <script src="js/load_practice_list.js"></script>
            <script src="js/toggle_select.js"></script>

            <script>
                function select_all() {
                    for (i = 1; i <= vocabulary.length; i++) {
                        var row = idTds[i];
                        if (row.className != 'selected') {
                            row.className = 'selected';
                            practice_list.push(vocabulary[i - 1]);
                        }
                    }
                    document.getElementById("hiddentextarea").innerHTML = JSON.stringify(practice_list);
                }

                function clear_all() {
                    for (i = 1; i <= vocabulary.length; i++) {
                        var row = idTds[i];
                        if (row.className == 'selected') {
                            row.className = '';
                            for (j = 0; j < practice_list.length; j++) {
                                if (practice_list[j].de_word == vocabulary[i - 1].de_word) {
                                    practice_list.splice(j, 1);
                                }
                            }
                        }
                    }
                    document.getElementById("hiddentextarea").innerHTML = JSON.stringify(practice_list);
                }

            </script>

        </div>
    </div>

</body>

</html>
