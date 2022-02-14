gdjs.unfair_32stairCode = {};
gdjs.unfair_32stairCode.GDNewObjectObjects1= [];
gdjs.unfair_32stairCode.GDNewObjectObjects2= [];
gdjs.unfair_32stairCode.GDOpenDoorTopObjects1= [];
gdjs.unfair_32stairCode.GDOpenDoorTopObjects2= [];
gdjs.unfair_32stairCode.GDStoneledgeObjects1= [];
gdjs.unfair_32stairCode.GDStoneledgeObjects2= [];
gdjs.unfair_32stairCode.GDWideLadderObjects1= [];
gdjs.unfair_32stairCode.GDWideLadderObjects2= [];
gdjs.unfair_32stairCode.GDWallGooBaseObjects1= [];
gdjs.unfair_32stairCode.GDWallGooBaseObjects2= [];
gdjs.unfair_32stairCode.GDWindowsObjects1= [];
gdjs.unfair_32stairCode.GDWindowsObjects2= [];
gdjs.unfair_32stairCode.GDBottomLeftCornerWoodBackgroundCutoutObjects1= [];
gdjs.unfair_32stairCode.GDBottomLeftCornerWoodBackgroundCutoutObjects2= [];
gdjs.unfair_32stairCode.GDNewObject2Objects1= [];
gdjs.unfair_32stairCode.GDNewObject2Objects2= [];
gdjs.unfair_32stairCode.GDNewObject3Objects1= [];
gdjs.unfair_32stairCode.GDNewObject3Objects2= [];
gdjs.unfair_32stairCode.GDtorcheObjects1= [];
gdjs.unfair_32stairCode.GDtorcheObjects2= [];
gdjs.unfair_32stairCode.GDGraveyardTileObjects1= [];
gdjs.unfair_32stairCode.GDGraveyardTileObjects2= [];
gdjs.unfair_32stairCode.GDplayer1Objects1= [];
gdjs.unfair_32stairCode.GDplayer1Objects2= [];
gdjs.unfair_32stairCode.GDNewObject4Objects1= [];
gdjs.unfair_32stairCode.GDNewObject4Objects2= [];
gdjs.unfair_32stairCode.GDNewObject5Objects1= [];
gdjs.unfair_32stairCode.GDNewObject5Objects2= [];
gdjs.unfair_32stairCode.GDNewObject6Objects1= [];
gdjs.unfair_32stairCode.GDNewObject6Objects2= [];
gdjs.unfair_32stairCode.GDWallForRedFloorObjects1= [];
gdjs.unfair_32stairCode.GDWallForRedFloorObjects2= [];
gdjs.unfair_32stairCode.GDtorche1Objects1= [];
gdjs.unfair_32stairCode.GDtorche1Objects2= [];
gdjs.unfair_32stairCode.GDTorche2Objects1= [];
gdjs.unfair_32stairCode.GDTorche2Objects2= [];

gdjs.unfair_32stairCode.conditionTrue_0 = {val:false};
gdjs.unfair_32stairCode.condition0IsTrue_0 = {val:false};
gdjs.unfair_32stairCode.condition1IsTrue_0 = {val:false};
gdjs.unfair_32stairCode.condition2IsTrue_0 = {val:false};
gdjs.unfair_32stairCode.condition3IsTrue_0 = {val:false};
gdjs.unfair_32stairCode.condition4IsTrue_0 = {val:false};


gdjs.unfair_32stairCode.eventsList0 = function(runtimeScene) {

{


gdjs.unfair_32stairCode.condition0IsTrue_0.val = false;
{
gdjs.unfair_32stairCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 0) == 0;
}if (gdjs.unfair_32stairCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.unfair_32stairCode.GDplayer1Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.unfair_32stairCode.GDplayer1Objects1.length !== 0 ? gdjs.unfair_32stairCode.GDplayer1Objects1[0] : null), true, "", 0);
}}

}


};gdjs.unfair_32stairCode.mapOfGDgdjs_46unfair_9532stairCode_46GDOpenDoorTopObjects1Objects = Hashtable.newFrom({"OpenDoorTop": gdjs.unfair_32stairCode.GDOpenDoorTopObjects1});gdjs.unfair_32stairCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WideLadder"), gdjs.unfair_32stairCode.GDWideLadderObjects1);
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.unfair_32stairCode.GDplayer1Objects1);

gdjs.unfair_32stairCode.condition0IsTrue_0.val = false;
gdjs.unfair_32stairCode.condition1IsTrue_0.val = false;
gdjs.unfair_32stairCode.condition2IsTrue_0.val = false;
gdjs.unfair_32stairCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.unfair_32stairCode.GDplayer1Objects1.length;i<l;++i) {
    if ( gdjs.unfair_32stairCode.GDplayer1Objects1[i].getBehavior("PlatformerObject").canJump() ) {
        gdjs.unfair_32stairCode.condition0IsTrue_0.val = true;
        gdjs.unfair_32stairCode.GDplayer1Objects1[k] = gdjs.unfair_32stairCode.GDplayer1Objects1[i];
        ++k;
    }
}
gdjs.unfair_32stairCode.GDplayer1Objects1.length = k;}if ( gdjs.unfair_32stairCode.condition0IsTrue_0.val ) {
{
}if ( gdjs.unfair_32stairCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.unfair_32stairCode.GDplayer1Objects1.length;i<l;++i) {
    if ( gdjs.unfair_32stairCode.GDplayer1Objects1[i].getBehavior("PlatformerObject").getCurrentFallSpeed() < 10 ) {
        gdjs.unfair_32stairCode.condition2IsTrue_0.val = true;
        gdjs.unfair_32stairCode.GDplayer1Objects1[k] = gdjs.unfair_32stairCode.GDplayer1Objects1[i];
        ++k;
    }
}
gdjs.unfair_32stairCode.GDplayer1Objects1.length = k;}if ( gdjs.unfair_32stairCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.unfair_32stairCode.GDplayer1Objects1.length;i<l;++i) {
    if ( gdjs.unfair_32stairCode.GDplayer1Objects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.unfair_32stairCode.condition3IsTrue_0.val = true;
        gdjs.unfair_32stairCode.GDplayer1Objects1[k] = gdjs.unfair_32stairCode.GDplayer1Objects1[i];
        ++k;
    }
}
gdjs.unfair_32stairCode.GDplayer1Objects1.length = k;}}
}
}
if (gdjs.unfair_32stairCode.condition3IsTrue_0.val) {
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.unfair_32stairCode.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.unfair_32stairCode.GDNewObject6Objects1);
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.unfair_32stairCode.GDplayer1Objects1);
{for(var i = 0, len = gdjs.unfair_32stairCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.unfair_32stairCode.GDNewObject5Objects1[i].setPosition((( gdjs.unfair_32stairCode.GDplayer1Objects1.length === 0 ) ? 0 :gdjs.unfair_32stairCode.GDplayer1Objects1[0].getPointX("Light")),(( gdjs.unfair_32stairCode.GDplayer1Objects1.length === 0 ) ? 0 :gdjs.unfair_32stairCode.GDplayer1Objects1[0].getPointY("Light")));
}
}{for(var i = 0, len = gdjs.unfair_32stairCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.unfair_32stairCode.GDNewObject6Objects1[i].setPosition((( gdjs.unfair_32stairCode.GDplayer1Objects1.length === 0 ) ? 0 :gdjs.unfair_32stairCode.GDplayer1Objects1[0].getPointX("Light")),(( gdjs.unfair_32stairCode.GDplayer1Objects1.length === 0 ) ? 0 :gdjs.unfair_32stairCode.GDplayer1Objects1[0].getPointY("Light")));
}
}{for(var i = 0, len = gdjs.unfair_32stairCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.unfair_32stairCode.GDNewObject5Objects1[i].setRadius(gdjs.randomFloatInRange(350, 400));
}
}{for(var i = 0, len = gdjs.unfair_32stairCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.unfair_32stairCode.GDNewObject6Objects1[i].setRadius(gdjs.randomFloatInRange(40, 70));
}
}}

}


{


gdjs.unfair_32stairCode.eventsList0(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("torche1"), gdjs.unfair_32stairCode.GDtorche1Objects1);
{for(var i = 0, len = gdjs.unfair_32stairCode.GDtorche1Objects1.length ;i < len;++i) {
    gdjs.unfair_32stairCode.GDtorche1Objects1[i].setRadius(gdjs.randomFloatInRange(200, 400));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OpenDoorTop"), gdjs.unfair_32stairCode.GDOpenDoorTopObjects1);

gdjs.unfair_32stairCode.condition0IsTrue_0.val = false;
gdjs.unfair_32stairCode.condition1IsTrue_0.val = false;
{
gdjs.unfair_32stairCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.unfair_32stairCode.mapOfGDgdjs_46unfair_9532stairCode_46GDOpenDoorTopObjects1Objects, runtimeScene, true, false);
}if ( gdjs.unfair_32stairCode.condition0IsTrue_0.val ) {
{
gdjs.unfair_32stairCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.unfair_32stairCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyWay", false);
}}

}


};

gdjs.unfair_32stairCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.unfair_32stairCode.GDNewObjectObjects1.length = 0;
gdjs.unfair_32stairCode.GDNewObjectObjects2.length = 0;
gdjs.unfair_32stairCode.GDOpenDoorTopObjects1.length = 0;
gdjs.unfair_32stairCode.GDOpenDoorTopObjects2.length = 0;
gdjs.unfair_32stairCode.GDStoneledgeObjects1.length = 0;
gdjs.unfair_32stairCode.GDStoneledgeObjects2.length = 0;
gdjs.unfair_32stairCode.GDWideLadderObjects1.length = 0;
gdjs.unfair_32stairCode.GDWideLadderObjects2.length = 0;
gdjs.unfair_32stairCode.GDWallGooBaseObjects1.length = 0;
gdjs.unfair_32stairCode.GDWallGooBaseObjects2.length = 0;
gdjs.unfair_32stairCode.GDWindowsObjects1.length = 0;
gdjs.unfair_32stairCode.GDWindowsObjects2.length = 0;
gdjs.unfair_32stairCode.GDBottomLeftCornerWoodBackgroundCutoutObjects1.length = 0;
gdjs.unfair_32stairCode.GDBottomLeftCornerWoodBackgroundCutoutObjects2.length = 0;
gdjs.unfair_32stairCode.GDNewObject2Objects1.length = 0;
gdjs.unfair_32stairCode.GDNewObject2Objects2.length = 0;
gdjs.unfair_32stairCode.GDNewObject3Objects1.length = 0;
gdjs.unfair_32stairCode.GDNewObject3Objects2.length = 0;
gdjs.unfair_32stairCode.GDtorcheObjects1.length = 0;
gdjs.unfair_32stairCode.GDtorcheObjects2.length = 0;
gdjs.unfair_32stairCode.GDGraveyardTileObjects1.length = 0;
gdjs.unfair_32stairCode.GDGraveyardTileObjects2.length = 0;
gdjs.unfair_32stairCode.GDplayer1Objects1.length = 0;
gdjs.unfair_32stairCode.GDplayer1Objects2.length = 0;
gdjs.unfair_32stairCode.GDNewObject4Objects1.length = 0;
gdjs.unfair_32stairCode.GDNewObject4Objects2.length = 0;
gdjs.unfair_32stairCode.GDNewObject5Objects1.length = 0;
gdjs.unfair_32stairCode.GDNewObject5Objects2.length = 0;
gdjs.unfair_32stairCode.GDNewObject6Objects1.length = 0;
gdjs.unfair_32stairCode.GDNewObject6Objects2.length = 0;
gdjs.unfair_32stairCode.GDWallForRedFloorObjects1.length = 0;
gdjs.unfair_32stairCode.GDWallForRedFloorObjects2.length = 0;
gdjs.unfair_32stairCode.GDtorche1Objects1.length = 0;
gdjs.unfair_32stairCode.GDtorche1Objects2.length = 0;
gdjs.unfair_32stairCode.GDTorche2Objects1.length = 0;
gdjs.unfair_32stairCode.GDTorche2Objects2.length = 0;

gdjs.unfair_32stairCode.eventsList1(runtimeScene);
return;

}

gdjs['unfair_32stairCode'] = gdjs.unfair_32stairCode;
