class CommodityItem extends HTMLElement {
    constructor() {
        super();
    }

    set commodity(commodity) {
        this._commodity = commodity;
        this.loadIconCommodity();
        this.render();
    }

    loadIconCommodity() {
        let lowerCasedItem = this._commodity.item.toLowerCase();
        this._commodity['commodity_icon'] = `./src/assets/${lowerCasedItem.replace(' ', '-')}.png`;
    }

    render() {
        this.innerHTML = `
        <img src="${this._commodity['commodity_icon']}" class="commodity_image">
        <div class="card_commodity">
            <div style="">${this._commodity?.province?.display || this._commodity.harga}</div>
            <div style="">${this._commodity?.item}</div>
            <div style="">${this._commodity?.province?.name || ''}</div>
        </div>
        `;
    }
}


customElements.define("commodity-item", CommodityItem);