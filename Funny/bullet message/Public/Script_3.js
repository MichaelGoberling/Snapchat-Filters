// -----JS CODE-----
// -----JS CODE-----
// -----JS CODE-----

// @input Component.SpriteVisual video
// @input Component.SpriteVisual box

script.video.enabled = false; 

var tap = script.createEvent("TapEvent");
tap.bind(onTap);

function onTap( eventData )
{
    script.video.enabled = true;
    script.box.enabled = false;
    var loops = 1;
    var offset = 0.0;
    script.video.getMaterial(0).getPass(0).baseTex.control.play(loops, offset);
}

var delayedEvent = script.createEvent("DelayedCallbackEvent");

delayedEvent.bind(function(eventData)
{
    script.video.enabled = false;
    script.box.enabled = true;
});

// Start with a 3 second delay
