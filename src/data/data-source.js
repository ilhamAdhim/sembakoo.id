import axios from "axios";

class DataSource {
    static getData() {
        return axios.get(`https://jibs.my.id/api/harga_komoditas`);
    }
}
export default DataSource;