# jsonServer 使用文档
> 这是jsonServer+mockjs的一个应用实例, 请向这两位作者致敬. 

* [ json-server ](https://www.npmjs.com/package/json-server)
* [ mockjs ](https://www.npmjs.com/package/mockjs)

> 请先参照 centos7 部署和 node 部署的两篇文档,配置好服务器和安装好node环境.

# setp 1: install (安装)

> 请替换myproj为你的项目目录名称

```
sudo mkdir -p /appServer/myproj && cd /appServer/myproj/
sudo git clone https://github.com/caohaijiang/jsonServer.git
sudo cnpm install 

sudo mkdir -pv /appServer/myproj && cd /appServer/myproj
sudo git clone https://github.com/caohaijiang/dingyou-json-server.git ./jsonServer && cd jsonServer
sudo cnpm install 
sudo chmod +x ./install.sh && ./install.sh
sudo reboot
```
# 诊断
```
//检查服务状态
systemctl status myproj-authServer 

// 查看进行守护
forever list 
```
# setp 2: start test (启动测试) 
```
npm start
```

# 说明

> 为什么使用 nodemon? 可以修改保存代码后,自动更新

> 为什么使用 forever? node进程守护神,并且让我们的node服务后台执行

> 为什么默认为 30003端口? 因为阿里云聚石塔默认开放的安全端口为30001-30005.

---

# 安装部署出现问题怎么办? 请检查替换的字符是否出错了 

> 如果出现命令找不到, 请参看contos7的部署, sudo的path环境变量配置不正确

> 如果npm start正常, 开机不启动怎么办? 请使用' systemctl status node-jsonServer '命令检查服务状态

> 如果 forever 报错怎么办? 请搜索了解forever的使用,大部分问题还是出在替换路径或者文件名上. 

> 我想卸载怎么办? 查看install.sh进行逆向命令的操作. 

