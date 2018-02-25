// -----JS CODE-----
// Wait for 2 seconds before executing a function
// @input Component.SpriteVisual billboardSprite

var delayedEvent = script.createEvent("DelayedCallbackEvent");

delayedEvent.bind(function(eventData)
{
    script.billboardSprite.enabled = false;
});

// Start with a 3 second delay
delayedEvent.reset(2);
print("delay has started");
