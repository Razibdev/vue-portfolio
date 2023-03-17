import Axios from "axios";
const RESOURCE_NAME = "/api/v1/project";

export default {
  addProjectFormSubmit(data) {
    return Axios.post(`${RESOURCE_NAME}/add_project`, data);
  },

  viewProjectData(page) {
    return Axios.get(`${RESOURCE_NAME}/view_project?page=${page}&limit=2`);
  },

  ///project sub menu section
  addProjectSubFormSubmit(data, pid) {
    return Axios.post(`${RESOURCE_NAME}/${pid}/add_sub_project`, data);
  },

  viewProjectMenuData(page, pid, limit) {
    return Axios.post(`${RESOURCE_NAME}/${pid}/view_sub_project?page=${page}&limit=${limit}`);
  },
  deleteProjectSubMenu(pid) {
    return Axios.delete(`${RESOURCE_NAME}/${pid}/delete_sub_project`);
  },












};
