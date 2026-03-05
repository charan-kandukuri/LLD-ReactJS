<img width="1066" height="1594" alt="image" src="https://github.com/user-attachments/assets/53593434-5ddf-4387-804a-15bf5b25d66d" />


```
import React, { useState } from 'react';

export const checkPasswordStrength = (value) => {


  const password = value || ''
  let rulesPassed = 0

  if (password.length >= 8) rulesPassed++
  if (/[a-z]/.test(password)) rulesPassed++
  if (/[A-Z]/.test(password)) rulesPassed++
  if (/\d/.test(password)) rulesPassed++
  if (/[@#$%]/.test(password)) rulesPassed++

  if (rulesPassed >= 3) return 'Level 3'
  if (rulesPassed === 2) return 'Level 2'
  if (rulesPassed === 1) return 'Level 1'
  return 'Weak Password'
};

const PasswordStrength = () => {
  const [answer, setAnswer] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const showAnswer = () => {
   setAnswer(checkPasswordStrength(inputPassword))
  }

  return (
    <div>
      <h2>Password Strength Checker</h2>

      <input
        type="password"
        onChange={(e) => setInputPassword(e.target.value)}
      />

      <button onClick={showAnswer}>Check Strength</button>

      <p>Strength: <strong>{answer}</strong></p>
    </div>
  )
};
```

export default PasswordStrength;

