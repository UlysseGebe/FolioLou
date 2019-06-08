const body = document.querySelector('body')
const home = document.querySelector('.home')
const image = document.querySelector('.image')
const scroll = document.querySelector('.scroll')
const email = document.querySelector('.email')
const button = document.querySelector('.contact .email')

button.addEventListener('click', () => {
    let input = document.createElement("input")
    input.setAttribute("class", "input")
    input.setAttribute("type", "text")
    input.setAttribute("value", "lougloaguen@yahoo.fr")
    body.appendChild(input)
    let copyText = document.querySelector(".input")
    copyText.select()
    document.execCommand("copy")
    input.remove()
})

email.addEventListener('click', () => {
    let text = email.querySelector('p')
    text.classList.add('active')
    setTimeout(() => {
        text.classList.remove('active')
    }, 1000)
})

const scrollF = () => {
    const height = home.offsetHeight
    const scrollY = window.scrollY
    const ratio = scrollY/height
    if (ratio <= 1) {
        image.style.height = (100 - ratio*75)+'%'
        image.style.width = (60 - ratio*45)+'%'
        if (height == 600) {
            image.style.height = 6*(100 - ratio*75)+'px'
        }
    }
    else {
        image.style.width = '15%'
        image.style.height = '25%'
    }

    if (ratio*100 > 10) {
        scroll.style.opacity = "0"
    }
    else {
        scroll.style.opacity = "1"
    }
}
scrollF()
window.addEventListener('scroll', scrollF)
window.addEventListener('resize', scrollF)


const images = document.querySelectorAll('.project div img')
const bigImage = document.querySelector('.bigImage')
const bigImg = bigImage.querySelector('div')

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    image.addEventListener('click', () => {
        let source = image.src
        source = source.replace(/petite/i,"grosse")
        bigImage.style.display = 'flex'
        bigImg.style.backgroundImage = `url('${source}')`
        bigImg.style.opacity = '1'
        body.style.overflow = 'hidden'
    })
}

bigImage.addEventListener('click', () => {
    bigImage.style.display = 'none'
    body.style.overflow = 'scroll'
    bigImg.style.opacity = '0'
})
