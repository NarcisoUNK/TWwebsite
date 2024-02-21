function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    var content = document.querySelector(".content");
    if (sidebar.style.width === "200px") {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
    } else {
        sidebar.style.width = "200px";
        content.style.marginLeft = "220px";
    }
}