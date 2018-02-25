// -----JS CODE-----
// Wait for 2 seconds before executing a function
// @input Component.SpriteVisual billboardSprite

var delayedEvent = script.createEvent("DelayedCallbackEvent");
var gifAnimation = script.getSceneObject().getFirstComponent("Component.SpriteVisual");
script.billboardSprite.enabled = false;


delayedEvent.bind(function(eventData)
{
    var loops = 1;
    var offset = 0.0;
    script.billboardSprite.enabled = true;
    gifAnimation.getMaterial(0).getPass(0).baseTex.control.play(loops,                  offset);

});

// Start with a 5 second delay
delayedEvent.reset(4);
print("delay has started");
