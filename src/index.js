import React from "react";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';

const ExampleComponent = ({ text }) => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>First Name</label>
        <input name="name" {...register('name')} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" {...register('email')} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" {...register('password')} />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default ExampleComponent;