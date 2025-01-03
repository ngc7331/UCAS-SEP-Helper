# UCAS-SEP-Helper
## 功能
### 课程评估辅助
***Disclaimer*: 课程评估的目的是帮助学校更好的改进课程，造福未来的学弟学妹。本脚本仅是为了减轻赶 ddl 重复劳动的负担，在时间精力允许的情况下，还请自行完成！**

半自动完成课程评估/教师评估，功能包括：
- 单选题全选整列
  - ![image](https://github.com/user-attachments/assets/3c62a789-38db-49ba-889e-f47e451fda86)
  - 课程评估第1.3题“来自同学的竞争压力较大”可能不一定适合选择第一列，脚本**会**自动填充，但请**自行检查**并选择合适的选项

- 填空题填充默认文本
  - ![image](https://github.com/user-attachments/assets/83fe9ad7-3177-4bdc-ac1a-6b65f6ee5de9)
  - 课程评估第3题“花费时间”目前是0~29**随机数**，脚本**会**自动填充，但请**自行检查**并根据实际情况填写合适的值
  - ~~有没有大佬可以把这玩意接到GPT上面去~~
- 课程评估第6题“教室情况和舒适度”请根据实际情况填写，脚本**不会**自动填充，也许有助于学校更合理的安排教室，~~胡老师的体系结构课人真的太多了，为什么不能安排到更大的教101~~
- 课程评估第7题“修读原因”请根据实际情况填写，脚本**不会**自动填充

### 课程评估系统CORS绕过
~~我要向学校谢罪，前几天的结论不对，这个锅不能完全由学校系统背~~

~~本人js水平半吊子，仅供参考~~

学校系统使用的jQuery框架可能和Zotero Connector等插件产生冲突：
- 这些插件会在页面中创建iframe DOM节点来实现插件功能
- jQuery的jBox在显示确认弹窗时会尝试获取body和iframe内部节点
 ![屏幕截图 2024-10-15 123617](https://github.com/user-attachments/assets/2a43c3b7-61f9-4e9c-b91b-14d71eb8df5c)
- 学校配置的站点策略是strict-origin-when-cross-origin，即不允许跨域

综合以上情况，当点击“提交”按钮时，jQuery尝试获取了插件创建的iframe内部节点，造成`Uncaught SecurityError`例外，无法保存评价

问题触发点：
```javascript
var tiptitle = "确认提交吗？";
top.$.jBox.confirm(tiptitle,"系统提示",function(v,h,f){
	if(v=="ok"){
		$("#sb1").attr("disabled",true);
		loading('正在提交，请稍等...');
		form.submit();
	}
},{buttonsFocus:1});
```

这一行为目前似乎只用于显示弹窗，而实际的表单提交功能仍然是通过触发表单的submit事件实现，理论上可以跳过显示弹窗直接调用`form.submit()`

解决方案：
1. 使用本脚本，本脚本在`保存`按钮上新增了一个EventLisener，点击时直接调用`form.submit()`，从而绕过CORS问题
   **注意：这也会导致评价的提交没有二次确认，请在点击保存前自行确认待提交内容，~~虽然我猜测一个课程评估也没人会想要二次确认~~**
2. 在进行课程评估时关闭浏览器插件，或更换没有插件的浏览器（如手机）

## 使用方式
1. 推荐使用 Edge、Chrome、FireFox 浏览器，编写时使用 Edge 129.0.2792.79
2. 安装油猴脚本插件，可以参考[这篇文章](https://zhuanlan.zhihu.com/p/387251122)
3. 复制本仓库下`helper.js`文件的**全部内容**备用
4. 打开油猴插件，选择添加新脚本，粘贴3中复制的内容，保存
   ![image.png](https://s2.loli.net/2022/12/25/9nRqLoQv3tgJKYd.png)
5. 刷新网页
6. 更新：打开油猴插件管理面板，打开脚本，覆盖为新的内容即可。
   - 亦可在设置里勾选“检查更新”并将更新URL填为：`https://raw.githubusercontent.com/ngc7331/UCAS-SEP-Helper/main/helper.js`即可
   - 若访问 github 有困难，可以考虑使用 CDN，例如：`https://fastly.jsdelivr.net/gh/ngc7331/UCAS-SEP-Helper@main/helper.js`

## **已弃用** 前言
下面是曾经的bb

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

## **已弃用**功能

**course.ucas.ac.cn 已弃用，详情请看学校通知**

### 批量下载课程资源
安装脚本后，打开任意课程的资源页面，应该可以看到在顶栏“复制”按钮的右侧增加了“下载已选”和“下载全部”按钮

![image.png](https://s2.loli.net/2022/12/25/HxrjCgBEncW6JeT.png)

点击“下载已选”按钮将下载当前页面所有已选中![已选中](https://s2.loli.net/2022/12/25/eVAGsrNUCndLuYp.png)的文件

点击“下载全部”按钮将下载当前页面的所有文件

注：
- 不会递归下载子文件夹，如有需要可以点击文件夹图标![未展开logo](https://s2.loli.net/2022/12/25/fJvQRTVx8b3anU9.png)将其展开![展开logo](https://s2.loli.net/2022/12/25/YKI1y27ejJcSwFL.png)后下载
- 脚本能力限制，不会检查本地文件是否重复，请手动删除或使用[GentleCP/UCAS-Helper](https://github.com/GentleCP/UCAS-Helper)
- 将使用浏览器默认方式下载
- 较大的文件下载较慢，请耐心等待
- 一次性下载过多文件可能导致丢失，不清楚是浏览器、网络限制还是脚本有误，请考虑使用“下载已选”功能
- 可以使用`F12`打开控制台查看下载请求

### 保持登录
自动点击“保持在线状态”弹窗的按钮

每5分钟检查一次

建议不要在公用电脑上使用该功能

### 自动课程评估
灵感来自于 [ljs-2002/UCASCoursePull](https://github.com/ljs-2002/UCASCoursePull)。

**课程评估的目的是帮助学校更好的改进课程，造福未来的学弟学妹。本脚本仅是为了减轻赶 ddl 重复劳动的负担，在时间精力允许的情况下，还请自行完成！**

安装脚本后，进入到某一个课程的问卷中时，可以看到“计分问卷 问卷满分：100”右侧出现了“填充”按钮，点击即可自动填写问卷，请人工复核后点击页面底部的“提交”按钮提交问卷。亦可点击“填充并提交”按钮自动填写并提交

由于问卷页面采用js脚本载入数据，在油猴脚本开始执行的时候问卷不一定已经加载完毕。目前采用1秒的延迟解决，可能因网络较慢等因素失败（e.g. 1秒内问卷仍未加载完毕）。有更好的方法欢迎 PR
