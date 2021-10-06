
         class program{
            program(){
         while(notFacingEast){ turnleft(); }
         move();
         while(nextToABeeper){ pickbeeper(); }
         while(notFacingWest){ turnleft(); }
         move();
         while(notFacingNorth){ turnleft();}
         move();
         while(rightIsBlocked){ move(); }
         while(notFacingEast){ turnleft(); }
         move();
         while(notFacingSouth){ turnleft(); }
         while(frontIsClear){ move(); }
         while(notFacingEast){ turnleft(); }
         while(frontIsClear && rightIsBlocked){ sembrar(); }
         if(rightIsBlocked){
             sembrar();
             while(notFacingNorth){ turnleft(); }
             while(rightIsBlocked){ move(); }
             while(notFacingEast){ turnleft(); }
             move();
         }
         while(notFacingSouth){ turnleft(); }
         while(frontIsClear){ move(); }
         while(notFacingWest){ turnleft(); }
         while(frontIsClear){ move(); }
         while(notFacingEast){ turnleft(); }
         move();
         while(anyBeepersInBeeperBag){ putbeeper(); }
         turnoff();

    }
    void sembrar(){
        while(notFacingNorth){ turnleft(); }
        while(frontIsClear || notNextToABeeper){
            if(notNextToABeeper){ putbeeper(); }
            if(frontIsClear){ move(); }
        }
        while(notFacingSouth){ turnleft(); }
        while(frontIsClear || notNextToABeeper){
            if(notNextToABeeper){ putbeeper();}
            if(frontIsClear){ move(); }
        }
        while(notFacingEast){ turnleft(); }
        if(frontIsClear){ move(); }
    }
}