# 天韵扎染 (TianyunTieDye)

这是一个基于Next.js开发的扎染艺术展示和销售平台。

## 项目特色

- 🎨 展示传统扎染艺术作品
- 🛍️ 在线购买扎染产品
- 🎯 VR互动体验
- 📱 响应式设计

## 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **部署**: Vercel

## 项目结构

```
tie-dye-shop/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 主布局
│   │   ├── page.tsx            # 首页
│   │   ├── products/           # 产品页面
│   │   └── vr-canvas/          # VR体验页面
│   └── components/
│       ├── Button.tsx          # 按钮组件
│       ├── Header.tsx          # 头部组件
│       ├── Marquee.tsx         # 滚动条组件
│       └── Navigation.tsx      # 导航组件
├── public/
│   └── image/                  # 静态图片资源
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 安装和运行

1. 克隆仓库
```bash
git clone https://github.com/Ar1haraNaN7mI/TianyunTieDye.git
cd TianyunTieDye/tie-dye-shop
```

2. 安装依赖
```bash
npm install
```

3. 运行开发服务器
```bash
npm run dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 部署

项目已配置好Vercel部署，可以直接从GitHub仓库部署到Vercel。

## 图片资源

项目包含以下类型的图片：
- 📸 Collections: 扎染作品集合
- 👕 Clothes: 扎染服装产品
- 🎨 Digital: 数字艺术作品
- 👨‍🎨 Master: 大师作品
- 🏭 Workshops: 工作坊图片
- 🏛️ ISO-CC: 认证相关图片

## 许可证

MIT License 