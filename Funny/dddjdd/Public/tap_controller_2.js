// @input Component.SpriteVisual image
// @input Component.AudioComponent audio

script.image.enabled = false;

var tap = script.createEvent("TapEvent");
tap.bind(onTap);

function onTap( eventData )
{
    script.image.enabled = true;
    script.audio.play(1);
    script.image.getMaterial(0).getPass(0).baseTex.control.play(1, 0);
    delayedEvent.reset(2.0);
}

var delayedEvent = script.createEvent("DelayedCallbackEvent");

delayedEvent.bind(function(eventData)
{
    script.image.enabled = false;
});
