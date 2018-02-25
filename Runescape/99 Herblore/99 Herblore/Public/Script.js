// -----JS CODE-----
// -----JS CODE-----
// @input Component.SpriteVisual billboardSpriteA
// @input Component.SpriteVisual billboardSpriteB

var audioComponent = null;
var toggle = false;

function onTurnOn( eventData )
{
    global.touchSystem.touchBlocking = true;
    global.touchSystem.enableTouchBlockingException("TouchTypeDoubleTap", true);
    global.touchSystem.enableTouchBlockingException("TouchTypeSwipe", true);
 
    toggle = false;
    toggleBillboard();
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
    if( !script.billboardSpriteA || !script.billboardSpriteB ) 
    {
        print( "TOGGLE BILLBOARDS: Make sure to set your billboards in the Inspector panel!")
        return;
    }

    // Toggle billboard
    if( !toggle ) 
    {
        script.billboardSpriteA.enabled = true;
        script.billboardSpriteB.enabled = false;
        tryAnimation( script.billboardSpriteA );
        toggle = true;
    }
    else
    {
        script.billboardSpriteB.enabled = true;
        script.billboardSpriteA.enabled = false;
        tryAnimation( script.billboardSpriteB ); 
        toggle = false; 
    } 
}

function tryAnimation( billboard ) 
{
    // Play animation
    var control = billboard.getMaterial(0).getPass(0).baseTex.control;
    if( control && control.play )
    {
        control.play(1, 0.0); 
    } 
}

