

//user list Table
var options = {
    valueNames: [
        "user-id",
        "name",
        "location",
        "email",
        "phone-number",
        "joining-date",
        "status"
    ],
};

// Init list
var usersTable = new List("usersTable", options).on("updated", function (list) {
    if (document.getElementsByClassName("noresult") && document.getElementsByClassName("noresult")[0]) {
        list.matchingItems.length == 0 ?
            (document.getElementsByClassName("noresult")[0].style.display = "block") :
            (document.getElementsByClassName("noresult")[0].style.display = "none");

        if (list.matchingItems.length > 0) {
            document.getElementsByClassName("noresult")[0].style.display = "none";
        } else {
            document.getElementsByClassName("noresult")[0].style.display = "block";
        }
    }
});