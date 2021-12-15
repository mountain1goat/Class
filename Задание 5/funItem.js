export function Item(name, price, amount, nds = 1.2) {
    this.name = name
    this.price = price
    this.amount = amount
    this.nds = nds
}

export const ItemMethods = {
    getSum() {
        return this.price * this.amount
    },
    toString() {
        return `<h4>Товар: ${this.name}</h4> <b>цена</b> - ${this.price} р., Количество на складе - ${this.amount}<br> Cуммарная стоимость - ${this.getSum()} <br> Cтоимость с учетом НДС - ${~~(this.getSum() * this.nds)} НДС - ${~~this.nds/100}%<br>`
    },
    showImage(img, width) {
        const card = document.createElement('img');
        card.src = img;
        card.width = width;
        return card
    },
    createCard(img, width, classCard, selector) {
        const card = document.createElement('div');
        card.classList.add(classCard);
        card.innerHTML = `<p>${this.toString()}</p>`
        // console.log(card)
        card.append(this.showImage(img, width))
        document.querySelector(selector).append(card);
    }
}

// console.log(ItemMethods);

Object.assign(Item.prototype, ItemMethods)

Object.defineProperty(Item.prototype, 'amount', {
    get() { return this._amount },
    set(value) { this._amount = value < 0 ? -value : value }
})

Item.komp = 'MamaMia';
Item.city = 'Vena';

