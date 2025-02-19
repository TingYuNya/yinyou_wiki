# 街机常见问题

## 通用问题

### 电脑硬件配置

舞萌和音击为unity引擎，最低需求配置并不高，如下表

中二节奏是自研引擎，最低需求配置稍微高一些

| 项目   | 最低配置                                   | 推荐配置                     |
| ------ | ------------------------------------------ | ---------------------------- |
| 处理器 | x86处理器，4核心2Ghz或更高                 | Intel i5-8600或更高          |
| 内存   | DDR4 8G或以上                              | DDR4 8G*2                    |
| 显卡   | NAVID GTX760                               | NVIDIA  GTX1050ti            |
| 硬盘   | 游戏本体约14G，建议预留20G以上空间便于解压 | 256GB固态                    |
| 显示器 | 分辨率1920\*1080 60Hz                      | 街机相同屏幕尺寸的4k高刷直屏 |
| 系统   | Windows 10                                 | Windows 10专业版             |

### 运行库

游玩HDD前务必安装runtime运行库

### 游戏路径以及环境

下载游戏以及游玩的时候请关闭火绒以外的杀毒软件

路径勿含有中文，最好不要过长

### 如何使用懒人包

打开segatools.ini根据里面的文字说明进行修改

修改完毕后右键package（或bin）里的start.bat点击管理员启动即可

### 刷虚拟卡

在package（或bin）-DEVICE文件夹里的aime.txt内填入20位数字后保存

请确保进入游戏后网络为绿色，在游戏界面长按回车即可

刷实体卡参考读卡器常见问题

### 刷实体卡（@Qinh）

https://affinelab.notion.site/Aime-Manual-66c171d3fc144ae2bc4369d45000f0eb

如果设置读卡器后自检正常，但是游戏灰网

请用读卡器上位机将读卡器设置为低波特率模式

### 本日受付終了

将TEST菜单中的”閉店時間”设置为【每日】【全時刻】 

如果还是不行，则是连接的服务器问题，将系统时间改为凌晨6点可以解决

## MAIMAI/舞萌常见问题

### 如何改1p/2p

打开mai2.ini或者maimaiDX.ini

找到EnableSinglePlayer=1一行

最后面的数字填1为1p，填0为2p

### 如何改最大的游玩次数

找到mai2.ini

改max track=需要改的最大游玩次数

最大为9

### 如何塞option/自制谱补充包

补充包文件夹改名Axx0（x为任意数字）

放【Sinmai_Data—StreamingAssets】文件夹里

注意不要重复命名和嵌套文件夹

### 官机屏幕倾斜角度

官机倾斜角度为70°，部分手台可能是60°

### 如何改投币等按键设定

找到并打开segatools.ini找到[io4]一行，有三个键位值

请在网上搜ASCII表对着改成想要的键位值

## Chunithm/常见问题

### 报错4105

amfs和appdata的必须要放在磁盘根目录，否则进游戏会出现4105报错，投不了币等情况

如果想使用其他盘，请在bin-segatools.ini里将第一栏的[vfs]的amfs和appdata文件夹前的绝对路径盘符修改至你实际使用的盘符

### 游戏画面显示比例不对

将自己的显示设置分辨率设置为1920X1080,缩放比例为100%

如果不想修改，请在segatools.ini的[gfx]一栏将windowed=1改为windowed=0

这时启用了全屏模式，全屏模式不可切屏，否则游戏程序会关闭

### 如何启用120hz

有些懒人包为60hZ

如果需要启用120hz

请在segatools.ini的[gpio]一栏

将dipsw2=1和dipsw3=1的值

改为dipsw2=0和dipsw3=0

### 游戏速度过快或过慢，像开了倍速

请将显示器刷新率和游戏刷新率调至对应hz

### 配信中 / 设定同期中 / 配信**サーバーチェック**中卡很久

局域网中只有一台机器的情况下

请将本机设置为配信服务器（[gpio]下的[dipsw]设置）和基准机（test界面）

具体是进入测试界面

然后调到**ゲーム**設定

再将其中的**筐体グループ**設定改为OFF

### 开游戏的时候报应用程序错误 800000xxx

请确保安装运行库和directx

并且检查下载的包体是否损坏

确保chusanapp和amdaemon已经替换

### 进入游戏时报错 320X

自检时请不要遮挡air或触碰按键

如果报错可以按进入test

再回到游戏重新自检

如果还有问题，请检查手台的air输入是否正常

可以使用记事本或对应键位检测工具测试，也可以直接在游戏test中测试

### 莫名其妙的bug

计算机设备名不能和用户名一样

## O.N.G.E.K.I/音击常见问题

### 卡在配信中

按测试键后进入TEST菜单，选择**ゲーム**設定（出力什么下面第三个）

将其中的A改成off

### 摇杆不好使或者摇杆过快过慢

进入设置模式根据操作提示选择**レバー**設定

首先选择**初期設定に戻す**来重置摇杆,轻轻往左和往右拨动摇杆到最边缘

观察**可動域調整**数值最左与最右都与**レバー位置**保持一致即可

选择**終了**并保存摇杆设定

### 卡在aime自检

需要关闭或打开游戏的E-Money功能 (默认为开启)

关闭游戏及相关窗口,用文本编辑器打开package中的config_common.json

找到[emoney]字段并修改其中的[enable]

### 游戏没有声音

游戏开启了独占音频并且系统音频设置里没有开启独占模式

打开mu3.ini，将WasapiExclusive=1修改为0即可

### 联机配置

首先，请将segatools.ini文件按照以下要求更改：

```ini
[netenv] enable=1
addrSuffix=37
;这里是你的ip最后几位，例如192.168.3.xxx。如使用了zerotier请查看zerotier派给你的ip 

[gpio] dipsw=1

[keychip]subnet=192.168.196.0
;这边是你的ip，但后面填成0，例如你的ip为192.168.3.xxx，那么此处填为192.168.3.0）
```

MU3.ini的修改部分 ：

```ini
[Network] UseLocalCollab=1
```

其他设置：

每个网络下只能有一个基准机，其他需要设置成**基準機に従う**，两台机器需要在同一组（进入游戏后Test - **ゲーム設定** - **基准机设定**），四人ABCD相同即可

默认情况下：在start.bat中，对于主机（基准机），需要删掉里面注入的config\_client.json，保留 command.json

对于客机（从机），需要删掉里面注入的config\_server.json，保留command.json。正常的start.bat同时拥有 config\_client.json、config\_server.json和config\_command .json

**如果您无法匹配到，可以尝试两台都设置为基准机**

如果您使用了VPN/P2P服务（例如zerotier或softEther），则在start.bat中，无论您是否为主机，都需要删除里面注入的 config\_client.json，只保留command.json

也就是说，您的start.bat应该保留：config\_server.json、config\_common.json

进入游戏后，您仍然需要设置基准机与从基准机，并保持在同一组内

Tips：联机的机器需要保持在同一版本，例如1.45-A与1.45-A

联机的两台机器，DNS地址可以不同，两边机器是不受服务器地址影响的

server.json里面的配置应该是：1，0，true，true，20，false（大部分情况下都可以运行）

## Sound Voltex/狂热节拍常见问题
### 模拟器：k-shoot ma­nia
#### 下载地址

https://www.kshootmania.com/download.html

#### 特点

可以选择横屏游玩，UI 可切换为中文

#### 使用方法

下载后点文件夹里exe文件开始运行
进入主页面后点击【option】->【display】->【display language】可更改为简体中文
将谱面文件夹放入【songs\K-Shoot MANIA】

### 模拟器：un­named SDVX clone

下载地址：https://github.com/Drewol/unnamed-sdvx-clone
手感比 KSM 更接近 SDVX，USC，但不能改语言
双击exe启动第一次后
游戏根目录会生成一个【songs】文件夹
将谱面文件夹放入即可

### 模拟器：自制谱资源：
http://ksm.dev
https://sites.google.com/site/ksh0hokansite/home/kshhokanko

### 懒人包下载站（@Juhaojun）

下载地址：https://juhaojun.notion.site/0b719d5929ba4aae8b40c5b2e2fd16af?v=9bdbaabfc8ee476a91e385a74265af3c
6代因为依赖Cuda，只支持N卡
不支持Itel集显以及A卡

### Spice Tool
下载地址：
https://github.com/spicetools/spicetools/releases
此工具又称小辣椒，能让你电脑运行SDVX等【Komani】系音游的HDD

使用方法：
把 spice.exe 和 spicecfg.exe 放入 SDVX 文件根目录下即可
spicecfg.exe 为配置文件，无论你是用的手台还是键盘，都要先在里面配置键位
需要注意的是

【Test】测试模式

【service】

【Coin】模拟投币

### Asphyxia core
#### 项目地址

https://asphyxia-core.github.io/

#### 本体下载

https://github.com/asphyxia-core/asphyxia-core.github.io/releases

#### 插件下载

https://github.com/asphyxia-core/plugins/releases

#### 说明

此工具又称【氧无核心】，是一款SDVX等【Komani】系音游HDD的【离线服务器】

#### 使用方法

本体和插件下载完成后把插件里的文件放入本体根目录下的【plugins】文件夹下，然后启动 asphyxia-core-win-x64.exe 即可。发现有网页弹出即代表本地服务器启动成功，记住网页上 CORE Settings 下面的 Port 数值（一般来说是 8083，其他端口号也没问题）。然后回到 SDVX 根目录下，新建一个叫 Game Start - local.bat 的文件（名字可以自己取），然后用记事本打开它，输入：

```
@echo off
@spice -sdvx -url http://localhost:PORT数值 -w
```

然后保存退出，最后再双击运行那个.bat 文件就能成功启动游戏了。启动游戏之前别忘了先运行 spicecfg.exe 更改键位。进入游戏后有一步是让你刷卡，点小键盘的 + 即可模拟刷卡。

#### 联网游玩

简单的来说，实现联网主要分三步：
1.获取私服给你分配的PCBID
2.创建虚拟卡
3.配置.bat文件使spicy运行游戏时加载私服信息
其中最困难的一步是获取 PCBID
对于目前大多数甚至所有的 SDVX 私服，为了控制流量以及尽量减小 HDD 的传播对 Kon­ami 的影响
这些网站都选择了邀请制注册，也就是说普通人是没法想进就进
所以如果你打算获取 PCBID，还得找有邀请权限的人



**A网：http://arcana.nu**

##### 说明

邀请相对于理网较难一些

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

### live2d补丁包

待补充


## Taiko/太鼓达人常见问题
### 模拟器：Taiko Nijiiro Donda Ex

#### 使用方法

先进Download This First .otf文件夹，安装FOT-大江戸勘亭流 Std E这个字体，

#### 启动方法

双击TaikoNijiiroDondaEx.exe启动游戏

#### 键位

INS键可以投一个硬币（如果没有设置默认需要1个币才给你玩）
按Enter作为1P进入游戏菜单
1P键位：红FJ 蓝DK 返回Esc 自动演奏F3
2P键位：红XN 蓝ZM 自动演奏F4
收藏歌曲：空格

#### 其他设置

按F1进设置，然后把Player Count（Max：2P）从1改成2，这样我们就成功添加了一个2P了，然后可以给2P开自动演奏（开后不记分数）
此外还有个SoundType，把它改成ASIO或可以有效降低鼓的延迟
设置里有个Stop the Timer，改为ON后可以将选歌时间锁在100秒
小角色按小键盘的Page UP（PU）和Page Down（PD）就可以切换了

### 模拟器：模拟器TJAP3

#### 下载地址

https://tjahelp.eu.org/

https://guide.tjadataba.se/

#### 说明

一款经典的Windows端太鼓达人模拟器，开源的且至今仍有维护

### 模拟器：OpenTaiko

#### 下载地址

https://github.com/0auBSQ/OpenTaiko

#### 说明

TJAP3的衍生版本，开源且近期比较流行
但自带UI比较丑，可以下载皮肤替换

### 模拟器：TaikoUnity

比较不知名的模拟器，有Windows和Android双端，但作者已经跑路停更好几年了
作者：得不到的才是最好的，存在于虚空中的才是最好的

### 模拟器：太鼓次郎

待补充

### 模拟器：谱面

#### Every Song Ever

https://ese.tjadataba.se/ESE/ESE

老外整理的太鼓历史全版本的全曲目的曲库，而且是基于 Git 分发的，可以一行命令直接更新

#### Discord频道

##### 邀请链接

https://discord.gg/Ke4yXwPpd2

##### 说明

加入频道之后，点左边的【download-links】标签页就可以找到下载链接

### Taiko HDD

#### 卡号

卡号文件地址为\Executable\Release\card.ini
用记事本等工具打开，随便改个20位数即可，记得保存

#### 卡号网站

https://egts.ca:5000/
如果需要注册自己的账号，请用新卡号打1pc后再注册

#### 配置文件

地址为\Executable\Release\config.toml
res：屏幕分辨率
windowed：true窗口模式/false全屏模式，
vsync：垂直同步，显示屏120帧才可改为true，不到、超过120帧请使用false）

#### 启动说明

请以右键管理员模式启动Taiko.exe
【Enter】投币
【P】刷卡
【FJ】咚
【DK】咔
【F1】进入设置

#### 鼓说明

若需要链接的鼓没有键位映射，请使用JOITOKEY等工具
若不想使用JOITOKEy
请在config.toml文件中把wait_period的后缀数字改成0
如果没有鼓，改成4

#### 其他说明

解锁紫魔王：敲击鼓边十下
有里的谱面：在紫魔王基础下敲十下解锁

## JUBEAT/乐动魔方常见问题
首次启动游戏，过完黑屏白字自检画面后可能会显示红框错误代码【5-2500-0000】对话框，用鼠标左键点击游戏窗口内任意位置，可能会跳到下 1 个红框错误代码【5-2500-0002】对话框，

这时按键盘【F4】键呼出配置菜单进行按键配置，主要配置以下几个键：
你也可以一次把所有【Button】键配置好，这些【Button】键对应游戏中的所有功能，如确定取消，上下左右选项，音符打击等。

配置好后按【服务键】进入机台主菜单，
会看到第 7 个选项 >> GAME OPTIONS << 闪烁双红箭头，再次用【机台键】选到第 7 个选项按【服务键】进入，
进第 2 个选项 >> SHOP SETTINGS <<
将前 2 个选项【SHOP NAME SETTINGS】和【SHOP AREA】分别进行配置，第 1 个选项取店名，随意取，【Button 6】键选取字符，选好按【服务键】确定，第 2 个选项店铺区域随便选，2 个选项配置好后，选到第 4 个选项【SAVE AND EXIT】按【服务键】执行保存操作，然后【EXIT】回到机台主菜单，选最后 1 个选项【GAME MODE】按【服务键】开始游戏，


## IIDX常见问题
待补充
