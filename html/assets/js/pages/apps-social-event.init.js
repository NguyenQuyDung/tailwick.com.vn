

var options = new List("eventList", {
    valueNames: [
        "event_name",
        "start_date",
        "end_date",
        "number",
        "total",
        "status"
    ],
});

// sortble-dropdown
var sorttableDropdown = document.querySelectorAll('.sortble-dropdown');
if (sorttableDropdown) {
    sorttableDropdown.forEach(function (elem) {
        elem.querySelectorAll('.dropdown-menu .dropdown-item').forEach(function (item) {
            item.addEventListener('click', function () {
                var getHtml = item.innerHTML;
                elem.querySelector('.dropdown-title').innerHTML = getHtml;
            });
        });
    });
}