'use client';
import { styles } from './useStyle';

export default function Modal({ isOpen, message, title, onConfirm, onCancel, icon }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.content}>
        {icon && (
            <div style={{ ...styles.iconContainer, ...styles.b_10px }}> 
              <img src={icon} alt="icon" style={styles.icon} />
            </div>
          )}
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.message}>{message}</p>
          <button style={styles.confirmButton} onClick={onConfirm}>
              확인
            </button>
        </div>
      </div>
    </div>
  );
}