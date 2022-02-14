gdjs.EasyWayCode = {};
gdjs.EasyWayCode.GDNewObjectObjects1= [];
gdjs.EasyWayCode.GDNewObjectObjects2= [];
gdjs.EasyWayCode.GDNewObjectObjects3= [];
gdjs.EasyWayCode.GDplateformObjects1= [];
gdjs.EasyWayCode.GDplateformObjects2= [];
gdjs.EasyWayCode.GDplateformObjects3= [];
gdjs.EasyWayCode.GDplatform2Objects1= [];
gdjs.EasyWayCode.GDplatform2Objects2= [];
gdjs.EasyWayCode.GDplatform2Objects3= [];
gdjs.EasyWayCode.GDNewObject2Objects1= [];
gdjs.EasyWayCode.GDNewObject2Objects2= [];
gdjs.EasyWayCode.GDNewObject2Objects3= [];
gdjs.EasyWayCode.GDPLayerObjects1= [];
gdjs.EasyWayCode.GDPLayerObjects2= [];
gdjs.EasyWayCode.GDPLayerObjects3= [];
gdjs.EasyWayCode.GDCheckpointObjects1= [];
gdjs.EasyWayCode.GDCheckpointObjects2= [];
gdjs.EasyWayCode.GDCheckpointObjects3= [];
gdjs.EasyWayCode.GDemerauldObjects1= [];
gdjs.EasyWayCode.GDemerauldObjects2= [];
gdjs.EasyWayCode.GDemerauldObjects3= [];
gdjs.EasyWayCode.GDscoreObjects1= [];
gdjs.EasyWayCode.GDscoreObjects2= [];
gdjs.EasyWayCode.GDscoreObjects3= [];
gdjs.EasyWayCode.GDGhostObjects1= [];
gdjs.EasyWayCode.GDGhostObjects2= [];
gdjs.EasyWayCode.GDGhostObjects3= [];
gdjs.EasyWayCode.GDLeftObjects1= [];
gdjs.EasyWayCode.GDLeftObjects2= [];
gdjs.EasyWayCode.GDLeftObjects3= [];
gdjs.EasyWayCode.GDRightObjects1= [];
gdjs.EasyWayCode.GDRightObjects2= [];
gdjs.EasyWayCode.GDRightObjects3= [];
gdjs.EasyWayCode.GDBorderObjects1= [];
gdjs.EasyWayCode.GDBorderObjects2= [];
gdjs.EasyWayCode.GDBorderObjects3= [];
gdjs.EasyWayCode.GDNewObject3Objects1= [];
gdjs.EasyWayCode.GDNewObject3Objects2= [];
gdjs.EasyWayCode.GDNewObject3Objects3= [];

gdjs.EasyWayCode.conditionTrue_0 = {val:false};
gdjs.EasyWayCode.condition0IsTrue_0 = {val:false};
gdjs.EasyWayCode.condition1IsTrue_0 = {val:false};
gdjs.EasyWayCode.condition2IsTrue_0 = {val:false};
gdjs.EasyWayCode.conditionTrue_1 = {val:false};
gdjs.EasyWayCode.condition0IsTrue_1 = {val:false};
gdjs.EasyWayCode.condition1IsTrue_1 = {val:false};
gdjs.EasyWayCode.condition2IsTrue_1 = {val:false};


gdjs.EasyWayCode.eventsList0 = function(runtimeScene) {

{


gdjs.EasyWayCode.condition0IsTrue_0.val = false;
{
gdjs.EasyWayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EasyWayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.EasyWayCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.EasyWayCode.GDRightObjects1);
{for(var i = 0, len = gdjs.EasyWayCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.EasyWayCode.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EasyWayCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.EasyWayCode.GDRightObjects1[i].hide();
}
}}

}


};gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDplateformObjects1Objects = Hashtable.newFrom({"plateform": gdjs.EasyWayCode.GDplateformObjects1});gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDplateformObjects1Objects = Hashtable.newFrom({"plateform": gdjs.EasyWayCode.GDplateformObjects1});gdjs.EasyWayCode.eventsList1 = function(runtimeScene) {

{


gdjs.EasyWayCode.condition0IsTrue_0.val = false;
gdjs.EasyWayCode.condition1IsTrue_0.val = false;
{
gdjs.EasyWayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "laderspawn") >= 3;
}if ( gdjs.EasyWayCode.condition0IsTrue_0.val ) {
{
{gdjs.EasyWayCode.conditionTrue_1 = gdjs.EasyWayCode.condition1IsTrue_0;
gdjs.EasyWayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8800364);
}
}}
if (gdjs.EasyWayCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("platform2"), gdjs.EasyWayCode.GDplatform2Objects1);
gdjs.EasyWayCode.GDplateformObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDplateformObjects1Objects, 350, gdjs.randomFloatInRange(500, 650), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDplateformObjects1Objects, 420, (( gdjs.EasyWayCode.GDplatform2Objects1.length === 0 ) ? 0 :gdjs.EasyWayCode.GDplatform2Objects1[0].getPointX("")) + 15, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ladderspawn");
}}

}


};gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDPLayerObjects1Objects = Hashtable.newFrom({"PLayer": gdjs.EasyWayCode.GDPLayerObjects1});gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDemerauldObjects1Objects = Hashtable.newFrom({"emerauld": gdjs.EasyWayCode.GDemerauldObjects1});gdjs.EasyWayCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PLayer"), gdjs.EasyWayCode.GDPLayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("emerauld"), gdjs.EasyWayCode.GDemerauldObjects1);

gdjs.EasyWayCode.condition0IsTrue_0.val = false;
{
gdjs.EasyWayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDPLayerObjects1Objects, gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDemerauldObjects1Objects, false, runtimeScene, false);
}if (gdjs.EasyWayCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("score").add(100);
}}

}


};gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDPLayerObjects2Objects = Hashtable.newFrom({"PLayer": gdjs.EasyWayCode.GDPLayerObjects2});gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDCheckpointObjects2Objects = Hashtable.newFrom({"Checkpoint": gdjs.EasyWayCode.GDCheckpointObjects2});gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDPLayerObjects2Objects = Hashtable.newFrom({"PLayer": gdjs.EasyWayCode.GDPLayerObjects2});gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDGhostObjects2Objects = Hashtable.newFrom({"Ghost": gdjs.EasyWayCode.GDGhostObjects2});gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.EasyWayCode.GDBorderObjects1});gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDPLayerObjects1Objects = Hashtable.newFrom({"PLayer": gdjs.EasyWayCode.GDPLayerObjects1});gdjs.EasyWayCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint"), gdjs.EasyWayCode.GDCheckpointObjects2);
gdjs.copyArray(runtimeScene.getObjects("PLayer"), gdjs.EasyWayCode.GDPLayerObjects2);

gdjs.EasyWayCode.condition0IsTrue_0.val = false;
{
gdjs.EasyWayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDPLayerObjects2Objects, gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDCheckpointObjects2Objects, false, runtimeScene, false);
}if (gdjs.EasyWayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EasyWayCode.GDCheckpointObjects2 */
{runtimeScene.getVariables().get("checkpointX").setNumber((( gdjs.EasyWayCode.GDCheckpointObjects2.length === 0 ) ? 0 :gdjs.EasyWayCode.GDCheckpointObjects2[0].getPointX("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PLayer"), gdjs.EasyWayCode.GDPLayerObjects2);

gdjs.EasyWayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EasyWayCode.GDPLayerObjects2.length;i<l;++i) {
    if ( gdjs.EasyWayCode.GDPLayerObjects2[i].getY() > 1000 ) {
        gdjs.EasyWayCode.condition0IsTrue_0.val = true;
        gdjs.EasyWayCode.GDPLayerObjects2[k] = gdjs.EasyWayCode.GDPLayerObjects2[i];
        ++k;
    }
}
gdjs.EasyWayCode.GDPLayerObjects2.length = k;}if (gdjs.EasyWayCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("PlayerJustDead").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.EasyWayCode.GDGhostObjects2);
gdjs.copyArray(runtimeScene.getObjects("PLayer"), gdjs.EasyWayCode.GDPLayerObjects2);

gdjs.EasyWayCode.condition0IsTrue_0.val = false;
{
gdjs.EasyWayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDPLayerObjects2Objects, gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDGhostObjects2Objects, false, runtimeScene, false);
}if (gdjs.EasyWayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.EasyWayCode.GDBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("PLayer"), gdjs.EasyWayCode.GDPLayerObjects1);

gdjs.EasyWayCode.condition0IsTrue_0.val = false;
{
gdjs.EasyWayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDBorderObjects1Objects, gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDPLayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.EasyWayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};gdjs.EasyWayCode.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.EasyWayCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.EasyWayCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.EasyWayCode.GDscoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


};gdjs.EasyWayCode.eventsList5 = function(runtimeScene) {

{


gdjs.EasyWayCode.condition0IsTrue_0.val = false;
{
gdjs.EasyWayCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 0) == 0;
}if (gdjs.EasyWayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PLayer"), gdjs.EasyWayCode.GDPLayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.EasyWayCode.GDPLayerObjects1.length !== 0 ? gdjs.EasyWayCode.GDPLayerObjects1[0] : null), true, "", 0);
}}

}


};gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDLeftObjects2Objects = Hashtable.newFrom({"Left": gdjs.EasyWayCode.GDLeftObjects2});gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.EasyWayCode.GDRightObjects1});gdjs.EasyWayCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.EasyWayCode.GDLeftObjects2);

gdjs.EasyWayCode.condition0IsTrue_0.val = false;
gdjs.EasyWayCode.condition1IsTrue_0.val = false;
{
gdjs.EasyWayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDLeftObjects2Objects, runtimeScene, true, false);
}if ( gdjs.EasyWayCode.condition0IsTrue_0.val ) {
{
gdjs.EasyWayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.EasyWayCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PLayer"), gdjs.EasyWayCode.GDPLayerObjects2);
{for(var i = 0, len = gdjs.EasyWayCode.GDPLayerObjects2.length ;i < len;++i) {
    gdjs.EasyWayCode.GDPLayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.EasyWayCode.GDRightObjects1);

gdjs.EasyWayCode.condition0IsTrue_0.val = false;
gdjs.EasyWayCode.condition1IsTrue_0.val = false;
{
gdjs.EasyWayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EasyWayCode.mapOfGDgdjs_46EasyWayCode_46GDRightObjects1Objects, runtimeScene, true, false);
}if ( gdjs.EasyWayCode.condition0IsTrue_0.val ) {
{
gdjs.EasyWayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}}
if (gdjs.EasyWayCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PLayer"), gdjs.EasyWayCode.GDPLayerObjects1);
{for(var i = 0, len = gdjs.EasyWayCode.GDPLayerObjects1.length ;i < len;++i) {
    gdjs.EasyWayCode.GDPLayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


};gdjs.EasyWayCode.eventsList7 = function(runtimeScene) {

{


{
}

}


};gdjs.EasyWayCode.eventsList8 = function(runtimeScene) {

{


gdjs.EasyWayCode.eventsList0(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.EasyWayCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.EasyWayCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.EasyWayCode.GDNewObjectObjects1[i].setXOffset(gdjs.EasyWayCode.GDNewObjectObjects1[i].getXOffset() + (0.2));
}
}}

}


{


{
}

}


{


gdjs.EasyWayCode.eventsList1(runtimeScene);
}


{


gdjs.EasyWayCode.eventsList2(runtimeScene);
}


{


gdjs.EasyWayCode.eventsList3(runtimeScene);
}


{


gdjs.EasyWayCode.eventsList4(runtimeScene);
}


{


gdjs.EasyWayCode.eventsList5(runtimeScene);
}


{


gdjs.EasyWayCode.eventsList6(runtimeScene);
}


{


{
{}{}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


gdjs.EasyWayCode.eventsList7(runtimeScene);
}


};

gdjs.EasyWayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EasyWayCode.GDNewObjectObjects1.length = 0;
gdjs.EasyWayCode.GDNewObjectObjects2.length = 0;
gdjs.EasyWayCode.GDNewObjectObjects3.length = 0;
gdjs.EasyWayCode.GDplateformObjects1.length = 0;
gdjs.EasyWayCode.GDplateformObjects2.length = 0;
gdjs.EasyWayCode.GDplateformObjects3.length = 0;
gdjs.EasyWayCode.GDplatform2Objects1.length = 0;
gdjs.EasyWayCode.GDplatform2Objects2.length = 0;
gdjs.EasyWayCode.GDplatform2Objects3.length = 0;
gdjs.EasyWayCode.GDNewObject2Objects1.length = 0;
gdjs.EasyWayCode.GDNewObject2Objects2.length = 0;
gdjs.EasyWayCode.GDNewObject2Objects3.length = 0;
gdjs.EasyWayCode.GDPLayerObjects1.length = 0;
gdjs.EasyWayCode.GDPLayerObjects2.length = 0;
gdjs.EasyWayCode.GDPLayerObjects3.length = 0;
gdjs.EasyWayCode.GDCheckpointObjects1.length = 0;
gdjs.EasyWayCode.GDCheckpointObjects2.length = 0;
gdjs.EasyWayCode.GDCheckpointObjects3.length = 0;
gdjs.EasyWayCode.GDemerauldObjects1.length = 0;
gdjs.EasyWayCode.GDemerauldObjects2.length = 0;
gdjs.EasyWayCode.GDemerauldObjects3.length = 0;
gdjs.EasyWayCode.GDscoreObjects1.length = 0;
gdjs.EasyWayCode.GDscoreObjects2.length = 0;
gdjs.EasyWayCode.GDscoreObjects3.length = 0;
gdjs.EasyWayCode.GDGhostObjects1.length = 0;
gdjs.EasyWayCode.GDGhostObjects2.length = 0;
gdjs.EasyWayCode.GDGhostObjects3.length = 0;
gdjs.EasyWayCode.GDLeftObjects1.length = 0;
gdjs.EasyWayCode.GDLeftObjects2.length = 0;
gdjs.EasyWayCode.GDLeftObjects3.length = 0;
gdjs.EasyWayCode.GDRightObjects1.length = 0;
gdjs.EasyWayCode.GDRightObjects2.length = 0;
gdjs.EasyWayCode.GDRightObjects3.length = 0;
gdjs.EasyWayCode.GDBorderObjects1.length = 0;
gdjs.EasyWayCode.GDBorderObjects2.length = 0;
gdjs.EasyWayCode.GDBorderObjects3.length = 0;
gdjs.EasyWayCode.GDNewObject3Objects1.length = 0;
gdjs.EasyWayCode.GDNewObject3Objects2.length = 0;
gdjs.EasyWayCode.GDNewObject3Objects3.length = 0;

gdjs.EasyWayCode.eventsList8(runtimeScene);
return;

}

gdjs['EasyWayCode'] = gdjs.EasyWayCode;
