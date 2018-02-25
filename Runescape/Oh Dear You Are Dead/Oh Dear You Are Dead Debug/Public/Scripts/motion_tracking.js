// -----JS CODE-----


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
}