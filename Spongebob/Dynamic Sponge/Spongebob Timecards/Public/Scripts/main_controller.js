// -----JS CODE-----
// @input Component.SpriteVisual message1
// @input Component.SpriteVisual message2
// @input Component.SpriteVisual message3
// @input Component.SpriteVisual message4
// @input Component.SpriteVisual message5
// @input Component.SpriteVisual message6
// @input Component.SpriteVisual instructions
// @input Component.AudioComponent audio1
// @input Component.AudioComponent audio2
// @input Component.AudioComponent audio3
// @input Component.AudioComponent audio4
// @input Component.AudioComponent audio5
// @input Component.AudioComponent audio6

var messageSelect;
var pos_start;
var pos_end; 
var tapCount = 0; 

script.message1.enabled = true;
script.message2.enabled = false;
script.message3.enabled = false;
script.message4.enabled = false;
script.message5.enabled = false;
script.message6.enabled = false;

var turnOn = script.createEvent("TurnOnEvent");
turnOn.bind(onTurnOn);

function onTurnOn( eventData )
{
    global.touchSystem.touchBlocking = true;
    global.touchSystem.enableTouchBlockingException("TouchTypeDoubleTap", true);
    global.touchSystem.enableTouchBlockingException("TouchTypeSwipe", true);
    messageSelect = 1;
}

var turnOn = script.createEvent("TurnOnEvent");
turnOn.bind(onTurnOn);

var tap = script.createEvent("TapEvent");
tap.bind(onTap);
 
function onTap( eventData )
{
    if(tapCount == 0)
    {
            script.message1.enabled = false;
            script.message2.enabled = false;
            script.message3.enabled = false;        
            script.message4.enabled = false; 
            script.message5.enabled = false;
            script.message6.enabled = false;
    }
    else if(tapCount > 0)
    {
        if(messageSelect == 1)
        {
            print("1");
            script.message1.enabled = true;
            script.message2.enabled = false;
            script.message3.enabled = false;        
            script.message4.enabled = false; 
            script.message5.enabled = false;
            script.message6.enabled = false;
            script.audio1.play(1);
            delayedEvent.reset(3.1);
            print("delay has started");
           
        }
        else if(messageSelect == 2)
        {
            print("2");
            script.message1.enabled = false;
            script.message2.enabled = true;
            script.message3.enabled = false;        
            script.message4.enabled = false;   
            script.message5.enabled = false;
            script.message6.enabled = false;
            script.audio2.play(1);
            delayedEvent.reset(4.7);
            print("delay has started");
        }
        else if(messageSelect == 3)
        {
            print("3");
            script.message1.enabled = false;
            script.message2.enabled = false;
            script.message3.enabled = true;        
            script.message4.enabled = false;
            script.message5.enabled = false;
            script.message6.enabled = false;
            script.audio3.play(1);
            delayedEvent.reset(2.4);
            print("delay has started");
        }
        else if(messageSelect ==  4)
        {
            print("4");
            script.message1.enabled = false;
            script.message2.enabled = false;
            script.message3.enabled = false;        
            script.message4.enabled = true;  
            script.message5.enabled = false;
            script.message6.enabled = false;
            script.audio4.play(1);
            delayedEvent.reset(2.8);
            print("delay has started");
            
        }  
        else if(messageSelect ==  5)
        {
            print("4");
            script.message1.enabled = false;
            script.message2.enabled = false;
            script.message3.enabled = false;        
            script.message4.enabled = false;  
            script.message5.enabled = true;
            script.message6.enabled = false;
            script.audio5.play(1);
            delayedEvent.reset(2.25);
            print("delay has started");
        }  
        else if(messageSelect ==  6)
        {
            print("4");
            script.message1.enabled = false;
            script.message2.enabled = false;
            script.message3.enabled = false;        
            script.message4.enabled = false;  
            script.message5.enabled = false;
            script.message6.enabled = true;
            script.audio6.play(1);
            delayedEvent.reset(2.5);
            print("delay has started");
            
        }  
    }
    
    script.instructions.enabled = false;
    tapCount++;
    
}

var touchStart = script.createEvent("TouchStartEvent");
touchStart.bind(onTouchStart);
 
function onTouchStart( eventData )
{
    pos_start = eventData.getTouchPosition();
    print(" select:" + messageSelect);
    print("start: " + pos_start.x);
}

var touchEnd = script.createEvent("TouchEndEvent");
touchEnd.bind(onTouchEnd);

function onTouchEnd( eventData )
{
    pos_end = eventData.getTouchPosition();
    print("end: " + pos_end.x + " select:" + messageSelect);
    
    if(tapCount == 0)
    {
        
    checkMessage();        

        if(messageSelect == 1)
        {
            print("1");
            script.message1.enabled = true;
            script.message2.enabled = false;
            script.message3.enabled = false;        
            script.message4.enabled = false; 
            script.message5.enabled = false;
            script.message6.enabled = false;
           
        }
        else if(messageSelect == 2)
        {
            print("2");
            script.message1.enabled = false;
            script.message2.enabled = true;
            script.message3.enabled = false;        
            script.message4.enabled = false;  
            script.message5.enabled = false;
            script.message6.enabled = false;
        }
        else if(messageSelect == 3)
        {
            print("3");
            script.message1.enabled = false;
            script.message2.enabled = false;
            script.message3.enabled = true;        
            script.message4.enabled = false;
            script.message5.enabled = false;
            script.message6.enabled = false;
        }
        else if(messageSelect ==  4)
        {
            print("4");
            script.message1.enabled = false;
            script.message2.enabled = false;
            script.message3.enabled = false;        
            script.message4.enabled = true;  
            script.message5.enabled = false;
            script.message6.enabled = false;
        }  
        else if(messageSelect ==  5)
        {
            print("4");
            script.message1.enabled = false;
            script.message2.enabled = false;
            script.message3.enabled = false;        
            script.message4.enabled = false;  
            script.message5.enabled = true;
            script.message6.enabled = false;
        }  
        else if(messageSelect ==  6)
        {
            print("4");
            script.message1.enabled = false;
            script.message2.enabled = false;
            script.message3.enabled = false;        
            script.message4.enabled = false;  
            script.message5.enabled = false;
            script.message6.enabled = true;
        }  
    }
    else
    {
        print("Menu Nothing");   
    }
}
    


function checkMessage( )
{
    if(tapCount == 0)
    {
        if(messageSelect == 6 && (pos_start.x > pos_end.x))
        {
               messageSelect = 1;
        }
        else if(messageSelect == 1 && (pos_start.x < pos_end.x))
        {
                messageSelect = 6;  
        }
        else if(pos_start.x > pos_end.x)
        {
                messageSelect++;
        }
        else if(pos_start.x < pos_end.x)
        {
                messageSelect--;
        }   
        else
        {
                print("Nothing");   
        }
    }
    else if(tapCount > 0)
    {
        print("nothing");
    }
}


/*
function toggleBillboard() 
{
    if( !script.login || !script.message ) 
    {
        print( "TOGGLE BILLBOARDS: Make sure to set your billboards in the Inspector panel!")
        return;
    }  
    
}

*/

var delayedEvent = script.createEvent("DelayedCallbackEvent");

delayedEvent.bind(function(eventData)
{
    script.message1.enabled = false;
    script.message2.enabled = false;
    script.message3.enabled = false;
    script.message4.enabled = false;
    script.message5.enabled = false;
    script.message6.enabled = false;
    var audioComponent = null;
    
});




