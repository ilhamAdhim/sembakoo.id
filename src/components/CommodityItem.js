class CommodityItem extends HTMLElement {
    constructor() {
        super();
    }

    set commodity(commodity) {
        this._commodity = commodity;
        this.loadIconCommodity();
        this.render();
    }

    set delayValue(delayValue) {
        this._delayValue = delayValue;
        this.render();
    }

    loadIconCommodity() {
        let lowerCasedItem = this._commodity.item.toLowerCase();
        this._commodity['commodity_icon'] = `./src/assets/${lowerCasedItem.replace(' ', '-')}.png`;
    }


    formatIDR(price) {
        return Intl.NumberFormat("en-ID", {
            style: "currency",
            currency: "IDR",
        }).format(price);
    }

    render() {
        let displayPrice;
        if (this._commodity?.province?.value === null || this._commodity.harga === null)
            displayPrice = 'Price unavailable';
        else {
            displayPrice = this._commodity?.province?.value || this._commodity.harga;
            displayPrice = this.formatIDR(displayPrice).replace('IDR', 'Rp');
        }

        this.setAttribute('data-aos', 'fade-left');
        this.setAttribute('data-aos-delay', this._delayValue);
        this.innerHTML = `
        <img src="${this._commodity['commodity_icon']}" class="commodity_image">
        <div class="card_commodity">
            <div class="commodity_name">${this._commodity?.item}</div>
            <div class="commodity_price">${displayPrice}</div>
            <div class="commodity_province">${this._commodity?.province?.name || ''}</div>
        </div>
        `;
    }
}


customElements.define("commodity-item", CommodityItem);