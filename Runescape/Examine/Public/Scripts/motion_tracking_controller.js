// -----JS CODE-----
// @input Component.SpriteVisual mouse
// @input Component.SpriteVisual examine


var tapCount = 0;
var touchCount = 0;

script.mouse.enabled = false;
script.examine.enabled = false;



var touchStart = script.createEvent("TouchStartEvent");
touchStart.bind(onTouchStart);

function onTouchStart( eventData )
{
    /*
    var pos = eventData.getTouchPosition();
    pos.x += -0.5;
    pos.y += -0.5; 
    
    pos.x *= 56;
    pos.y *= -100;
    
    print("Here are the values:" + pos.x + " " + pos.y);
    
    script.getSceneObject().getTransform().setLocalPosition(new vec3(pos.x, pos.y, -40.00));
    //script.red_hit.getTransform().setLocalPosition(new vec3(pos.x, pos.y, -40.00));
    */
    
}

var tap = script.createEvent("TapEvent");
tap.bind(onTap);
 
function onTap( eventData )
{
    tapCount++;
}

var touchMove = script.createEvent("TouchMoveEvent");
touchMove.bind(onTouchMove);

function onTouchMove( eventData )
{
    if(tapCount > 0)
    {
        touchCount++
        var pos = eventData.getTouchPosition();
        pos.x += -0.5;
        pos.y += -0.5; 
    
        pos.x *= 56;
        pos.y *= -100;
    
        //print("Here are the values:" + pos.x + " " + pos.y);
    
        script.getSceneObject().getTransform().setLocalPosition(new vec3(pos.x, pos.y, -40.00));
        script.mouse.enabled = true;
    }

}



var touchEnd = script.createEvent("TouchEndEvent");
touchEnd.bind(onTouchEnd);

function onTouchEnd( eventData )
{
    if(touchCount > 0)
    {
        script.mouse.enabled = false;
        script.examine.enabled = true;
  
        script.examine.getMaterial(0).getPass(0).baseTex.control.play(1, 0);
  
        delayedEvent.reset(1.5);
        print("delay has started");
    }
}

var delayedEvent = script.createEvent("DelayedCallbackEvent");

delayedEvent.bind(function(eventData)
{
    script.examine.enabled = false;
});




//old code
/*var tap = script.createEvent("TapEvent");
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
*/


