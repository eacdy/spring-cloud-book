## Hystrix监控

除了隔离依赖服务的调用以外，Hystrix还提供了近实时的监控，Hystrix会实时、累加地记录所有关于HystrixCommand的执行信息，包括每秒执行多少请求多少成功，多少失败等。上文提到的microservice-consumer-movie-ribbon-with-hystrix项目已经具备对Hystrix监控的能力，我们先进入测试，后文会描述原理。



### 测试步骤

1. 启动：microservice-discovery-eureka

2. 启动：microservice-provider-user

3. 启动：microservice-consumer-movie-ribbon-with-hystrix

4. 访问：[http://localhost:8021/ribbon/1](http://localhost:8021/ribbon/1)，注意：该步骤不能省略，因为如果应用的所有接口都未被调用，将只会看到一个ping

5. 访问：[http://localhost:8021/hystrix.stream](http://localhost:8021/hystrix.stream)，可以看到类似如下输出：

   ```
   data: {"type":"HystrixCommand","name":"findById","group":"RibbonHystrixService","currentTime":1472658867784,"isCircuitBreakerOpen":false,"errorPercentage":0,"errorCount":0,"requestCount":0,"rollingCountBadRequests":0....}
   ```


并且会不断刷新以获取实时的监控数据。但是纯文字的输出可读性实在是太差，运维人员很难一眼看出系统当前的运行状态。那么是不是有可视化的工具呢？



### Hystrix Dashboard

Hystrix Dashboard可以可视化查看实时监控数据。我们可以下载hystrix-dashboard的war包部署到诸如Tomcat之类的容器就，本文不做赘述另外Spring Cloud也提供了Hystrix Dashboard的整合，下面我们看看Spring Cloud是怎么玩转Hystrix Dashboard的。

新建一个maven项目，在其中添加如下内容：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<artifactId>microservice-hystrix-dashboard</artifactId>
	<packaging>jar</packaging>

	<parent>
		<groupId>com.itmuch.cloud</groupId>
		<artifactId>spring-cloud-microservice-study</artifactId>
		<version>0.0.1-SNAPSHOT</version>
	</parent>

	<dependencies>
		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-hystrix-dashboard</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-actuator</artifactId>
		</dependency>
	</dependencies>
</project>
```

编写启动类：HystrixDashboardApplication.java

```java
/**
 * 测试步骤:
 * 1. 访问http://localhost:7979/hystrix.stream 可以查看dashboard
 * 2. 在上面的输入框填入: http://想监控的服务:端口/hystrix.stream进行测试
 * 注意：首先要先调用一下想监控的服务的API，否则将会显示一个空的图表.
 * @author eacdy
 */
@SpringBootApplication
@EnableHystrixDashboard
public class HystrixDashboardApplication {
	public static void main(String[] args) {
		new SpringApplicationBuilder(HystrixDashboardApplication.class).web(true).run(args);
	}
}
```

配置文件：application.yml

```yaml
spring:
  application:
    name: hystrix-dashboard
server:
  port: 8031
```

启动后，将会看到如下界面：

![Hystrix Dashboard](images/hystrix-dashboard-1.png)

此时，我们在输入框中输入[http://localhost:8021/hystrix.stream](http://localhost:8021/hystrix.stream)，并随意设置一个Title后，点击Monitor Stream按钮，会出现如下界面：

![Hystrix Dashboard 监控](images/hystrix-dashboard-2.png)

此时我们会看到findById这个API的各种指标。Hystrix Dashboard Wiki上详细说明了图上每个指标的含义，如下图：

![Hystrix Dashboard pic description](images/hystrix-dashboard-3.png)



此时，我们可以尝试将microservice-provider-user停止，然后重复访问多次[http://localhost:8021/ribbon/1](http://localhost:8021/ribbon/1)（20次以上），会发现断路器状态会变为开启。



### Turbine

在复杂的分布式系统中，相同服务的结点经常需要部署上百甚至上千个，很多时候，运维人员希望能够把相同服务的节点状态以一个整体集群的形式展现出来，这样可以更好的把握整个系统的状态。 为此，Netflix提供了一个开源项目（Turbine）来提供把多个hystrix.stream的内容聚合为一个数据源供Dashboard展示。 

和Dashboard一样，Turbine也可以下载war包部署到Web容器，本文不做赘述。下面讨论Spring Cloud是怎么使用Turbine的。



