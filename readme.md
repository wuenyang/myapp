#终结
#github 的使用。
1.如何将本地一个项目提交到github 上？
（1)拥有github账号，并构建一个project?
 (2)到project 根目录下 执行命令 git init ，就会生成一个.git
 (3)后配置 ssh ,输入命令：
     ssh-keygen -t rsa -C "jiayi_li10@163.com" (邮箱替换成你登录github的邮箱)
     设置pub 地址 ，
     设置密码（可以跳过不设置）
     pbcopy < ~/.ssh/id_test_rsa.pub   这个的作用是将你的 ssh 代码复制到剪贴板
 （4）github >> setting >> SSH and GPG keys  输入：title  ，key :将复制ssh代码粘贴
 （5）打开终端，验证一下是否添加ssh成功了，输入命令： ssh -T git@github.com或者permission denied,你就再执行命令：ssh-add ~/.ssh/id_test_rsa
 （6）当你successfully之后，咱们就在 git config 里设置一下你的 github 登录名以及登陆邮箱，执行以下两个命令：
git config --global user.name "your name"
git config --global user.email "your_email@youremail.com"

下面操作是上传代码
 （1）将你的项目代码拉到这个文件夹，执行命令，git status
 （2）这个时候你就会看到所有的改动，然后执行 git add .    (有个点哦，这个点表示更改所有的改动)
   然后执行命令 git commit -m "输入你提交的备注"
 （3） git remote add origin git@github.com:用户名/项目名.git
 （4）执行命令：git push -f origin master
 
