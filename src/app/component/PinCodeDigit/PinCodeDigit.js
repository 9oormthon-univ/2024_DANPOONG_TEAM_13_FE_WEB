'use client';
import { styles } from './useStyle';

export default function PinCodeDigit({ digit, isValid }) {
  return (
    <div
      style={{
        ...styles.digit,
        ...(digit ? styles.filledDigit : {}),
        ...(!isValid ? styles.faildigit : {})
      }}
    >
      <span style={{ ...styles.digitText }}>
        {digit}
      </span>
    </div>
  );
}