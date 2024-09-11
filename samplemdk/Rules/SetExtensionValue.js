/**
 * Describe this function...
  * @param {IClientAPI} clientAPI
 */
export default function SetExtensionValue(context, clientAPI) {
    console.log("In SetExtensionValue");
    let srcValue = context.getValue();
    let targetCtrl = context.evaluateTargetPath("#Page:Main/#Control:MyExtensionControlName");
    targetCtrl.setValue(srcValue);
}
