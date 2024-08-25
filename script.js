document.getElementById("toggleBtn").addEventListener("click", function() {
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("overlay");

    drawer.classList.add("active");
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
});

document.getElementById("closeBtn").addEventListener("click", function() {
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("overlay");

    drawer.classList.remove("active");
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
});

document.getElementById("overlay").addEventListener("click", function() {
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("overlay");

    drawer.classList.remove("active");
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
});
