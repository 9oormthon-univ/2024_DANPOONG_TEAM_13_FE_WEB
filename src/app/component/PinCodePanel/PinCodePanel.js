'use client';

import { useState, useRef, useEffect } from 'react';
import { styles } from './useStyle'; 
import './useStyle.css';
import PinCodeDigit from '../PinCodeDigit/PinCodeDigit';

export default function PinCodePanel({ onComplete, isValid, shake }) {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputRef = useRef(null);
  
    const handleClick = () => {
      inputRef.current?.focus();
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Backspace') {
        e.preventDefault();
        const lastFilledIndex = code.findLastIndex(digit => digit !== '');
        if (lastFilledIndex !== -1) {
          const newCode = [...code];
          newCode[lastFilledIndex] = '';
          setCode(newCode);
        }
      }
    };

  const handleChange = (e) => {
    const value = e.target.value;
    const numbers = value.replace(/[^0-9]/g, '');
    const emptyIndex = code.findIndex(digit => digit === '');
    if (emptyIndex !== -1 && numbers.length > 0) {
      const newCode = [...code];
      newCode[emptyIndex] = numbers[0];
      setCode(newCode);
    }
    e.target.value = '';
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    // 모든 칸이 채워졌는지 확인
    if (code.every(digit => digit !== '')) {
      const enteredCode = code.join('');
      onComplete?.(enteredCode);
    }
  }, [code]);

  return (
    <div style={{ width: '100%' }}>
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        pattern="\d*"
        style={styles.hiddenInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <div 
        style={{
          ...styles.container,
        }} 
        className={`${shake ? 'shake' : ''}`}
        onClick={handleClick}
      >
        {code.map((digit, index) => (
          <PinCodeDigit 
            key={index}
            digit={digit}
            styles={styles}
            isValid={isValid}
          />
        ))}
      </div>
    </div>
  );
}