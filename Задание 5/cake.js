import {Item} from './script.js'

export class Cake extends Item {

    constructor(name, price, amount, nds, ves, kol, release, warranty) {
        super(name, price, amount, nds);
        this.ves = ves // вес
        this.kol = kol // колории
        this.release = release  // дата изготовления
        this.warranty = warranty // срок хранения
    }

    dateDo() {
        return new Date(this.release.getFullYear(), this.release.getMonth(), this.release.getDate() + this.warranty);
    }

    toString() {
        return `${super.toString()}\n вес - ${this.ves}, колории - ${this.kol} кк<br> дата изготовления - ${this.release.toLocaleDateString()}, срок хранения - ${this.warranty} д., годно до - ${this.dateDo().toLocaleDateString()}
        <p> Компания-производитель - ${Cake.komp}, Город, в котором расположено производство - ${Cake.city}</p>`
    }
}