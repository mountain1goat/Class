import {Item} from './script.js'

export class Shoes extends Item {

    constructor(name, price, amount, nds, size, release, warranty) {
        super(name, price, amount, nds);
        this.size = size
        this.release = release  // год выпуска
        this.warranty = warranty // гарантия
    }

    endOfWarranty() {
        return new Date(this.release.getFullYear() + this.warranty, this.release.getMonth(), this.release.getDate());
    }

    toString() {
        return `${super.toString()}\n размер - ${this.size}, год выпуска - ${this.release.toLocaleDateString()}<br> гарантия - ${this.warranty} лет, Дата окончания гарантийного срока обслуживания - ${this.endOfWarranty().toLocaleDateString()} г.<p> Компания-производитель - ${Shoes.komp}, Город, в котором расположено производство - ${Shoes.city}</p>`
    }
}