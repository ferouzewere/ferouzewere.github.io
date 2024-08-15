const items = [
    'A Creative Graphic Designer,',
    '&',
    'Web Developer',
    'based in Nairobi, KENYA.'
]
const app = document.getElementById('app')
let count = 0
let index = 0
let typingEffect = () => {
    let text = items[index]
    if (count < text.length) {
        setTimeout(() => {
            app.innerHTML += text[count]
            count++
            typingEffect()
        }, Math.floor(Math.random(10) * 100))
    } else {
        count = 0;
        index = (index + 1 < items.length) ? index + 1 : 0
        setTimeout(() => {
            app.innerHTML = ''
            typingEffect()
        }, 1500)
    }
}

typingEffect()