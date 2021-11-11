import DataSource from '../data/data-source.js';
import _ from 'lodash';

const main = () => {
    let resultAPI;
    const lastUpdatedElement = document.getElementById("last-updated")
    const fetchAPI = async () => {
        try {
            resultAPI = await DataSource.getData();
            console.log(resultAPI);
        } catch (error) {
            console.log("Data gagal diload");
        }
    }
    fetchAPI()
    lastUpdatedElement.innerText += ` ${new Date().toDateString()}`;
}

export default main;
