# UCAS-SEP-Helper
## 前言
### 关于命名
虽然目前实现和计划实现的功能都集中在课程网站，只是`Course-Helper`总感觉怪怪的，因此还是选择叫`SEP-Helper`

### 关于动机
众所周知我校的~~乐色~~课程平台有很多槽点，比如不能批量下载课程资源等

每当我想梳理一下本地的课程资源总是要肉眼核对每一个文件，并且逐个点击下载

雪上加霜的是，很多现代浏览器可以智能地打开在线 pdf 文件而不下载，导致我不得不等待 pdf 在**新页面**中打开后，再点击保存按钮

作为寄系人，如此程度的非自动化是无法接受的，遂写脚本解决

### 关于灵感
以前在逛 Github 的时候看到过类似想法的项目，例如[GentleCP/UCAS-Helper](https://github.com/GentleCP/UCAS-Helper)和[Northfourta/UCASCourserHelper](https://github.com/Northfourta/UCASCourserHelper)

但它们需要本地 Python 运行环境，并且通过命令行操作的方式并不十分直观

在上个学期又刷到了通过油猴脚本实现实时 GPA 计算的工具[TimeSea05/gpa-calc-ucas](https://github.com/TimeSea05/gpa-calc-ucas)

联想到以前用过的一些~~百⚪网盘直链下载~~之类的工具，我意识到可以使用油猴脚本在课程网站页面上添加按钮等元素，实现功能补充

## 功能
### 批量下载课程资源
安装脚本后，打开任意课程的资源页面，应该可以看到在顶栏“复制”按钮的右侧增加了“下载全部”按钮

![image.png](https://s2.loli.net/2022/12/25/gvS9eCsnFNqTOdp.png)

点击该按钮将下载当前页面的所有文件

注：
- 不会递归下载子文件夹
- 脚本能力限制，不会检查本地文件是否重复，请手动删除或使用[GentleCP/UCAS-Helper](https://github.com/GentleCP/UCAS-Helper)
- 将使用浏览器默认方式下载
- 较大的文件下载较慢，请耐心等待
- 可以使用`F12`打开控制台查看下载请求

## 使用方式
1. 推荐使用 Edge、Chrome、FireFox 浏览器，编写时使用 Edge 108.0.1462.54
2. 安装油猴脚本插件，可以参考[这篇文章](https://zhuanlan.zhihu.com/p/387251122)
3. 复制本仓库下`helper.js`文件的**全部内容**备用
4. 打开油猴插件，选择添加新脚本，粘贴3中复制的内容，保存
   ![image.png](https://s2.loli.net/2022/12/25/9nRqLoQv3tgJKYd.png)
5. 刷新课程网站
