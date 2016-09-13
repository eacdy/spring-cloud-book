# CentOS 7 下安装Docker

CentOS 7 下载地址：

http://mirrors.gigenet.com/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-1511.iso





1. 查看内核版本(Docker需要64位版本，同时内核版本在3.10以上)：

   ```shell
   uname -r
   ```

2. 更新yum包：

   ```shell
   yum update
   ```

3. 添加yum仓库：

   ```shell
   sudo tee /etc/yum.repos.d/docker.repo <<-'EOF'
   [dockerrepo]
   name=Docker Repository
   baseurl=https://yum.dockerproject.org/repo/main/centos/7/
   enabled=1
   gpgcheck=1
   gpgkey=https://yum.dockerproject.org/gpg
   EOF
   ```

4. 安装Docker

   ```shell
   yum install docker-engine
   ```

5. 启动Docker

   ```shell
   service docker start
   ```























