const teamMembers = [
  {
    name: '山田太郎',
    title: '代表兼編集長',
    description: 'カナダ在住20年のベテランで、生活情報から観光ガイドまで幅広い知識を持っています。',
  },
  {
    name: '鈴木花子',
    title: 'ライター兼編集者',
    description: '日本とカナダの文化の架け橋となり、特に教育や子育てに関する記事を担当。',
  },
  {
    name: '田中一郎',
    title: 'テクニカルディレクター',
    description: 'ウェブサイトの運営と技術サポートを担当し、ユーザーエクスペリエンスの向上に努めています。',
  },
];

const AboutUs = () => {
  return (
    <div>
       <section className="my-12 px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-8 text-center">私たちについて</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">チーム紹介</h3>
          <p className="mb-6">
            私たちのチームは、多様なバックグラウンドを持つ専門家で構成されています。各メンバーがそれぞれの分野での豊富な経験を活かし、カナダ生活に関する信頼性の高い情報を提供しています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member p-6 bg-white shadow-lg rounded-lg text-center fade-in-up">
                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                <p className="text-md text-gray-600 mb-2">{member.title}</p>
                <p className="text-gray-800">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 fade-in-up">
          <h3 className="text-2xl font-semibold mb-4">私たちの価値観</h3>
          <p className="mb-6">企業文化、価値観、信念</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>信頼:</strong> ユーザーに信頼される情報を提供することを最優先に考えています。情報の正確性と最新性を常に保つよう努めています。
            </li>
            <li>
              <strong>誠実:</strong> 誠実な姿勢で仕事に取り組み、ユーザーとの透明なコミュニケーションを心掛けています。
            </li>
            <li>
              <strong>コミュニティ:</strong> カナダに住む全ての人々のコミュニティを支援し、交流を促進することを目指しています。
            </li>
          </ul>
        </div>

        <div className="mb-12 fade-in-up">
          <h3 className="text-2xl font-semibold mb-4">活動内容</h3>
          <p className="mb-6">日常業務やイベント、取り組みなど</p>
          <p className="mb-6">
            私たちの活動は多岐にわたります。日々の業務としては、カナダ生活に関する記事の執筆と更新、ユーザーからの問い合わせ対応、ウェブサイトのメンテナンスを行っています。
          </p>
          <p className="mb-6">また、定期的に以下のようなイベントや取り組みを実施しています。</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>ウェビナー:</strong> カナダ生活に関するテーマで専門家を招いたオンラインセミナーを開催。
            </li>
            <li>
              <strong>コミュニティイベント:</strong> 地域のコミュニティと連携して、カナダ生活に役立つワークショップや交流会を実施。
            </li>
            <li>
              <strong>ボランティア活動:</strong> 地元の非営利団体と協力し、コミュニティ支援や環境保護活動に参加。
            </li>
          </ul>
        </div>

        <p className="text-lg text-center fade-in-up">
          これからも、皆様にとって有益な情報を提供し続けるため、チーム一同全力で取り組んでまいります。
        </p>
      </section>
    </div>
  );
};

export default AboutUs;