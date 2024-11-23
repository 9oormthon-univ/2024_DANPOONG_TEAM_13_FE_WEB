'use client';

import {styles} from '../component/Modal/useStyle';

export default function Home() {
  return (
    <div 
    className="flex justify-center items-center overflow-hidden pb-20"
      style={{ height: "100vh" }}
    >
            <main className="flex flex-col items-center">
          <div style={{ ...styles.iconContainer, ...styles.b_10px }}> 
            <img src="/icon/ic_check.svg" alt="icon" style={styles.success_icon} />
          </div>
        <h2 style={styles.success_title}>인증 성공</h2>
        <p style={styles.success_message}>인증이 성공적으로 완료되었습니다.</p>
      </main>
    </div>
  )
}
