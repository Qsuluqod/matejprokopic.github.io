const toggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector("nav");

toggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);

    toggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});