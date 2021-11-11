class CommodityItem extends HTMLElement {
    constructor() {
        super();
    }

    set commodity(commodity) {
        this._commodity = commodity
        /* this.commodity['logo_province'] = ``
        this.commodity['commodity_icon'] = `` */
        this.render();
    }

    loadLogoProvince() {

    }

    loadIconCommodity() {

    }

    render() {
        console.log(this._commodity)
        // this.className = "card mb-2";

        this.innerHTML = `
        <div style="display: flex">
            <div style="">${this._commodity.item}</div>
            <div style="">${this._commodity.province.name}</div>
        </div>`
        /* this.innerHTML = `
                 <div class="container p-2">
                     <div class="row">
                         <div class="col-sm-4 text-center">
                             <img class="center" src="${this.province.logo_province} " alt="${this.province.name}" width="60" height="60">
                         </div>
                         <div class="col-sm-8 text-center text-dark ">
                             <h4>${this.province.Countryprovince}</h4>
                         </div>
                     </div>
                     <hr >
                     <div class="card-body p-2" style="padding:0">    
                         <div class="d-flex flex-md-column flex-lg-row  text-center">
                             <div class="p-2 flex-fill text-success">
                                     Sembuh  ${this.province.Recovered.toLocaleString("en")}
                             </div>
                             <div class="p-2 flex-fill text-warning">
                                     Positif  ${this.province.Confirmed.toLocaleString("en")}
                             </div>
                             <div class="p-2 flex-fill text-danger">
                                 Meninggal ${this.province.Deaths.toLocaleString("en")}
                             </div>
                         </div>
                     </div>
                 </div>`; */
    }
}


customElements.define("commodity-item", CommodityItem);