"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { fadeInUp, slideIn } from "@/utils/animations";
import { useState } from "react";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="relative w-full min-h-[calc(110vh-80px)] flex">
      {/* 左側の背景色 (30%) */}
      <div className="absolute inset-y-0 left-0 w-[27%] bg-[#e8353b] z-0"></div>

      {/* 右側の動画背景 (70%) */}
      <div className="absolute inset-y-0 right-0 w-[73%] overflow-hidden z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/hero/ZEN京都.mov"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* 動画のオーバーレイ */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* コンテンツ */}
      <Container className="relative z-10 flex items-center w-full">
        <div className="text-white py-20 md:py-0 max-w-xl">
          <motion.h1
            className="font-bold leading-tight"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <span className="font-poppins italic text-6xl md:text-8xl whitespace-nowrap inline-block mb-6 text-primary-50">
              From Local to Global
            </span>
            <br />
            <span className="font-poppins text-3xl md:text-4xl whitespace-nowrap inline-block text-secondary-100">
              ムスリムに選ばれる店へ
            </span>
          </motion.h1>
          <motion.div
            className="flex gap-4 mt-12"
            variants={slideIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            <div
              className="relative overflow-hidden rounded-md"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Button
                variant="outline"
                className={`px-8 py-3 border-white relative z-10 transition-colors duration-300 rounded-md ${
                  isHovered ? "text-primary-600" : "text-white"
                }`}
              >
                無料相談はこちら
              </Button>
              <div
                className={`absolute inset-0 bg-white transform transition-transform duration-300 rounded-md ${
                  isHovered ? "translate-x-0" : "-translate-x-full"
                }`}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
