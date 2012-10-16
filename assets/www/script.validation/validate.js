var Validate = {};

/**********************基本类型*************************/
Validate.type = {};
Validate.type.isNull = /[^\s]+$/;//判空验证
Validate.type.email = /[\w\d]+[\w\.\-\+]*@[\w\d\-]+(\.[\w]+)+$/;//邮箱验证 
Validate.type.words=/^[A-Za-z]+$/;//由26个英文字母组成的字符串   
Validate.type.uwords=/^[A-Z]+$/;//由26个英文字母的大写组成的字符串   
Validate.type.lwords=/^[a-z]+$/;//由26个英文字母的小写组成的字符串   
Validate.type.numbersAndWords=/^[A-Za-z0-9]+$/;//由数字和26个英文字母组成的字符串   
Validate.type.name=/^\w+$/;//由数字、26个英文字母或者下划线组成的字符串   
Validate.type.url=/^[a-zA-z]+:\/\/(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/;//url 
/**********************基本类型*************************/

/**********************业务验证*************************/
//登录用户名验证
Validate.checkUserName = function(userName){
	if(!Validate.type.isNull.exec(userName)) {
		alert(GlobalConfig.messages.userNameNull);
		return false;
	}
	if(Validate.type.name.exec(userName)){
		alert(GlobalConfig.messages.UserNameError);
		return false;
	}
	return true;
}
//登录密码验证
Validate.checkPassword = function(password){
	if(!Validate.type.isNull.exec(password)) {
		alert(GlobalConfig.messages.passwordNull);
		return false;
	}
	return true;
}
/**********************业务验证*************************/