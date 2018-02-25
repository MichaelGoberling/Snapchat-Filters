// -----JS CODE-----
// -----JS CODE-----
// @input Component.SpriteVisual login
// @input Component.SpriteVisual levelscreen
// @input Component.SpriteVisual instructions
// @input Component.SpriteVisual expscreen
// @input Component.AudioComponent audio

var audioComponent = null;
var toggle = false;
var tapCount = 0;

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
       tapCount++;
       toggleBillboard();    
}
    
var tap = script.createEvent("TapEvent");
tap.bind(onTap);

function toggleBillboard() 
{
    if( !script.login || !script.levelscreen ) 
    {
        print( "TOGGLE BILLBOARDS: Make sure to set your billboards in the Inspector panel!")
        return;
    }
    if (tapCount == 1)
    {
        script.instructions.enabled = false;
        instruction = false;
    }    
   
    // Toggle billboard
    else if( !toggle && tapCount > 1) 
    {
        self.audio.play( 1 );
        script.login.enabled = false;
        script.levelscreen.enabled = true;
        tryAnimation( script.login);
        toggle = true;
    }
    else
    {
        script.levelscreen.enabled = false;
        script.login.enabled = true;
        tryAnimation( script.levelscreen ); 
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

