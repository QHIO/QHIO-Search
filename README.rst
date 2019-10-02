启航搜索开源说明
=============
开发成果实属不易
请尊重开发者的辛勤付出1

QHIO®️是启航搜索技术小组所持有的标志，
任何组织或个人在使用代码前请去除任何
和启航搜索相关字段,去除启航搜索的UI设计，
否则启航搜索小组(QHIO)保留追究法律责任的权利。 


环境搭建
~~~~~~
- 安装python3环境，使用python3运行启航搜索的代码。pip3 install -r requirements.txt
- 在正式运行代码前，请正确设置配置文件settings_et_dev.yml。启航搜索使用了redis 作为缓存，使用sentry收集异常信息。
- 设置完成后，可在测试环境执行 env FLASK_APP=searx.webapp FLASK_ENV=development FLASK_DEBUG=1 SEARX_SETTINGS_PATH=settings_et_dev.yml python -m flask run

Entropage theme
~~~~~~~~~~~~~~~
- cd searx/static/themes/entropage
- npm i
- npm start
less: themes/entropage/less

js: themes/entropage/js/searx_src

启航搜索反馈渠道和联系方式
~~~~~~~~~~~~~~~~~~~~~
QQ : 15723078568(手机号查找)
邮件: QHIO-tech@163.com


版权所有