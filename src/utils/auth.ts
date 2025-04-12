// Đây là mock, bạn thay bằng context hoặc token check thật
export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('token');
  };
  