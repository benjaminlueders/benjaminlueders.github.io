$(document).ready(function () {

    var engImgLink = "images/croatian-flag-graphic.png";
    var deuImgLink = "images/german-flag-graphic.png";
    var imgBtnSel = $('#imgBtnSel');
    var imgBtnEng = $('#imgBtnEng');
    var imgBtnDeu = $('#imgBtnDeu');
    var imgNavSel = $('#imgNavSel');
    var imgNavEng = $('#imgNavEng');
    var imgNavDeu = $('#imgNavDeu');
    var spanNavSel = $('#lanNavSel');
    var spanBtnSel = $('#lanBtnSel');
    imgBtnSel.attr("src", deuImgLink);
    imgBtnEng.attr("src", engImgLink);
    imgBtnDeu.attr("src", deuImgLink);
    imgNavSel.attr("src", deuImgLink);
    imgNavEng.attr("src", engImgLink);
    imgNavDeu.attr("src", deuImgLink);

    $(".language").on("click", function (event) {
        var currentId = $(this).attr('id');

        if (currentId == "navEng") {
            imgNavSel.attr("src", engImgLink);
            spanNavSel.text("HR");
            set_word();
        } else if (currentId == "navDeu") {
            imgNavSel.attr("src", deuImgLink);
            spanNavSel.text("DE");
            set_word();
        }
    });
});
