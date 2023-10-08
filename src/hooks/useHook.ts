import { useQuery } from "react-query";
import APIClient from "../Services/api-client";

const apiClient = new APIClient('/users');

const useHook = () => useQuery({
    queryKey : ['slug'],
    queryFn : () => apiClient.getAll()
});

export default useHook;