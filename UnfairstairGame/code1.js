gdjs.MenuCode = {};
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];
gdjs.MenuCode.GDPlayButtonObjects1= [];
gdjs.MenuCode.GDPlayButtonObjects2= [];
gdjs.MenuCode.GDNewObject2Objects1= [];
gdjs.MenuCode.GDNewObject2Objects2= [];
gdjs.MenuCode.GDTorcheObjects1= [];
gdjs.MenuCode.GDTorcheObjects2= [];
gdjs.MenuCode.GDNewObject3Objects1= [];
gdjs.MenuCode.GDNewObject3Objects2= [];
gdjs.MenuCode.GDNewObject4Objects1= [];
gdjs.MenuCode.GDNewObject4Objects2= [];
gdjs.MenuCode.GDemeraldObjects1= [];
gdjs.MenuCode.GDemeraldObjects2= [];
gdjs.MenuCode.GDemerald0Objects1= [];
gdjs.MenuCode.GDemerald0Objects2= [];
gdjs.MenuCode.GDemerald1Objects1= [];
gdjs.MenuCode.GDemerald1Objects2= [];
gdjs.MenuCode.GDNewObject5Objects1= [];
gdjs.MenuCode.GDNewObject5Objects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.MenuCode.GDPlayButtonObjects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.MenuCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.MenuCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("emerald0"), gdjs.MenuCode.GDemerald0Objects1);
gdjs.copyArray(runtimeScene.getObjects("emerald1"), gdjs.MenuCode.GDemerald1Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewObject3Objects1[i].setRadius(gdjs.randomFloatInRange(300, 400));
}
}{for(var i = 0, len = gdjs.MenuCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewObject4Objects1[i].setRadius(gdjs.randomInRange(40, 70));
}
}{for(var i = 0, len = gdjs.MenuCode.GDemerald1Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDemerald1Objects1[i].setRadius(gdjs.randomInRange(400, 450));
}
}{for(var i = 0, len = gdjs.MenuCode.GDemerald0Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDemerald0Objects1[i].setRadius(gdjs.randomInRange(500, 510));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "unfair stair", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MenuCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewObjectObjects1[i].setXOffset(gdjs.MenuCode.GDNewObjectObjects1[i].getXOffset() + (0.2));
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8537020);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.MenuCode.GDNewObject5Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewObject5Objects1[i].getBehavior("Tween").addObjectPositionXTween("MouvRight", (gdjs.MenuCode.GDNewObject5Objects1[i].getPointX("")) + 600, "linear", 2000, false);
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;
gdjs.MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MenuCode.GDNewObject2Objects1.length = 0;
gdjs.MenuCode.GDNewObject2Objects2.length = 0;
gdjs.MenuCode.GDTorcheObjects1.length = 0;
gdjs.MenuCode.GDTorcheObjects2.length = 0;
gdjs.MenuCode.GDNewObject3Objects1.length = 0;
gdjs.MenuCode.GDNewObject3Objects2.length = 0;
gdjs.MenuCode.GDNewObject4Objects1.length = 0;
gdjs.MenuCode.GDNewObject4Objects2.length = 0;
gdjs.MenuCode.GDemeraldObjects1.length = 0;
gdjs.MenuCode.GDemeraldObjects2.length = 0;
gdjs.MenuCode.GDemerald0Objects1.length = 0;
gdjs.MenuCode.GDemerald0Objects2.length = 0;
gdjs.MenuCode.GDemerald1Objects1.length = 0;
gdjs.MenuCode.GDemerald1Objects2.length = 0;
gdjs.MenuCode.GDNewObject5Objects1.length = 0;
gdjs.MenuCode.GDNewObject5Objects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
