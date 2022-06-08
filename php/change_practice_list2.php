<?php
    
header("Cache-Control: max-age=0, no-cache, no-store, must-revalidate"); // HTTP/1.1
header("Expires: Wed, 11 Jan 1984 05:00:00 GMT"); // Date in the past


    if ($_SERVER["REQUEST_METHOD"] == "POST") {        
        $txt= json_decode($_POST["practice_list"]);        
        $myJSON = json_encode($txt, JSON_PRETTY_PRINT);
        if ($myJSON == "null") { 
            $myJSON = "[]";
        }
        $myfile = fopen("../json/practice_list.json", "w") or die("Unable to open file!");
        fwrite($myfile, $myJSON);
        fclose($myfile);
    }
    
    
?>
    <META http-equiv="refresh" content="0;URL=../change_practice_list.php">
