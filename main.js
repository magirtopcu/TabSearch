

function go(w){
  var k =document.querySelector(".active");
  var  current;
  if(w<0){

    if(!k){
       var tc=document.getElementsByTagName("li");
       if(tc){current=tc[0];current.setAttribute("class","active");}
    }
    else{
      current =k;
       var n=current.nextElementSibling;
       if(n){
         current.setAttribute("class","");
         current=n;
         current.setAttribute("class","active");
       }
    }


  }

  else{



    if(!k){
       var tc=document.getElementsByTagName("li");
       if(tc){current=tc[0];current.setAttribute("class","active");}
    }
    else{
      current =k;
       var n=current.previousElementSibling;
       if(n){
         current.setAttribute("class","");
         current=n;
         current.setAttribute("class","active");
       }
    }




  }

}

document.addEventListener('keyup',function(evt){
  if(evt.keyCode==38){
    go(1);
    return;
  }
  else if(evt.keyCode==40){
    go(-1);
    return;
  }
  else if(evt.keyCode==13){
      var c =document.querySelector(".active");
      if(c){
        var  id=c.getAttribute("data-id");
          chrome.tabs.update(parseInt(id),{highlighted:true,selected:true},function(a){console.log,(arguments);});
      }
      return;
  }

  var text = document.getElementById('tab_search').value;
  var tc=document.getElementById("tcontainer");
  tc.innerHTML="";
  chrome.tabs.query({currentWindow:true}, function(tabs){
      for(var i=0;i<tabs.length;i++){
        if(tabs[i].url.indexOf(text)>-1){
            var str ="<li data-id="+tabs[i].id+">"+tabs[i].title+"</li>";
            tc.innerHTML+=str;
        }
      }
  });

},false);
