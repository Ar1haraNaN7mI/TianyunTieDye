'use client';
import { Header } from '../../components/Header';

// 内联SVG图标
const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>
);

const GlobeAltIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9Zm8.716-6.747c.26-.85.306-1.746.306-2.753 0-1.007-.045-1.902-.306-2.753M8.716 14.253c-.26-.85-.306-1.746-.306-2.753 0-1.007.045-1.902.306-2.753m8 5.506a11.963 11.963 0 0 1-8 0m8-5.506a11.963 11.963 0 0 1-8 0M12 3a9.004 9.004 0 0 1 8.716 6.747M12 3a9.004 9.004 0 0 0-8.716 6.747" />
  </svg>
);

const AwardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M15.75 4.5V2.25a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0-.75.75V4.5m11.356-1.993 1.263 3.155a8.321 8.321 0 0 0 7.265 5.206l.319-.094c.835-.246 1.335-1.124 1.016-1.923a7.5 7.5 0 0 0-5.471-4.9 8.4 8.4 0 0 1-1.231-.092l-2.48.573c-.126.03-.254.043-.383.043-.473 0-.892-.265-1.1-.68Z" />
  </svg>
);

// 团队成员类型
type TeamMember = {
  id: number;
  name: string;
  position: string;
  experience: string;
  description: string;
  avatar: string;
};

// 发展历程类型
type Milestone = {
  year: string;
  title: string;
  description: string;
};

// 团队成员数据
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "张明华",
    position: "创始人 & CEO",
    experience: "25年扎染行业经验",
    description: "致力于传统扎染文化的传承与创新，带领团队将古老技艺与现代设计完美融合。",
    avatar: "/team/ceo.jpg"
  },
  {
    id: 2,
    name: "李雅文",
    position: "技术总监",
    experience: "20年工艺研发经验",
    description: "负责扎染技术的研发与创新，在保持传统工艺的基础上，不断探索新的技法。",
    avatar: "/team/cto.jpg"
  },
  {
    id: 3,
    name: "王艺琳",
    position: "设计总监",
    experience: "15年设计经验",
    description: "将现代美学与传统扎染相结合，创造出既有文化内涵又符合现代审美的作品。",
    avatar: "/team/design.jpg"
  },
  {
    id: 4,
    name: "陈建国",
    position: "生产总监",
    experience: "18年生产管理经验",
    description: "确保每一件产品的质量，从原料选择到成品包装，严格把控每一个环节。",
    avatar: "/team/production.jpg"
  }
];

// 发展历程数据
const milestones: Milestone[] = [
  {
    year: "2008",
    title: "天韵扎染成立",
    description: "由张明华先生创立，致力于传统扎染技艺的传承与发展"
  },
  {
    year: "2010",
    title: "技艺传承",
    description: "与多位非遗传承人合作，建立完整的技艺传承体系"
  },
  {
    year: "2013",
    title: "工艺创新",
    description: "成功开发彩色扎染技法，获得多项技术专利"
  },
  {
    year: "2016",
    title: "品牌发展",
    description: "产品远销海外，成为中国扎染文化的重要传播者"
  },
  {
    year: "2019",
    title: "数字化转型",
    description: "启动线上平台，让更多人了解和参与扎染文化"
  },
  {
    year: "2022",
    title: "文化传承基地",
    description: "建立扎染文化传承基地，开展教育培训和文化交流"
  },
  {
    year: "2024",
    title: "VR技术融合",
    description: "引入VR技术，为用户提供沉浸式的扎染文化体验"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">关于天韵扎染</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            传承千年技艺，创新现代美学。我们致力于将中华传统扎染文化发扬光大，
            让古老的工艺在新时代焕发出更加绚烂的光彩。
          </p>
        </div>

        {/* 企业愿景 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">我们的使命</h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                天韵扎染创立于2008年，是一家专注于传统扎染技艺传承与创新的文化企业。
                我们秉承"传承经典，创新未来"的理念，致力于保护和发展中华优秀传统文化。
              </p>
              <p className="text-gray-600 leading-relaxed">
                十六年来，我们与多位国家级非遗传承人深度合作，建立了完整的技艺传承体系。
                同时，我们也在传统工艺的基础上不断创新，开发出独特的彩色扎染技法，
                让传统文化在现代社会中焕发新的生命力。
              </p>
              <p className="text-gray-600 leading-relaxed">
                我们相信，传统文化不应该只是博物馆里的陈列品，而应该融入现代生活，
                成为人们日常生活中的美好体验。通过我们的努力，让更多人了解、喜爱并传承扎染文化。
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">核心价值观</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <HeartIcon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">传承初心</h4>
                  <p className="text-gray-600 text-sm">用心守护每一份传统技艺，让文化传承生生不息</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <SparklesIcon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">匠心创新</h4>
                  <p className="text-gray-600 text-sm">在传统基础上创新发展，让古老工艺焕发新活力</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <GlobeAltIcon className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">文化传播</h4>
                  <p className="text-gray-600 text-sm">让中华文化走向世界，成为文明交流的桥梁</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <AwardIcon className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">品质追求</h4>
                  <p className="text-gray-600 text-sm">精益求精，为客户提供最优质的产品和服务</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 团队介绍 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心团队</h2>
            <p className="text-gray-600">专业的团队，为传承和创新提供强有力的支撑</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {member.name.slice(0, 1)}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 text-sm mb-1">{member.position}</p>
                <p className="text-gray-500 text-xs mb-3">{member.experience}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 发展历程 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">发展历程</h2>
            <p className="text-gray-600">见证天韵扎染的成长足迹，每一步都承载着文化传承的使命</p>
          </div>
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-200 h-full"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-indigo-600 mb-2">{milestone.year}</div>
                      <h3 className="font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  {/* 时间点 */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 荣誉资质 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">荣誉资质</h2>
            <p className="text-gray-600">多年来获得的认可与荣誉，是对我们工作的最好肯定</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <AwardIcon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">国家级非遗保护单位</h3>
              <p className="text-gray-600 text-sm">国家文化和旅游部认定</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <AwardIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">中华老字号</h3>
              <p className="text-gray-600 text-sm">商务部认定</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <AwardIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">国际手工艺金奖</h3>
              <p className="text-gray-600 text-sm">联合国教科文组织颁发</p>
            </div>
          </div>
        </div>

        {/* 联系我们 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-gray-600">期待与您一起探索扎染文化的无限魅力</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">地址</h3>
              <p className="text-gray-600 text-sm">
                浙江省杭州市西湖区<br />
                天韵扎染文化园区<br />
                邮编：310000
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">联系方式</h3>
              <p className="text-gray-600 text-sm">
                电话：400-123-4567<br />
                邮箱：info@tianyuntiedye.com<br />
                微信：TianyunTieDye
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">开放时间</h3>
              <p className="text-gray-600 text-sm">
                周一至周日：9:00-18:00<br />
                工作坊预约：9:00-17:00<br />
                节假日正常开放
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 