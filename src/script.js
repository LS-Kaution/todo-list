var logoTitle = document.querySelector('#logo-title');
logoTitle === null || logoTitle === void 0 ? void 0 : logoTitle.addEventListener('click', reload);
function reload() {
    location.reload();
}
