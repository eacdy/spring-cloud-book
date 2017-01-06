# 3 使用Docker构建微服务



### 准备工作

| 安装软件           | 版本     | 功能                                       | 必要程度 |
| -------------- | ------ | ---------------------------------------- | ---- |
| Docker         | 1.12.1 | Docker                                   | 是    |
| CentOS7.0或其他系统 | 7.0    | Docker的宿主机，本章的讲解都是在CentOS 7.0下进行的。Docker现已支持Windows系统，但考虑到绝大多数Docker容器还是跑在Linux环境下的，故而只讲解Linux环境下的使用。Windows下的安装使用大致类似，请读者自行研究。 | 是    |
| Maven          | 3.3.9  |                                          | 是    |
| JDK            | 8u65   |                                          | 是    |



注意：

>  本章的讲解都是在CentOS7下进行的，建议新手使用CentOS 7.x进入学习。



## CentOS下JDK 1.8的安装

(1) 到Oracle官网下载好 `jdk-8u65-linux-x64.rpm` 备用

(2) 卸载系统自带java

```shell
java -version           # 如果有结果出来，则说明自带了java
rpm -qa|grep java       # 查询出已经安装的java
yum -y remove [上面查出来的东西，多个用空格分隔]
```
(3) 安装JDK

```shell
cd /usr
mkdir /usr/java
rpm -ivh jdk-8u65-linux-x64.rpm
```
(4) 配置环境变量：

```shell
vim /etc/profile
```

找到： `export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL` 这一行，并在其下面一行添加如下内容：

```shell
# 设置java环境变量
export JAVA_HOME=/usr/java/jdk1.8.0_65 # 根据情况修改
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```
(5) 使环境变量生效：

```shell
source /etc/profile
```
(6) 测试：

```shell
java -version
javac
```


## CentOS下Maven的安装

Maven的安装比较简单，只需要下载后解压，配置环境变量即可。

(1) 下载并解压：

```shell
cd /opt
wget http://apache.fayea.com/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz
tar -zxvf apache-maven-3.3.9-bin.tar.gz
```
(2) 配置环境变量：

```shell
vim /etc/profile
```

找到`export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL` ， 并在其下面一行添加如下内容：

```shell
# 设置Maven环境变量
export MAVEN_HOME=/opt/apache-maven-3.3.9/
export PATH=$MAVEN_HOME/bin:$PATH
```
(3) 使环境变量生效：

```shell
source /etc/profile
```
(4) 测试

```shell
mvn -version
```
(5) 修改Maven配置

本地仓库路径配置：

```xml
<!-- 本地仓库路径配置 -->
<localRepository>/path/to/local/repo</localRepository>
```

 国内Maven镜像配置：

```xml
<mirror>
  <id>aliyun</id>
  <mirrorOf>central</mirrorOf>
  <name>Aliyun Central mirror</name>
  <url>http://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```


## CentOS下Git的安装

```shell
yum install git
```

