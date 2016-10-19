# 2 Spring Cloud

## Spring Cloud 简介

Spring Cloud是在Spring Boot的基础上构建的，用于简化分布式系统构建的工具集，为开发人员提供快速建立分布式系统中的一些常见的模式。

>  例如：配置管理（configuration management），服务发现（service discovery），断路器（circuit breakers），智能路由（ intelligent routing），微代理（micro-proxy），控制总线（control bus），一次性令牌（ one-time tokens），全局锁（global locks），领导选举（leadership election），分布式会话（distributed sessions），集群状态（cluster state）。

Spring Cloud 包含了多个子项目：

> 例如：Spring Cloud Config、Spring Cloud Netflix等

Spring Cloud 项目主页：[http://projects.spring.io/spring-cloud/](http://projects.spring.io/spring-cloud/)



 Talk is cheap, show me the code.下面我们将以代码与讲解结合的方式，为大家讲解Spring Cloud中的各种组件。





## 准备工作

* 技术储备：

| 所需技能        | 备注                              |
| ----------- | ------------------------------- |
| Java        |                                 |
| Maven       | 文章涉及到大量的代码，均使用Maven构建           |
| Spring Boot | Spring Cloud是在Spring Boot基础上构建的 |

* 环境准备：

| 工具    | 版本或描述                            |
| ----- | -------------------------------- |
| JDK   | 1.8                              |
| IDE   | STS 或者 IntelliJ IDEA，本教程使用的是STS. |
| Maven | 3.x                              |

* 本课程所使用的软件及版本：

| 使用到的软件       | 版本号           | 是否最新版本 |
| ------------ | ------------- | ------ |
| Spring Boot  | 1.4.0.RELEASE | 是      |
| Spring Cloud | Brixton.SR5   | 是      |

* Host配置：在生产环境下，我们往往会为每个应用配置一个host，使用host而非IP进行访问。为了更加贴近生产环境，以及后文Docker章节的讲解，我们配置一下Host。在Windows系统下，是`C:\Windows\System32\drivers\etc\hosts` 文件，在Linux系统下，是`/etc/hosts` 文件：

| Host配置                                   |
| ---------------------------------------- |
| 127.0.0.1 discovery config-server gateway movie user feign ribbon |

* 主机规划：

| 项目名称                                     | 端口   | 描述                     | URL             |
| ---------------------------------------- | ---- | ---------------------- | --------------- |
| microservice-api-gateway                 | 8050 | API Gateway            | 详见文章            |
| microservice-config-client               | 8041 | 配置服务的客户端               | 详见文章            |
| microservice-config-server               | 8040 | 配置服务                   | 详见文章            |
| microservice-consumer-movie-feign        | 8020 | Feign Demo             | /feign/1        |
| microservice-consumer-movie-feign-with-hystrix | 8021 | Feign Hystrix Demo     | /feign/1        |
| microservice-consumer-movie-feign-with-hystrix-stream | 8022 | Hystrix Dashboard Demo | /feign/1        |
| microservice-consumer-movie-ribbon       | 8010 | Ribbon Demo            | /ribbon/1       |
| microservice-consumer-movie-ribbon-with-hystrix | 8011 | Ribbon Hystrix Demo    | /ribbon/1       |
| microservice-discovery-eureka            | 8761 | 注册中心                   | /               |
| microservice-hystrix-dashboard           | 8030 | hystrix监控              | /hystrix.stream |
| microservice-hystrix-turbine             | 8031 | turbine                | /turbine.stream |
| microservice-provider-user               | 8000 | 服务提供者                  | /1              |
|                                          |      |                        |                 |



* Spring Cloud所有的配置项：

[http://cloud.spring.io/spring-cloud-static/Brixton.SR5/#_appendix_compendium_of_configuration_properties](http://cloud.spring.io/spring-cloud-static/Brixton.SR5/#_appendix_compendium_of_configuration_properties)





## 父项目的建立

在进入主题之前，我们首先创建一个父项目（spring-cloud-microservice-study），这样可以对项目中的Maven依赖进行统一的管理。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.itmuch.cloud</groupId>
  <artifactId>spring-cloud-microservice-study</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>pom</packaging>

  <modules>
    <module>microservice-discovery-eureka</module>
    <module>microservice-provider-user</module>
    <module>microservice-consumer-movie-ribbon</module>
    <module>microservice-consumer-movie-feign</module>
    <module>microservice-consumer-movie-ribbon-with-hystrix</module>
    <module>microservice-consumer-movie-feign-with-hystrix</module>
    <module>microservice-hystrix-dashboard</module>
    <module>microservice-consumer-movie-feign-with-hystrix-stream</module>
    <module>microservice-hystrix-turbine</module>
    <module>microservice-config-server</module>
    <module>microservice-config-client</module>
    <module>microservice-config-server-eureka</module>
    <module>microservice-config-client-eureka</module>
    <module>microservice-api-gateway</module>
  </modules>

  <!-- 使用最新的spring-boot版本 -->
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>1.4.0.RELEASE</version>
  </parent>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <java.version>1.8</java.version>
  </properties>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-dependencies</artifactId>
        <version>Brixton.SR5</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>
</project>

```





## TIPS

1. 笔者讲解采用最新的Spring Boot 和Spring Cloud进行讲解，其中可能涉及到部分新特性，笔者尽量指出，同时笔者能力有限，如有理解不到位的地方，还请各位看客指出，定在第一时间进行修正。
2. Spring Cloud版本并不是传统的使用数字的方式标识，而是使用例如：Angel、Brixton、Camden...等等伦敦的地名来命名版本，版本的先后顺序大家可能已经猜到了，就是使用字母表的先后来标识的。笔者在咨询过Spring Cloud的主要贡献者之一Josh Long之后已经确认。
