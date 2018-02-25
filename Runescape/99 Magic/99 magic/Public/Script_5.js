// -----JS CODE-----
// -----JS CODE-----
// -----JS CODE-----
// @input Component.SpriteVisual billboardSpriteA

var audioComponent = null;
 
function onTap( eventData )
{
    toggleBillboard();
}
var tap = script.createEvent("TapEvent");
tap.bind(onTap);

function toggleBillboard() 
{
    if( !script.billboardSpriteA) 
    {
        print( "TOGGLE BILLBOARDS: Make sure to set your billboards in the Inspector panel!")
        return;
    }
    
        script.billboardSpriteA.enabled = false;
}