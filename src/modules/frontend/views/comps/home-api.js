import Axios from "axios";
const RESOURCE_NAME = "/api/v1/users";

export default {
  contactFormSubmit(data) {
    return Axios.post(`${RESOURCE_NAME}/contact`, data);
  },

  getTeamData() {
    return Axios.get(`${RESOURCE_NAME}/get_team_list`);
  },
};
