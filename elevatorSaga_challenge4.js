{

    init: function(elevators, floors) {

        function initElev(elevator) {
            elevator.on("idle", function() {
                elevator.goToFloor(0);
            });
            elevator.on("floor_button_pressed", function(floorNum) {
                elevator.goToFloor(floorNum);
            });
        }

        function initFloor(floor) {
            floor.on("up_button_pressed, up_button_pressed", function() {
                elevator.goToFloor(floor.floorNum());
            });
        }

        for (var floorNum = 0; floorNum < floors.length; floorNum++) {
            var floor = floors[floorNum];
            initFloor(floor);
        }

        for (var eleNum = 0; eleNum < elevators.length; eleNum++) {
            var elevator = elevators[eleNum];
            initElev(elevator);
        }

    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}
