<!DOCTYPE html>
<html lang="en">

<head>
    <title>Language course</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    
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

    </style>
</head>

<body style="background-color:green;">
    
     <!-- Navigation -->
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
                            <li><a href="multiple_choise.html">Multiple choice test</a></li>
                            <li><a href="wort_uebung.html">Fill out spaces</a></li>
                            <li><a href="Vokabeln.html">Write vocables</a></li>
                            <li><a href="listen.html">Listen</a></li>
                            <li><a href="list_and_print.html">List and print vocablelist</a></li>
                            <li class="divider"></li>
                            <li><a href="verben_konjugieren.html">Verb conjugation</a></li>
                        </ul>
                    </li>
                    <li class="active"><a href="makewordlist.php">Make a wordlist</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Aussprache<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">č - tsch (wie deutsch)</a></li>
                            <li><a href="#">ć - dch </a></li>
                            <li><a href="#">đ - dj</a></li>
                            <li><a href="#">dž - dsch (wie Dschungel)</a></li>
                            <li><a href="#">š - sch (wie Schule)</a></li>
                            <li><a href="#">s - ß</a></li>
                            <li><a href="#">v - w (wenig)</a></li>
                            <li><a href="#">ž - frz. g</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  
  <!-- Page Content -->
    
    <div class="container">
        <form id="vokabluar-input-form" method="post" class="form-horizontal" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <div class="row">            
            <div class="col-lg-6">                
                <div id="flip2">
                    <div class="row">
                        <div class="col-lg-12">
                            <label for="filelist">Wähle eine Lektion</label>
                            <select id="filelist" class="form-control" onchange="change_file()"></select>
                        </div>
                        <div class="col-lg-6" style="padding-top:5px">
                            <img id="Image" src="images/1.jpg" width="150px">
                        </div>
                        <div class="col-lg-6" style="padding-top:10px">
                            <button id="previous" type="button" class="btn btn-default btn-sm" onclick="previous_lesson()">vorherige Lektion</button>
                            <button id="next" type="button" class="btn btn-default btn-sm" onclick="next_lesson()">nächste Lektion</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">                                
                    <label class="radio-inline">
                        <input type="radio" name="option_language" checked onclick="first_language_to_second_language()">de-->hr
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="option_language" onclick="second_language_to_first_language()">hr-->de
                    </label>                                                                
                </div>
                <div id="panel2" class="small">                    
                    <div class="row">
                        <div class="col-lg-12">
                            <label for="in">Vokabelliste:</label>
                            <select multiple class="form-control" size="10" id="vokabelliste" ondblclick="putin()"></select>                                          
                        </div>
                        <div class="col-lg-12 text-center">
                            <button type="button" class="btn btn-default btn-sm" onclick="takeout()"><span class="glyphicon glyphicon-arrow-right"></span> Out</button>
                            <button type="button" class="btn btn-default btn-sm" onclick="putin()"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;&nbsp;In</button>                           
                        </div> 
                        <div class="col-lg-12">
                            <label for="out">custom.json Vokabelliste:</label>
                             <select multiple class="form-control" size="10" id="newlist" ondblclick="takeout()"></select>
                        </div>
                    </div>    
                </div>
                <textarea hidden="true" name="wordlist" id="wordlist" readonly></textarea>
                <button type="submit" class="btn btn-primary btn-sm">Save to file</button>
            </div>            
        </div>
        <!-- /.row -->
        </form>
    </div>
    <!-- /.container -->
    
    
    <?php
            
    if ($_SERVER["REQUEST_METHOD"] == "POST") {        
        $txt = $_POST["wordlist"];
        $myfile = fopen("json/kategories/custom.json", "w") or die("Unable to open file!");
        fwrite($myfile, $txt);
        fclose($myfile);
    }
            
    ?>
    

    
    
    <!-- myscripts -->
    
    <script>
        var first_language = "deutsch";
        var second_language = "hrvatski";
        var url;
        var wordlist=[];
        var new_wordlist=[];
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    dateiliste = JSON.parse(this.responseText);
                }
        };
        xmlhttp.open("GET", "json/kategories/vokabelindex.json", false);
        xmlhttp.send();
        var filelist_entry="";
        for (s9 = 0; s9 < dateiliste.length-1; s9++) { 
            filelist_entry +=  "<option>" + "json/kategories/" + dateiliste[s9] +".json" + "</option>";
        }
        document.getElementById("filelist").innerHTML = filelist_entry;
        document.getElementById("filelist").selectedIndex = 0;
        change_file();
        xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    new_wordlist = JSON.parse(this.responseText);
                }
        };
        var curTimeStamp = Math.floor(Date.now() / 1000);
        xmlhttp.open("GET", "json/kategories/custom.json?t="+curTimeStamp, false);
        xmlhttp.send();
        change_wordlist();
        
        function next_lesson() {
            document.getElementById("filelist").selectedIndex++;
            change_file();
        }

        function previous_lesson() {
            document.getElementById("filelist").selectedIndex--;
            change_file();
        }
        
        function change_file() {
            var wordlist_entry;
            document.getElementById("next").removeAttribute("disabled");
            document.getElementById("previous").removeAttribute("disabled");
            if (document.getElementById("filelist").selectedIndex == (dateiliste.length - 2)) {
                document.getElementById("next").setAttribute("disabled", "");
            }
            if (document.getElementById("filelist").selectedIndex == 0) {
                document.getElementById("previous").setAttribute("disabled", "");
            }
            image_nr = "images/" + dateiliste[document.getElementById("filelist").selectedIndex] + ".jpg";
            document.getElementById("Image").setAttribute("src", image_nr);
            url = "json/kategories/"+dateiliste[document.getElementById("filelist").selectedIndex]+".json";
            xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        wordlist = JSON.parse(this.responseText);
                    }
            };
            xmlhttp.open("GET", url, false);
            xmlhttp.send();
            wordlist.sort(function(a, b){
                var x = a[first_language].toLowerCase();
                var y = b[first_language].toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            wordlist_entry = "";    
            for (s8 = 0; s8 < wordlist.length; s8++) { 
                wordlist_entry +=  "<option>" + wordlist[s8][first_language] + "</option>";
            }
            document.getElementById("vokabelliste").innerHTML = wordlist_entry;

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
        
        function putin() {
            var selected_options=getSelectValues(document.getElementById("vokabelliste"));   
            for (s10 = 0; s10 < selected_options.length; s10++) {       
                for (s11 = 0; s11 < wordlist.length; s11++) {
                    if (selected_options[s10]==wordlist[s11][first_language]) {
                        new_wordlist.push(wordlist[s11]);                        
                        change_wordlist();
                    }        
                }
            }    
        }
        
        function takeout (){
            var selected_options=getSelectValues(document.getElementById("newlist"));   
            for (s10 = 0; s10 < selected_options.length; s10++) {       
                for (s11 = 0; s11 < new_wordlist.length; s11++) {
                    if (selected_options[s10]==new_wordlist[s11][first_language]) {                       
                        new_wordlist.splice(s11, 1);
                        change_wordlist();
                    }        
                }
            }    
        }
        
        function change_wordlist() {
            var wordlist_entry;
            new_wordlist.sort(function(a, b){
                var x = a[first_language].toLowerCase();
                var y = b[first_language].toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            wordlist_entry = "";
            for (s9 = 0; s9 < new_wordlist.length; s9++) { 
                wordlist_entry +=  "<option>" + new_wordlist[s9][first_language] + "</option>";
            }
            document.getElementById("newlist").innerHTML = wordlist_entry;
            document.forms["vokabluar-input-form"]["wordlist"].value=JSON.stringify(new_wordlist);
        }
        
        function first_language_to_second_language() {
            first_language = "deutsch";
            second_language = "hrvatski";
            change_file();
            change_wordlist();
        }

        function second_language_to_first_language() {
            first_language = "hrvatski";
            second_language = "deutsch";
            change_file();
            change_wordlist();
        }
    </script>
    

</body>

</html>
