

const listView = document.getElementById("listView");
const gridView = document.getElementById("gridView");
const cardGridView = document.getElementById("cardGridView");

listView.addEventListener("click", toggleListView);
gridView.addEventListener("click", toggleGridView);

function toggleListView() {
    if (!listView.classList.contains('active')) {
        listView.classList.add("active");
    }
    cardGridView.classList.add("gridView");
    if (gridView.classList.contains('active')) {
        gridView.classList.remove("active");
    }
}

function toggleGridView() {
    if (listView.classList.contains('active')) {
        listView.classList.remove("active");
    }
    if (!gridView.classList.contains('active')) {
        gridView.classList.add("active");
    }
    gridView.classList.add("active");
    cardGridView.classList.remove("gridView");
}