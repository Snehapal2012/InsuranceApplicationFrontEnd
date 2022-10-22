import axios from "axios";
const id=localStorage.getItem('Authorization')
const categoryId = JSON.parse(id);

class CategoryService {


baseUrl ="http://localhost:8100/category";

addInsuranceCategory(data) {
    return axios.post(`${this.baseUrl}/addInsuranceCategory`, data);
  }

  getAllInsuranceCategory() {
    return axios.get(`${this.baseUrl}/getAllInsuranceCategory`);
  }

  updateCategory(id,data) {
    return axios.put(`${this.baseUrl}/updateCategory/${id}`, data);
  }

  deleteCategory(id) {
    return axios.delete(`${this.baseUrl}/deleteCategory/${id}`);
  }sortByHigher
}
export default new CategoryService();