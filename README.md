# 个人介绍网页

这是一个纯静态的个人介绍单页网站，直接打开 `index.html` 即可查看，也可以部署到任意静态托管平台。

## 文件说明

- `index.html`：页面结构与文案
- `styles.css`：视觉样式与响应式布局
- `script.js`：滚动显现动画

## 本地预览

在当前目录运行：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 发布到 GitHub Pages

这个项目已经包含 GitHub Pages 自动部署文件：

- `.github/workflows/deploy-pages.yml`

你只需要把当前目录推送到 GitHub 仓库的 `main` 分支，GitHub Actions 会自动发布。

### 推荐步骤

1. 在 GitHub 新建一个仓库
2. 把当前目录作为本地仓库提交并推送到该仓库的 `main` 分支
3. 打开 GitHub 仓库的 `Settings -> Pages`
4. 在 `Build and deployment` 中确认来源为 `GitHub Actions`
5. 等待 Actions 跑完后，网站就会生成公网地址

### 预计访问地址

如果是个人账号仓库，通常会是：

```text
https://你的GitHub用户名.github.io/仓库名/
```

如果仓库名恰好是：

```text
你的GitHub用户名.github.io
```

那么通常会直接发布在根地址：

```text
https://你的GitHub用户名.github.io/
```

## 需要替换的个人信息

请优先修改 `index.html` 中这些内容：

- 姓名：`Lin Zhou`
- 主标题与简介文案
- 城市、方向、合作状态
- 项目经历
- 联系方式：邮箱、LinkedIn、GitHub
