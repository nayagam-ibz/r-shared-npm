// import React from "react";
// import { useForm } from "react-hook-form";
// import Button from 'react-bootstrap/Button';

// const ExampleComponent = ({ text }) => {
//   const { register, handleSubmit } = useForm();
//   const handleRegistration = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(handleRegistration)}>
//       <div>
//         <label>First Name</label>
//         <input name="name" {...register('name')} />
//       </div>
//       <div>
//         <label>Email</label>
//         <input type="email" name="email" {...register('email')} />
//       </div>
//       <div>
//         <label>Password</label>
//         <input type="password" name="password" {...register('password')} />
//       </div>
//       <Button>Submit</Button>
//     </form>
//   );
// };

// export default ExampleComponent;


import 'bootstrap/dist/css/bootstrap.min.css';

export * from './auth/login'
export * from './auth/forgot_password'
export * from './auth/change_password'
export * from './auth/two_factor'
export * from './auth/unlock_request'
export * from './auth/registration'
export * from './auth/update_profile'

export * from './components/list'