import {Item, ItemMethods} from './funItem.js'

export function Shoes(name, price, amount, nds, size, release, warranty) {
    Item.call(this, name, price, amount);
    this.size = size
    this.release = release  // год выпуска
    this.warranty = warranty // гарантия
    this.nds = nds
}
console.log(Item);

Shoes.prototype.endOfWarranty = function () {
    return new Date(this.release.getFullYear() + this.warranty, this.release.getMonth(), this.release.getDate());
}

Shoes.prototype.toString = function () {
    return `${ItemMethods.toString.call(this)}\n размер - ${this.size}, год выпуска - ${this.release.toLocaleDateString()}<br> гарантия - ${this.warranty} лет, Дата окончания гарантийного срока обслуживания - ${this.endOfWarranty().toLocaleDateString()} г.<p> Компания-производитель - ${Shoes.komp}, Город, в котором расположено производство - ${Shoes.city}</p>`
}

Object.setPrototypeOf(Shoes.prototype, Item.prototype)