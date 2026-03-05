import { useEffect, useState } from 'react';

function CharacterCount() {
  const [charCount, setCharCount] = useState(0);
  const [charAssess, setCharAssess] = useState(0);
  const [warning, setWarning] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!charCount) {
      setWarning('');
      setError('');
      return;
    }

    if (charAssess > charCount) {
      setError(`Limit exceeded by ${charAssess - charCount} characters`);
      setWarning('');
    } else if (charAssess >= 0.9 * charCount) {
      setWarning('You are close to the limit!');
      setError('');
    } else {
      setWarning('');
      setError('');
    }
  }, [charAssess, charCount]);

  function handleChange(e) {
    setCharCount(Number(e.target.value));
  }

  function assessCharacterCount(e) {
    setCharAssess(e.target.value.length);
  }

  return (
    <div className="characterCount">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input
              type="number"
              min="0"
              max="1000"
              data-testid="maxlength"
              onChange={handleChange}
            />
          </label>
        </div>

        <textarea
          className="text"
          placeholder="Start Typing"
          data-testid="textarea"
          onChange={assessCharacterCount}
        />

        <div
          className="char-info"
          data-testid="char-info"
        >
          {charAssess} / {charCount}
        </div>

        <div className="warnings">
          {warning && (
            <p
              className="warning-text"
              data-testid="warning-text"
            >
              {warning}
            </p>
          )}

          {error && (
            <p
              className="error-message"
              data-testid="error-text"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CharacterCount;
