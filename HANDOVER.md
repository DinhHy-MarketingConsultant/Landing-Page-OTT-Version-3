# Bàn giao Landing Page OTT Version 3

## Tệp cần sửa
- `index.html`: toàn bộ nội dung, thông tin giáo viên, lịch học, liên kết và form.
- `symposium.css`: màu sắc, bố cục desktop/mobile, nút và hiệu ứng xuất hiện.
- `symposium-motion.js`: hiệu ứng khối khi cuộn; fade-up, fade-left, fade-right trong 1 giây, độ trễ 200–650 ms. Nội dung được ẩn trước khi khởi tạo để tránh chớp chữ. Khi cuộn ngược, khối bên dưới màn hình được chuẩn bị xuất hiện lại. Tôn trọng cài đặt giảm chuyển động.
- `symposium.js`: menu di động và form lưu cục bộ.
- `assets/fonts.css`, `assets/fonts/`: font Be Vietnam Pro có dấu tiếng Việt.
- `assets/`: ảnh, video, logo và CSS nền dùng chung.
- `lich-hoc.ics`: lịch 18 và 25/11/2026, 20:00–22:00 Việt Nam.

## Nội dung thống nhất
Tên hiển thị: Lâm Vỹ Phong và Hoa Tĩnh. Học qua Zoom có phiên dịch tiếng Việt. Giữ thông tin khóa học nhất quán khi sửa lịch hoặc CTA.

## Form và dữ liệu
Form chưa có dịch vụ nhận đăng ký. Dữ liệu nằm tại localStorage `ott_leads` trên thiết bị người nhập. Cần kết nối API hoặc dịch vụ nhận form trước khi thu đăng ký thật, bổ sung thông tin liên hệ và quy trình bảo mật phù hợp. Không đưa khóa bí mật vào HTML/JS công khai.

## Kiểm tra và giới hạn
Bố cục phiên bản ban đầu đã được kiểm tra ở 1440, 768, 390 và 320px. Lần cập nhật chuyển động mới được đối chiếu với mã nguồn mẫu Symposium do chủ dự án cung cấp; chưa xác minh trực tiếp bằng trình duyệt vì công cụ báo quyền Local browser bị tắt. Chưa có cơ sở khẳng định khớp hoàn toàn với preview gốc. Các phần nội dung OTT bổ sung khác số lượng và thứ tự của mẫu.

Khi nhận bàn giao, kiểm tra cuộn xuôi/ngược, tải mới không chớp chữ, chế độ giảm chuyển động, menu, FAQ, lịch tải xuống, video và form trên điện thoại thật. Phần chân dung hero được ẩn ở màn hình dưới 1025px theo cách xử lý của mẫu.

## Xuất bản và tài sản
GitHub Pages phục vụ trực tiếp nhánh main, thư mục gốc. Sau khi sửa, commit và push để cập nhật web. Không thay đổi trang OTT phiên bản trước. Ảnh/video do dự án hiện hữu cung cấp; kiểm tra quyền sử dụng trước khi tái phân phối hoặc sử dụng ngoài dự án. Mẫu tham chiếu: https://preview.themewagon.com/symposium-nextjs/.
