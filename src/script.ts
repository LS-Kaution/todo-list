const logoTitle = document.querySelector('#logo-title')
logoTitle?.addEventListener('click', reload)

function reload() {
    location.reload()
}