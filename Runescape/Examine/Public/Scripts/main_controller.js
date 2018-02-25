// -----JS CODE-----
// @input Component.SpriteVisual login
// @input Component.SpriteVisual message1
// @input Component.SpriteVisual message2
// @input Component.SpriteVisual message3
// @input Component.SpriteVisual message4

var messageSelect;
var pos_start;
var pos_end; 
var tapCount = 0; 

script.login.enabled = false;
script.message1.enabled = true;
script.message2.enabled = false;
script.message3.enabled = false;
script.message4.enabled = false;

var audioComponent = null;

var turnOn = script.createEvent("TurnOnEvent");
turnOn.bind(onTurnOn);

function onTurnOn( eventData )
{
    global.touchSystem.touchBlocking = true;
    global.touchSystem.enableTouchBlockingException("TouchTypeDoubleTap", true);
    global.touchSystem.enableTouchBlockingException("TouchTypeSwipe", true);
    messageSelect = 1;
    //print(" select:" + messageSelect);
}

var turnOn = script.createEvent("TurnOnEvent");
turnOn.bind(onTurnOn);

var tap = script.createEvent("TapEvent");
tap.bind(onTap);
 
function onTap( eventData )
{
    tapCount++;
    script.login.enabled = true; 
    
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
           
        }
        else if(messageSelect == 2)
        {
            print("2");
            script.message1.enabled = false;
            script.message2.enabled = true;
            script.message3.enabled = false;        
            script.message4.enabled = false;          
        }
        else if(messageSelect == 3)
        {
            print("3");
            script.message1.enabled = false;
            script.message2.enabled = false;
            script.message3.enabled = true;        
            script.message4.enabled = false;
        }
        else if(messageSelect ==  4)
        {
            print("4");
            script.message1.enabled = false;
            script.message2.enabled = false;
            script.message3.enabled = false;        
            script.message4.enabled = true;  
        }  
    }
    else
    {
        print("Menu Nothing");   
    }
}
    


function checkMessage( )
{
    if(messageSelect == 4 && (pos_start.x > pos_end.x))
    {
           messageSelect = 1;
    }
    else if(messageSelect == 1 && (pos_start.x < pos_end.x))
    {
            messageSelect = 4;  
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



function toggleBillboard() 
{
    if( !script.login || !script.message ) 
    {
        print( "TOGGLE BILLBOARDS: Make sure to set your billboards in the Inspector panel!")
        return;
    }  
    
}





