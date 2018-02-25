// -----JS CODE-----
// @input Component.SpriteVisual x_click
// @input Component.SpriteVisual blue_hit
// @input Component.SpriteVisual red_hit

script.blue_hit.enabled = false;
script.red_hit.enabled = false;

var touchStart = script.createEvent("TouchStartEvent");
touchStart.bind(onTouchStart);

function onTouchStart( eventData )
{
    var pos = eventData.getTouchPosition();
    pos.x += -0.5;
    pos.y += -0.5; 
    
    pos.x *= 56;
    pos.y *= -100;
    
    print("Here are the values:" + pos.x + " " + pos.y);
    
    script.getSceneObject().getTransform().setLocalPosition(new vec3(pos.x, pos.y, -40.00));
    //script.red_hit.getTransform().setLocalPosition(new vec3(pos.x, pos.y, -40.00));
    
    script.x_click.getMaterial(0).getPass(0).baseTex.control.play(1, 0.0);
    
    
    
}

var tap = script.createEvent("TapEvent");
tap.bind(on_tap);

function on_tap( eventData )
{
    script.blue_hit.enabled = true;
    delayedEvent.reset(.25);
    print("delay has started");
}

var swipe = script.createEvent("TouchMoveEvent");
swipe.bind(on_swipe);

function on_swipe( eventData )
{
    script.red_hit.enabled = true;
    script.blue_hit.enabled = false;
    delayedEvent.reset(.25);
    print("delay has started");
}

var delayedEvent = script.createEvent("DelayedCallbackEvent");

delayedEvent.bind(function(eventData)
{
    delayedEvent2.reset(.25);
});

var delayedEvent2 = script.createEvent("DelayedCallbackEvent");

delayedEvent2.bind(function(eventData)
{
    script.blue_hit.enabled = false;
    script.red_hit.enabled = false;
});




