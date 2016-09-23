gitbook-plugin-duoshuo
======================
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/codepiano/gitbook-plugin-duoshuo?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Duoshuo is a comment hosting service for Web sites and online communities that uses a networked platform.

多说平台的gitbook插件，给gitbook集成评论功能

how to install
--------------

安装到gitbook所在目录，如果build时提示无法找到插件，可能是由于使用了nvm或n之类的模块所致，请将插件安装到gitbook模块所在的目录

```shell
npm install gitbook-plugin-duoshuo -g
```

how to use
----------

Add config in book.json, the config will be duoshuoQuery object as a global variable which used by duoshuo's code.

在book.json中添加设置，属性名为duoshuo，该对象将被设置为多说插件使用的全局变量duoshuoQuery

```json
{
    "plugins": [
        "duoshuo"
    ],
    "pluginsConfig": {
        "duoshuo": {
            "short_name": "your duoshuo's shortname",
            "theme": "default"
        }
    }
}
```

how to work
-----------

Load comment elements when gitbook's page.change event triggered.

由于gitbook特殊的页面加载方式，使用了官方提供的动态加载评论框的方法，具体描述见 [动态加载多说评论框的方法](http://dev.duoshuo.com/docs/50b344447f32d30066000147)

urls like /a/b/
--------------

Duoshuo prefer a unique id to distinguish the pages,but sometimes a page can have different urls.

[www.example.com/](www.example.com/) and [www.example.com/index.html](www.example.com/index.html) refer to the same page.

Add some code to process these situation,the procedure to generate unique page id is:

1. get the location.pathname from browser
1. replace all the '/' with '-'
1. if the last char of the result string is '-',append 'index.html' to it(eg: /a/b/ will be cast to -a-b-,final result is -a-b-index.html).

为了处理同一个页面有不同的url的情况，多说要求一个单独的id来分辨页面。

[www.example.com/](www.example.com/) 和 [www.example.com/index.html](www.example.com/index.html) 是同一个页面，应该显示相同的评论。

为了兼容这种情况，插件生成惟一id的过程如下：

1. 从location.pathname 中获取url
1. 替换'/'为'-'
1. 如果最后一个字符为-，在末尾添加'index.html'。（/a/b/ 会被转换为 -a-b-，再加上index.html即为最后的id）
