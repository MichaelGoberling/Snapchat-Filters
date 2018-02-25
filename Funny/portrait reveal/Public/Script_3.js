// -----JS CODE-----
// -----JS CODE-----
// -----JS CODE-----

// @input Component.SpriteVisual video
// @input Component.AudioComponent audio

script.video.enabled = false; 

var tap = script.createEvent("TapEvent");
tap.bind(onTap);

function onTap( eventData )
{
    script.video.enabled = true;
    delayedEvent.reset(.5);
    var loops = 1;
    var offset = 0.0;
    script.video.getMaterial(0).getPass(0).baseTex.control.play(loops, offset);
}

var delayedEvent = script.createEvent("DelayedCallbackEvent");

delayedEvent.bind(function(eventData)
{
    script.audio.play(1);
});

// Start with a 3 second delay
