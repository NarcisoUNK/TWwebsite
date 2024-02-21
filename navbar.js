function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    var content = document.querySelector(".content");
    var closeBtn = document.querySelector(".close-btn");
    
    if (sidebar.style.width === "200px") {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
        closeBtn.innerText = "Open Navbar";
    } else 
        sidebar.style.width = "200px";
        content.style.marginLeft = "220px";
        closeBtn.innerText = "Close Navbar";
    
}
