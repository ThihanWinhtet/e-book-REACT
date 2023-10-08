import { useQuery } from "react-query";
import APIClient from "../Services/api-client";

const apiClient = new APIClient("users");

const useSignup = (userData: any) =>
  useQuery({
    queryKey: ["signup"],
    queryFn: () => apiClient.post(userData),
  });

export default useSignup;
