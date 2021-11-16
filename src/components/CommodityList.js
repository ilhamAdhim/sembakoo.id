import './CommodityItem'

class CommodityList extends HTMLElement {
    constructor() {
        super();
    }
    set commodities(commodities) {
        this._commodities = commodities;
        this.render();
    }

    render() {
        let delay = 0;
        this._commodities?.forEach(commodity => {
            delay += 50
            const createCommodityItemElement = document.createElement("commodity-item");
            createCommodityItemElement.commodity = commodity;
            createCommodityItemElement.delayValue = delay;

            this.appendChild(createCommodityItemElement);
        });
    }
}

customElements.define("commodity-list", CommodityList);
