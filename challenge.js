{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator 
        
        if(elevator.getPressedFloors().length > 0) {
            // Maybe go to some chosen floor first?
        }

        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum); 
        } );
        
                floor.on("up_button_pressed", function() {
            elevator.goToFloor(floorNum); 
        } )

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            elevator.goToFloor(0);
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
