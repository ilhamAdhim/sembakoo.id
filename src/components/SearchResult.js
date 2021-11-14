class SearchResult extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.renderInitial();
    }

    set currentProvince(province) {
        this._province = province
        this.render();
    }

    set commodities(commodities) {
        this._commodities = commodities;
        this.render();
    }

    renderInitial() {
        this.innerHTML = `
        <div>
            <img src="./src/assets/initial_search_area.svg" alt="" width="400px" height="200px">
            <div style="text-decoration : underline; font-weight:700"> Let's start searching </div>
        </div>
        `
    }
    render() {
        this.innerHTML = `
                <div style="background: url('./src/assets/Logo Provinsi ${this._province}.png') no-repeat 50% 25%;
                 background-size : 80px 100px;">
                    <center> <b> Provinsi ${this._province} </b></center>
                    <img src="./src/assets/search_province.svg" alt="">
                </div>
                <div id="search_result_commodities">
                    <commodity-list></commodity-list>
                </div>
        `;

        const searchResultCommoditiesElement = document.querySelector("#search_result_commodities > commodity-list");
        console.log(searchResultCommoditiesElement)
        searchResultCommoditiesElement.commodities = this._commodities;
    }
}

customElements.define("search-result", SearchResult);
