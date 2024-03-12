// في ملف src/components/SignInPage.js

import React from 'react';

const SignInPage = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignInPage;
