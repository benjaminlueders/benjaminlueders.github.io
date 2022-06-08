var LEFT_MOUSE_BUTTON = 1;
var idTds = $('tr');
idTds.each(function (idx, val) {
    
    $(val).mousedown(function (event) {
        if (event.which != LEFT_MOUSE_BUTTON) {
            return;
        }
        var row = idTds[idx];
        if (row.className == 'selected') {
            row.className = '';
            for (i = 0; i < practice_list.length; i++) {
                if (practice_list[i].de_word == vocabulary[idx-1].de_word) {
                    practice_list.splice(i, 1);
                }
            }

        } else {
            row.className = 'selected';
            practice_list.push(vocabulary[idx - 1]);
        }
        document.getElementById("hiddentextarea").innerHTML = JSON.stringify(practice_list);
    });
});
