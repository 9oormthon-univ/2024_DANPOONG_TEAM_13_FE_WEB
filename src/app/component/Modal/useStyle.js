export const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    width: '90%',
    maxWidth: '320px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#000',
  },
  message: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.5',
    marginBottom: '24px',
  },
  confirmButton: {
    backgroundColor: '#FF7B69',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%', // 버튼 크기 조정
    transition: 'background-color 0.2s',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center', // 중앙 정렬
    marginBottom: '12px', // 제목과 아이콘 간격
  },
  icon: {
    width: '36px', // 아이콘 크기 조정
    height: '36px',
  },
  b_10px: {
    marginBottom: '10px'
  }
};
