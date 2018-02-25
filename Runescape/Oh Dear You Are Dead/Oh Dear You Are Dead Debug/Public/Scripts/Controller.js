// -----JS CODE-----
// -----JS CODE-----
// -----JS CODE-----
// @input Component.SpriteVisual instructions
// @input Component.SpriteVisual login
// @input Component.SpriteVisual expscreen
// @input Component.SpriteVisual xclick
// Component.SpriteVisual redhit
// Component.SpriteVisual bluehit

var audioComponent = null;
var tapCount = 0;
script.login.enabled = false;
script.instructions.enabled = true;
script.xclick.enabled = false;
//script.redhit.enabled = false;
//script.bluehit.enabled = false;

function onTurnOn( eventData )
{
    global.touchSystem.touchBlocking = true;
    global.touchSystem.enableTouchBlockingException("TouchTypeDoubleTap", true);
    global.touchSystem.enableTouchBlockingException("TouchTypeSwipe", true);
 
}

function onTap( eventData )
{
       tapCount++;
       xClick();
       toggleBillboard();    
}
    
var tap = script.createEvent("TapEvent");
tap.bind(onTap);

function toggleBillboard() 
{
    if( !script.login ) 
    {
        print( "TOGGLE BILLBOARDS: Make sure to set your billboards in the Inspector panel!")
        return;
    }
    else if (tapCount == 1)
    {
        script.instructions.enabled = false;
        script.login.enabled = true;
        script.xclick.enabled = true;
        //script.redhit.enabled = true;
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

var swipe = script.createEvent("TouchMoveEvent");
swipe.bind(onSwipe);

function onSwipe()
{  
    getExp();
}

function getExp()
{
    if(tapCount > 0)
    {
        var gifAnimation = script.expscreen;
        var loops = 1;
        var offset = 0.0;
        gifAnimation.getMaterial(0).getPass(0).baseTex.control.play(loops, offset);   
    }
    else
    {
        script.expscreen.enabled = true;   
    }
}

function xClick()
{
    if(tapCount > 0)
    {
        var gifAnimation = script.xclick;
        var loops = 1;
        var offset = 0.0;
        gifAnimation.getMaterial(0).getPass(0).baseTex.control.play(loops, offset);   
    }
    else
    {
        script.xclick.enabled = true;   
    }
}






