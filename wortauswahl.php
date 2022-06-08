<!DOCTYPE html>
<html lang="en">

<?php
header("Cache-Control: max-age=0, no-cache, no-store, must-revalidate"); // HTTP/1.1
header("Expires: Wed, 11 Jan 1984 05:00:00 GMT"); // Date in the past
?>

    <head>
        <title>Language course</title>
        <meta charset="utf-8">

        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

        <link rel="stylesheet" href="css/style.css">
        <script src="js/toggle_language.js"></script>
        <style>
            /* CSS used here will be applied after bootstrap.css */
            
            html,
            body {
                height: 100%;
            }
            
            .vertical-center {
                height: 100%;
                width: 100%;
                text-align: center;
                /* align the inline(-block) elements horizontally */
                font: 0/0 a;
                /* remove the gap between inline(-block) elements */
            }
            
            .vertical-center:before {
                /* create a full-height inline block pseudo=element */
                content: ' ';
                display: inline-block;
                vertical-align: middle;
                /* vertical alignment of the inline element */
                height: 100%;
            }
            
            .vertical-center>.container {
                max-width: 100%;
                display: inline-block;
                vertical-align: middle;
                /* vertical alignment of the inline element */
                font: 16px/1 "Helvetica Neue", Helvetica, Arial, sans-serif;
                /* <-- reset the font property */
            }
            
            @media (max-width: 768px) {
                .vertical-center:before {
                    /* height: auto; or 0*/
                    display: none;
                }
            }
            
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

                <table class="table table-bordered">
                    <thead>
                        <tr style="background-color: darkgreen">
                            <th></th>
                            <?php echo "<th>" . $_GET["wordlist"] . "</th>"; ?>
                            <th></th>
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
                <script>
                    var wl = document.getElementsByTagName("th")[1].innerHTML;
                    var action = "php/save_practice_list.php?wordlist=" + wl;
                    document.getElementById("form").setAttribute("action", action);

                </script>

                <script src="js/toggle_language.js"></script>
                <script src="js/load_menu.js"></script>
                <script src="js/load_vocabulary.js"></script>
                <script src="js/load_practice_list.js"></script>
                <script src="js/toggle_select.js"></script>

                <script>
                    for (var i = 0; i < index.length; i++) {
                        if (document.getElementsByTagName("th")[1].innerHTML == index[i].de_word) {
                            document.getElementsByTagName("th")[2].innerHTML = index[i].hr_word;
                        }
                    }

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
