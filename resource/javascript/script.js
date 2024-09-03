function pop(url) {
    // Check if the modal exists; if not, create it
    let modal = document.getElementById("imageModal");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "imageModal";
        modal.style.position = "fixed";
        modal.style.left = "0";
        modal.style.top = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "1000";
        document.body.appendChild(modal);

        const img = document.createElement("img");
        img.style.maxWidth = "80%";
        img.style.maxHeight = "80%";
        modal.appendChild(img);

        // Close modal on click
        modal.onclick = function () {
            modal.style.display = "none";
        };
    }

    // Set the image URL and display the modal
    modal.querySelector("img").src = url;
    modal.style.display = "flex";
}

$(document).ready(function () {
    $("#toggleButton").click(function () {
        $("#slidingDiv").slideToggle("slow");
    });
});
