import React from 'react';
import { registerNewUser } from '../../services/auth.service';

const Register = () => {
  registerNewUser({ name: 'nick', age: 30 });
  return (
    <div>
      <p>REgister page</p>
    </div>
  );
};

export default Register;
