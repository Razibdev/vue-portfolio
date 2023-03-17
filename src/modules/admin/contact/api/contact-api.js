import Axios from "axios";
const RESOURCE_NAME = "/api/v1/admin-common";

export default {
  viewContactData(page, view_limit) {
    return Axios.get(`${RESOURCE_NAME}/view_contact_list?page=${page}&limit=${view_limit}`);
  },

  deleteProjectSubMenu(pid) {
    return Axios.delete(`${RESOURCE_NAME}/${pid}/delete_sub_project`);
  },
};
