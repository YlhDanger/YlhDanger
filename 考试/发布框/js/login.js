class Login{
	constructor(btn) {
		this.init();
	   }
	
	init(){
		//获取元素
		this.btn = document.querySelector("#login");
		this.container = document.querySelector("#container");
		this.con = document.querySelector(".con");
		this.modal = document.createElement("div");
		this.modal.className = "modal";
		this.container.innerHTML = '<h4>有什么新鲜事想告诉大家?</h4>'+
            '<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
            '<p><label><textarea id="content"></textarea></label></p>'+
            '<p><button id="loginBtn" class="logonBtn" type="button">发布</button></p>';
		this.closeBtn = document.querySelector("#closeBtn");
		this.content = document.querySelector("#content");
		this.loginBtn = document.querySelector("#loginBtn");
		this.bindEvents();
		this.center();
		//窗口改变的时候也居中
		window.onresize = this.center;
		this.clear();
	}
	bindEvents(){
		//发布按钮
		this.btn.onclick = () =>{
			//点击把模态成渲染到页面
			document.body.appendChild(this.modal);
			//让内容显示
			this.container.style.display = "block";
			this.clear();
			
		}
		//点击X之后 关闭
		this.closeBtn.onclick = () =>{
			//把内容隐藏
			this.container.style.display = "none";
			//让模态成隐藏
			this.modal.remove();
		}
		//点击发布
		this.loginBtn.onclick = () =>{
			 this.con.innerHTML +='<span>'+this.content.value+"     "+'<p class="del">删除</p>'+'</span>'
			 //把内容隐藏
			 this.container.style.display = "none";
			 //让模态成隐藏
			 this.modal.remove();
			 //发布之后让content里面内容清空
			 this.content.value = "";
			
		}
		
	}
	//居中
	 center(){
	    let top = (document.documentElement.clientHeight - this.container.offsetHeight)/2;
	    let left = (document.documentElement.clientWidth - this.container.offsetWidth)/2;
	    this.container.style.left = left+"px";
	    this.container.style.top = top+"px";
	    }; 
	 clear(){
		 this.con.onclick = function(e){
			 console.log(e.target);
			 if(e.target.className === "del"){
				 e.target.parentNode.remove();
			 }
		 }
		 
	 }
	
	}
	


