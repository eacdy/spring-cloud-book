# 使用Spring Cloud与Docker实战微服务



## 简介

本文主要是对Spring Cloud学习的一些总结，已完成的章节包括：

* [1 微服务简介](1 微服务简介/1 微服务简介.md)
* [2 Spring Cloud](2 Spring Cloud/2 Spring Cloud.md)
    * [2.1 服务发现](2 Spring Cloud/2.1 服务发现.md)
        * [2.1.1 Eureka](2 Spring Cloud/2.1.1 Eureka.md)
        * [2.1.2 Eureka的高可用](2 Spring Cloud/2.1.2 Eureka的高可用.md)
        * [2.1.3 Consul](2 Spring Cloud/2.1.3 Consul.md)
        * [2.1.4 Consul安装与使用](2 Spring Cloud/2.1.4 Consul安装与使用.md)
        * [2.1.5 Consul常用命令](2 Spring Cloud/2.1.5 Consul常用命令.md)
        * [2.1.6 Consul高可用](2 Spring Cloud/2.1.6 Consul高可用.md)
    * [2.2 服务提供者](2 Spring Cloud/2.2 服务提供者.md)
    * [2.3 服务消费者](2 Spring Cloud/2.3 服务消费者.md)
        * [2.3.1 Ribbon](2 Spring Cloud/2.3.1 Ribbon.md)
        * [2.3.2. Feign](2 Spring Cloud/2.3.2 Feign.md)
    * [2.4 熔断器](2 Spring Cloud/2.4 熔断器.md)
        * [2.4.1. Hystrix](2 Spring Cloud/2.4.1 Hystrix.md)
        * [2.4.2. Hystrix Dashboard](2 Spring Cloud/2.4.2 Hystrix Dashboard.md)
        * [2.4.3. Turbine](2 Spring Cloud/2.4.3 Turbine.md)
    * [2.5 配置中心](2 Spring Cloud/2.5 配置中心.md)
    * [2.6 API Gateway](2 Spring Cloud/2.6 API Gateway.md)
    * [2.7 2.7 Eureka的高可用](2 Spring Cloud/2.7 Eureka的高可用.md)
* [3 使用Docker构建微服务](3 使用Docker构建微服务/3 使用Docker构建微服务.md)
    * [3.1 Docker介绍](3 使用Docker构建微服务/3.1 Docker介绍.md)
    * [3.2 Docker的安装](3 使用Docker构建微服务/3.2 Docker的安装.md)
    * [3.3 Docker的常用命令](3 使用Docker构建微服务/3.3 Docker的常用命令.md)
    * [3.4 Dockerfile常用指令](3 使用Docker构建微服务/3.4 Dockerfile常用指令.md)
    * [3.5 Docker私有仓库的搭建](3 使用Docker构建微服务/3.5 Docker私有仓库的搭建.md)
    * [3.6 使用Dockerfile构建Docker镜像](3 使用Docker构建微服务/3.6 使用Dockerfile构建Docker镜像.md)
    * [3.7 使用Maven插件构建Docker镜像](3 使用Docker构建微服务/3.7 使用Maven插件构建Docker镜像.md)
    * [3.8 Docker Compose](3 使用Docker构建微服务/3.8 Docker Compose.md)
      * [3.8.1 Docker Compose的安装](3 使用Docker构建微服务/3.8.1 Docker Compose的安装.md)
      * [3.8.2 Docker Compose入门示例](3 使用Docker构建微服务/3.8.2 Docker Compose入门示例.md)
      * [3.8.3 docker-compose.yml常用命令](3 使用Docker构建微服务/3.8.3 docker-compose.yml常用命令.md)
      * [3.8.4 docker-compose常用命令](3 使用Docker构建微服务/3.8.4 docker-compose常用命令.md)




**迭代计划**

> 1. 讲解Docker的使用，以及如何使用Docker部署Spring Cloud应用。
> 2. 汇总成一个开箱可用的脚手架框架
> 3. 总结一个Spring Cloud开发的最佳实践



## 使用说明

虽然直接在Git@OSC上也可以阅读，但是建议使用gitbook，以获得良好的阅读体验。

### 安装使用Gitbook

#### 安装NodeJS

Windows下：

>  对于Windows系统下载nodejs：前往https://nodejs.org/en/ ，下载对应版本，然后双击下一步安装。

Linux下：

>  可以使用nvm等工具安装，也可以编译安装。非常简单。相信玩Linux的不需要我讲。



#### 安装Gitbook

安装：

```shell
npm install -g gitbook-cli
```

验证：

```shell
gitbook -V
```

启动：

```shell
// 首先将代码pull到本地
cd $spring-cloud-book    # 目录切换到spring-cloud-book目录
gitbook serve
```

阅读：

访问http://localhost:4000



### 懒人用法

方法一、将代码pull到本地后，使用Typora等Markdown工具阅读。

方法二、直接访问Gitbook官网：[https://eacdy.gitbooks.io/spring-cloud-book/content/](https://eacdy.gitbooks.io/spring-cloud-book/content/)



## 配套代码
[http://git.oschina.net/itmuch/spring-cloud-study](http://git.oschina.net/itmuch/spring-cloud-study) 



## 捐助名单

| 捐助名单 | 捐助金额 | 捐助方式 |
| ---- | ---- | ---- |
| 牛牛   | 200  | 微信红包 |



##  鸣谢

S1ahs3r  Leoops 牛牛

感谢其为项目作出的贡献！都是热心的兄弟！



如果觉得内容赞，您可以请我喝杯咖啡：

![donate](images/donate.png)





## 广告

欢迎探讨、star、fork、pull request、喷。哈哈。

微服务架构交流QQ群：157525002，欢迎加入。

微信公众号：![wx](images/wx.jpg)

微服务架构讨论社区：[http://ask.itmuch.com/](http://ask.itmuch.com/)，欢迎加入。