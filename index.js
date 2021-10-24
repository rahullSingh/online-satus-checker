if(window.navigator.onLine){
  online();
}else {
  offline();
}

window.addEventListener('online',  ()=>{
  online()
});

window.addEventListener('offline',  ()=>{
  offline();
});


function online(){
  document.querySelector(".status").innerText="You are Online";
  document.querySelector(".status").style.backgroundColor="blue";
}

function offline(){
  document.querySelector(".status").innerText="You are offline";
  document.querySelector(".status").style.backgroundColor="red";
}
