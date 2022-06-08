<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Kroatisch lernen</title>
    <!-- Bootstrap Core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
    <!-- Custom CSS -->
    <style>
    body {
        padding-top: 70px;
        /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */
    }
    </style>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    
    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="../index.html">Learn Croatian</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Vokabeln<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                          <li><a href="50languages.html">50 Languages</a></li>
                          <li><a href="vokabeln.html">eigene Vokabellisten</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav">
                    <li>
                        <a href="verben_konjugieren.html">Verben konjugieren</a>
                    </li>
                    <li>
                        <a href="grammatik/grammar.html">Grammatik</a>
                    </li>                    
                </ul>                
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Wortlisten<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                          <li><a href="php/wortliste_bearbeiten.php">Wortliste bearbeiten</a></li>
                          <li><a href="#">Wortliste erstellen</a></li>
                        </ul>
                    </li>
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
                    <li>
                        <a href="print.html">Drucken</a>
                    </li>                  
                </ul>                
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
    
    <!-- Page Content -->
    <div class="container">
        <div class="row">
            <form id="vokabluar-input-form" method="post" class="form-horizontal" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                <div class="col-lg-6 text-center">
                    <div id="flip2">
                    <label for="filelist">Filelist</label>
                    <select id="filelist" class="form-control" onchange="load_from_file()" name="file">
                    </select>
                </div>                   
                    <div class="form-group well">                        
                        <div class="col-lg-6">
                            <label class="control-label">deutsch</label>
                            <input type="text" name="deutsch_vocable1" id="vokable1-first-language-input" class="form-control">
                        </div>
                        <div class="col-lg-6">
                            <label class="control-label">hrvatski</label>
                            <input type="text" name="hrvatski_vocable1" id="vokable1-second-language-input" class="form-control">
                        </div>
                    </div>
                    <div class="form-group well">                        
                        <div class="col-lg-6">
                            <label class="control-label">deutsch</label>
                            <input type="text" name="deutsch_vocable2" id="vokable2-first-language-input" class="form-control">
                        </div>
                        <div class="col-lg-6">
                            <label class="control-label">hrvatski</label>
                            <input type="text" name="hrvatski_vocable2" id="vokable2-second-language-input" class="form-control">
                        </div>
                    </div>
                    <div class="form-group well">                        
                        <div class="col-lg-6">
                            <label class="control-label">deutsch</label>
                            <input type="text" name="deutsch_vocable3" id="vokable3-first-language-input" class="form-control">
                        </div>
                        <div class="col-lg-6">
                            <label class="control-label">hrvatski</label>
                            <input type="text" name="hrvatski_vocable3" id="vokable3-second-language-input" class="form-control">
                        </div>
                    </div>
                    <div class="form-group well">                        
                        <div class="col-lg-6">
                            <label class="control-label">deutsch</label>
                            <input type="text" name="deutsch_vocable4" id="vokable4-first-language-input" class="form-control">
                        </div>
                        <div class="col-lg-6">
                            <label class="control-label">hrvatski</label>
                            <input type="text" name="hrvatski_vocable4" id="vokable4-second-language-input" class="form-control">
                        </div>
                    </div>
                    <div class="form-group well">                        
                        <div class="col-lg-6">
                            <label class="control-label">deutsch</label>
                            <input type="text" name="deutsch_vocable5" id="vokable5-first-language-input" class="form-control">
                        </div>
                        <div class="col-lg-6">
                            <label class="control-label">hrvatski</label>
                            <input type="text" name="hrvatski_vocable5" id="vokable5-second-language-input" class="form-control">
                        </div>
                    </div>
                    <div class="form-group well">                        
                        <div class="col-lg-6">
                            <label class="control-label">deutsch</label>
                            <input type="text" name="deutsch_vocable6" id="vokable6-first-language-input" class="form-control">
                        </div>
                        <div class="col-lg-6">
                            <label class="control-label">hrvatski</label>
                            <input type="text" name="hrvatski_vocable6" id="vokable6-second-language-input" class="form-control">
                        </div>
                    </div>
                    <div class="form-group col-lg-12">
                        <ul class="pager">
                            <li><a onclick="first_page()"><<</a></li>
                            <li><a onclick="previous_page()"><</a></li>
                            <li><a id="page"></a></li>
                            <li><a onclick="next_page()">></a></li>
                            <li><a onclick="last_page()">>></a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="form-group">
                        <label class="control-label" for="wordlist">wordlist:</label>
                        <textarea class="form-control" rows="30" name="wordlist" id="wordlist" readonly></textarea>
                    </div>
                    <button type="button" class="btn btn-primary btn-sm" onclick="change_wordlist()">Show wordlist(unsorted)</button>
                    <button type="button" class="btn btn-primary btn-sm" onclick="sort_wordlist()">Sort and show wordlist</button>
                    <button type="submit" class="btn btn-primary btn-sm">Save to file</button>
                </div>
                <div>
                    <p>Fehler: nach speichern zurueck zu ausgewaehlter datei</p>
                    <p>Fehler: cache from Browser verursacht fehler</p>
                </div>
            </form>
<?php
            
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $file = $_POST["file"];
    echo $file;
    $txt = $_POST["wordlist"];
    $myfile = fopen($file, "w") or die("Unable to open file!");
    fwrite($myfile, $txt);
    fclose($myfile);
}
            
?>
        </div>
    </div>   
    <!-- /.container -->
   
    <script>
        var vokablelist=[];
        var page_nr, pages;
        var url;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    dateiliste = JSON.parse(this.responseText);
                }
        };
        xmlhttp.open("GET", "../json/dateiliste.json", false);
        xmlhttp.send();
        filelist_entry="";
        for (s9 = 0; s9 < dateiliste.length; s9++) { 
            filelist_entry +=  "<option>" + "../json/" + dateiliste[s9] +".json" + "</option>";
        }
        document.getElementById("filelist").innerHTML = filelist_entry;             
        load_from_file();        
        give_focus_to_vokable_input();
        
        function give_focus_to_vokable_input() {
            document.getElementById("vokable1-first-language-input").focus();
        }
        
        function first_page() {
            page_nr=0;
            document.getElementById("page").innerHTML=page_nr+1;
            for (s1 = 0; s1 < 6; s1++) {
                document.forms["vokabluar-input-form"]["vokable"+(s1+1)+"-first-language-input"].value="";
                document.forms["vokabluar-input-form"]["vokable"+(s1+1)+"-second-language-input"].value="";
            }
            for (s1 = 0+(6*page_nr); s1 < vokablelist.length; s1++) {
                document.forms["vokabluar-input-form"]["vokable"+(s1-(6*page_nr)+1)+"-first-language-input"].value=vokablelist[s1]["deutsch"];
                document.forms["vokabluar-input-form"]["vokable"+(s1-(6*page_nr)+1)+"-second-language-input"].value=vokablelist[s1]["hrvatski"];
            }
        }
        
        function last_page() {
            page_nr=pages;
            document.getElementById("page").innerHTML=page_nr+1;
            for (s1 = 0; s1 < 6; s1++) {
                document.forms["vokabluar-input-form"]["vokable"+(s1+1)+"-first-language-input"].value="";
                document.forms["vokabluar-input-form"]["vokable"+(s1+1)+"-second-language-input"].value="";
            }
            for (s1 = 0+(6*page_nr); s1 < vokablelist.length; s1++) {
                document.forms["vokabluar-input-form"]["vokable"+(s1-(6*page_nr)+1)+"-first-language-input"].value=vokablelist[s1]["deutsch"];
                document.forms["vokabluar-input-form"]["vokable"+(s1-(6*page_nr)+1)+"-second-language-input"].value=vokablelist[s1]["hrvatski"];
            }
        }
        
        function previous_page() {
            change_wordlist();
            if (page_nr>0) {
                page_nr--;
            }
            document.getElementById("page").innerHTML=page_nr+1;
            for (s1 = 0+(6*page_nr); s1 < vokablelist.length; s1++) {
                document.forms["vokabluar-input-form"]["vokable"+(s1-(6*page_nr)+1)+"-first-language-input"].value=vokablelist[s1]["deutsch"];
                document.forms["vokabluar-input-form"]["vokable"+(s1-(6*page_nr)+1)+"-second-language-input"].value=vokablelist[s1]["hrvatski"];
            }
        }
        
        function next_page() {
            change_wordlist();
            if (page_nr<pages) {
                page_nr++;
            } else if (page_nr==pages && (vokablelist.length%6)==0 && vokablelist.length!=0 && pages<(Math.floor((vokablelist.length-1)/6))+1) {
                pages++;
                page_nr=pages;
            }
            document.getElementById("page").innerHTML=page_nr+1;
            for (s1 = 0; s1 < 6; s1++) {
                document.forms["vokabluar-input-form"]["vokable"+(s1+1)+"-first-language-input"].value="";
                document.forms["vokabluar-input-form"]["vokable"+(s1+1)+"-second-language-input"].value="";
            }
            for (s1 = 0+(6*page_nr); s1 < vokablelist.length; s1++) {
                document.forms["vokabluar-input-form"]["vokable"+(s1-(6*page_nr)+1)+"-first-language-input"].value=vokablelist[s1]["deutsch"];
                document.forms["vokabluar-input-form"]["vokable"+(s1-(6*page_nr)+1)+"-second-language-input"].value=vokablelist[s1]["hrvatski"];
            }
        }
        
        function change_wordlist() {
            for (s0 = 0; s0 < 6; s0++) {
                var x=document.forms["vokabluar-input-form"]["vokable"+(s0+1)+"-first-language-input"].value;
                var y=document.forms["vokabluar-input-form"]["vokable"+(s0+1)+"-second-language-input"].value;
                if (x != null && x != "" && y != null && y != "") {
                    vokablelist[s0+(6*page_nr)]={"deutsch":x,"hrvatski":y};
                }
                else {
                    vokablelist.splice(s0+(6*page_nr),1);
                }
            }           
//            last_page();            
            document.forms["vokabluar-input-form"]["wordlist"].value=JSON.stringify(vokablelist);
        }
        
        function sort_wordlist() {
            for (s0 = 0; s0 < 6; s0++) {
                var x=document.forms["vokabluar-input-form"]["vokable"+(s0+1)+"-first-language-input"].value;
                var y=document.forms["vokabluar-input-form"]["vokable"+(s0+1)+"-second-language-input"].value;
                if (x != null && x != "" && y != null && y != "") {
                    vokablelist[s0+(6*page_nr)]={"deutsch":x,"hrvatski":y};
                }
                else {
                    vokablelist.splice(s0+(6*page_nr),1);
                }
            }
            vokablelist.sort(function(a, b){
                var x = a.deutsch.toLowerCase();
                var y = b.deutsch.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            last_page();            
            document.forms["vokabluar-input-form"]["wordlist"].value=JSON.stringify(vokablelist);
        }
        
        function load_from_file() {
            url = "../json/"+dateiliste[document.getElementById("filelist").selectedIndex]+".json";
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    vokablelist = JSON.parse(this.responseText);
                }
            };
            xmlhttp.open("GET", url, false);
            xmlhttp.send();
            
            pages=Math.floor((vokablelist.length-1)/6);
            if (vokablelist.length==0) {
                pages=0
            }
            page_nr=pages;
            
            document.getElementById("page").innerHTML=page_nr+1;
            for (s1 = 0; s1 < 6; s1++) {
                document.forms["vokabluar-input-form"]["vokable"+(s1+1)+"-first-language-input"].value="";
                document.forms["vokabluar-input-form"]["vokable"+(s1+1)+"-second-language-input"].value="";
            }
            for (s1 = 0+(6*page_nr); s1 < vokablelist.length; s1++) {
                document.forms["vokabluar-input-form"]["vokable"+(s1-(6*page_nr)+1)+"-first-language-input"].value=vokablelist[s1]["deutsch"];
                document.forms["vokabluar-input-form"]["vokable"+(s1-(6*page_nr)+1)+"-second-language-input"].value=vokablelist[s1]["hrvatski"];
            }
            document.forms["vokabluar-input-form"]["wordlist"].value=JSON.stringify(vokablelist);
        }        

    </script>
    
    <!-- jQuery Version 1.11.1 -->
    <script src="../js/jquery.js"></script>
    
    <!-- Bootstrap Core JavaScript -->
    <script src="../js/bootstrap.min.js"></script>
    
</body>
</html>