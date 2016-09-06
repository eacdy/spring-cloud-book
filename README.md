# 使用Spring Cloud和Docker构建微服务

## 简介

本文主要是对Spring Cloud学习的一些总结，探讨的话题包括：

| 探讨的话题       | 话题包含内容                                   | 讲解状态 |
| ----------- | ---------------------------------------- | ---- |
| 什么是微服务      | 微服务介绍、项目准备                               | 已完成  |
| 注册中心        | Eureka                                   | 已完成  |
| 服务提供者       | Spring MVC、Spring Data JPA等              | 已完成  |
| 服务消费者       | 客户端负载均衡Ribbon、简化的Http客户端Feign            | 已完成  |
| 熔断器         | Hystrix、Hystrix监控界面Hystrix Dashboard、Hystrix集群监控工具Turbine | 已完成  |
| 配置中心        | Spring Cloud Config Server               | 已完成  |
| API Gateway | Zuul                                     | 已完成  |
| Docker      | Docker的入门及使用                             | 未完成  |


目前截止到API Gateway已经完成。至此，基于Spring Cloud构建微服务的必要组件已经讲解完成。

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

将代码pull到本地后，使用Typora等Markdown工具阅读。



## 配套代码
[http://git.oschina.net/itmuch/spring-cloud-study](http://git.oschina.net/itmuch/spring-cloud-study) 



## 广告


欢迎探讨、star、fork、pull request、喷。哈哈。
微服务架构交流QQ群：157525002，欢迎加入。
