"use client";

import Link from "next/link";
import { Container } from "../ui/Container";
import Image from "next/image";

const navigation = [
  { name: "会社概要", href: "/company" },
  { name: "実績一覧", href: "/cases" },
  { name: "サービス", href: "/services" },
  { name: "採用情報", href: "/careers" },
  { name: "お知らせ", href: "/news" },
];

export const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 h-[80px] z-50"
      style={{ backgroundColor: "transparent", isolation: "isolate" }}
    >
      <div className="h-full flex">
        {/* メインナビゲーションエリア */}
        <div className="flex-1">
          <Container className="h-full">
            <div className="flex items-center h-full">
              {/* ロゴ */}
              <Link href="/" className="relative z-10 w-[200px]">
                <span
                  className="text-2xl font-bold"
                  style={{
                    color: "#ffffff",
                    textShadow: "0 0 1px rgba(0,0,0,0.1)",
                  }}
                >
                  Homegrow
                </span>
              </Link>

              {/* PCナビゲーション */}
              <nav className="hidden md:flex items-center justify-center flex-1 space-x-12 px-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-bold text-center transition-colors"
                    style={{
                      color: "#ffffff",
                      textShadow: "0 0 1px rgba(0,0,0,0.1)",
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* モバイルメニューボタン */}
              <button className="md:hidden p-2">
                <span className="sr-only">メニューを開く</span>
                <svg
                  className="w-6 h-6"
                  style={{ color: "#ffffff" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </Container>
        </div>

        {/* お問い合わせエリア */}
        <div className="hidden md:flex">
          {/* お問い合わせ */}
          <Link
            href="/contact"
            className="flex items-center px-8 h-full bg-white"
          >
            <div className="flex items-center text-gray-900">
              <Image
                src="/icons/mail.svg"
                alt="mail"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>お問い合わせ</span>
            </div>
          </Link>

          {/* 電話番号 */}
          <Link
            href="tel:059-355-3939"
            className="flex items-center px-8 h-full bg-gray-700"
          >
            <div className="flex items-center text-white">
              <Image
                src="/icons/phone.svg"
                alt="phone"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>059-355-3939</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
