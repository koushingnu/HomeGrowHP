"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const navigation = [
  { name: "会社概要", href: "/company" },
  { name: "実績一覧", href: "/cases" },
  { name: "サービス", href: "/services" },
  { name: "採用情報", href: "/careers" },
  { name: "お知らせ", href: "/news" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="relative z-10">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Homegrow
            </span>
          </Link>

          {/* PCナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* お問い合わせボタン */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="px-4 py-2">
              資料請求
            </Button>
            <Button variant="primary" className="px-4 py-2">
              お問い合わせ
            </Button>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute w-full h-0.5 bg-gray-900 transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 top-2" : "rotate-0 top-0"
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-gray-900 top-2 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-gray-900 transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 top-2" : "rotate-0 top-4"
                }`}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* モバイルメニュー */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Container className="h-full pt-24 pb-8">
          <div className="flex flex-col h-full">
            <nav className="flex-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-4 text-lg font-medium text-gray-900 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="space-y-4 pt-8">
              <Button variant="outline" className="w-full justify-center">
                資料請求
              </Button>
              <Button variant="primary" className="w-full justify-center">
                お問い合わせ
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
