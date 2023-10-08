import { Input, Button } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import APIClient from "../Services/api-client";
import User from "../Entities/User";

const UserRegister = () => {
  const { handleSubmit, control } = useForm();

  const mutation = useMutation((user: User) => {
    return new APIClient("/users").post(user);
  });

  const onSubmit = async (user: any) => {   
    try {
      await mutation.mutateAsync(user);
    } catch (error) {
      console.log("error while adding user");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              size="large"
              type="text"
              style={{ marginBottom: "20px" }}
              placeholder="Your Name"
              prefix={<UserOutlined />}
              {...field}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              size="large"
              type="email"
              style={{ marginBottom: "20px" }}
              placeholder="Your Name"
              prefix={<MailOutlined />}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input.Password
              size="large"
              type="password"
              style={{ marginBottom: "20px" }}
              placeholder="Password"
              {...field}
            />
          )}
        />
        <Button
          value="large"
          style={{ width: "100%" }}
          type="primary"
          htmlType="submit"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default UserRegister;
