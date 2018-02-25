// -----JS CODE-----
// @input Component.SpriteVisual login
// @input Component.SpriteVisual message

script.login.enabled = false;
script.message.enabled = true;

var audioComponent = null;

var turnOn = script.createEvent("TurnOnEvent");
turnOn.bind(onTurnOn);

function onTurnOn( eventData )
{
    global.touchSystem.touchBlocking = true;
    global.touchSystem.enableTouchBlockingException("TouchTypeDoubleTap", true);
    global.touchSystem.enableTouchBlockingException("TouchTypeSwipe", true);
    
}

var turnOn = script.createEvent("TurnOnEvent");
turnOn.bind(onTurnOn);
 
function onTap( eventData )
{
       toggleBillboard();    
}
    
var tap = script.createEvent("TapEvent");
tap.bind(onTap);

function toggleBillboard() 
{
    if( !script.login || !script.message ) 
    {
        print( "TOGGLE BILLBOARDS: Make sure to set your billboards in the Inspector panel!")
        return;
    }   
    
    script.login.enabled = true;
    script.message.enabled = false;
    
}





