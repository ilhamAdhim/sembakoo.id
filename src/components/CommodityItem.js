class CommodityItem extends HTMLElement {
    constructor() {
        super();
    }

    set commodity(commodity) {
        this._commodity = commodity;
        this.loadIconCommodity();
        this.render();;
    }

    loadLogoProvince() {

    }

    loadIconCommodity() {
        let lowerCasedItem = this._commodity.item.toLowerCase();
        this._commodity['commodity_icon'] = `./src/assets/${lowerCasedItem.replace(' ', '-')}.png`;
        console.log(this._commodity['commodity_icon']);
    }

    render() {
        // this.className = "card mb-2";

        this.innerHTML = `
        <div class="card_commodity">
        <div style="">${this._commodity.province.display}</div>
        <img src="${this._commodity['commodity_icon']}" height="250" style="opacity:0.5">
            <div style="">${this._commodity.item}</div>
            <div style="">${this._commodity.province.name}</div>
        </div>
        `;
    }
}


customElements.define("commodity-item", CommodityItem);