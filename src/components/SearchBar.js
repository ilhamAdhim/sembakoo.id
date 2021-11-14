class SearchBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    get value() {
        return this.querySelector("#search_input").value;
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    render() {
        this.setAttribute('id', "search_section")
        this.innerHTML = `
            <input type="text" id="search_input" class="search_input" placeholder="Search Region . . .">
            <button id="btn_search" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>
        `;

        this.querySelector("#btn_search").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
