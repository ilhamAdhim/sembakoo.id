import DataSource from '../data/data-source.js';
import _ from 'lodash';

const STORAGE_KEY = 'PRICE_COMMODITY_APPS'


const main = () => {
    let resultAPI = [];
    const lastUpdatedElement = document.getElementById("last-updated")
    const searchBarElement = document.querySelector("search-bar");
    const highestPriceCommoditiesElement = document.querySelector(".highest-price-commodities > commodity-list");

    const fetchData = async () => {
        try {
            resultAPI = await DataSource.getData();
            let commodities = resultAPI.data.national_commodity_price;

            // Assign to localStorage
            const parsed = JSON.stringify(resultAPI.data);
            localStorage.setItem(STORAGE_KEY, parsed);

            console.log("fetch api berhasil");

            lastUpdatedElement.innerText += ` ${resultAPI.data.updated_at}`;
            getHighestPriceForCommodities(resultAPI);


        } catch (error) {
            loadDataFromCache();
        }
    }

    const getHighestPriceForCommodities = (data) => {
        let highestPriceItem = [];
        for (const key of Object.keys(data.national_commodity_price)) {
            let province = _.maxBy(data.national_commodity_price[key], 'value');
            if (key === "Cabai Rawit")
                continue;
            highestPriceItem.push({ item: key, province });
        }

        // console.log(_.sortBy(highestPriceItem, 'province.value'))
        renderHighestPriceForCommodities(highestPriceItem)
    }

    const renderHighestPriceForCommodities = (highestPriceItem) => {
        highestPriceCommoditiesElement.commodities = highestPriceItem;
    }

    // Fallback method : load from cache if API is down
    const loadDataFromCache = () => {
        try {
            const serializedData = localStorage.getItem(STORAGE_KEY);
            let data = JSON.parse(serializedData);
            console.log("load dari cache");
            if (data !== null)
                resultAPI = data;

            lastUpdatedElement.innerText += ` ${resultAPI.updated_at}`;
            getHighestPriceForCommodities(resultAPI);

        } catch (error) {
            console.log("Data gagal diload", error);
            lastUpdatedElement.innerText = `Loading data...`;
            renderErrorData();
        }

    }

    const onButtonSearchClicked = async () => {

    }

    fetchData()
    searchBarElement.clickEvent = onButtonSearchClicked;
}

const renderErrorData = () => {
    document.getElementById("content").innerHTML = `
    <div class="error-fetch-data"> 
        <div class="error-title">
            Sorry
        </div>
        <img src="./src/assets/undraw_barbecue_3x93.svg">
        <div class="error-caption">
            Data cannot be loaded
        </div>
    </div>`;
}

export default main;
