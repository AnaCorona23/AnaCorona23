class program{
    program(){

        while(rightIsClear){
                     buscar();
        }
        buscar();
        while(notFacingWest){ turnleft(); }
        while(frontIsClear){ move(); }
        while(anyBeepersInBeeperBag){ putbeeper(); }
         turnoff();

    }
    void buscar(){
        while(frontIsClear || nextToABeeper){
           while(nextToABeeper){
                pickbeeper();
           }
               if(frontIsClear){
               move();
           }
        }
        while(notFacingSouth){ turnleft(); }
        while(frontIsClear){ move(); }
        while(notFacingEast){ turnleft(); }
        if(frontIsClear){ move(); }
        while(notFacingNorth){ turnleft(); }

    }
}