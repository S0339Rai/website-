/**
 * auth.js
 * -----------------------------------------------------------------
 * ตรวจสอบว่าเบราว์เซอร์นี้เข้าสู่ระบบไว้แล้วหรือยัง (เก็บรหัสสมาชิกไว้ใน localStorage)
 * - ถ้ายังไม่เคย -> พาไปหน้า login.html เพื่อเข้าสู่ระบบ (หรือกดไปสมัครสมาชิกจากหน้านั้นได้)
 * - ถ้าเคยแล้ว -> ตั้งค่า CURRENT_MEMBER_ID ให้ทุกหน้าใช้งานต่อได้
 *
 * ต้องใส่ <script src="auth.js"></script> เป็น "ไฟล์แรกสุด" ก่อน sheetdb-api.js และ script.js
 * ในทุกหน้า ยกเว้น login.html และ register.html
 * -----------------------------------------------------------------
 */

const MEMBER_ID_KEY = "currentMemberId";
const CURRENT_MEMBER_ID = localStorage.getItem(MEMBER_ID_KEY);

if (!CURRENT_MEMBER_ID) {
  window.location.href = "login.html";
}

/** ออกจากระบบ / สลับไปเข้าสู่ระบบด้วยบัญชีอื่น */
function switchUser() {
  if (!confirm("ต้องการออกจากระบบผู้ใช้ปัจจุบันใช่หรือไม่?")) return;
  localStorage.removeItem(MEMBER_ID_KEY);
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("switchUserLink");
  if (link) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchUser();
    });
  }
});
