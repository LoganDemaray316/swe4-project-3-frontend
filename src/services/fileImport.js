import http from "./http-common";

class FileImportService {
  upload(file) {
    return http.get(`/schedule-t3/import/import/${file}`);
  }
}
export default new FileImportService();
