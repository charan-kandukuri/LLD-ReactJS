# Password Strength

### Description
Build a password strength checker in React that evaluates and displays the strength level of a user's password. The goal of this problem is to create a password strengt checker that evaluates the strength of a given password based on specific criteria.
The password is considered strong if it meets all or 4 of the following rules:
1. Length: At least 8 characters.
2. Uppercase Letters: At least one uppercase letter (A-Z).
3. Lowercase Letters: At least one lowercase letter (a-z).
4. Numbers: At least one digit (0-9).
5. Special Characters: At least one special character (e.g.,
@， #，$，%，etc.）.
Strength Levels:
• Level 1: Password meets 1 of the 5 criteria
• Level 2: Password meets 2 or 3 of the 5 criteria
• Level 3: Password meets 4 or 5 of the 5 criteria
• If the password does not meet any criteria, it's considered a weak password and the function returns " Weak Password ".
Important Instructions
• Define a helper function called checkPasswordstrength inside the same file.
• Export that helper function so it can be tested separately
• The function checkPasswordStrength receives a password string as an argument.
• The function checkPasswordStrength and returns Level 1, Level 2, Level 3 or Weak Password based on the criteria.
• The Ul should have:
An input field for password
A button to check strength
A strength result displayed after clicking

### Code

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
