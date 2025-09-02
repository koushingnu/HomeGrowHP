"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import Image from "next/image";

const caseStudies = [
  {
    title: "SNS運用支援",
    category: "Webマーケティング",
    description:
      "フォロワー数を3ヶ月で10倍に増加。認知度向上とCV率の改善を実現。",
    imageUrl: "https://placehold.co/800x600/png",
    client: "株式会社A社様",
    results: ["フォロワー数10倍増", "CV率2.5倍改善", "認知度30%向上"],
  },
  {
    title: "採用支援",
    category: "人材採用",
    description:
      "応募数を前年比200%に増加。採用コストを40%削減しながら質の高い人材を確保。",
    imageUrl: "https://placehold.co/800x600/png",
    client: "B株式会社様",
    results: ["応募数200%増", "採用コスト40%削減", "早期離職率50%減"],
  },
  {
    title: "Webサイトリニューアル",
    category: "Web制作",
    description:
      "コンバージョン率を3倍に改善。サイト表示速度も50%向上し、ユーザー体験を大幅に改善。",
    imageUrl: "https://placehold.co/800x600/png",
    client: "C社様",
    results: ["CV率200%改善", "直帰率30%減少", "LPO改善率150%"],
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4">
            Case Studies
          </span>
          <h2 className="text-4xl font-bold mb-6">実績紹介</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            私たちは、お客様のビジネスの成長を数値で実証してきました。
            具体的な成果とその実現プロセスをご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {study.category}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm">{study.client}</p>
                </div>

                <p className="text-gray-600 mb-4">{study.description}</p>

                <div className="space-y-2">
                  {study.results.map((result, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" className="px-8 py-3">
            実績一覧へ
          </Button>
        </div>
      </Container>
    </section>
  );
};
