document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", function () {
        let content = this.nextElementSibling;

        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});