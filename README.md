# 🎮 LoL Team Splitter

Web app đơn giản để chia team ngẫu nhiên cho Liên Minh Huyền Thoại với các tính năng:

- ✅ Chia team ngẫu nhiên cho 6-10 người chơi (số chẵn)
- ✅ Random vị trí (Top, Jungle, Mid, ADC, Support) cho mỗi người
- ✅ Random 10 tướng cho mỗi team để bốc chọn
- ✅ Giao diện đẹp mắt với theme LoL
- ✅ Responsive design, tương thích mobile

## 🚀 Hướng dẫn chạy local

### Cách 1: Mở trực tiếp file HTML
```bash
# Mở file index.html bằng trình duyệt
open index.html
# hoặc double-click vào file index.html
```

### Cách 2: Sử dụng HTTP Server (Khuyến nghị)
```bash
# Cài đặt dependencies (chỉ cần làm 1 lần)
npm install

# Chạy server và tự động mở trình duyệt
npm start

# Hoặc chạy development server với live reload
npm run dev
```

Sau khi chạy, mở trình duyệt và truy cập: `http://localhost:3000`

## 📖 Hướng dẫn sử dụng

1. **Chọn số lượng người chơi**: 6, 8, hoặc 10 người
2. **Nhập tên các người chơi**: Không được trùng lặp
3. **Nhấn "Chia Team"**: Hệ thống sẽ tự động:
   - Chia ngẫu nhiên thành 2 team
   - Assign vị trí ngẫu nhiên cho mỗi người
   - Random 10 tướng cho mỗi team
4. **Xem kết quả**: Mỗi team sẽ có danh sách người chơi với vị trí và 10 tướng để chọn
5. **Chia lại**: Nhấn "Chia lại" để random lại

## 🌐 Deploy lên Internet (MIỄN PHÍ & DỄ DÙNG)

### 🥇 Netlify (Khuyến nghị #1 - Cực kỳ dễ)
**Tại sao chọn Netlify:**
- ✅ Miễn phí vĩnh viễn
- ✅ Không cần biết code
- ✅ Deploy trong 30 giây
- ✅ Tự động có HTTPS
- ✅ URL đẹp và có thể tùy chỉnh

**Cách deploy:**
1. Truy cập [netlify.com](https://netlify.com) và đăng ký (dùng Google/GitHub)
2. Kéo thả toàn bộ thư mục `random_splitter` vào vùng "Deploy" 
3. Netlify tự động tạo URL cho bạn (ví dụ: `https://amazing-site-123.netlify.app`)
4. Xong! Chia sẻ link cho bạn bè ngay

### 🥈 Vercel (Lựa chọn #2)
1. Đăng ký tại [vercel.com](https://vercel.com)
2. Kéo thả files hoặc connect GitHub
3. Tự động deploy, có URL ngay

### 🥉 GitHub Pages (Nếu bạn dùng GitHub)
1. Tạo repository trên GitHub
2. Upload files lên
3. Vào Settings → Pages → chọn source branch
4. URL sẽ là: `https://username.github.io/repository-name`

### ⚡ Surge.sh (Cho developer)
```bash
npm install -g surge
cd random_splitter
surge
# Nhập domain tùy chỉnh hoặc để mặc định
```

**🎯 Lời khuyên:** Dùng Netlify nếu bạn muốn đơn giản nhất. Chỉ cần kéo thả là xong!

## 🛠️ Cấu trúc project

```
random_splitter/
├── index.html          # Trang chính
├── style.css           # Styling với theme LoL  
├── script.js           # Logic chính
├── champions.js        # Danh sách tướng LoL
├── package.json        # Dependencies và scripts
└── README.md           # Tài liệu này
```

## 🎯 Tính năng

- **Validation đầu vào**: Kiểm tra số người chẵn, tên không trùng lặp
- **Random công bằng**: Sử dụng thuật toán Fisher-Yates shuffle
- **Responsive design**: Tương thích mọi thiết bị
- **Animation mượt mà**: Hiệu ứng chuyển đổi đẹp mắt
- **Theme LoL authentic**: Màu sắc và styling giống game thực

## 🔧 Tùy chỉnh

### Thêm/sửa tướng
Chỉnh sửa file `champions.js` để thêm hoặc bớt tướng trong danh sách.

### Thay đổi màu sắc
Chỉnh sửa file `style.css` để thay đổi theme màu.

### Thêm tính năng
Chỉnh sửa file `script.js` để thêm logic mới.

## 📱 Tương thích

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh! Tạo issue hoặc pull request để cải thiện app.

## 📄 License

MIT License - Sử dụng tự do cho mọi mục đích.

---
**Chúc các bạn chơi game vui vẻ! 🎮⚔️** 