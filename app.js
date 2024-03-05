
function hightlight([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    ).join('')

   
}




var brand = 'F8'

var course = 'Javascript'

var fb = 'rat hay'

const html = hightlight
    `Học lập trình ${course} tại ${brand} nhé ${fb}!`

console.log(html)