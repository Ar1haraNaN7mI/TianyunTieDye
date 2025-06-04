'use client';
import { Header } from '../../components/Header';
import Image from 'next/image';

// 大师信息类型
type Master = {
  id: number;
  name: string;
  title: string;
  experience: string;
  specialty: string;
  biography: string;
  avatar: string;
  achievements: string[];
  masterpieces: {
    id: number;
    title: string;
    image: string;
    description: string;
    technique: string;
    year: string;
  }[];
};

// 大师数据
const masters: Master[] = [
  {
    id: 1,
    name: "陈志明",
    title: "国家级非遗传承人",
    experience: "40年",
    specialty: "传统蓝染技艺",
    biography: "陈志明大师自幼跟随祖父学习传统扎染技艺，经过40余年的潜心研究和实践，形成了独特的蓝染风格。他不仅继承了古法扎染的精髓，更在传统基础上创新发展，被誉为'当代蓝染大师'。",
    avatar: "/image/master/1.png",
    achievements: [
      "国家级非物质文化遗产传承人",
      "中国工艺美术大师",
      "联合国教科文组织认证艺术家",
      "扎染技艺终身成就奖获得者"
    ],
    masterpieces: [
      {
        id: 1,
        title: "云山雾海",
        image: "/image/master/work1.jpg",
        description: "运用传统蓝染技法，表现山水意境的经典之作",
        technique: "板蓝根染色 + 扎花技法",
        year: "2018"
      },
      {
        id: 2,
        title: "梅花三弄",
        image: "/image/master/work2.jpg", 
        description: "以梅花为主题，体现中华文化的高雅品味",
        technique: "蜡染 + 扎染结合",
        year: "2020"
      }
    ]
  },
  {
    id: 2,
    name: "李美华",
    title: "省级工艺美术大师",
    experience: "30年",
    specialty: "彩色扎染创新",
    biography: "李美华大师专注于彩色扎染技艺的研究与创新，将传统单色扎染发展为多彩艺术形式。她的作品色彩丰富，层次分明，在保持传统韵味的同时融入了现代审美元素。",
    avatar: "/image/master/2.png",
    achievements: [
      "省级工艺美术大师",
      "扎染创新技艺发明者",
      "国际手工艺博览会金奖",
      "传统工艺振兴贡献奖"
    ],
    masterpieces: [
      {
        id: 3,
        title: "春花烂漫",
        image: "/image/master/work3.jpg",
        description: "多色渐变技法展现春天花海的绚烂",
        technique: "多层次扎染 + 天然植物染",
        year: "2019"
      },
      {
        id: 4,
        title: "彩云追月",
        image: "/image/master/work4.jpg",
        description: "夜空彩云的梦幻效果，展现扎染的无限可能",
        technique: "渐变扎染 + 银粉装饰",
        year: "2021"
      }
    ]
  },
  {
    id: 3,
    name: "王德福",
    title: "民间工艺大师",
    experience: "35年",
    specialty: "古法蜡染技艺",
    biography: "王德福大师是古法蜡染技艺的坚守者和传承者，他的作品严格按照古代工艺制作，保持了最原始的蜡染韵味。他致力于抢救濒临失传的古老技法，为传统工艺的传承做出了重要贡献。",
    avatar: "/image/master/3.png",
    achievements: [
      "民间工艺大师",
      "古法蜡染技艺传承人",
      "文化部优秀传承人",
      "传统工艺保护贡献奖"
    ],
    masterpieces: [
      {
        id: 5,
        title: "龙凤呈祥",
        image: "/image/master/work5.jpg",
        description: "古法蜡染技艺的巅峰之作，寓意吉祥如意",
        technique: "古法蜡染 + 手工描绘",
        year: "2017"
      },
      {
        id: 6,
        title: "百鸟朝凤",
        image: "/image/master/work6.jpg",
        description: "传统题材的现代诠释，工艺精湛",
        technique: "蜡染 + 重彩技法",
        year: "2022"
      }
    ]
  }
];

export default function MastersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">大师作品</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            汇聚国内顶级扎染艺术大师，展示传统工艺的精湛技艺与现代创新。
            每一位大师都是扎染文化的传承者和创新者，他们的作品承载着深厚的文化底蕴。
          </p>
        </div>

        {/* 大师列表 */}
        <div className="space-y-16">
          {masters.map((master, index) => (
            <div key={master.id} className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* 大师信息 */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                      <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                        {master.name.slice(0, 1)}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{master.name}</h2>
                    <p className="text-indigo-600 font-medium">{master.title}</p>
                    <div className="flex justify-center items-center mt-2 text-sm text-gray-500">
                      <span>从业经验：{master.experience}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">专业领域</h3>
                      <p className="text-gray-600 text-sm">{master.specialty}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">个人简介</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{master.biography}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">主要成就</h3>
                      <ul className="space-y-1">
                        {master.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 大师作品 */}
              <div className="lg:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">代表作品</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {master.masterpieces.map((piece) => (
                    <div key={piece.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">作品图片</span>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{piece.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{piece.description}</p>
                        <div className="space-y-1 text-xs text-gray-500">
                          <div><span className="font-medium">技法：</span>{piece.technique}</div>
                          <div><span className="font-medium">年份：</span>{piece.year}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 联系大师 */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">与大师对话</h2>
          <p className="text-gray-600 mb-6">想要深入了解扎染技艺？期待与大师面对面交流学习？</p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            预约大师交流
          </button>
        </div>
      </main>
    </div>
  );
} 