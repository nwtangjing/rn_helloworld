胡sir好
	具体的步骤我就不copy，就是rn中文站上的那些，我就说一下学习过程中的几个坑吧

	我是在虚拟机里用linux安装配置的，因为我不想在windows里安装太多东西（C盘空间不多了。。），linux的版本是ubuntu16.04，只做了安卓。
	先说第一个坑吧，其实也不算坑，就是GFW太厉害，所以我都是开着VPN下东西.
	第二呢，安装android-studio的时候发现apt-get里面没有，所有就想找个ppa源，但百度结果里面所有的源都用不了，然后在Google里找了一个，还不错 http://sourcedigit.com/22258-install-android-studio-2-3-1-on-ubuntu-linux-via-ppa/ 
	第三，就是出现了下面这个情况
	Exception in thread "main" javax.net.ssl.SSLException: Connection has been shutdown: javax.net.ssl.SSLException: java.net.SocketException: Connection reset
	百度发现是因为人家不认CNNIC的证书，有很多解决方法，我选了最简单粗暴的一种，就是万能的VPN。
	第四，就是教程里面的sdk目录和我的系统里的不一样，，，搞了半天才发现。
	第五，就是我调试的时候才意识到虚拟机里没办法再开一个android虚拟机了，所以只能真机调试了，但是build的时候一直报错，这样：com.android.builder.testing.api.DeviceException:com.android.ddmlib.InstallException: Failed to install all  换室友的手机秒好，原来是flyme的锅。

	没有了，其他都是些小问题

	谢谢胡老师

	
