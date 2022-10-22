import axios from "axios";
const id=localStorage.getItem('Authorization')
const claimID = JSON.parse(id);
//const token=localStorage.getItem('Token')
class ClaimService {
    baseUrl ="http://localhost:8100/claim";

    register(data) {
        return axios.post(`${this.baseUrl}/Signup`, data);
      } 
      getAllClaimedInsurance() {
        return axios.get(`${this.baseUrl}/get`);
      }

      updateById(id,data) {
        return axios.put(`${this.baseUrl}/updateById/${id}`,data);
      }
      deleteById(id) {
        return axios.delete(`${this.baseUrl}/delete/${id}`);
      }

    userLogin(data) {
      return axios.post(`${this.baseUrl}/login`,data);
    }

}


export default new ClaimService();
