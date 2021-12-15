// import {Shoes} from './shoes.js'
// import {Cake} from './cake.js'

import {Shoes} from './funshoes.js'
import {Cake} from './funcake.js'

import {masSh} from './data.js'
import {masC} from './data.js'

Shoes.komp = 'Well'
Shoes.city = 'Rome'

Cake.komp = 'Great'
Cake.city = 'London'

masSh.forEach(item=>{
    new Shoes(item.name, item.price, item.amount, item.nds, item.size, item.release, item.warranty).createCard('./jhn.jpg', 300, 'card', '.cards')
})

masC.forEach(item=>{
    new Cake(item.name, item.price, item.amount, item.nds, item.ves, item.kol, item.release, item.warranty).createCard('./fon.webp', 300, 'card', '.cards2')
})


// let object1 = new Item('Плющевая собака', 500, 200)
// let object2 = new Item('Плющевый медведь', 400, 300)

// let shoesObj = new Shoes('Туфли лаковые', 150, 30, 65, new Date(2020, 11, 1), 20)
// let cakeObj = new Cake('Торт "Наполеон"', 300, 200, 500, 1200, new Date(2021, 11, 31), 15)

// console.log(object1.toString())
// console.log('2 ' + object2)
// console.log(object2)
// console.log(typeof Item)


// console.log(shoesObj.showImage('./jhn.jpg', 300))
// cakeObj.showImage('./jhn.jpg', 300, '.card')
// shoesObj.showImage('./jhn.jpg', 600, '.card')

// console.log('' + shoesObj)
// console.log('' + cakeObj)

// object1.createCard('.card')
// object2.createCard('.card')
// object1.createCard('./jhn.jpg', 300, 'card', '.cards2')
// object2.createCard('./jhn.jpg', 300, 'card', '.cards2')
// shoesObj.createCard('./jhn.jpg', 300, 'card', '.cards')
// cakeObj.createCard('./jhn.jpg', 300, 'card', '.cards')