// -----JS CODE-----
// @input Component.SpriteVisual one_eternity_later
// @input Component.AudioComponent audio



var turnOn = script.createEvent("TurnOnEvent");
turnOn.bind(onTurnOn);

function onTurnOn( eventData )
{
    global.touchSystem.touchBlocking = true;
    global.touchSystem.enableTouchBlockingException("TouchTypeDoubleTap", true);
    global.touchSystem.enableTouchBlockingException("TouchTypeSwipe", true);

    script.one_eternity_later.enabled = false;
}

var tap = script.createEvent("TapEvent");
tap.bind(onTap);

function onTap( eventData )
{
    toggleBillboard();
}

function toggleBillboard() 
{
    if( !script.one_eternity_later ) 
    {
        print( "TOGGLE BILLBOARDS: Make sure to set your billboards in the Inspector panel!")
        return;
    }
	
    script.one_eternity_later.enabled = true;	
    script.audio.play( 1 );
    delayedEvent.reset(2.8);
    print("delay has started");
    
}

var delayedEvent = script.createEvent("DelayedCallbackEvent");

delayedEvent.bind(function(eventData)
{
    script.one_eternity_later.enabled = false;
});