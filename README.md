# 使用Spring Cloud与Docker实战微服务



## 简介

本文主要是对`Spring Cloud` 和 `Docker` 的学习总结与实战 ，目前在`Git@OSC` 以及`Github` 上同步更新。

本书地址：

Git@OSC地址：http://git.oschina.net/itmuch/spring-cloud-book

Github地址：https://github.com/eacdy/spring-cloud-book

配套代码地址：

Git@OSC地址：[http://git.oschina.net/itmuch/spring-cloud-study](http://git.oschina.net/itmuch/spring-cloud-study) 

Github地址：https://github.com/eacdy/spring-cloud-study



已完成的章节包括：

- 1 微服务简介
- 2 Spring Cloud
  - 2.1 服务发现
    - 2.1.1 Eureka
    - 2.1.2 Eureka的高可用
    - 2.1.3 Consul
    - 2.1.4 Consul安装与使用
    - 2.1.5 Consul常用命令
    - 2.1.6 Consul高可用
  - 2.2 服务提供者
  - 2.3 服务消费者
    - 2.3.1 Ribbon
    - 2.3.2. Feign
  - 2.4 熔断器
    - 2.4.1. Hystrix
    - 2.4.2. Hystrix Dashboard
    - 2.4.3. Turbine
  - 2.5 配置中心
  - 2.6 API Gateway
  - 2.7 2.7 Eureka的高可用
- 3 使用Docker构建微服务
  - 3.1 Docker介绍
  - 3.2 Docker的安装
  - 3.3 Docker的常用命令
  - 3.4 Dockerfile常用指令
  - 3.5 Docker私有仓库的搭建
  - 3.6 使用Dockerfile构建Docker镜像
  - 3.7 使用Maven插件构建Docker镜像
  - 3.8 Docker Compose
    - 3.8.1 Docker Compose的安装
    - 3.8.2 Docker Compose入门示例
    - 3.8.3 docker-compose.yml常用命令
    - 3.8.4 docker-compose常用命令



**迭代计划**

> 1. 如何使用Docker部署Spring Cloud应用。
> 2. 持续集成
> 3. 自动运维
> 4. 汇总成一个开箱可用的脚手架框架
> 5. 总结一个Spring Cloud开发的最佳实践



## 使用说明

虽然直接在Git@OSC上也可以阅读，但是建议使用gitbook，以获得良好的阅读体验。

1. 访问[http://www.itmuch.com](http://www.itmuch.com) ，可以评论、分享、论坛讨论，(推荐)；
2. 直接访问Gitbook官网：[https://eacdy.gitbooks.io/spring-cloud-book/content/](https://eacdy.gitbooks.io/spring-cloud-book/content/)
3. 使用Gitbook 自行构建（nodejs工具，百度一下）；
4. 将代码pull到本地后，使用`Typora` 或`Atom` 等`Markdown` 阅读软件进行阅读。




## 捐助名单

| 捐助名单 | 捐助金额 | 捐助方式  |
| ---- | ---- | ----- |
| 牛牛   | 200  | 微信红包  |
| 浩    | 10   | 支付宝转账 |



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