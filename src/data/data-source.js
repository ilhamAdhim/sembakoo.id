import axios from "axios";

class DataSource {
    static getData(country = null) {

        // Confirmed, recovered, death data from certain country
        return axios.get(`https://data.covid19.go.id/public/api/update.json`)
    }
}
export default DataSource;