export const emailTemplates = ({ user }) => {
    const subject = 'Pendaftaran Akun Baru di E-Kskuline';
  
    const message = `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333;">🚨 Notifikasi Pendaftaran Baru</h2>
            <p>Halo Admin,</p>
            <p>Seorang pengguna baru telah mendaftar pada platform <strong>E-Kskuline</strong>. Berikut adalah detail pengguna tersebut:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Nama</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${user.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${user.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Kelas</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${user.kelas}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Jurusan</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${user.jurusan}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Role</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${user.role}</td>
              </tr>
            </table>
  
            <div style="text-align: center; margin-top: 30px;">
              <a href="" style="display: inline-block; background-color: #4CAF50; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                ✅ Approve Sekarang
              </a>
            </div>
  
            <p style="margin-top: 30px; color: #555;">Terima kasih telah menggunakan E-Kskuline.</p>
          </div>
        </body>
      </html>
    `;
  
    return { subject, message };
  };
  