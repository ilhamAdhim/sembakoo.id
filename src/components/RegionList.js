import './RegionItem'
class RegionList extends HTMLElement {
    constructor() {
        super();
    }
    set regions(regions) {
        this._regions = regions;
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
        // console.log(_.has(this._regions[0][0], 'attributes.Country_Region'));
        this.className = "card-deck d-flex flex-sm-column flex-md-row";
        this._regions.forEach(region => {
            const createRegionItemElement = document.createElement("region-item");
            createRegionItemElement.region = region;
            this.appendChild(createRegionItemElement);
        })
    }
}

customElements.define("region-list", RegionList);
