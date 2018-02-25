// @input Component.SpriteVisual gates

var tap = script.createEvent("TapEvent");
tap.bind(onTap);

function onTap( eventData )
{
    script.gates.enabled = true;
    script.gates.getMaterial(0).getPass(0).baseTex.control.play(1, 0);
    delayedEvent.reset(2.4);
}

var delayedEvent = script.createEvent("DelayedCallbackEvent");

delayedEvent.bind(function(eventData)
{
    script.gates.enabled = false;
});
