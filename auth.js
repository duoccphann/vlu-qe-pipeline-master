// Cập nhật: bổ sung ghi chú cho chức năng login
// auth.js - Module xử lý đăng nhập đơn giản (dữ liệu giả lập, không dùng database)

// Danh sách tài khoản mẫu
const users = [
  { username: 'admin', password: '9999', locked: false },
  { username: 'tester', password: 'P@ss#2026!', locked: false }, // mật khẩu có ký tự đặc biệt
  { username: 'lockeduser', password: '456', locked: true }      // tài khoản bị khóa
];

/**
 * Hàm đăng nhập
 * @param {string} username - tên đăng nhập
 * @param {string} password - mật khẩu
 * @returns {boolean} true nếu đăng nhập thành công, ngược lại false
 */
function login(username, password) {
  // Kiểm tra dữ liệu đầu vào: phải là chuỗi
  if (typeof username !== 'string' || typeof password !== 'string') {
    return false;
  }

  // Loại bỏ khoảng trắng hai đầu username, không cho phép rỗng
  const name = username.trim();
  if (name === '' || password === '') {
    return false;
  }

  // Tìm tài khoản theo username
  const user = users.find((u) => u.username === name);
  if (!user) {
    return false; // không tồn tại tài khoản
  }

  // Tài khoản bị khóa thì không cho đăng nhập
  if (user.locked) {
    return false;
  }

  // So sánh mật khẩu (phân biệt hoa/thường)
  return user.password === password;
}

module.exports = { login };
