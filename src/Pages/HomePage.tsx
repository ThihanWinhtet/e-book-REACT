import useHook from "../hooks/useHook";

const HomePage = () => {
  const { data } = useHook();
  console.log(data?.data);

  return <div>{/* {data?.data?.map((data:any) => <p>{data.name}</p>)} */}</div>;
};

export default HomePage;
