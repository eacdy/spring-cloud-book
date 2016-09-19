Consul 是 HashiCorp 公司推出的开源工具，用于实现分布式系统的服务发现与配置。与其他分布式服务注册与发现的方案，比如 Airbnb 的 SmartStack 等相比，Consul的方案更“一站式”，内置了服务注册与发现框 架、分布一致性协议实现、健康检查、Key/Value存储、多数据中心方案，不再需要依赖其他工具（比如ZooKeeper等）。使用起来也较 为简单。Consul用Golang实现，因此具有天然可移植性(支持Linux、windows和Mac OS X)；安装包仅包含一个可执行文件，方便部署，与Docker等轻量级容器可 无缝配合 。





安装（以CentOS7为例）：

```
cd /usr/local/bin/

wget https://releases.hashicorp.com/consul/0.7.0/consul_0.7.0_linux_amd64.zip

unzip consul0.7.0linux_amd64.zip

./consul agent -dev -bind=192.168.85.128

```





consul agent -server -bootstrap-expect=1  -data-dir=/tmp/consul -node=server-110 -bind=127.0.0.1 -dc=dc1 -client 127.0.0.1 -ui

-client 指定允许客户端使用什么ip去访问，例如-client 127.0.0.1 表示可以使用http://127.0.0.1:8500/ui 去访问

-server -bootstrap-expect 表示期望的启动节点个数是1

-bind 用于绑定一个ip，有时候不指定绑定的话，会报错`Failed to get advertise address: Multiple private IPs found. Please configure one.` 。





下载地址：https://www.consul.io/downloads.html



参考：

http://www.cnblogs.com/java-zhao/archive/2016/04/13/5387105.html

http://www.tuicool.com/articles/M3QFven

https://www.consul.io/intro/getting-started/install.html