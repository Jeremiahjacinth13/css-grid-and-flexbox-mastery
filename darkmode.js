function toggleTheme() {
    const html = document.querySelector('html');
    let currentTheme = html.classList.contains('dark') ? 'dark' : 'light';

    if (currentTheme === 'dark') {
        html.classList.remove('dark')
        html.classList.add('light')
        currentTheme = 'light'
    } else if(currentTheme) {
        html.classList.remove('light')
        html.classList.add('dark')
        currentTheme = 'dark'
    }

    document.querySelector('h2').textContent = 'Currently in ' + currentTheme + ' mode'
}


function useSystemDefault(){
    const html = document.querySelector('html')
    
    html.classList.remove('dark')
    html.classList.remove('light')
    
    document.querySelector('h2').textContent = 'Currently using the device\'s default theme'

}

function setTheme(e){
    const html = document.querySelector('html')
    let modeToSwitchTo = e.currentTarget.id
    const h2 = document.querySelector('h2')

    switch (modeToSwitchTo) {
        case 'lightMode':
            html.classList.remove('dark')
            html.classList.add('light')

            h2.textContent = 'Currently using light theme'
            break;
        case 'darkMode':
            html.classList.remove('light')
            html.classList.add('dark')

            h2.textContent = 'Currently using dark theme'
            break;
        default:
            html.classList.remove('light')
            html.classList.remove('dark')

            h2.textContent = 'Currently using device\'s default theme'
            break;
    }
}

document.getElementById('systemDefault').addEventListener('click', setTheme)
document.getElementById('lightMode').addEventListener('click', setTheme)
document.getElementById('darkMode').addEventListener('click', setTheme)