"use client";

import { Container } from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

const strengths = [
  {
    title: "業界知識と実績",
    description:
      "10年以上の実績と1000件以上の支援実績。業界特有の課題を熟知し、最適なソリューションを提供します。",
    icon: "/icons/experience.svg",
  },
  {
    title: "専門チーム体制",
    description:
      "マーケティング、デザイン、開発の専門家がワンストップで対応。包括的なサポートを実現します。",
    icon: "/icons/team.svg",
  },
  {
    title: "柔軟な対応力",
    description:
      "お客様のニーズや予算に合わせた柔軟な提案が可能。段階的な導入やカスタマイズにも対応します。",
    icon: "/icons/flexible.svg",
  },
];

const blogs = [
  {
    title: "LINEプロモーション絵文字とは？",
    description: "導入メリットや活用シーンを解説",
    category: "LINE運用",
    image: "https://placehold.co/600x400/png",
    date: "2025.08.28",
    href: "/blog/line-promotion",
  },
  {
    title: "企業ホームページにおすすめのCMS5選！",
    description: "比較表や弊社支援の制作事例も紹介",
    category: "Webサイト制作",
    image: "https://placehold.co/600x400/png",
    date: "2025.08.27",
    href: "/blog/cms-comparison",
  },
  {
    title: "ホームページの更新内容と費用相場",
    description: "弊社が支援した中小企業の成功事例も紹介",
    category: "Webサイト制作",
    image: "https://placehold.co/600x400/png",
    date: "2025.08.26",
    href: "/blog/website-update",
  },
  {
    title: "ホームページのHTTPS化（SSL化）とは？",
    description: "重要な理由や設定手順も解説",
    category: "Webサイト制作",
    image: "https://placehold.co/600x400/png",
    date: "2025.08.25",
    href: "/blog/ssl-guide",
  },
];

export const StrengthsAndBlogSection = () => {
  return (
    <>
      {/* 強みセクション */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">選ばれる理由</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              私たちは、お客様のビジネスの成長を第一に考え、
              実績と専門性を活かした支援を提供しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  {/* アイコンは後ほど追加 */}
                </div>
                <h3 className="text-xl font-bold mb-4">{strength.title}</h3>
                <p className="text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ブログセクション */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">ホームグローのブログ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Web制作やマーケティングに関する最新情報や
              実践的なノウハウをご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {blogs.map((blog, index) => (
              <Link
                key={index}
                href={blog.href}
                className="group block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {blog.description}
                  </p>
                  <time className="text-sm text-gray-500">{blog.date}</time>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
            >
              ブログ記事一覧
              <svg
                className="w-5 h-5 ml-2"
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
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};
