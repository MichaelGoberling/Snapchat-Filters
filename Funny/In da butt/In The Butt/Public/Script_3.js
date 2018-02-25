// -----JS CODE-----
// -----JS CODE-----
// -----JS CODE-----
    
var touchEnd = script.createEvent("TouchEndEvent");
touchEnd.bind(onTouchEnd);
    
function onTouchEnd()
{
    script.getSceneObject().enabled = true;
    var gifAnimation = script.getSceneObject().getFirstComponent("Component.SpriteVisual");
    var loops = 1;
    var offset = 0.0;
    gifAnimation.getMaterial(0).getPass(0).baseTex.control.play(loops, offset);
    
}


