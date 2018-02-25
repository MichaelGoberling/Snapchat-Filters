// -----JS CODE-----  

//@input Component.Camera camera

//@input Asset.Texture deviceCameraTexture

//@input Component.SpriteVisual spriteVisual

var textureCopy = script.deviceCameraTexture.copyFrame();

 script.spriteVisual.mainPass.baseTex = textureCopy;

script.spriteVisual.enabled = true;