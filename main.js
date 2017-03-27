$(document).ready(function () {
    var $nav = $("#navigation");
    var ul = $nav.find("ul")[0];

    $("h1").each(function (i, item) {
        var elementId = item.id;
        var title = item.innerHTML;

        var li = document.createElement("li");

        var a = document.createElement("a");
        a.href = "#" + elementId;
        a.innerHTML = title;

        li.appendChild(a);

        ul.appendChild(li);
    });
});
