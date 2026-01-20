export function generateContent() {
  const hooks = [
    "Bộ não bạn đang lừa bạn",
    "Đây là lý do bạn hay mệt",
    "Nếu bạn thấy điều này, não bạn đang",
    "Đừng xem tiếp nếu bạn dễ bị ảnh hưởng"
  ];

  const facts = [
    "tự động tránh sự thật để bảo vệ cảm xúc.",
    "tiêu hao năng lượng chỉ để suy nghĩ.",
    "phản ứng nhanh hơn logic 3 lần.",
    "luôn ưu tiên cảm giác an toàn hơn đúng sai."
  ];

  const hook = hooks[Math.floor(Math.random() * hooks.length)];
  const fact = facts[Math.floor(Math.random() * facts.length)];

  return `${hook}… ${fact}`;
}
