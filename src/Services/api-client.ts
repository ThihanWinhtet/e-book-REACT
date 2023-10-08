import axios from "axios";

let axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

class APIClient {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get(this.endpoint).then((res) => res.data);
  };

  post = (config: any) => {
    return axiosInstance.post(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
