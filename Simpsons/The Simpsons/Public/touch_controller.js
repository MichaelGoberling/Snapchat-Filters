// -----JS CODE-----
// -----JS CODE-----
// -----JS CODE-----
// @input Component.SpriteVisual animation
// @input Component.AudioComponent intro


script.animation.enabled = true;
var tap = script.createEvent("TapEvent");
tap.bind(onTap);
    
function onTap()
{
    script.animation.enabled = true;
    script.intro.play(1);
    script.animation.getMaterial(0).getPass(0).baseTex.control.play(1, 0);
    delayedEvent.reset(3.92);
   
}

var delayedEvent = script.createEvent("DelayedCallbackEvent");

delayedEvent.bind(function(eventData)
{
    script.animation.enabled = false;
});

