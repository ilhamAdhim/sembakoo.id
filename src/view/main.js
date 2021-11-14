import DataSource from '../data/data-source.js';
import _, { values } from 'lodash';
import axios from 'axios';

const STORAGE_KEY = 'PRICE_COMMODITY_APPS'


const main = () => {
    let resultAPI = [];
    const lastUpdatedElement = document.getElementById("last-updated")
    const searchBarElement = document.querySelector("search-bar");
    const searchResultElement = document.querySelector("search-result");

    const highestPriceCommoditiesElement = document.querySelector(".highest-price-commodities > commodity-list");

    const fetchData = async () => {
        try {
            resultAPI = await (await DataSource.getData()).data;
            // Assign to localStorage
            const parsed = JSON.stringify(resultAPI);
            localStorage.setItem(STORAGE_KEY, parsed);

            console.log("fetch api berhasil");

            lastUpdatedElement.innerText += ` ${resultAPI.updated_at}`;
            getHighestPriceForCommodities(resultAPI);
        } catch (error) {
            console.log("cannot fetch data... loading from cache")
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
        // Sort by price in descending order
        highestPriceItem = _.sortBy(highestPriceItem, (item) => parseInt(item.province.value)).reverse()
        renderHighestPriceForCommodities(highestPriceItem)
    }

    const renderHighestPriceForCommodities = (highestPriceItem) => {
        highestPriceCommoditiesElement.commodities = highestPriceItem;
    }

    // Fallback method : load from cache if API is down
    const loadDataFromCache = async () => {
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

    const renderSearchResult = (provincePriceResult) => {
        searchResultElement.currentProvince = _.startCase(searchBarElement.value)
        searchResultElement.commodities = provincePriceResult
    }

    const onButtonSearchClicked = () => {
        let provincePriceResult = [];
        console.log(resultAPI)
        for (const key of Object.keys(resultAPI.national_commodity_price)) {

            let searchResult = _.find(resultAPI.national_commodity_price[key], (item) => {
                return item.name.toLowerCase() === searchBarElement.value.toLowerCase()
            })

            if (key === "Cabai Rawit")
                continue;

            provincePriceResult.push({ item: key, harga: parseInt(searchResult.value) || null })
        }
        provincePriceResult = _.sortBy(provincePriceResult, 'harga')

        console.log(`Hasil search : ${searchBarElement.value}`, provincePriceResult)

        if (provincePriceResult.length === 0)
            renderErrorData(`Cannot find province : ${_.startCase(searchBarElement.value)}`)
        else
            renderSearchResult(provincePriceResult)

    }

    const renderErrorData = (logError = "Data cannot be loaded") => {
        searchResultElement.innerHTML = `
            <div class="error-fetch-data"> 
                <div class="error-title">
                    Sorry
                </div>
                <img src="./src/assets/not_found.svg">
                <div class="error-caption">
                    ${logError}
                </div>
            </div>`;
    }

    fetchData()
    searchBarElement.clickEvent = onButtonSearchClicked;
}


export default main;
