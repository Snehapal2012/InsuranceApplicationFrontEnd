import axios from "axios";
const id=localStorage.getItem('Authorization')
const userId = JSON.parse(id);
//const token=localStorage.getItem('Token')
class UserService {
    baseUrl ="http://localhost:8100/user";

    addUser(data) {
        return axios.post(`${this.baseUrl}/Signup`, data);
      } 
      getAllBooks() {
        return axios.get(`${this.baseUrl}/get`);
      }

      getUserById(user_Id) {
        return axios.get(`${this.baseUrl}/get user/{user_Id}`);
      }
      getUserEmailId(data) {
        return axios.get(`${this.baseUrl}/user`, data);
      }

    userLogin(data) {
      return axios.post(`${this.baseUrl}/login`,data);
    }

}


export default new UserService();
