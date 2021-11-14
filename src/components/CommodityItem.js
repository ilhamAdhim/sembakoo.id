class CommodityItem extends HTMLElement {
    constructor() {
        super();
    }

    set commodity(commodity) {
        this._commodity = commodity;
        this.loadIconCommodity();
        if (commodity.roleElement === "highestPriceElement")
            this.render();
        else
            this.renderSearchResult();
    }

    loadLogoProvince() {

    }

    loadIconCommodity() {
        let lowerCasedItem = this._commodity.item.toLowerCase();
        this._commodity['commodity_icon'] = `./src/assets/${lowerCasedItem.replace(' ', '-')}.png`;
    }

    render() {
        this.innerHTML = `
        <img src="${this._commodity['commodity_icon']}" class="commodity_image">
        <div class="card_commodity">
            <div style="">${this._commodity.province.display}</div>
            <div style="">${this._commodity.item}</div>
            <div style="">${this._commodity.province.name}</div>
        </div>
        `;
    }

    renderSearchResult() {
        this.innerHTML = `
        hasil search ${this._commodity.item}
        `;
    }
}


customElements.define("commodity-item", CommodityItem);