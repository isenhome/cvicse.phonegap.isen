var GlobalConfig = {};

GlobalConfig.hostAddress = function(){
	if(arguments.length==1){ 
		return "http://192.168.132.5:8300/mobile/"+arguments[0]+"?iswap=1&cmd=request";
	}
	if(arguments.length==2){
		return "http://192.168.132.5:8300/mobile/"+arguments[0]+"?iswap=1&cmd=request"+arguments[1].ConvertToString();
	}
};

GlobalConfig.user = {};
GlobalConfig.user.userName = "";

GlobalConfig.messages = {};
GlobalConfig.messages.connectError = "连接服务器异常,请稍后再用！";
GlobalConfig.messages.initSysError = "服务器初始化异常！";
GlobalConfig.messages.loginError = "用户名或密码错误，请重新登录！";
GlobalConfig.messages.userNameNull = "用户名不得为空！";
GlobalConfig.messages.UserNameError = "用户名由字母、数字和下划线组成！";
GlobalConfig.messages.passwordNull = "密码不得为空！";
