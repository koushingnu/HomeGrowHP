import { Container } from "../ui/Container";
import { Card } from "../ui/Card";

const partners = [
  {
    title: "他社との強み1",
    description: "詳細な説明をここに記載します。",
  },
  {
    title: "他社との強み2",
    description: "詳細な説明をここに記載します。",
  },
  {
    title: "他社との強み3",
    description: "詳細な説明をここに記載します。",
  },
];

export const PartnersSection = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">他社との強み</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="bg-gray-50 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200">
                {/* 画像を追加予定 */}
              </div>
              <h3 className="text-xl font-semibold mb-4">{partner.title}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
