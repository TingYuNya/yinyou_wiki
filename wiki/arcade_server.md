# 街机服务器

## AquaDX

https://aquadx.net/

群号：201284385

服务器地址：aquadx.hydev.org（使用前请注册账号并申请狗号）

公益服务器，免费，适配游戏全，与RinNET共用一个中二节奏全国对战的匹配池

支持的游戏：舞萌、中二、音击、华卡

## Arcana

http://arcana.nu

##### 说明

邀请相对于连网较难一些

##### 使用

登录后进入 Account -> Machine，点击 Add Machine 就能生成一个属于你的 PCBID。
有PCBID后就可以开始制作卡以及配置了。
首先说制作卡，出勤人应该都知道打 SDVX 如果你没 EPASS 的话就只能以游客形式打，所以创建一张虚拟卡还是很有必要的，
要创建卡，你只需要打开大佬开发的 ePass 生成器，随机生成一个卡号，然后在游戏根目录下创建一个 card0.txt，填入生成的卡号然后保存就行了。
制作启动文件也很简单，打开大佬开发的启动文件生成器工具，选择私网、游戏名、一些锦上添花的选项、填上你的 PCBID，再点生成这个工具就能自动的帮你把.bat 文件制作出来了 。
制作完成后把.bat 放在 SDVX 根目录下再运行即可成功联网游戏。
第一次使用卡游戏会让你创建个人信息和四位 PIN，创建完成后别忘了在私网里也声明一下以便查分。
举个栗子，如果你是 A 网，则需要在 Account -> card 里面绑定卡号以及 Pin。

##### 一些有用的东西

批处理指令

###### 解除端口占用

```
netstat -ano | findstr PORT
taskkill   /pid PID /f
```

###### Spice 单机游玩

```
start spice64 -sdvxdisablecams -url http://localhost:8083
start asphyxia-core-x64
```

###### Spice 单机窗口游玩

```
start spice64 -w -sdvxdisablecams -url http://localhost:8083
start asphyxia-core-x64
```

###### Spice 联网游玩

```
@echo off
@spice64 -sdvx -url http://xrpc.arcana.nu/core -urlslash 0 -p 你的PCBID
```

## Fangclub

可以加入Fang台交流群查询如何连接：1041768100

个人运营的非盈利性质的游戏网络，仅用于Jubeat店铺联机

## MysteriaNet

https://net.sega.ink

服务器群号为916296160

服务器地址请私聊群主获取（Keychip同理）

纯净，仿原神外观的登陆界面，与RinNET共用一个中二节奏全国对战的匹配池

支持的游戏：舞萌、中二

## NAGEKI-NET

http://nageki.nananana.net/web

服务器地址为以下任意一个网址都可使用

nageki-net.com 

ongeki.moe 

nageki.nananana.net 

公益服务器，专注于音击，服务器纯净，功能全面，稳定性高

游玩1pc之后，用游玩时使用的aime卡号注册

支持的游戏：音击

## RIN-NET

服务器地址为aqua.naominet.live（使用前请注册账号并申请狗号）

服务器前台为https://portal.naominet.live

查看服务器状态地址https://status.naominet.liveRIN-NET

服务器群号：295954906

公益服务器，优点在免费，功能全面，使用人数多，支持中二节奏全国对战

支持的游戏：舞萌、中二、音击



RIN全国对战

全国对战约战群：881395878

RinNET MysteriaNET AquaDX 服务器共用一个全国对战匹配池

在群文件下载最新的duolinguo.dll 然后编辑start.bat

找到inject_x86 -d -k chusanhook.dll chusanApp.exe

修改为inject_x86 -d -k chusanhook.dll -k duolinguo.dll chusanApp.exe即可使用

## RING-NET

服务器地址为net.mapleshuzuko.site

CHUNI-NEThttps://chuni-net.mapleshuzuko.site

My-Aimehttps://my-aime.mapleshuzuko.site

查看服务器状态地址http://status.mapleshuzuko.site/status/chuni-net

服务器群号：288752765

邀请制服务器(现在已经不放人)，优点在纯净，稳定，有服内全国对战，前端UI100%还原官

支持的游戏：中二

## Yuzu-net

服务器地址：aime.yuzunet.cn（使用前请加群注册账号获取狗号）

服务器管理面板：https://yuzunet.cn/

服务器群号：770878254

稳定，前端简单美观，支持多次导入国服数据

支持的游戏：舞萌、中二、音击
