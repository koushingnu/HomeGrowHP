import { Container } from "../ui/Container";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li>
                <a href="/company" className="hover:text-gray-600">
                  会社概要
                </a>
              </li>
              <li>
                <a href="/cases" className="hover:text-gray-600">
                  実績一覧
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="hover:text-gray-600">
                  事務内容
                </a>
              </li>
              <li>
                <a href="/work" className="hover:text-gray-600">
                  業務内容
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">採用情報</h3>
            <ul className="space-y-2">
              <li>
                <a href="/careers" className="hover:text-gray-600">
                  採用・パートナー募集
                </a>
              </li>
              <li>
                <a href="/column" className="hover:text-gray-600">
                  コラム
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <p className="text-gray-600 mb-4">お気軽にお問い合わせください。</p>
            <a
              href="/contact"
              className="inline-block bg-yellow-300 hover:bg-yellow-400 text-gray-900 px-6 py-2 rounded-full transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Lumique. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
