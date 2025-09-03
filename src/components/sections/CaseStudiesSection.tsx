"use client";

import { useState } from "react";
import { Container } from "../ui/Container";
import Image from "next/image";

type Category = "sns" | "web";

const categories = [
  { id: "sns", label: "SNS運用" },
  { id: "web", label: "ホームページ制作" },
] as const;

const caseStudies = [
  {
    title: "コートヤード・バイ・マリオット名古屋",
    category: "sns",
    mainImage: "/images/cases/pro_ishii.png",
  },
  {
    title: "サンジルシ醤油株式会社",
    category: "sns",
    mainImage: "/images/cases/pro_ishii.png",
  },
  {
    title: "JAいがふるさと",
    category: "sns",
    mainImage: "/images/cases/pro_ishii.png",
  },
  {
    title: "株式会社テクノソリューション",
    category: "web",
    mainImage: "/images/cases/pro_ishii.png",
  },
  {
    title: "デジタルウェーブ株式会社",
    category: "web",
    mainImage: "/images/cases/pro_ishii.png",
  },
  {
    title: "株式会社ネクストラボ",
    category: "web",
    mainImage: "/images/cases/pro_ishii.png",
  },
];

export const CaseStudiesSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("sns");

  const filteredCases = caseStudies.filter(
    (study) => study.category === activeCategory
  );

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* 見出し */}
        <h2 className="section-title">実績紹介</h2>

        {/* カテゴリータブ */}
        <div className="flex gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Category)}
              className={`py-3 px-8 text-lg transition-colors rounded ${
                activeCategory === category.id
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* 実績カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* 画像部分（70%） */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={study.mainImage}
                  alt={study.title}
                  width={800}
                  height={600}
                  className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              {/* テキスト部分（30%） */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-primary-600 text-white text-xs px-3 py-1 rounded">
                    {categories.find((c) => c.id === study.category)?.label}
                  </span>
                  <Image
                    src="https://placehold.co/24x24/png" // 虫眼鏡アイコンに置き換え
                    alt="詳細を見る"
                    width={24}
                    height={24}
                    className="opacity-70"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
