$(document).ready(function () {
    function actualizarSalida() {
        $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#css-panel").val() + "</style></head><body>" + $("#html-panel").val() + "</body></html>");
        document.getElementById("output-panel").contentWindow.eval($("#javascript-panel").val());
    }
    $("li").hover(function () {
        $(this).toggleClass("boton-marcado1");
    });

    $("li").click(function () {
        $(this).toggleClass("boton-activo");
        var panelId = "#" + $(this).attr("id") + "-panel";
        $(panelId).toggleClass("oculto");
        var numPanActivos = 4 - $(".oculto").length;
        $(".panel").width($(window).width() / numPanActivos - 10);
    });
    $(".panel").height($(window).height() - $("nav").height());
    $(".panel").width($(window).width() / 2 - 10);
    actualizarSalida();
    $("textarea").on('change keyup paste', function () {
        actualizarSalida();
    });
});
