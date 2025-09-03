"use client";

import { Container } from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Web Marketing",
    titleJa: "Webサイト制作・運用",
    icon: "/images/services/social-media.svg",
    items: [
      { text: "ホームページ制作", href: "/services/web" },
      { text: "Web運用", href: "/services/operation" },
      { text: "Web広告", href: "/services/ads" },
      { text: "SEO対策", href: "/services/seo" },
    ],
  },
  {
    title: "SNS Marketing",
    titleJa: "SNSマーケティング",
    icon: "/images/services/social-media.svg",
    items: [
      { text: "SNS運用代行", href: "/services/sns" },
      { text: "インフルエンサー", href: "/services/influencer" },
      { text: "SNS広告", href: "/services/sns-ads" },
      { text: "コンテンツ制作", href: "/services/content" },
    ],
  },
  {
    title: "LINE Marketing",
    titleJa: "LINEマーケティング",
    icon: "/images/services/social-media.svg",
    items: [
      { text: "LINE公式アカウント", href: "/services/line" },
      { text: "LINE広告", href: "/services/line-ads" },
      { text: "LINEミニアプリ", href: "/services/line-mini" },
      { text: "LINE通知", href: "/services/line-notify" },
    ],
  },
];

export const ServicesSection = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="mb-16">
          <h2 className="section-title">
            ビジネスの成長を加速させる3つのソリューション
          </h2>
          <p className="section-subtitle">
            お客様のビジネスステージに合わせた最適なソリューションを提供します。
            戦略立案から実行まで、成果にこだわったサポートをご提供いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              {/* タイトル（英語） */}
              <h3 className="text-primary-600 font-bold mb-6">
                {service.title}
              </h3>

              {/* アイコン */}
              <div className="flex justify-center mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={120}
                  height={120}
                  className="text-primary-600 [&_path]:fill-primary-600 [&_circle]:fill-primary-600"
                />
              </div>

              {/* タイトル（日本語） */}
              <h4 className="text-2xl font-bold text-gray-900 mb-8">
                {service.titleJa}
              </h4>

              {/* サービス項目 */}
              <div className="grid grid-cols-2 gap-4">
                {service.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="group relative overflow-hidden"
                    onMouseEnter={() => setHoveredItem(`${index}-${itemIndex}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="relative z-10 flex items-center justify-between px-4 py-3 text-sm border border-primary-600 rounded whitespace-nowrap min-w-[140px]">
                      <span
                        className={`transition-colors duration-300 ${
                          hoveredItem === `${index}-${itemIndex}`
                            ? "text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {item.text}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-colors duration-300 ${
                          hoveredItem === `${index}-${itemIndex}`
                            ? "text-white"
                            : "text-gray-700"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div
                      className={`absolute inset-0 bg-primary-600 transform transition-transform duration-300 ${
                        hoveredItem === `${index}-${itemIndex}`
                          ? "translate-x-0"
                          : "-translate-x-full"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
