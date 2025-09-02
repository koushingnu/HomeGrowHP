"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-primary-50 to-white">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
          >
            ビジネスの未来を
            <br className="hidden sm:block" />
            加速させる
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            私たちは、お客様のビジネスの成長をサポートします。
            最新のテクノロジーと創造的なアイデアで、
            あなたのビジネスを次のステージへ。
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="primary"
              className="px-8 py-3 text-lg shadow-lg shadow-primary-100"
            >
              無料相談はこちら
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg">
              サービス詳細
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-10 border-2 border-gray-400 rounded-lg flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
        </motion.div>
      </div>
    </section>
  );
};
