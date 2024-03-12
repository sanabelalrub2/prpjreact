// src/pages/RegisterPage.js
import React, { useState } from 'react';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // منطق التسجيل هنا
    console.log(email, password);
  };

  return (
    <div>
      <h2>التسجيل</h2>
      <form onSubmit={handleRegister}>
      <label>
          الاسم الاول :
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          الاسم الاخير :
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          البريد الإلكتروني:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          كلمة المرور:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label><label>
          تاكيد كلمة المرور:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">التسجيل</button>
      </form>
    </div>
  );
}

export default RegisterPage;
