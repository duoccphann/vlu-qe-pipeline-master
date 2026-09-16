// auth.smoke.test.js - SMOKE TEST (Quality Gate 1)
// Chỉ kiểm tra chức năng sống còn: đăng nhập đúng phải thành công
const { login } = require('./auth');

describe('Smoke Test - Chức năng đăng nhập', () => {
  test('Đăng nhập đúng admin/123 trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
