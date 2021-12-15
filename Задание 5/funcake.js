import {Item, ItemMethods} from './funItem.js'

export function Cake(name, price, amount, nds, ves, kol, release, warranty) {
    Item.call(this, name, price, amount);
    this.ves = ves // вес
    this.kol = kol // колории
    this.release = release  // дата изготовления
    this.warranty = warranty // срок хранения
    this.nds = nds
}

Object.assign(Cake.prototype, {
    dateDo() {
        return new Date(this.release.getFullYear(), this.release.getMonth(), this.release.getDate() + this.warranty);
    },

    toString() {
        return `${ItemMethods.toString.call(this)}\n вес - ${this.ves}, колории - ${this.kol} кк<br> дата изготовления - ${this.release.toLocaleDateString()}, срок хранения - ${this.warranty} д., годно до - ${this.dateDo().toLocaleDateString()}
        <p> Компания-производитель - ${Cake.komp}, Город, в котором расположено производство - ${Cake.city}</p>`
    }
})

Object.setPrototypeOf(Cake.prototype, Item.prototype)