gdjs.GameOverCode = {};
gdjs.GameOverCode.GDNewObjectObjects1= [];
gdjs.GameOverCode.GDNewObjectObjects2= [];
gdjs.GameOverCode.GDNewObject2Objects1= [];
gdjs.GameOverCode.GDNewObject2Objects2= [];
gdjs.GameOverCode.GDMenuObjects1= [];
gdjs.GameOverCode.GDMenuObjects2= [];
gdjs.GameOverCode.GDNewObject3Objects1= [];
gdjs.GameOverCode.GDNewObject3Objects2= [];
gdjs.GameOverCode.GDyouloseObjects1= [];
gdjs.GameOverCode.GDyouloseObjects2= [];
gdjs.GameOverCode.GDghostObjects1= [];
gdjs.GameOverCode.GDghostObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.GameOverCode.GDMenuObjects1});gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.GameOverCode.GDMenuObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDMenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.GameOverCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.GameOverCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDNewObject2Objects1[i].setXOffset(gdjs.GameOverCode.GDNewObject2Objects1[i].getXOffset() + (1));
}
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDNewObjectObjects1.length = 0;
gdjs.GameOverCode.GDNewObjectObjects2.length = 0;
gdjs.GameOverCode.GDNewObject2Objects1.length = 0;
gdjs.GameOverCode.GDNewObject2Objects2.length = 0;
gdjs.GameOverCode.GDMenuObjects1.length = 0;
gdjs.GameOverCode.GDMenuObjects2.length = 0;
gdjs.GameOverCode.GDNewObject3Objects1.length = 0;
gdjs.GameOverCode.GDNewObject3Objects2.length = 0;
gdjs.GameOverCode.GDyouloseObjects1.length = 0;
gdjs.GameOverCode.GDyouloseObjects2.length = 0;
gdjs.GameOverCode.GDghostObjects1.length = 0;
gdjs.GameOverCode.GDghostObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
