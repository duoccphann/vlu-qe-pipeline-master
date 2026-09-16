// auth.regression.test.js - REGRESSION TEST (Quality Gate 2)
// Kiểm tra đầy đủ các trường hợp để đảm bảo code mới không làm hỏng tính năng cũ
const { login } = require('./auth');

describe('Regression Test - Chức năng đăng nhập', () => {
  // Trường hợp hợp lệ
  test('TC01 - Đăng nhập đúng admin/123 trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });

  // Các trường hợp ngoại lệ
  test('TC02 - Sai mật khẩu trả về false', () => {
    expect(login('admin', 'sai_mat_khau')).toBe(false);
  });

  test('TC03 - Username rỗng trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('TC04 - Username chỉ có khoảng trắng trả về false', () => {
    expect(login('   ', '123')).toBe(false);
  });

  test('TC05 - Mật khẩu rỗng trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('TC06 - Mật khẩu chứa ký tự đặc biệt (đúng) trả về true', () => {
    expect(login('tester', 'P@ss#2026!')).toBe(true);
  });

  test('TC07 - Mật khẩu chứa ký tự đặc biệt (sai) trả về false', () => {
    expect(login('admin', "' OR '1'='1")).toBe(false);
  });

  test('TC08 - Tài khoản bị khóa trả về false dù đúng mật khẩu', () => {
    expect(login('lockeduser', '456')).toBe(false);
  });

  test('TC09 - Username không tồn tại trả về false', () => {
    expect(login('khongtontai', '123')).toBe(false);
  });

  test('TC10 - Phân biệt chữ hoa/thường ở username', () => {
    expect(login('ADMIN', '123')).toBe(false);
  });

  test('TC11 - Tham số null/undefined trả về false', () => {
    expect(login(null, '123')).toBe(false);
    expect(login('admin', undefined)).toBe(false);
  });
});
