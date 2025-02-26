import React, { useEffect, useRef } from "react";

const CanvasCircle = () => {
  const canvasRef = useRef(null);
  const sizeRef = useRef(10); // Kích thước hình tròn
  const maxSize = 300;
  const minSize = 10;
  const speed = 0.2; // 🔥 Điều chỉnh tốc độ tăng kích thước

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set kích thước canvas theo màn hình
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
  

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa canvas trước khi vẽ lại

      // Nếu hình tròn đạt kích thước tối đa, reset về kích thước nhỏ
      if (sizeRef.current >= maxSize) {
        sizeRef.current = minSize;
      } else {
        sizeRef.current += speed; // Tăng kích thước dần lên
      }

      // Vẽ hình tròn
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, sizeRef.current, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.closePath();

      requestAnimationFrame(animate); // Lặp lại animation
    };

    requestAnimationFrame(animate); // Bắt đầu animation

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ background: "#0500a4", width: "100vw", height: "100vh" }} />;
};

export default CanvasCircle;
