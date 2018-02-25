// -----JS CODE-----
// @input Component.SpriteVisual message

var touchEnd = script.createEvent("TouchEndEvent");
var tapCount = 0;
var touchCount = 0;

touchEnd.bind(onTouchEnd);
var i = 0;
var j = 1;
var k = 1;
var l = 0;
var m = 50;


var touchMove = script.createEvent("TouchMoveEvent");
touchMove.bind(onTouchMove);

function onTouchMove( eventData )
{

}

function onTouchEnd( eventData )
{   
    if(tapCount > 0)
    {
        touchCount++;
    }
    
    delayedEvent.reset(1);    
}

var delayedEvent = script.createEvent("DelayedCallbackEvent");

delayedEvent.bind(function(eventData)
{  
    
    if(touchCount > 0)
    {
        if(i < 50)
        {
            i += 1;
            j += .044;
            k += .15;
            l += 6.5;
            script.getSceneObject().getTransform().setLocalPosition(new vec3(i,l, 0.00));
            script.getSceneObject().getTransform().setLocalScale(new vec3(j, k, 1.00));
            delayedEvent.reset(.00005);
        }
        else if(m > -40)
        {
            m--
            script.getSceneObject().getTransform().setLocalPosition(new vec3(m,l, 1.00));
            script.getSceneObject().getTransform().setLocalScale(new vec3(j, k, 1.00));
            delayedEvent.reset(.0005);
        }
        else
        {
            print("done");
        
        }
    }
    else
    {
        print("Waiting");
    }
});


var tap = script.createEvent("TapEvent");
tap.bind(onTap);
 
function onTap( eventData )
{
    tapCount++;
    
}


