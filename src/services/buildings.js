import http from "./http-common";
class BuildingsDataService {
  create(data) {
    return http.post("/schedule-t3/buildings", data);
  }
  update(id, data) {
    return http.post(`/schedule-t3/buildings/${id}`, data);
  }
}
export default new BuildingsDataService();
