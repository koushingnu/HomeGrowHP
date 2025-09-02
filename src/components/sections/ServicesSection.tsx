"use client";

import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import Image from "next/image";

const services = [
  {
    title: "Webマーケティング",
    description:
      "ホームページ制作やSNS運用など、Web上での集客をサポートします。戦略立案から運用まで一貫してサポートいたします。",
    icon: "https://placehold.co/32x32/png",
    buttons: [
      { text: "ホームページ制作", href: "/services/web" },
      { text: "制作実績", href: "/cases/web" },
    ],
  },
  {
    title: "集客支援",
    description:
      "SNS活用やSEO対策で、効果的な顧客獲得を実現します。データに基づいた施策で成果を最大化します。",
    icon: "https://placehold.co/32x32/png",
    buttons: [
      { text: "SNS運用", href: "/services/sns" },
      { text: "MEO対策", href: "/services/meo" },
    ],
  },
  {
    title: "人材採用支援",
    description:
      "採用支援やパートナー募集のサポートを行います。企業の成長に不可欠な人材採用をトータルでサポート。",
    icon: "https://placehold.co/32x32/png",
    buttons: [
      { text: "人材募集", href: "/services/recruitment" },
      { text: "採用支援", href: "/services/recruitment-support" },
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary-50">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            ビジネスの成長を加速させる
            <br />
            3つのソリューション
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            お客様のビジネスステージに合わせた最適なソリューションを提供します。
            戦略立案から実行まで、成果にこだわったサポートをご提供いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>

              <div className="space-y-3">
                {service.buttons.map((button, buttonIndex) => (
                  <Button
                    key={buttonIndex}
                    variant={buttonIndex === 0 ? "primary" : "outline"}
                    className="w-full justify-center"
                    onClick={() => (window.location.href = button.href)}
                  >
                    {button.text}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="secondary" className="px-8 py-3">
            サービス一覧へ
          </Button>
        </div>
      </Container>
    </section>
  );
};
