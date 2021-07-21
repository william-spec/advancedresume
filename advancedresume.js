let oddEleColorChange = function(){   //奇数个proIntro的背景颜色为透明
  let proIntro = document.getElementsByClassName('projectIntroduce');
  for(let i = 0;i<proIntro.length;i+=2)
    proIntro[i].style.backgroundColor="#D8D8D8";
}

let projectDemoChange = function(){   //实现projectDemo图片小/大于一定尺寸时消失/出现
  let divs = document.getElementsByClassName('projectDemo');
  for(let i = 1; i<divs.length;i+=2){
    let div = divs[i];
    let width = window.getComputedStyle(div).width;
    div.style.height = width;
    if(parseFloat(width)<20)
      div.style.visibility = 'hidden';
    else
      div.style.visibility = 'visible';
  }
}

let heartColorChange = function(obj){   //切换点赞按钮颜色
  if(obj.style.backgroundColor == 'red')
    obj.style.backgroundColor = 'white';
  else
    obj.style.backgroundColor = 'red'
}

let addOnclickToButton = function(){    //为点赞按钮添加点击事件
  let buttons = document.getElementsByClassName('heartShape');
  // console.log(buttons);
  buttons = Array.from(buttons);
  buttons.forEach(element => {
    element.onclick = ()=>heartColorChange(element);
  });
}

let experienceIntroduceContentChange = function(){    //点击tab标签(教育经历、工作经历)切换时切换对应内容
  let experienceIntroduceContents = document.getElementsByClassName('experienceIntroduceContent');
  experienceIntroduceContents = Array.from(experienceIntroduceContents);
  let arr = ['教育经历', '工作经历'];
  let chooseContent = document.getElementsByClassName('choose')[0].innerText;
  let index = arr.indexOf(chooseContent);
  experienceIntroduceContents.forEach(element => {
    element.className = 'experienceIntroduceContent';
  });
  experienceIntroduceContents[index].className += ' show';
}

let addOnclickToTab = function(){   //教育经历和工作经历添加点击切换事件
  let tabs = document.getElementsByClassName('experienceIntroduceTab')[0].children;
  tabs = Array.from(tabs);
  tabs.forEach(element => {
    element.onclick = ()=>{
      tabs.forEach(element => {
        element.className = '';
      })
      element.className = 'choose';
      experienceIntroduceContentChange();
    }
  })
}

let sendMessage = function(){   //将输入的留言内容和留言人名字发表在留言板上
  let inputC = document.getElementsByClassName('edit1')[0].getElementsByTagName('input')[0];
  let sendContent = inputC.value;
  let inputU = document.getElementsByClassName('edit2')[0].getElementsByClassName('content')[0].getElementsByTagName('input')[0];
  let sendUser = inputU.value;
  inputC.value = '';
  inputU.value = '';
  if(sendContent === '' || sendUser === ''){
    alert('留言内容和留言人名字都不可为空! 请重新输入');
    return;
  }
  let divBox = document.createElement('div');
  divBox.className = 'me';
  let content = document.createElement('div');
  content.className = 'content';
  content.innerText = sendContent;
  divBox.appendChild(content);
  let profile = document.createElement('div');
  profile.className = 'profile';
  let profilePhoto = document.createElement('div');
  profilePhoto.className = 'profilePhoto';
  profile.appendChild(profilePhoto);
  let span = document.createElement('span');
  span.innerText = sendUser;
  span.title = sendUser;
  profile.appendChild(span);
  divBox.appendChild(profile);

  let textView = document.getElementsByClassName('textView')[0];
  textView.appendChild(divBox);
}

let addOnclickToLMButton = function(){
  let sendButton = document.getElementsByClassName('send')[0].getElementsByTagName('button')[0];
  sendButton.onclick = sendMessage;
}

window.onload = function(){
  oddEleColorChange();
  projectDemoChange();
  addOnclickToButton();
  addOnclickToTab();
  addOnclickToLMButton();
}

window.onresize = function(){
  projectDemoChange();
}