# Han Viet Glyph Lab

Prototype game học chữ Hán cho người Việt: học câu dùng ngay, rồi bóc từng chữ ra để vẽ, xem thứ tự nét, bộ thủ và mẹo nhớ.

## Quick wins hiện có

- `你好！` - Xin chào.
- `我叫 Nam。` - Tôi tên là Nam.
- `你叫什么名字？` - Bạn tên là gì?
- `谢谢！` - Cảm ơn.

## Chạy local

```bash
python3 -m http.server 5187 --bind 127.0.0.1
```

Sau đó mở:

```text
http://127.0.0.1:5187/
```

## Ý tưởng sản phẩm

App không chỉ dạy từng chữ rời. Mỗi bài bắt đầu bằng một câu giao tiếp ngắn để người học có cảm giác dùng được ngay. Sau đó app mới giải thích chữ trọng tâm:

- phần nào là nghĩa,
- phần nào chỉ gợi âm,
- nét nào viết trước,
- chữ nào dễ nhầm.

Mục tiêu MVP hợp lý: HSK1, mỗi bài 3-5 phút, mỗi bài có 1 mẫu câu, 2-4 chữ trọng tâm, luyện viết và ôn lại bằng XP/streak.
