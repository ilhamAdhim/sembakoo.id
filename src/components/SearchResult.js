class SearchResult extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.renderInitial();
    }

    set currentProvince(province) {
        this._province = province;
        this.render();
    }

    set commodities(commodities) {
        this._commodities = commodities;
        this.render();
    }

    renderInitial() {
        this.innerHTML = `
        <div class="search-initial">
            <img src="./src/assets/initial_search_area.svg" alt="" width="400px" height="200px">
            <div > Let's start searching </div>
        </div>
        `;
    }
    render() {
        this.innerHTML = `
                <div class="search_result_province" style="background: url('./src/assets/Logo Provinsi ${this._province}.png') no-repeat 50% 10vh;
                 background-size : 15vw 17vw;">
                    <div class="province_name" data-aos="fade-down"> Provinsi ${this._province} </div>
                    <img src="./src/assets/search_province.svg" alt="${this._province}">
                </div>
                <div id="search_result_commodities">
                    <commodity-list></commodity-list>
                </div>
        `;

        const searchResultCommoditiesElement = document.querySelector("#search_result_commodities > commodity-list");
        searchResultCommoditiesElement.commodities = this._commodities;
    }
}

customElements.define("search-result", SearchResult);
