// function for add and remove class on tabs
export function clickOnTabs(event) {
    let elements = document.querySelectorAll("span");
    elements.forEach((value) => {
        value.classList.remove("active-custom-tab-title");
    });
    event.currentTarget.classList.add("active-custom-tab-title");
}