class Footer extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        // console.log(this._region)
        /*  this.className = "card mb-2";
         this.innerHTML = `
                 <div class="container p-2">
                     <div class="row">
                         <div class="col-sm-4 text-center">
                             <img class="center" src="${this._region.image} " alt="${this._region.Country_Region}" width="60" height="60">
                         </div>
                         <div class="col-sm-8 text-center text-dark ">
                             <h4>${this._region.Country_Region}</h4>
                         </div>
                     </div>
                     <hr >
                     <div class="card-body p-2" style="padding:0">    
                         <div class="d-flex flex-md-column flex-lg-row  text-center">
                             <div class="p-2 flex-fill text-success">
                                     Sembuh  ${this._region.Recovered.toLocaleString("en")}
                             </div>
                             <div class="p-2 flex-fill text-warning">
                                     Positif  ${this._region.Confirmed.toLocaleString("en")}
                             </div>
                             <div class="p-2 flex-fill text-danger">
                                 Meninggal ${this._region.Deaths.toLocaleString("en")}
                             </div>
                         </div>
                     </div>
                 </div>`; */
    }
}


customElements.define("region-item", RegionItem);