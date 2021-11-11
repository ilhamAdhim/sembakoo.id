import axios from "axios";

class DataSource {
    static getData(country = null) {

        // Confirmed, recovered, death data from certain country
        return axios.get(`https://jibs.my.id/api/harga_komoditas`)
    }
}
export default DataSource;