function init(){
    // system load or new game
    screen = "monster";
    screenManage(screen,screenElements);
}

// screen manager 
function screenManage(screen,screenE){
   switch (screen) {
       case "stat":
        screenE.screenMonster.classList.remove("display-off");
        screenE.interfaceMonster.classList.remove("display-off");

        screenE.screenout.classList.add("display-off");
           break;
   
       case "out":
        screenE.screenOut.classList.remove("display-off");
        screenE.screenMonster.classList.add("display-off");
           break;
   }
}
function changeScene(sc){
  screen = sc;
  screenManage(screen,screenElements);
}
