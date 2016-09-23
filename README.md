# 使用Spring Cloud和Docker构建微服务



## 简介

本文主要是对Spring Cloud学习的一些总结，探讨的话题包括：

| 章节            | 探讨的话题               | 话题包含内容                                   | 讲解状态 |
| ------------- | ------------------- | ---------------------------------------- | ---- |
| 微服务简介         | 什么是微服务              | 微服务介绍、项目准备                               | 已完成  |
| Spring Cloud  | 服务发现                | Eureka                                   | 已完成  |
| Spring Cloud  | 服务提供者               | Spring MVC、Spring Data JPA等              | 已完成  |
| Spring Cloud  | 服务消费者               | 客户端负载均衡Ribbon、简化的Http客户端Feign            | 已完成  |
| Spring Cloud  | 熔断器                 | Hystrix、Hystrix监控界面Hystrix Dashboard、Hystrix集群监控工具Turbine | 已完成  |
| Spring Cloud  | 配置中心                | Spring Cloud Config Server               | 已完成  |
| Spring Cloud  | API Gateway         | Zuul                                     | 已完成  |
| 使用Docker构建微服务 | Docker              | Docker的入门及使用                             | 已完成  |
| 使用Docker构建微服务 | Docker              | Docker介绍                                 | 已完成  |
| 使用Docker构建微服务 | Docker              | Docker的安装                                | 已完成  |
| 使用Docker构建微服务 | Docker              | Docker的常用命令                              | 已完成  |
| 使用Docker构建微服务 | Dockerfile          | Dockerfile常用命令                           | 已完成  |
| 使用Docker构建微服务 | Dockerfile          | 使用Dockerfile构建Docker镜像                   | 已完成  |
| 使用Docker构建微服务 | Docker、Spring Cloud | 使用Maven插件构建Docker镜像                      | 已完成  |




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





## 广告

欢迎探讨、star、fork、pull request、喷。哈哈。
微服务架构交流QQ群：157525002，欢迎加入。

微服务架构讨论社区：[http://ask.itmuch.com/](http://ask.itmuch.com/)，欢迎加入。