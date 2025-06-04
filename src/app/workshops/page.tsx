'use client';
import { useState } from 'react';
import { Header } from '../../components/Header';

// 内联SVG图标
const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const UserGroupIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
);

// 工作坊类型
type Workshop = {
  id: number;
  title: string;
  instructor: string;
  level: '初级' | '中级' | '高级';
  duration: string;
  maxParticipants: number;
  price: number;
  description: string;
  schedule: {
    date: string;
    time: string;
    status: '可报名' | '已满员' | '即将开始';
  }[];
  syllabus: string[];
  materials: string[];
  requirements: string[];
  image: string;
};

// 工作坊数据
const workshops: Workshop[] = [
  {
    id: 1,
    title: "传统蓝染入门体验",
    instructor: "陈志明大师",
    level: "初级",
    duration: "3小时",
    maxParticipants: 12,
    price: 280,
    description: "深入了解传统蓝染工艺，亲手制作属于自己的蓝染作品。适合零基础学员，从认识植物蓝靛开始，学习扎花、染色等基本技法。",
    schedule: [
      { date: "2024-02-15", time: "09:00-12:00", status: "可报名" },
      { date: "2024-02-22", time: "14:00-17:00", status: "可报名" },
      { date: "2024-03-01", time: "09:00-12:00", status: "已满员" }
    ],
    syllabus: [
      "蓝染历史文化介绍",
      "植物蓝靛认识与制备",
      "基础扎花技法学习",
      "染色工艺实践",
      "作品整理与保养"
    ],
    materials: [
      "纯棉白色T恤或手帕",
      "扎染工具包",
      "天然蓝靛染料",
      "防护围裙",
      "作品包装袋"
    ],
    requirements: [
      "穿着不怕弄脏的衣服",
      "提前15分钟到达",
      "带上创作的热情"
    ],
    image: "/image/workshops/1.png"
  },
  {
    id: 2,
    title: "彩色扎染创新技法",
    instructor: "李美华大师",
    level: "中级",
    duration: "4小时",
    maxParticipants: 10,
    price: 480,
    description: "学习现代彩色扎染技法，掌握多色搭配和渐变效果制作。课程涵盖色彩理论、高级扎花技法和创新染色工艺。",
    schedule: [
      { date: "2024-02-18", time: "09:00-13:00", status: "可报名" },
      { date: "2024-02-25", time: "13:00-17:00", status: "即将开始" },
      { date: "2024-03-04", time: "09:00-13:00", status: "可报名" }
    ],
    syllabus: [
      "色彩理论与搭配原理",
      "多色扎染技法演示",
      "渐变效果制作技巧",
      "创新图案设计",
      "作品完善与点评"
    ],
    materials: [
      "高级纯棉面料",
      "专业染料套装",
      "精密扎染工具",
      "色彩搭配指南",
      "作品展示框"
    ],
    requirements: [
      "具备基础扎染经验",
      "对色彩有一定敏感度",
      "带上创意设计想法"
    ],
    image: "/image/workshops/2.jpg"
  },
  {
    id: 3,
    title: "古法蜡染高级研修",
    instructor: "王德福大师",
    level: "高级",
    duration: "6小时",
    maxParticipants: 8,
    price: 880,
    description: "深度学习古法蜡染的精髓技艺，了解非遗文化传承。适合有一定基础的学员，课程包含古法蜡制备、复杂图案绘制等高级技法。",
    schedule: [
      { date: "2024-02-20", time: "09:00-16:00", status: "可报名" },
      { date: "2024-03-02", time: "09:00-16:00", status: "可报名" }
    ],
    syllabus: [
      "古法蜡染历史与文化",
      "传统蜡的制备工艺",
      "古典图案临摹与创作",
      "精细蜡绘技法",
      "脱蜡与后期处理",
      "作品鉴赏与传承意义"
    ],
    materials: [
      "高档丝绸面料",
      "传统蜡制材料",
      "专业蜡绘工具",
      "古典图案参考",
      "作品装裱服务"
    ],
    requirements: [
      "具备中级以上扎染基础",
      "对传统文化有深度兴趣",
      "有一定绘画基础更佳"
    ],
    image: "/image/workshops/3.jpg"
  },
  {
    id: 4,
    title: "亲子扎染欢乐时光",
    instructor: "专业讲师团队",
    level: "初级",
    duration: "2.5小时",
    maxParticipants: 20,
    price: 380,
    description: "专为家庭设计的亲子体验课程，家长和孩子一起学习扎染，在创作中增进亲情，培养孩子对传统文化的兴趣。",
    schedule: [
      { date: "2024-02-17", time: "14:00-16:30", status: "可报名" },
      { date: "2024-02-24", time: "14:00-16:30", status: "可报名" },
      { date: "2024-03-03", time: "14:00-16:30", status: "可报名" }
    ],
    syllabus: [
      "扎染文化故事分享",
      "简单图案设计",
      "亲子协作扎花",
      "安全染色体验",
      "作品展示与合影"
    ],
    materials: [
      "儿童专用围裙",
      "安全染料",
      "亲子扎染套装",
      "纪念徽章",
      "全家福照片"
    ],
    requirements: [
      "适合6岁以上儿童",
      "至少一名家长陪同",
      "穿着舒适便于活动的衣服"
    ],
    image: "/image/workshops/4.jpg"
  }
];

export default function WorkshopsPage() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'ongoing' | 'past'>('upcoming');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">扎染工作坊</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            跟随大师学习传统扎染技艺，在实践中感受非遗文化的魅力。
            我们提供从入门到精通的全套课程，无论你是初学者还是爱好者，都能找到适合的课程。
          </p>
        </div>

        {/* 特色介绍 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <UserGroupIcon className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">大师亲授</h3>
            <p className="text-gray-600 text-sm">国家级非遗传承人和工艺大师亲自授课，确保技艺传承的正宗性</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">小班教学</h3>
            <p className="text-gray-600 text-sm">小班制教学，确保每位学员都能得到充分的指导和关注</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CalendarIcon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">灵活安排</h3>
            <p className="text-gray-600 text-sm">多个时间段可选，周末及节假日均有课程安排</p>
          </div>
        </div>

        {/* 工作坊列表 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">工作坊图片</span>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{workshop.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    workshop.level === '初级' ? 'bg-green-100 text-green-800' :
                    workshop.level === '中级' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {workshop.level}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{workshop.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <UserGroupIcon className="w-4 h-4 mr-2" />
                    <span>讲师：{workshop.instructor}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>时长：{workshop.duration} | 限额：{workshop.maxParticipants}人</span>
                  </div>
                </div>
                
                {/* 近期排期 */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">近期排期：</h4>
                  <div className="space-y-1">
                    {workshop.schedule.slice(0, 2).map((session, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{session.date} {session.time}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          session.status === '可报名' ? 'bg-green-100 text-green-800' :
                          session.status === '即将开始' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {session.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-indigo-600">¥{workshop.price}</div>
                  <button 
                    onClick={() => setSelectedWorkshop(workshop)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                  >
                    查看详情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 报名须知 */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">报名须知</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">报名方式</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 在线预订：选择课程后在线支付</li>
                <li>• 电话报名：400-123-4567</li>
                <li>• 现场报名：工作坊地址报名</li>
                <li>• 团体报名：5人以上享受团体优惠</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">注意事项</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 请提前15分钟到达现场</li>
                <li>• 穿着便于活动且不怕弄脏的衣服</li>
                <li>• 课程开始前24小时可免费取消</li>
                <li>• 所有材料工具均由工作坊提供</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 详情弹窗 */}
        {selectedWorkshop && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedWorkshop.title}</h2>
                  <button 
                    onClick={() => setSelectedWorkshop(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">课程大纲</h3>
                    <ul className="space-y-1">
                      {selectedWorkshop.syllabus.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="text-indigo-500 mr-2">{idx + 1}.</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">提供材料</h3>
                    <ul className="space-y-1">
                      {selectedWorkshop.materials.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">报名要求</h3>
                    <ul className="space-y-1">
                      {selectedWorkshop.requirements.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-indigo-600">¥{selectedWorkshop.price}</div>
                    <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                      立即报名
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 