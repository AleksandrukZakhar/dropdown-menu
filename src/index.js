const showMenu = (trigger, el) => {
    trigger.addEventListener("click", () => {
        trigger.classList.toggle("animate");
        el.classList.toggle("show");
    });
};

showMenu(document.querySelector(".dropdown"), document.querySelector(".menu"));
