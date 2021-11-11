import './CommodityItem'

class CommodityList extends HTMLElement {
    constructor() {
        super();
    }
    set commodities(commodities) {
        console.log(commodities)
        this._commodities = commodities;
        this.render();
    }

    renderError(message) {
        this.innerHTML = `
        <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>`;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this._commodities.forEach(commodity => {
            const createCommodityItemElement = document.createElement("commodity-item");
            createCommodityItemElement.commodity = commodity;
            this.appendChild(createCommodityItemElement);
        });
    }
}

customElements.define("commodity-list", CommodityList);
