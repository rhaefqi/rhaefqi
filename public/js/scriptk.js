//hamburger kampus
// const navDef = document.getElementById("dropMenu");

const hamburgerk = () => {
    const nav = document.getElementById("dropMenu");
    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden");
        document.body.style.overflow = 'hidden';
    } else {
        nav.classList.add("hidden");
        document.body.style.overflow = 'auto';
    }
}