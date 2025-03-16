document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".clickable-image");
    const modal = document.createElement("div");
    modal.id = "image-modal";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "none";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    const modalImg = document.createElement("img");
    modalImg.style.maxWidth = "90%";
    modalImg.style.maxHeight = "90%";
    modal.appendChild(modalImg);

    document.body.appendChild(modal);

    images.forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function () {
            modalImg.src = this.src;
            modal.style.display = "flex";
        });
    });

    modal.addEventListener("click", function () {
        modal.style.display = "none";
    });
});
