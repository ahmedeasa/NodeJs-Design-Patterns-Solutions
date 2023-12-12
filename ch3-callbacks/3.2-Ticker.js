import { EventEmitter } from 'events';

function createTimer(milliseconds, callback) {
    const emitter = new EventEmitter();
    let tickCount = 0;

    function tick() {
        tickCount += 1;
        emitter.emit('tick', tickCount);

        if (tickCount * 50 < milliseconds) {
            // Schedule the next tick after 50 milliseconds
            setTimeout(tick, 50);
        } else {
            // Time is up, call the callback with the total count of 'tick' events
            callback(tickCount);
        }
    }

    // Start the timer
    setTimeout(tick, 0);

    return emitter;
}

// Example usage:
const timer = createTimer(300, totalCount => {
    console.log(`Timer finished! Total tick count: ${totalCount}`);
}).on('tick', count => {
    console.log(`Tick ${count}`);
});
