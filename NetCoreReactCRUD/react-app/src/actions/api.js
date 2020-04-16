import Axios, {  } from "axios";

const baseUrl = "http://localhost:50243/api"

export default {
    dCandidate(url = baseUrl + 'dcandidate/'){
        return{
            fetchAll : () => Axios.get(url),
            fetchById : id => Axios.get(url + id),
            create : newRecord => Axios.post(url, newRecord),
            update : (id, updateRecord) => Axios.put(url + id, updateRecord),
            delete : id => Axios.delete(url + id)
        }
    }
}