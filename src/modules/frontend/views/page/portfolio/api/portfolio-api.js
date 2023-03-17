import Axios from "axios";
const RESOURCE_NAME = "/api/v1/project";

export default {
  getAllAppData(page, limit) {
    return Axios.get(
      `${RESOURCE_NAME}/all-app-view?page=${page}&limit=${limit}`
    );
  },

  getWebAppData(page, limit) {
    return Axios.get(
      `${RESOURCE_NAME}/web-app-view?page=${page}&limit=${limit}`
    );
  },

  getAppAppData(page, limit) {
    return Axios.get(
      `${RESOURCE_NAME}/app-app-view?page=${page}&limit=${limit}`
    );
  },

  getGraphicsAppData(page, limit) {
    return Axios.get(
      `${RESOURCE_NAME}/graphics-app-view?page=${page}&limit=${limit}`
    );
  },
};
