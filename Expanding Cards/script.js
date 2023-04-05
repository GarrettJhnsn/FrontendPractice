const panels = document.querySelectorAll('.panel')


//Adds Active Class To Selected Panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})


//Function To Remove Active From Non Active Classess
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}