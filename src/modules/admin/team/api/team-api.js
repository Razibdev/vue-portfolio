import Axios from "axios";
const RESOURCE_NAME = "/api/v1/users";

export default {
  addTeamMemberFormSubmit(data) {
    return Axios.post(`${RESOURCE_NAME}/add_team_member`, data);
  },
  viewTeamMemeberData(data) {
    return Axios.post(`${RESOURCE_NAME}/view_team_member`, data);
  },
};
