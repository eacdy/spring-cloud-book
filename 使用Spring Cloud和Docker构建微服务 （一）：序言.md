## 什么是微服务架构

近年来，在软件开发领域关于微服务的讨论呈现出火爆的局面，有人倾向于在系统设计与开发中采用微服务方式实现软件系统的松耦合、跨部门开发；同时，反对之声也很强烈，持反对观点的人表示微服务增加了系统维护、部署的难度，导致一些功能模块或代码无法复用，同时微服务允许使用不同的语言和框架来开发各个系统模块，这又会增加系统集成与测试的难度，而且随着系统规模的日渐增长，微服务在一定程度上也会导致系统变得越来越复杂。尽管一些公司已经在生产系统中采用了微服务架构，并且取得了良好的效果；但更多公司还是处在观望的态度。

什么是微服务架构呢？简单说就是将一个完整的应用（单体应用）按照一定的拆分规则（后文讲述）拆分成多个不同的服务，每个服务都能独立地进行开发、部署、扩展。服务于服务之间通过注入RESTful api或其他方式调用。大家可以搜索到很多相关介绍和文章。本文暂不细表。

在此推荐两个比较好的博客：

>[http://microservices.io/](http://microservices.io/)
>[http://martinfowler.com/articles/microservices.html](http://martinfowler.com/articles/microservices.html)



## Spring Cloud 简介

Spring Cloud是在Spring Boot的基础上构建的，为开发人员提供快速建立分布式系统中的一些常见的模式

>  例如：配置管理（configuration management），服务发现（service discovery），断路器（circuit breakers），智能路由（ intelligent routing），微代理（micro-proxy），控制总线（control bus），一次性令牌（ one-time tokens），全局锁（global locks），领导选举（leadership election），分布式会话（distributed sessions），集群状态（cluster state）。

Spring Cloud 包含了多个子项目：

> 例如：Spring Cloud Config、Spring Cloud Netflix等

Spring Cloud 项目主页：[http://projects.spring.io/spring-cloud/](http://projects.spring.io/spring-cloud/)

