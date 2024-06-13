(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/pp/i18n/i18n.properties":
/*!***************************************************!*\
  !*** ./build.definitions/pp/i18n/i18n.properties ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let pp_actions_application_appupdate_action = __webpack_require__(/*! ./pp/Actions/Application/AppUpdate.action */ "./build.definitions/pp/Actions/Application/AppUpdate.action")
let pp_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./pp/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/pp/Actions/Application/AppUpdateFailureMessage.action")
let pp_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./pp/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/pp/Actions/Application/AppUpdateProgressBanner.action")
let pp_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./pp/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/pp/Actions/Application/AppUpdateSuccessMessage.action")
let pp_actions_application_logout_action = __webpack_require__(/*! ./pp/Actions/Application/Logout.action */ "./build.definitions/pp/Actions/Application/Logout.action")
let pp_actions_application_navtoabout_action = __webpack_require__(/*! ./pp/Actions/Application/NavToAbout.action */ "./build.definitions/pp/Actions/Application/NavToAbout.action")
let pp_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./pp/Actions/Application/NavToActivityLog.action */ "./build.definitions/pp/Actions/Application/NavToActivityLog.action")
let pp_actions_application_navtosupport_action = __webpack_require__(/*! ./pp/Actions/Application/NavToSupport.action */ "./build.definitions/pp/Actions/Application/NavToSupport.action")
let pp_actions_application_onwillupdate_action = __webpack_require__(/*! ./pp/Actions/Application/OnWillUpdate.action */ "./build.definitions/pp/Actions/Application/OnWillUpdate.action")
let pp_actions_application_reset_action = __webpack_require__(/*! ./pp/Actions/Application/Reset.action */ "./build.definitions/pp/Actions/Application/Reset.action")
let pp_actions_application_resetmessage_action = __webpack_require__(/*! ./pp/Actions/Application/ResetMessage.action */ "./build.definitions/pp/Actions/Application/ResetMessage.action")
let pp_actions_application_usermenupopover_action = __webpack_require__(/*! ./pp/Actions/Application/UserMenuPopover.action */ "./build.definitions/pp/Actions/Application/UserMenuPopover.action")
let pp_actions_capurl_attachments_table_attachments_table_createentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Attachments_table/Attachments_table_CreateEntity.action */ "./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_CreateEntity.action")
let pp_actions_capurl_attachments_table_attachments_table_deleteentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Attachments_table/Attachments_table_DeleteEntity.action */ "./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_DeleteEntity.action")
let pp_actions_capurl_attachments_table_attachments_table_detailpopover_action = __webpack_require__(/*! ./pp/Actions/capurl/Attachments_table/Attachments_table_DetailPopover.action */ "./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_DetailPopover.action")
let pp_actions_capurl_attachments_table_attachments_table_opendocument_action = __webpack_require__(/*! ./pp/Actions/capurl/Attachments_table/Attachments_table_OpenDocument.action */ "./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_OpenDocument.action")
let pp_actions_capurl_attachments_table_attachments_table_updateentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Attachments_table/Attachments_table_UpdateEntity.action */ "./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_UpdateEntity.action")
let pp_actions_capurl_attachments_table_attachments_table_uploadstream_action = __webpack_require__(/*! ./pp/Actions/capurl/Attachments_table/Attachments_table_UploadStream.action */ "./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_UploadStream.action")
let pp_actions_capurl_attachments_table_navtoattachments_table_create_action = __webpack_require__(/*! ./pp/Actions/capurl/Attachments_table/NavToAttachments_table_Create.action */ "./build.definitions/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Create.action")
let pp_actions_capurl_attachments_table_navtoattachments_table_detail_action = __webpack_require__(/*! ./pp/Actions/capurl/Attachments_table/NavToAttachments_table_Detail.action */ "./build.definitions/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Detail.action")
let pp_actions_capurl_attachments_table_navtoattachments_table_edit_action = __webpack_require__(/*! ./pp/Actions/capurl/Attachments_table/NavToAttachments_table_Edit.action */ "./build.definitions/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Edit.action")
let pp_actions_capurl_attachments_table_navtoattachments_table_list_action = __webpack_require__(/*! ./pp/Actions/capurl/Attachments_table/NavToAttachments_table_List.action */ "./build.definitions/pp/Actions/capurl/Attachments_table/NavToAttachments_table_List.action")
let pp_actions_capurl_bid_reply_bid_reply_createentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Bid_reply/Bid_reply_CreateEntity.action */ "./build.definitions/pp/Actions/capurl/Bid_reply/Bid_reply_CreateEntity.action")
let pp_actions_capurl_bid_reply_bid_reply_deleteentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Bid_reply/Bid_reply_DeleteEntity.action */ "./build.definitions/pp/Actions/capurl/Bid_reply/Bid_reply_DeleteEntity.action")
let pp_actions_capurl_bid_reply_bid_reply_updateentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Bid_reply/Bid_reply_UpdateEntity.action */ "./build.definitions/pp/Actions/capurl/Bid_reply/Bid_reply_UpdateEntity.action")
let pp_actions_capurl_bid_reply_navtobid_reply_create_action = __webpack_require__(/*! ./pp/Actions/capurl/Bid_reply/NavToBid_reply_Create.action */ "./build.definitions/pp/Actions/capurl/Bid_reply/NavToBid_reply_Create.action")
let pp_actions_capurl_bid_reply_navtobid_reply_detail_action = __webpack_require__(/*! ./pp/Actions/capurl/Bid_reply/NavToBid_reply_Detail.action */ "./build.definitions/pp/Actions/capurl/Bid_reply/NavToBid_reply_Detail.action")
let pp_actions_capurl_bid_reply_navtobid_reply_edit_action = __webpack_require__(/*! ./pp/Actions/capurl/Bid_reply/NavToBid_reply_Edit.action */ "./build.definitions/pp/Actions/capurl/Bid_reply/NavToBid_reply_Edit.action")
let pp_actions_capurl_bid_reply_navtobid_reply_list_action = __webpack_require__(/*! ./pp/Actions/capurl/Bid_reply/NavToBid_reply_List.action */ "./build.definitions/pp/Actions/capurl/Bid_reply/NavToBid_reply_List.action")
let pp_actions_capurl_dropdown_dropdown_createentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Dropdown/Dropdown_CreateEntity.action */ "./build.definitions/pp/Actions/capurl/Dropdown/Dropdown_CreateEntity.action")
let pp_actions_capurl_dropdown_dropdown_deleteentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Dropdown/Dropdown_DeleteEntity.action */ "./build.definitions/pp/Actions/capurl/Dropdown/Dropdown_DeleteEntity.action")
let pp_actions_capurl_dropdown_dropdown_updateentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Dropdown/Dropdown_UpdateEntity.action */ "./build.definitions/pp/Actions/capurl/Dropdown/Dropdown_UpdateEntity.action")
let pp_actions_capurl_dropdown_navtodropdown_create_action = __webpack_require__(/*! ./pp/Actions/capurl/Dropdown/NavToDropdown_Create.action */ "./build.definitions/pp/Actions/capurl/Dropdown/NavToDropdown_Create.action")
let pp_actions_capurl_dropdown_navtodropdown_detail_action = __webpack_require__(/*! ./pp/Actions/capurl/Dropdown/NavToDropdown_Detail.action */ "./build.definitions/pp/Actions/capurl/Dropdown/NavToDropdown_Detail.action")
let pp_actions_capurl_dropdown_navtodropdown_edit_action = __webpack_require__(/*! ./pp/Actions/capurl/Dropdown/NavToDropdown_Edit.action */ "./build.definitions/pp/Actions/capurl/Dropdown/NavToDropdown_Edit.action")
let pp_actions_capurl_dropdown_navtodropdown_list_action = __webpack_require__(/*! ./pp/Actions/capurl/Dropdown/NavToDropdown_List.action */ "./build.definitions/pp/Actions/capurl/Dropdown/NavToDropdown_List.action")
let pp_actions_capurl_header_table_header_table_createentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/Header_table_CreateEntity.action */ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateEntity.action")
let pp_actions_capurl_header_table_header_table_createitem_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/Header_table_CreateItem_table.action */ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateItem_table.action")
let pp_actions_capurl_header_table_header_table_createquestionnaire_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/Header_table_CreateQuestionnaire_table.action */ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateQuestionnaire_table.action")
let pp_actions_capurl_header_table_header_table_createsupplier_bid_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/Header_table_CreateSupplier_bid_table.action */ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateSupplier_bid_table.action")
let pp_actions_capurl_header_table_header_table_createsupplier_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/Header_table_CreateSupplier_table.action */ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateSupplier_table.action")
let pp_actions_capurl_header_table_header_table_deleteentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/Header_table_DeleteEntity.action */ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_DeleteEntity.action")
let pp_actions_capurl_header_table_header_table_detailpopover_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/Header_table_DetailPopover.action */ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_DetailPopover.action")
let pp_actions_capurl_header_table_header_table_updateentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/Header_table_UpdateEntity.action */ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_UpdateEntity.action")
let pp_actions_capurl_header_table_navtoheader_table_create_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/NavToHeader_table_Create.action */ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_Create.action")
let pp_actions_capurl_header_table_navtoheader_table_createitem_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/NavToHeader_table_CreateItem_table.action */ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_CreateItem_table.action")
let pp_actions_capurl_header_table_navtoheader_table_createquestionnaire_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/NavToHeader_table_CreateQuestionnaire_table.action */ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_CreateQuestionnaire_table.action")
let pp_actions_capurl_header_table_navtoheader_table_createsupplier_bid_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/NavToHeader_table_CreateSupplier_bid_table.action */ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_CreateSupplier_bid_table.action")
let pp_actions_capurl_header_table_navtoheader_table_createsupplier_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/NavToHeader_table_CreateSupplier_table.action */ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_CreateSupplier_table.action")
let pp_actions_capurl_header_table_navtoheader_table_detail_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/NavToHeader_table_Detail.action */ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_Detail.action")
let pp_actions_capurl_header_table_navtoheader_table_edit_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/NavToHeader_table_Edit.action */ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_Edit.action")
let pp_actions_capurl_header_table_navtoheader_table_list_action = __webpack_require__(/*! ./pp/Actions/capurl/Header_table/NavToHeader_table_List.action */ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_List.action")
let pp_actions_capurl_item_table_item_table_createentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Item_table/Item_table_CreateEntity.action */ "./build.definitions/pp/Actions/capurl/Item_table/Item_table_CreateEntity.action")
let pp_actions_capurl_item_table_item_table_deleteentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Item_table/Item_table_DeleteEntity.action */ "./build.definitions/pp/Actions/capurl/Item_table/Item_table_DeleteEntity.action")
let pp_actions_capurl_item_table_item_table_updateentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Item_table/Item_table_UpdateEntity.action */ "./build.definitions/pp/Actions/capurl/Item_table/Item_table_UpdateEntity.action")
let pp_actions_capurl_item_table_navtoitem_table_create_action = __webpack_require__(/*! ./pp/Actions/capurl/Item_table/NavToItem_table_Create.action */ "./build.definitions/pp/Actions/capurl/Item_table/NavToItem_table_Create.action")
let pp_actions_capurl_item_table_navtoitem_table_detail_action = __webpack_require__(/*! ./pp/Actions/capurl/Item_table/NavToItem_table_Detail.action */ "./build.definitions/pp/Actions/capurl/Item_table/NavToItem_table_Detail.action")
let pp_actions_capurl_item_table_navtoitem_table_edit_action = __webpack_require__(/*! ./pp/Actions/capurl/Item_table/NavToItem_table_Edit.action */ "./build.definitions/pp/Actions/capurl/Item_table/NavToItem_table_Edit.action")
let pp_actions_capurl_item_table_navtoitem_table_list_action = __webpack_require__(/*! ./pp/Actions/capurl/Item_table/NavToItem_table_List.action */ "./build.definitions/pp/Actions/capurl/Item_table/NavToItem_table_List.action")
let pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_create_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Create.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Create.action")
let pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_createdropdown_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_CreateDropdown.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_CreateDropdown.action")
let pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_detail_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action")
let pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_edit_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Edit.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Edit.action")
let pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_list_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_List.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_List.action")
let pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_createdropdown_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_CreateDropdown.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_CreateDropdown.action")
let pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_createentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_CreateEntity.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_CreateEntity.action")
let pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_deleteentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DeleteEntity.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DeleteEntity.action")
let pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_detailpopover_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DetailPopover.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DetailPopover.action")
let pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_updateentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action")
let pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_create_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Create.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Create.action")
let pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_createquestionnaire_reply_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_CreateQuestionnaire_reply_table.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_CreateQuestionnaire_reply_table.action")
let pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_detail_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Detail.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Detail.action")
let pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_edit_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Edit.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Edit.action")
let pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_list_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_List.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_List.action")
let pp_actions_capurl_questionnaire_table_questionnaire_table_createentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_table/Questionnaire_table_CreateEntity.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_CreateEntity.action")
let pp_actions_capurl_questionnaire_table_questionnaire_table_createquestionnaire_reply_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.action")
let pp_actions_capurl_questionnaire_table_questionnaire_table_deleteentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_table/Questionnaire_table_DeleteEntity.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_DeleteEntity.action")
let pp_actions_capurl_questionnaire_table_questionnaire_table_detailpopover_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_table/Questionnaire_table_DetailPopover.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_DetailPopover.action")
let pp_actions_capurl_questionnaire_table_questionnaire_table_updateentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Questionnaire_table/Questionnaire_table_UpdateEntity.action */ "./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_UpdateEntity.action")
let pp_actions_capurl_service_closeoffline_action = __webpack_require__(/*! ./pp/Actions/capurl/Service/CloseOffline.action */ "./build.definitions/pp/Actions/capurl/Service/CloseOffline.action")
let pp_actions_capurl_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./pp/Actions/capurl/Service/CloseOfflineFailureMessage.action */ "./build.definitions/pp/Actions/capurl/Service/CloseOfflineFailureMessage.action")
let pp_actions_capurl_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./pp/Actions/capurl/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/pp/Actions/capurl/Service/CloseOfflineSuccessMessage.action")
let pp_actions_capurl_service_downloadoffline_action = __webpack_require__(/*! ./pp/Actions/capurl/Service/DownloadOffline.action */ "./build.definitions/pp/Actions/capurl/Service/DownloadOffline.action")
let pp_actions_capurl_service_downloadstartedmessage_action = __webpack_require__(/*! ./pp/Actions/capurl/Service/DownloadStartedMessage.action */ "./build.definitions/pp/Actions/capurl/Service/DownloadStartedMessage.action")
let pp_actions_capurl_service_initializeoffline_action = __webpack_require__(/*! ./pp/Actions/capurl/Service/InitializeOffline.action */ "./build.definitions/pp/Actions/capurl/Service/InitializeOffline.action")
let pp_actions_capurl_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./pp/Actions/capurl/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/pp/Actions/capurl/Service/InitializeOfflineFailureMessage.action")
let pp_actions_capurl_service_syncfailuremessage_action = __webpack_require__(/*! ./pp/Actions/capurl/Service/SyncFailureMessage.action */ "./build.definitions/pp/Actions/capurl/Service/SyncFailureMessage.action")
let pp_actions_capurl_service_syncstartedmessage_action = __webpack_require__(/*! ./pp/Actions/capurl/Service/SyncStartedMessage.action */ "./build.definitions/pp/Actions/capurl/Service/SyncStartedMessage.action")
let pp_actions_capurl_service_uploadoffline_action = __webpack_require__(/*! ./pp/Actions/capurl/Service/UploadOffline.action */ "./build.definitions/pp/Actions/capurl/Service/UploadOffline.action")
let pp_actions_capurl_supplier_bid_table_navtosupplier_bid_table_create_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Create.action */ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Create.action")
let pp_actions_capurl_supplier_bid_table_navtosupplier_bid_table_detail_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Detail.action */ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Detail.action")
let pp_actions_capurl_supplier_bid_table_navtosupplier_bid_table_edit_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Edit.action */ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Edit.action")
let pp_actions_capurl_supplier_bid_table_navtosupplier_bid_table_list_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_List.action */ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_List.action")
let pp_actions_capurl_supplier_bid_table_supplier_bid_table_createentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_CreateEntity.action */ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_CreateEntity.action")
let pp_actions_capurl_supplier_bid_table_supplier_bid_table_deleteentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action */ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action")
let pp_actions_capurl_supplier_bid_table_supplier_bid_table_updateentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action */ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action")
let pp_actions_capurl_supplier_replay_navtosupplier_replay_create_action = __webpack_require__(/*! ./pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Create.action */ "./build.definitions/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Create.action")
let pp_actions_capurl_supplier_replay_navtosupplier_replay_detail_action = __webpack_require__(/*! ./pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Detail.action */ "./build.definitions/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Detail.action")
let pp_actions_capurl_supplier_replay_navtosupplier_replay_edit_action = __webpack_require__(/*! ./pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Edit.action */ "./build.definitions/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Edit.action")
let pp_actions_capurl_supplier_replay_navtosupplier_replay_list_action = __webpack_require__(/*! ./pp/Actions/capurl/supplier_replay/NavTosupplier_replay_List.action */ "./build.definitions/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_List.action")
let pp_actions_capurl_supplier_replay_supplier_replay_createentity_action = __webpack_require__(/*! ./pp/Actions/capurl/supplier_replay/supplier_replay_CreateEntity.action */ "./build.definitions/pp/Actions/capurl/supplier_replay/supplier_replay_CreateEntity.action")
let pp_actions_capurl_supplier_replay_supplier_replay_deleteentity_action = __webpack_require__(/*! ./pp/Actions/capurl/supplier_replay/supplier_replay_DeleteEntity.action */ "./build.definitions/pp/Actions/capurl/supplier_replay/supplier_replay_DeleteEntity.action")
let pp_actions_capurl_supplier_replay_supplier_replay_updateentity_action = __webpack_require__(/*! ./pp/Actions/capurl/supplier_replay/supplier_replay_UpdateEntity.action */ "./build.definitions/pp/Actions/capurl/supplier_replay/supplier_replay_UpdateEntity.action")
let pp_actions_capurl_supplier_table_navtosupplier_table_create_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/NavToSupplier_table_Create.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Create.action")
let pp_actions_capurl_supplier_table_navtosupplier_table_createattachments_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateAttachments_table.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateAttachments_table.action")
let pp_actions_capurl_supplier_table_navtosupplier_table_createquestionnaire_reply_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateQuestionnaire_reply_table.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateQuestionnaire_reply_table.action")
let pp_actions_capurl_supplier_table_navtosupplier_table_createsupplier_bid_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action")
let pp_actions_capurl_supplier_table_navtosupplier_table_detail_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/NavToSupplier_table_Detail.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Detail.action")
let pp_actions_capurl_supplier_table_navtosupplier_table_edit_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/NavToSupplier_table_Edit.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Edit.action")
let pp_actions_capurl_supplier_table_navtosupplier_table_list_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/NavToSupplier_table_List.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_List.action")
let pp_actions_capurl_supplier_table_supplier_table_createattachments_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/Supplier_table_CreateAttachments_table.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_CreateAttachments_table.action")
let pp_actions_capurl_supplier_table_supplier_table_createentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/Supplier_table_CreateEntity.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_CreateEntity.action")
let pp_actions_capurl_supplier_table_supplier_table_createquestionnaire_reply_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.action")
let pp_actions_capurl_supplier_table_supplier_table_createsupplier_bid_table_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/Supplier_table_CreateSupplier_bid_table.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_CreateSupplier_bid_table.action")
let pp_actions_capurl_supplier_table_supplier_table_deleteentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/Supplier_table_DeleteEntity.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_DeleteEntity.action")
let pp_actions_capurl_supplier_table_supplier_table_detailpopover_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/Supplier_table_DetailPopover.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_DetailPopover.action")
let pp_actions_capurl_supplier_table_supplier_table_updateentity_action = __webpack_require__(/*! ./pp/Actions/capurl/Supplier_table/Supplier_table_UpdateEntity.action */ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_UpdateEntity.action")
let pp_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./pp/Actions/CloseModalPage_Cancel.action */ "./build.definitions/pp/Actions/CloseModalPage_Cancel.action")
let pp_actions_closemodalpage_complete_action = __webpack_require__(/*! ./pp/Actions/CloseModalPage_Complete.action */ "./build.definitions/pp/Actions/CloseModalPage_Complete.action")
let pp_actions_closepage_action = __webpack_require__(/*! ./pp/Actions/ClosePage.action */ "./build.definitions/pp/Actions/ClosePage.action")
let pp_actions_createentityfailuremessage_action = __webpack_require__(/*! ./pp/Actions/CreateEntityFailureMessage.action */ "./build.definitions/pp/Actions/CreateEntityFailureMessage.action")
let pp_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./pp/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/pp/Actions/CreateEntitySuccessMessage.action")
let pp_actions_deleteconfirmation_action = __webpack_require__(/*! ./pp/Actions/DeleteConfirmation.action */ "./build.definitions/pp/Actions/DeleteConfirmation.action")
let pp_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./pp/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/pp/Actions/DeleteEntityFailureMessage.action")
let pp_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./pp/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/pp/Actions/DeleteEntitySuccessMessage.action")
let pp_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./pp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/pp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let pp_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./pp/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/pp/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let pp_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./pp/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/pp/Actions/ErrorArchive/NavToErrorArchive_List.action")
let pp_actions_genericbannermessage_action = __webpack_require__(/*! ./pp/Actions/GenericBannerMessage.action */ "./build.definitions/pp/Actions/GenericBannerMessage.action")
let pp_actions_genericmessagebox_action = __webpack_require__(/*! ./pp/Actions/GenericMessageBox.action */ "./build.definitions/pp/Actions/GenericMessageBox.action")
let pp_actions_genericnavigation_action = __webpack_require__(/*! ./pp/Actions/GenericNavigation.action */ "./build.definitions/pp/Actions/GenericNavigation.action")
let pp_actions_generictoastmessage_action = __webpack_require__(/*! ./pp/Actions/GenericToastMessage.action */ "./build.definitions/pp/Actions/GenericToastMessage.action")
let pp_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./pp/Actions/Logging/LogUploadFailure.action */ "./build.definitions/pp/Actions/Logging/LogUploadFailure.action")
let pp_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./pp/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/pp/Actions/Logging/LogUploadSuccessful.action")
let pp_actions_logging_uploadlog_action = __webpack_require__(/*! ./pp/Actions/Logging/UploadLog.action */ "./build.definitions/pp/Actions/Logging/UploadLog.action")
let pp_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./pp/Actions/Logging/UploadLogProgress.action */ "./build.definitions/pp/Actions/Logging/UploadLogProgress.action")
let pp_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./pp/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/pp/Actions/UpdateEntityFailureMessage.action")
let pp_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./pp/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/pp/Actions/UpdateEntitySuccessMessage.action")
let pp_actions_uploadstreamfailuremessage_action = __webpack_require__(/*! ./pp/Actions/UploadStreamFailureMessage.action */ "./build.definitions/pp/Actions/UploadStreamFailureMessage.action")
let pp_actions_uploadstreamsuccessmessage_action = __webpack_require__(/*! ./pp/Actions/UploadStreamSuccessMessage.action */ "./build.definitions/pp/Actions/UploadStreamSuccessMessage.action")
let pp_globals_application_appdefinition_version_global = __webpack_require__(/*! ./pp/Globals/Application/AppDefinition_Version.global */ "./build.definitions/pp/Globals/Application/AppDefinition_Version.global")
let pp_globals_application_applicationname_global = __webpack_require__(/*! ./pp/Globals/Application/ApplicationName.global */ "./build.definitions/pp/Globals/Application/ApplicationName.global")
let pp_globals_application_supportemail_global = __webpack_require__(/*! ./pp/Globals/Application/SupportEmail.global */ "./build.definitions/pp/Globals/Application/SupportEmail.global")
let pp_globals_application_supportphone_global = __webpack_require__(/*! ./pp/Globals/Application/SupportPhone.global */ "./build.definitions/pp/Globals/Application/SupportPhone.global")
let pp_i18n_i18n_properties = __webpack_require__(/*! ./pp/i18n/i18n.properties */ "./build.definitions/pp/i18n/i18n.properties")
let pp_jsconfig_json = __webpack_require__(/*! ./pp/jsconfig.json */ "./build.definitions/pp/jsconfig.json")
let pp_pages_application_about_page = __webpack_require__(/*! ./pp/Pages/Application/About.page */ "./build.definitions/pp/Pages/Application/About.page")
let pp_pages_application_support_page = __webpack_require__(/*! ./pp/Pages/Application/Support.page */ "./build.definitions/pp/Pages/Application/Support.page")
let pp_pages_application_useractivitylog_page = __webpack_require__(/*! ./pp/Pages/Application/UserActivityLog.page */ "./build.definitions/pp/Pages/Application/UserActivityLog.page")
let pp_pages_capurl_attachments_table_attachments_table_create_page = __webpack_require__(/*! ./pp/Pages/capurl_Attachments_table/Attachments_table_Create.page */ "./build.definitions/pp/Pages/capurl_Attachments_table/Attachments_table_Create.page")
let pp_pages_capurl_attachments_table_attachments_table_detail_page = __webpack_require__(/*! ./pp/Pages/capurl_Attachments_table/Attachments_table_Detail.page */ "./build.definitions/pp/Pages/capurl_Attachments_table/Attachments_table_Detail.page")
let pp_pages_capurl_attachments_table_attachments_table_edit_page = __webpack_require__(/*! ./pp/Pages/capurl_Attachments_table/Attachments_table_Edit.page */ "./build.definitions/pp/Pages/capurl_Attachments_table/Attachments_table_Edit.page")
let pp_pages_capurl_attachments_table_attachments_table_list_page = __webpack_require__(/*! ./pp/Pages/capurl_Attachments_table/Attachments_table_List.page */ "./build.definitions/pp/Pages/capurl_Attachments_table/Attachments_table_List.page")
let pp_pages_capurl_bid_reply_bid_reply_create_page = __webpack_require__(/*! ./pp/Pages/capurl_Bid_reply/Bid_reply_Create.page */ "./build.definitions/pp/Pages/capurl_Bid_reply/Bid_reply_Create.page")
let pp_pages_capurl_bid_reply_bid_reply_detail_page = __webpack_require__(/*! ./pp/Pages/capurl_Bid_reply/Bid_reply_Detail.page */ "./build.definitions/pp/Pages/capurl_Bid_reply/Bid_reply_Detail.page")
let pp_pages_capurl_bid_reply_bid_reply_edit_page = __webpack_require__(/*! ./pp/Pages/capurl_Bid_reply/Bid_reply_Edit.page */ "./build.definitions/pp/Pages/capurl_Bid_reply/Bid_reply_Edit.page")
let pp_pages_capurl_bid_reply_bid_reply_list_page = __webpack_require__(/*! ./pp/Pages/capurl_Bid_reply/Bid_reply_List.page */ "./build.definitions/pp/Pages/capurl_Bid_reply/Bid_reply_List.page")
let pp_pages_capurl_dropdown_dropdown_create_page = __webpack_require__(/*! ./pp/Pages/capurl_Dropdown/Dropdown_Create.page */ "./build.definitions/pp/Pages/capurl_Dropdown/Dropdown_Create.page")
let pp_pages_capurl_dropdown_dropdown_detail_page = __webpack_require__(/*! ./pp/Pages/capurl_Dropdown/Dropdown_Detail.page */ "./build.definitions/pp/Pages/capurl_Dropdown/Dropdown_Detail.page")
let pp_pages_capurl_dropdown_dropdown_edit_page = __webpack_require__(/*! ./pp/Pages/capurl_Dropdown/Dropdown_Edit.page */ "./build.definitions/pp/Pages/capurl_Dropdown/Dropdown_Edit.page")
let pp_pages_capurl_dropdown_dropdown_list_page = __webpack_require__(/*! ./pp/Pages/capurl_Dropdown/Dropdown_List.page */ "./build.definitions/pp/Pages/capurl_Dropdown/Dropdown_List.page")
let pp_pages_capurl_header_table_header_table_create_page = __webpack_require__(/*! ./pp/Pages/capurl_Header_table/Header_table_Create.page */ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_Create.page")
let pp_pages_capurl_header_table_header_table_createitem_table_page = __webpack_require__(/*! ./pp/Pages/capurl_Header_table/Header_table_CreateItem_table.page */ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_CreateItem_table.page")
let pp_pages_capurl_header_table_header_table_createquestionnaire_table_page = __webpack_require__(/*! ./pp/Pages/capurl_Header_table/Header_table_CreateQuestionnaire_table.page */ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_CreateQuestionnaire_table.page")
let pp_pages_capurl_header_table_header_table_createsupplier_bid_table_page = __webpack_require__(/*! ./pp/Pages/capurl_Header_table/Header_table_CreateSupplier_bid_table.page */ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_CreateSupplier_bid_table.page")
let pp_pages_capurl_header_table_header_table_createsupplier_table_page = __webpack_require__(/*! ./pp/Pages/capurl_Header_table/Header_table_CreateSupplier_table.page */ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_CreateSupplier_table.page")
let pp_pages_capurl_header_table_header_table_detail_page = __webpack_require__(/*! ./pp/Pages/capurl_Header_table/Header_table_Detail.page */ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_Detail.page")
let pp_pages_capurl_header_table_header_table_edit_page = __webpack_require__(/*! ./pp/Pages/capurl_Header_table/Header_table_Edit.page */ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_Edit.page")
let pp_pages_capurl_header_table_header_table_list_page = __webpack_require__(/*! ./pp/Pages/capurl_Header_table/Header_table_List.page */ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_List.page")
let pp_pages_capurl_item_table_item_table_create_page = __webpack_require__(/*! ./pp/Pages/capurl_Item_table/Item_table_Create.page */ "./build.definitions/pp/Pages/capurl_Item_table/Item_table_Create.page")
let pp_pages_capurl_item_table_item_table_detail_page = __webpack_require__(/*! ./pp/Pages/capurl_Item_table/Item_table_Detail.page */ "./build.definitions/pp/Pages/capurl_Item_table/Item_table_Detail.page")
let pp_pages_capurl_item_table_item_table_edit_page = __webpack_require__(/*! ./pp/Pages/capurl_Item_table/Item_table_Edit.page */ "./build.definitions/pp/Pages/capurl_Item_table/Item_table_Edit.page")
let pp_pages_capurl_item_table_item_table_list_page = __webpack_require__(/*! ./pp/Pages/capurl_Item_table/Item_table_List.page */ "./build.definitions/pp/Pages/capurl_Item_table/Item_table_List.page")
let pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_create_page = __webpack_require__(/*! ./pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Create.page */ "./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Create.page")
let pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_createdropdown_page = __webpack_require__(/*! ./pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_CreateDropdown.page */ "./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_CreateDropdown.page")
let pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_detail_page = __webpack_require__(/*! ./pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Detail.page */ "./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Detail.page")
let pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_edit_page = __webpack_require__(/*! ./pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Edit.page */ "./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Edit.page")
let pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_list_page = __webpack_require__(/*! ./pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_List.page */ "./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_List.page")
let pp_pages_capurl_questionnaire_table_questionnaire_table_create_page = __webpack_require__(/*! ./pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Create.page */ "./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Create.page")
let pp_pages_capurl_questionnaire_table_questionnaire_table_createquestionnaire_reply_table_page = __webpack_require__(/*! ./pp/Pages/capurl_Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.page */ "./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.page")
let pp_pages_capurl_questionnaire_table_questionnaire_table_detail_page = __webpack_require__(/*! ./pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Detail.page */ "./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Detail.page")
let pp_pages_capurl_questionnaire_table_questionnaire_table_edit_page = __webpack_require__(/*! ./pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Edit.page */ "./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Edit.page")
let pp_pages_capurl_questionnaire_table_questionnaire_table_list_page = __webpack_require__(/*! ./pp/Pages/capurl_Questionnaire_table/Questionnaire_table_List.page */ "./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_List.page")
let pp_pages_capurl_supplier_bid_table_supplier_bid_table_create_page = __webpack_require__(/*! ./pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Create.page */ "./build.definitions/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Create.page")
let pp_pages_capurl_supplier_bid_table_supplier_bid_table_detail_page = __webpack_require__(/*! ./pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Detail.page */ "./build.definitions/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Detail.page")
let pp_pages_capurl_supplier_bid_table_supplier_bid_table_edit_page = __webpack_require__(/*! ./pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Edit.page */ "./build.definitions/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Edit.page")
let pp_pages_capurl_supplier_bid_table_supplier_bid_table_list_page = __webpack_require__(/*! ./pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_List.page */ "./build.definitions/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_List.page")
let pp_pages_capurl_supplier_replay_supplier_replay_create_page = __webpack_require__(/*! ./pp/Pages/capurl_supplier_replay/supplier_replay_Create.page */ "./build.definitions/pp/Pages/capurl_supplier_replay/supplier_replay_Create.page")
let pp_pages_capurl_supplier_replay_supplier_replay_detail_page = __webpack_require__(/*! ./pp/Pages/capurl_supplier_replay/supplier_replay_Detail.page */ "./build.definitions/pp/Pages/capurl_supplier_replay/supplier_replay_Detail.page")
let pp_pages_capurl_supplier_replay_supplier_replay_edit_page = __webpack_require__(/*! ./pp/Pages/capurl_supplier_replay/supplier_replay_Edit.page */ "./build.definitions/pp/Pages/capurl_supplier_replay/supplier_replay_Edit.page")
let pp_pages_capurl_supplier_replay_supplier_replay_list_page = __webpack_require__(/*! ./pp/Pages/capurl_supplier_replay/supplier_replay_List.page */ "./build.definitions/pp/Pages/capurl_supplier_replay/supplier_replay_List.page")
let pp_pages_capurl_supplier_table_supplier_table_create_page = __webpack_require__(/*! ./pp/Pages/capurl_Supplier_table/Supplier_table_Create.page */ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_Create.page")
let pp_pages_capurl_supplier_table_supplier_table_createattachments_table_page = __webpack_require__(/*! ./pp/Pages/capurl_Supplier_table/Supplier_table_CreateAttachments_table.page */ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_CreateAttachments_table.page")
let pp_pages_capurl_supplier_table_supplier_table_createquestionnaire_reply_table_page = __webpack_require__(/*! ./pp/Pages/capurl_Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.page */ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.page")
let pp_pages_capurl_supplier_table_supplier_table_createsupplier_bid_table_page = __webpack_require__(/*! ./pp/Pages/capurl_Supplier_table/Supplier_table_CreateSupplier_bid_table.page */ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_CreateSupplier_bid_table.page")
let pp_pages_capurl_supplier_table_supplier_table_detail_page = __webpack_require__(/*! ./pp/Pages/capurl_Supplier_table/Supplier_table_Detail.page */ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_Detail.page")
let pp_pages_capurl_supplier_table_supplier_table_edit_page = __webpack_require__(/*! ./pp/Pages/capurl_Supplier_table/Supplier_table_Edit.page */ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_Edit.page")
let pp_pages_capurl_supplier_table_supplier_table_list_page = __webpack_require__(/*! ./pp/Pages/capurl_Supplier_table/Supplier_table_List.page */ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_List.page")
let pp_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./pp/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/pp/Pages/ErrorArchive/ErrorArchive_Detail.page")
let pp_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./pp/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/pp/Pages/ErrorArchive/ErrorArchive_List.page")
let pp_pages_main_page = __webpack_require__(/*! ./pp/Pages/Main.page */ "./build.definitions/pp/Pages/Main.page")
let pp_rules_application_appupdatefailure_js = __webpack_require__(/*! ./pp/Rules/Application/AppUpdateFailure.js */ "./build.definitions/pp/Rules/Application/AppUpdateFailure.js")
let pp_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./pp/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/pp/Rules/Application/AppUpdateSuccess.js")
let pp_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./pp/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/pp/Rules/Application/ClientIsMultiUserMode.js")
let pp_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./pp/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/pp/Rules/Application/GetClientSupportVersions.js")
let pp_rules_application_getclientversion_js = __webpack_require__(/*! ./pp/Rules/Application/GetClientVersion.js */ "./build.definitions/pp/Rules/Application/GetClientVersion.js")
let pp_rules_application_onwillupdate_js = __webpack_require__(/*! ./pp/Rules/Application/OnWillUpdate.js */ "./build.definitions/pp/Rules/Application/OnWillUpdate.js")
let pp_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./pp/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/pp/Rules/Application/ResetAppSettingsAndLogout.js")
let pp_rules_capurl_attachments_table_attachments_table_createentity_js = __webpack_require__(/*! ./pp/Rules/capurl/Attachments_table/Attachments_table_CreateEntity.js */ "./build.definitions/pp/Rules/capurl/Attachments_table/Attachments_table_CreateEntity.js")
let pp_rules_capurl_attachments_table_attachments_table_deleteconfirmation_js = __webpack_require__(/*! ./pp/Rules/capurl/Attachments_table/Attachments_table_DeleteConfirmation.js */ "./build.definitions/pp/Rules/capurl/Attachments_table/Attachments_table_DeleteConfirmation.js")
let pp_rules_capurl_bid_reply_bid_reply_deleteconfirmation_js = __webpack_require__(/*! ./pp/Rules/capurl/Bid_reply/Bid_reply_DeleteConfirmation.js */ "./build.definitions/pp/Rules/capurl/Bid_reply/Bid_reply_DeleteConfirmation.js")
let pp_rules_capurl_dropdown_dropdown_deleteconfirmation_js = __webpack_require__(/*! ./pp/Rules/capurl/Dropdown/Dropdown_DeleteConfirmation.js */ "./build.definitions/pp/Rules/capurl/Dropdown/Dropdown_DeleteConfirmation.js")
let pp_rules_capurl_header_table_header_table_deleteconfirmation_js = __webpack_require__(/*! ./pp/Rules/capurl/Header_table/Header_table_DeleteConfirmation.js */ "./build.definitions/pp/Rules/capurl/Header_table/Header_table_DeleteConfirmation.js")
let pp_rules_capurl_item_table_item_table_deleteconfirmation_js = __webpack_require__(/*! ./pp/Rules/capurl/Item_table/Item_table_DeleteConfirmation.js */ "./build.definitions/pp/Rules/capurl/Item_table/Item_table_DeleteConfirmation.js")
let pp_rules_capurl_questionnaire_reply_table_questionnaire_reply_table_deleteconfirmation_js = __webpack_require__(/*! ./pp/Rules/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DeleteConfirmation.js */ "./build.definitions/pp/Rules/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DeleteConfirmation.js")
let pp_rules_capurl_questionnaire_table_questionnaire_table_deleteconfirmation_js = __webpack_require__(/*! ./pp/Rules/capurl/Questionnaire_table/Questionnaire_table_DeleteConfirmation.js */ "./build.definitions/pp/Rules/capurl/Questionnaire_table/Questionnaire_table_DeleteConfirmation.js")
let pp_rules_capurl_supplier_bid_table_supplier_bid_table_deleteconfirmation_js = __webpack_require__(/*! ./pp/Rules/capurl/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js */ "./build.definitions/pp/Rules/capurl/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js")
let pp_rules_capurl_supplier_replay_supplier_replay_deleteconfirmation_js = __webpack_require__(/*! ./pp/Rules/capurl/supplier_replay/supplier_replay_DeleteConfirmation.js */ "./build.definitions/pp/Rules/capurl/supplier_replay/supplier_replay_DeleteConfirmation.js")
let pp_rules_capurl_supplier_table_supplier_table_deleteconfirmation_js = __webpack_require__(/*! ./pp/Rules/capurl/Supplier_table/Supplier_table_DeleteConfirmation.js */ "./build.definitions/pp/Rules/capurl/Supplier_table/Supplier_table_DeleteConfirmation.js")
let pp_rules_errorarchive_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./pp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js */ "./build.definitions/pp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js")
let pp_rules_logging_loglevels_js = __webpack_require__(/*! ./pp/Rules/Logging/LogLevels.js */ "./build.definitions/pp/Rules/Logging/LogLevels.js")
let pp_rules_logging_settracecategories_js = __webpack_require__(/*! ./pp/Rules/Logging/SetTraceCategories.js */ "./build.definitions/pp/Rules/Logging/SetTraceCategories.js")
let pp_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./pp/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/pp/Rules/Logging/SetUserLogLevel.js")
let pp_rules_logging_togglelogging_js = __webpack_require__(/*! ./pp/Rules/Logging/ToggleLogging.js */ "./build.definitions/pp/Rules/Logging/ToggleLogging.js")
let pp_rules_logging_tracecategories_js = __webpack_require__(/*! ./pp/Rules/Logging/TraceCategories.js */ "./build.definitions/pp/Rules/Logging/TraceCategories.js")
let pp_rules_logging_userlogsetting_js = __webpack_require__(/*! ./pp/Rules/Logging/UserLogSetting.js */ "./build.definitions/pp/Rules/Logging/UserLogSetting.js")
let pp_rules_service_initialize_js = __webpack_require__(/*! ./pp/Rules/Service/Initialize.js */ "./build.definitions/pp/Rules/Service/Initialize.js")
let pp_services_capurl_service = __webpack_require__(/*! ./pp/Services/capurl.service */ "./build.definitions/pp/Services/capurl.service")
let pp_styles_styles_css = __webpack_require__(/*! ./pp/Styles/Styles.css */ "./build.definitions/pp/Styles/Styles.css")
let pp_styles_styles_json = __webpack_require__(/*! ./pp/Styles/Styles.json */ "./build.definitions/pp/Styles/Styles.json")
let pp_styles_styles_less = __webpack_require__(/*! ./pp/Styles/Styles.less */ "./build.definitions/pp/Styles/Styles.less")
let pp_styles_styles_nss = __webpack_require__(/*! ./pp/Styles/Styles.nss */ "./build.definitions/pp/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	pp_actions_application_appupdate_action : pp_actions_application_appupdate_action,
	pp_actions_application_appupdatefailuremessage_action : pp_actions_application_appupdatefailuremessage_action,
	pp_actions_application_appupdateprogressbanner_action : pp_actions_application_appupdateprogressbanner_action,
	pp_actions_application_appupdatesuccessmessage_action : pp_actions_application_appupdatesuccessmessage_action,
	pp_actions_application_logout_action : pp_actions_application_logout_action,
	pp_actions_application_navtoabout_action : pp_actions_application_navtoabout_action,
	pp_actions_application_navtoactivitylog_action : pp_actions_application_navtoactivitylog_action,
	pp_actions_application_navtosupport_action : pp_actions_application_navtosupport_action,
	pp_actions_application_onwillupdate_action : pp_actions_application_onwillupdate_action,
	pp_actions_application_reset_action : pp_actions_application_reset_action,
	pp_actions_application_resetmessage_action : pp_actions_application_resetmessage_action,
	pp_actions_application_usermenupopover_action : pp_actions_application_usermenupopover_action,
	pp_actions_capurl_attachments_table_attachments_table_createentity_action : pp_actions_capurl_attachments_table_attachments_table_createentity_action,
	pp_actions_capurl_attachments_table_attachments_table_deleteentity_action : pp_actions_capurl_attachments_table_attachments_table_deleteentity_action,
	pp_actions_capurl_attachments_table_attachments_table_detailpopover_action : pp_actions_capurl_attachments_table_attachments_table_detailpopover_action,
	pp_actions_capurl_attachments_table_attachments_table_opendocument_action : pp_actions_capurl_attachments_table_attachments_table_opendocument_action,
	pp_actions_capurl_attachments_table_attachments_table_updateentity_action : pp_actions_capurl_attachments_table_attachments_table_updateentity_action,
	pp_actions_capurl_attachments_table_attachments_table_uploadstream_action : pp_actions_capurl_attachments_table_attachments_table_uploadstream_action,
	pp_actions_capurl_attachments_table_navtoattachments_table_create_action : pp_actions_capurl_attachments_table_navtoattachments_table_create_action,
	pp_actions_capurl_attachments_table_navtoattachments_table_detail_action : pp_actions_capurl_attachments_table_navtoattachments_table_detail_action,
	pp_actions_capurl_attachments_table_navtoattachments_table_edit_action : pp_actions_capurl_attachments_table_navtoattachments_table_edit_action,
	pp_actions_capurl_attachments_table_navtoattachments_table_list_action : pp_actions_capurl_attachments_table_navtoattachments_table_list_action,
	pp_actions_capurl_bid_reply_bid_reply_createentity_action : pp_actions_capurl_bid_reply_bid_reply_createentity_action,
	pp_actions_capurl_bid_reply_bid_reply_deleteentity_action : pp_actions_capurl_bid_reply_bid_reply_deleteentity_action,
	pp_actions_capurl_bid_reply_bid_reply_updateentity_action : pp_actions_capurl_bid_reply_bid_reply_updateentity_action,
	pp_actions_capurl_bid_reply_navtobid_reply_create_action : pp_actions_capurl_bid_reply_navtobid_reply_create_action,
	pp_actions_capurl_bid_reply_navtobid_reply_detail_action : pp_actions_capurl_bid_reply_navtobid_reply_detail_action,
	pp_actions_capurl_bid_reply_navtobid_reply_edit_action : pp_actions_capurl_bid_reply_navtobid_reply_edit_action,
	pp_actions_capurl_bid_reply_navtobid_reply_list_action : pp_actions_capurl_bid_reply_navtobid_reply_list_action,
	pp_actions_capurl_dropdown_dropdown_createentity_action : pp_actions_capurl_dropdown_dropdown_createentity_action,
	pp_actions_capurl_dropdown_dropdown_deleteentity_action : pp_actions_capurl_dropdown_dropdown_deleteentity_action,
	pp_actions_capurl_dropdown_dropdown_updateentity_action : pp_actions_capurl_dropdown_dropdown_updateentity_action,
	pp_actions_capurl_dropdown_navtodropdown_create_action : pp_actions_capurl_dropdown_navtodropdown_create_action,
	pp_actions_capurl_dropdown_navtodropdown_detail_action : pp_actions_capurl_dropdown_navtodropdown_detail_action,
	pp_actions_capurl_dropdown_navtodropdown_edit_action : pp_actions_capurl_dropdown_navtodropdown_edit_action,
	pp_actions_capurl_dropdown_navtodropdown_list_action : pp_actions_capurl_dropdown_navtodropdown_list_action,
	pp_actions_capurl_header_table_header_table_createentity_action : pp_actions_capurl_header_table_header_table_createentity_action,
	pp_actions_capurl_header_table_header_table_createitem_table_action : pp_actions_capurl_header_table_header_table_createitem_table_action,
	pp_actions_capurl_header_table_header_table_createquestionnaire_table_action : pp_actions_capurl_header_table_header_table_createquestionnaire_table_action,
	pp_actions_capurl_header_table_header_table_createsupplier_bid_table_action : pp_actions_capurl_header_table_header_table_createsupplier_bid_table_action,
	pp_actions_capurl_header_table_header_table_createsupplier_table_action : pp_actions_capurl_header_table_header_table_createsupplier_table_action,
	pp_actions_capurl_header_table_header_table_deleteentity_action : pp_actions_capurl_header_table_header_table_deleteentity_action,
	pp_actions_capurl_header_table_header_table_detailpopover_action : pp_actions_capurl_header_table_header_table_detailpopover_action,
	pp_actions_capurl_header_table_header_table_updateentity_action : pp_actions_capurl_header_table_header_table_updateentity_action,
	pp_actions_capurl_header_table_navtoheader_table_create_action : pp_actions_capurl_header_table_navtoheader_table_create_action,
	pp_actions_capurl_header_table_navtoheader_table_createitem_table_action : pp_actions_capurl_header_table_navtoheader_table_createitem_table_action,
	pp_actions_capurl_header_table_navtoheader_table_createquestionnaire_table_action : pp_actions_capurl_header_table_navtoheader_table_createquestionnaire_table_action,
	pp_actions_capurl_header_table_navtoheader_table_createsupplier_bid_table_action : pp_actions_capurl_header_table_navtoheader_table_createsupplier_bid_table_action,
	pp_actions_capurl_header_table_navtoheader_table_createsupplier_table_action : pp_actions_capurl_header_table_navtoheader_table_createsupplier_table_action,
	pp_actions_capurl_header_table_navtoheader_table_detail_action : pp_actions_capurl_header_table_navtoheader_table_detail_action,
	pp_actions_capurl_header_table_navtoheader_table_edit_action : pp_actions_capurl_header_table_navtoheader_table_edit_action,
	pp_actions_capurl_header_table_navtoheader_table_list_action : pp_actions_capurl_header_table_navtoheader_table_list_action,
	pp_actions_capurl_item_table_item_table_createentity_action : pp_actions_capurl_item_table_item_table_createentity_action,
	pp_actions_capurl_item_table_item_table_deleteentity_action : pp_actions_capurl_item_table_item_table_deleteentity_action,
	pp_actions_capurl_item_table_item_table_updateentity_action : pp_actions_capurl_item_table_item_table_updateentity_action,
	pp_actions_capurl_item_table_navtoitem_table_create_action : pp_actions_capurl_item_table_navtoitem_table_create_action,
	pp_actions_capurl_item_table_navtoitem_table_detail_action : pp_actions_capurl_item_table_navtoitem_table_detail_action,
	pp_actions_capurl_item_table_navtoitem_table_edit_action : pp_actions_capurl_item_table_navtoitem_table_edit_action,
	pp_actions_capurl_item_table_navtoitem_table_list_action : pp_actions_capurl_item_table_navtoitem_table_list_action,
	pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_create_action : pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_create_action,
	pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_createdropdown_action : pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_createdropdown_action,
	pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_detail_action : pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_detail_action,
	pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_edit_action : pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_edit_action,
	pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_list_action : pp_actions_capurl_questionnaire_reply_table_navtoquestionnaire_reply_table_list_action,
	pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_createdropdown_action : pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_createdropdown_action,
	pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_createentity_action : pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_createentity_action,
	pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_deleteentity_action : pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_deleteentity_action,
	pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_detailpopover_action : pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_detailpopover_action,
	pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_updateentity_action : pp_actions_capurl_questionnaire_reply_table_questionnaire_reply_table_updateentity_action,
	pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_create_action : pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_create_action,
	pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_createquestionnaire_reply_table_action : pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_createquestionnaire_reply_table_action,
	pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_detail_action : pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_detail_action,
	pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_edit_action : pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_edit_action,
	pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_list_action : pp_actions_capurl_questionnaire_table_navtoquestionnaire_table_list_action,
	pp_actions_capurl_questionnaire_table_questionnaire_table_createentity_action : pp_actions_capurl_questionnaire_table_questionnaire_table_createentity_action,
	pp_actions_capurl_questionnaire_table_questionnaire_table_createquestionnaire_reply_table_action : pp_actions_capurl_questionnaire_table_questionnaire_table_createquestionnaire_reply_table_action,
	pp_actions_capurl_questionnaire_table_questionnaire_table_deleteentity_action : pp_actions_capurl_questionnaire_table_questionnaire_table_deleteentity_action,
	pp_actions_capurl_questionnaire_table_questionnaire_table_detailpopover_action : pp_actions_capurl_questionnaire_table_questionnaire_table_detailpopover_action,
	pp_actions_capurl_questionnaire_table_questionnaire_table_updateentity_action : pp_actions_capurl_questionnaire_table_questionnaire_table_updateentity_action,
	pp_actions_capurl_service_closeoffline_action : pp_actions_capurl_service_closeoffline_action,
	pp_actions_capurl_service_closeofflinefailuremessage_action : pp_actions_capurl_service_closeofflinefailuremessage_action,
	pp_actions_capurl_service_closeofflinesuccessmessage_action : pp_actions_capurl_service_closeofflinesuccessmessage_action,
	pp_actions_capurl_service_downloadoffline_action : pp_actions_capurl_service_downloadoffline_action,
	pp_actions_capurl_service_downloadstartedmessage_action : pp_actions_capurl_service_downloadstartedmessage_action,
	pp_actions_capurl_service_initializeoffline_action : pp_actions_capurl_service_initializeoffline_action,
	pp_actions_capurl_service_initializeofflinefailuremessage_action : pp_actions_capurl_service_initializeofflinefailuremessage_action,
	pp_actions_capurl_service_syncfailuremessage_action : pp_actions_capurl_service_syncfailuremessage_action,
	pp_actions_capurl_service_syncstartedmessage_action : pp_actions_capurl_service_syncstartedmessage_action,
	pp_actions_capurl_service_uploadoffline_action : pp_actions_capurl_service_uploadoffline_action,
	pp_actions_capurl_supplier_bid_table_navtosupplier_bid_table_create_action : pp_actions_capurl_supplier_bid_table_navtosupplier_bid_table_create_action,
	pp_actions_capurl_supplier_bid_table_navtosupplier_bid_table_detail_action : pp_actions_capurl_supplier_bid_table_navtosupplier_bid_table_detail_action,
	pp_actions_capurl_supplier_bid_table_navtosupplier_bid_table_edit_action : pp_actions_capurl_supplier_bid_table_navtosupplier_bid_table_edit_action,
	pp_actions_capurl_supplier_bid_table_navtosupplier_bid_table_list_action : pp_actions_capurl_supplier_bid_table_navtosupplier_bid_table_list_action,
	pp_actions_capurl_supplier_bid_table_supplier_bid_table_createentity_action : pp_actions_capurl_supplier_bid_table_supplier_bid_table_createentity_action,
	pp_actions_capurl_supplier_bid_table_supplier_bid_table_deleteentity_action : pp_actions_capurl_supplier_bid_table_supplier_bid_table_deleteentity_action,
	pp_actions_capurl_supplier_bid_table_supplier_bid_table_updateentity_action : pp_actions_capurl_supplier_bid_table_supplier_bid_table_updateentity_action,
	pp_actions_capurl_supplier_replay_navtosupplier_replay_create_action : pp_actions_capurl_supplier_replay_navtosupplier_replay_create_action,
	pp_actions_capurl_supplier_replay_navtosupplier_replay_detail_action : pp_actions_capurl_supplier_replay_navtosupplier_replay_detail_action,
	pp_actions_capurl_supplier_replay_navtosupplier_replay_edit_action : pp_actions_capurl_supplier_replay_navtosupplier_replay_edit_action,
	pp_actions_capurl_supplier_replay_navtosupplier_replay_list_action : pp_actions_capurl_supplier_replay_navtosupplier_replay_list_action,
	pp_actions_capurl_supplier_replay_supplier_replay_createentity_action : pp_actions_capurl_supplier_replay_supplier_replay_createentity_action,
	pp_actions_capurl_supplier_replay_supplier_replay_deleteentity_action : pp_actions_capurl_supplier_replay_supplier_replay_deleteentity_action,
	pp_actions_capurl_supplier_replay_supplier_replay_updateentity_action : pp_actions_capurl_supplier_replay_supplier_replay_updateentity_action,
	pp_actions_capurl_supplier_table_navtosupplier_table_create_action : pp_actions_capurl_supplier_table_navtosupplier_table_create_action,
	pp_actions_capurl_supplier_table_navtosupplier_table_createattachments_table_action : pp_actions_capurl_supplier_table_navtosupplier_table_createattachments_table_action,
	pp_actions_capurl_supplier_table_navtosupplier_table_createquestionnaire_reply_table_action : pp_actions_capurl_supplier_table_navtosupplier_table_createquestionnaire_reply_table_action,
	pp_actions_capurl_supplier_table_navtosupplier_table_createsupplier_bid_table_action : pp_actions_capurl_supplier_table_navtosupplier_table_createsupplier_bid_table_action,
	pp_actions_capurl_supplier_table_navtosupplier_table_detail_action : pp_actions_capurl_supplier_table_navtosupplier_table_detail_action,
	pp_actions_capurl_supplier_table_navtosupplier_table_edit_action : pp_actions_capurl_supplier_table_navtosupplier_table_edit_action,
	pp_actions_capurl_supplier_table_navtosupplier_table_list_action : pp_actions_capurl_supplier_table_navtosupplier_table_list_action,
	pp_actions_capurl_supplier_table_supplier_table_createattachments_table_action : pp_actions_capurl_supplier_table_supplier_table_createattachments_table_action,
	pp_actions_capurl_supplier_table_supplier_table_createentity_action : pp_actions_capurl_supplier_table_supplier_table_createentity_action,
	pp_actions_capurl_supplier_table_supplier_table_createquestionnaire_reply_table_action : pp_actions_capurl_supplier_table_supplier_table_createquestionnaire_reply_table_action,
	pp_actions_capurl_supplier_table_supplier_table_createsupplier_bid_table_action : pp_actions_capurl_supplier_table_supplier_table_createsupplier_bid_table_action,
	pp_actions_capurl_supplier_table_supplier_table_deleteentity_action : pp_actions_capurl_supplier_table_supplier_table_deleteentity_action,
	pp_actions_capurl_supplier_table_supplier_table_detailpopover_action : pp_actions_capurl_supplier_table_supplier_table_detailpopover_action,
	pp_actions_capurl_supplier_table_supplier_table_updateentity_action : pp_actions_capurl_supplier_table_supplier_table_updateentity_action,
	pp_actions_closemodalpage_cancel_action : pp_actions_closemodalpage_cancel_action,
	pp_actions_closemodalpage_complete_action : pp_actions_closemodalpage_complete_action,
	pp_actions_closepage_action : pp_actions_closepage_action,
	pp_actions_createentityfailuremessage_action : pp_actions_createentityfailuremessage_action,
	pp_actions_createentitysuccessmessage_action : pp_actions_createentitysuccessmessage_action,
	pp_actions_deleteconfirmation_action : pp_actions_deleteconfirmation_action,
	pp_actions_deleteentityfailuremessage_action : pp_actions_deleteentityfailuremessage_action,
	pp_actions_deleteentitysuccessmessage_action : pp_actions_deleteentitysuccessmessage_action,
	pp_actions_errorarchive_errorarchive_syncfailure_action : pp_actions_errorarchive_errorarchive_syncfailure_action,
	pp_actions_errorarchive_navtoerrorarchive_detail_action : pp_actions_errorarchive_navtoerrorarchive_detail_action,
	pp_actions_errorarchive_navtoerrorarchive_list_action : pp_actions_errorarchive_navtoerrorarchive_list_action,
	pp_actions_genericbannermessage_action : pp_actions_genericbannermessage_action,
	pp_actions_genericmessagebox_action : pp_actions_genericmessagebox_action,
	pp_actions_genericnavigation_action : pp_actions_genericnavigation_action,
	pp_actions_generictoastmessage_action : pp_actions_generictoastmessage_action,
	pp_actions_logging_loguploadfailure_action : pp_actions_logging_loguploadfailure_action,
	pp_actions_logging_loguploadsuccessful_action : pp_actions_logging_loguploadsuccessful_action,
	pp_actions_logging_uploadlog_action : pp_actions_logging_uploadlog_action,
	pp_actions_logging_uploadlogprogress_action : pp_actions_logging_uploadlogprogress_action,
	pp_actions_updateentityfailuremessage_action : pp_actions_updateentityfailuremessage_action,
	pp_actions_updateentitysuccessmessage_action : pp_actions_updateentitysuccessmessage_action,
	pp_actions_uploadstreamfailuremessage_action : pp_actions_uploadstreamfailuremessage_action,
	pp_actions_uploadstreamsuccessmessage_action : pp_actions_uploadstreamsuccessmessage_action,
	pp_globals_application_appdefinition_version_global : pp_globals_application_appdefinition_version_global,
	pp_globals_application_applicationname_global : pp_globals_application_applicationname_global,
	pp_globals_application_supportemail_global : pp_globals_application_supportemail_global,
	pp_globals_application_supportphone_global : pp_globals_application_supportphone_global,
	pp_i18n_i18n_properties : pp_i18n_i18n_properties,
	pp_jsconfig_json : pp_jsconfig_json,
	pp_pages_application_about_page : pp_pages_application_about_page,
	pp_pages_application_support_page : pp_pages_application_support_page,
	pp_pages_application_useractivitylog_page : pp_pages_application_useractivitylog_page,
	pp_pages_capurl_attachments_table_attachments_table_create_page : pp_pages_capurl_attachments_table_attachments_table_create_page,
	pp_pages_capurl_attachments_table_attachments_table_detail_page : pp_pages_capurl_attachments_table_attachments_table_detail_page,
	pp_pages_capurl_attachments_table_attachments_table_edit_page : pp_pages_capurl_attachments_table_attachments_table_edit_page,
	pp_pages_capurl_attachments_table_attachments_table_list_page : pp_pages_capurl_attachments_table_attachments_table_list_page,
	pp_pages_capurl_bid_reply_bid_reply_create_page : pp_pages_capurl_bid_reply_bid_reply_create_page,
	pp_pages_capurl_bid_reply_bid_reply_detail_page : pp_pages_capurl_bid_reply_bid_reply_detail_page,
	pp_pages_capurl_bid_reply_bid_reply_edit_page : pp_pages_capurl_bid_reply_bid_reply_edit_page,
	pp_pages_capurl_bid_reply_bid_reply_list_page : pp_pages_capurl_bid_reply_bid_reply_list_page,
	pp_pages_capurl_dropdown_dropdown_create_page : pp_pages_capurl_dropdown_dropdown_create_page,
	pp_pages_capurl_dropdown_dropdown_detail_page : pp_pages_capurl_dropdown_dropdown_detail_page,
	pp_pages_capurl_dropdown_dropdown_edit_page : pp_pages_capurl_dropdown_dropdown_edit_page,
	pp_pages_capurl_dropdown_dropdown_list_page : pp_pages_capurl_dropdown_dropdown_list_page,
	pp_pages_capurl_header_table_header_table_create_page : pp_pages_capurl_header_table_header_table_create_page,
	pp_pages_capurl_header_table_header_table_createitem_table_page : pp_pages_capurl_header_table_header_table_createitem_table_page,
	pp_pages_capurl_header_table_header_table_createquestionnaire_table_page : pp_pages_capurl_header_table_header_table_createquestionnaire_table_page,
	pp_pages_capurl_header_table_header_table_createsupplier_bid_table_page : pp_pages_capurl_header_table_header_table_createsupplier_bid_table_page,
	pp_pages_capurl_header_table_header_table_createsupplier_table_page : pp_pages_capurl_header_table_header_table_createsupplier_table_page,
	pp_pages_capurl_header_table_header_table_detail_page : pp_pages_capurl_header_table_header_table_detail_page,
	pp_pages_capurl_header_table_header_table_edit_page : pp_pages_capurl_header_table_header_table_edit_page,
	pp_pages_capurl_header_table_header_table_list_page : pp_pages_capurl_header_table_header_table_list_page,
	pp_pages_capurl_item_table_item_table_create_page : pp_pages_capurl_item_table_item_table_create_page,
	pp_pages_capurl_item_table_item_table_detail_page : pp_pages_capurl_item_table_item_table_detail_page,
	pp_pages_capurl_item_table_item_table_edit_page : pp_pages_capurl_item_table_item_table_edit_page,
	pp_pages_capurl_item_table_item_table_list_page : pp_pages_capurl_item_table_item_table_list_page,
	pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_create_page : pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_create_page,
	pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_createdropdown_page : pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_createdropdown_page,
	pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_detail_page : pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_detail_page,
	pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_edit_page : pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_edit_page,
	pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_list_page : pp_pages_capurl_questionnaire_reply_table_questionnaire_reply_table_list_page,
	pp_pages_capurl_questionnaire_table_questionnaire_table_create_page : pp_pages_capurl_questionnaire_table_questionnaire_table_create_page,
	pp_pages_capurl_questionnaire_table_questionnaire_table_createquestionnaire_reply_table_page : pp_pages_capurl_questionnaire_table_questionnaire_table_createquestionnaire_reply_table_page,
	pp_pages_capurl_questionnaire_table_questionnaire_table_detail_page : pp_pages_capurl_questionnaire_table_questionnaire_table_detail_page,
	pp_pages_capurl_questionnaire_table_questionnaire_table_edit_page : pp_pages_capurl_questionnaire_table_questionnaire_table_edit_page,
	pp_pages_capurl_questionnaire_table_questionnaire_table_list_page : pp_pages_capurl_questionnaire_table_questionnaire_table_list_page,
	pp_pages_capurl_supplier_bid_table_supplier_bid_table_create_page : pp_pages_capurl_supplier_bid_table_supplier_bid_table_create_page,
	pp_pages_capurl_supplier_bid_table_supplier_bid_table_detail_page : pp_pages_capurl_supplier_bid_table_supplier_bid_table_detail_page,
	pp_pages_capurl_supplier_bid_table_supplier_bid_table_edit_page : pp_pages_capurl_supplier_bid_table_supplier_bid_table_edit_page,
	pp_pages_capurl_supplier_bid_table_supplier_bid_table_list_page : pp_pages_capurl_supplier_bid_table_supplier_bid_table_list_page,
	pp_pages_capurl_supplier_replay_supplier_replay_create_page : pp_pages_capurl_supplier_replay_supplier_replay_create_page,
	pp_pages_capurl_supplier_replay_supplier_replay_detail_page : pp_pages_capurl_supplier_replay_supplier_replay_detail_page,
	pp_pages_capurl_supplier_replay_supplier_replay_edit_page : pp_pages_capurl_supplier_replay_supplier_replay_edit_page,
	pp_pages_capurl_supplier_replay_supplier_replay_list_page : pp_pages_capurl_supplier_replay_supplier_replay_list_page,
	pp_pages_capurl_supplier_table_supplier_table_create_page : pp_pages_capurl_supplier_table_supplier_table_create_page,
	pp_pages_capurl_supplier_table_supplier_table_createattachments_table_page : pp_pages_capurl_supplier_table_supplier_table_createattachments_table_page,
	pp_pages_capurl_supplier_table_supplier_table_createquestionnaire_reply_table_page : pp_pages_capurl_supplier_table_supplier_table_createquestionnaire_reply_table_page,
	pp_pages_capurl_supplier_table_supplier_table_createsupplier_bid_table_page : pp_pages_capurl_supplier_table_supplier_table_createsupplier_bid_table_page,
	pp_pages_capurl_supplier_table_supplier_table_detail_page : pp_pages_capurl_supplier_table_supplier_table_detail_page,
	pp_pages_capurl_supplier_table_supplier_table_edit_page : pp_pages_capurl_supplier_table_supplier_table_edit_page,
	pp_pages_capurl_supplier_table_supplier_table_list_page : pp_pages_capurl_supplier_table_supplier_table_list_page,
	pp_pages_errorarchive_errorarchive_detail_page : pp_pages_errorarchive_errorarchive_detail_page,
	pp_pages_errorarchive_errorarchive_list_page : pp_pages_errorarchive_errorarchive_list_page,
	pp_pages_main_page : pp_pages_main_page,
	pp_rules_application_appupdatefailure_js : pp_rules_application_appupdatefailure_js,
	pp_rules_application_appupdatesuccess_js : pp_rules_application_appupdatesuccess_js,
	pp_rules_application_clientismultiusermode_js : pp_rules_application_clientismultiusermode_js,
	pp_rules_application_getclientsupportversions_js : pp_rules_application_getclientsupportversions_js,
	pp_rules_application_getclientversion_js : pp_rules_application_getclientversion_js,
	pp_rules_application_onwillupdate_js : pp_rules_application_onwillupdate_js,
	pp_rules_application_resetappsettingsandlogout_js : pp_rules_application_resetappsettingsandlogout_js,
	pp_rules_capurl_attachments_table_attachments_table_createentity_js : pp_rules_capurl_attachments_table_attachments_table_createentity_js,
	pp_rules_capurl_attachments_table_attachments_table_deleteconfirmation_js : pp_rules_capurl_attachments_table_attachments_table_deleteconfirmation_js,
	pp_rules_capurl_bid_reply_bid_reply_deleteconfirmation_js : pp_rules_capurl_bid_reply_bid_reply_deleteconfirmation_js,
	pp_rules_capurl_dropdown_dropdown_deleteconfirmation_js : pp_rules_capurl_dropdown_dropdown_deleteconfirmation_js,
	pp_rules_capurl_header_table_header_table_deleteconfirmation_js : pp_rules_capurl_header_table_header_table_deleteconfirmation_js,
	pp_rules_capurl_item_table_item_table_deleteconfirmation_js : pp_rules_capurl_item_table_item_table_deleteconfirmation_js,
	pp_rules_capurl_questionnaire_reply_table_questionnaire_reply_table_deleteconfirmation_js : pp_rules_capurl_questionnaire_reply_table_questionnaire_reply_table_deleteconfirmation_js,
	pp_rules_capurl_questionnaire_table_questionnaire_table_deleteconfirmation_js : pp_rules_capurl_questionnaire_table_questionnaire_table_deleteconfirmation_js,
	pp_rules_capurl_supplier_bid_table_supplier_bid_table_deleteconfirmation_js : pp_rules_capurl_supplier_bid_table_supplier_bid_table_deleteconfirmation_js,
	pp_rules_capurl_supplier_replay_supplier_replay_deleteconfirmation_js : pp_rules_capurl_supplier_replay_supplier_replay_deleteconfirmation_js,
	pp_rules_capurl_supplier_table_supplier_table_deleteconfirmation_js : pp_rules_capurl_supplier_table_supplier_table_deleteconfirmation_js,
	pp_rules_errorarchive_errorarchive_checkforsyncerror_js : pp_rules_errorarchive_errorarchive_checkforsyncerror_js,
	pp_rules_logging_loglevels_js : pp_rules_logging_loglevels_js,
	pp_rules_logging_settracecategories_js : pp_rules_logging_settracecategories_js,
	pp_rules_logging_setuserloglevel_js : pp_rules_logging_setuserloglevel_js,
	pp_rules_logging_togglelogging_js : pp_rules_logging_togglelogging_js,
	pp_rules_logging_tracecategories_js : pp_rules_logging_tracecategories_js,
	pp_rules_logging_userlogsetting_js : pp_rules_logging_userlogsetting_js,
	pp_rules_service_initialize_js : pp_rules_service_initialize_js,
	pp_services_capurl_service : pp_services_capurl_service,
	pp_styles_styles_css : pp_styles_styles_css,
	pp_styles_styles_json : pp_styles_styles_json,
	pp_styles_styles_less : pp_styles_styles_less,
	pp_styles_styles_nss : pp_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Application/AppUpdateFailure.js":
/*!********************************************************************!*\
  !*** ./build.definitions/pp/Rules/Application/AppUpdateFailure.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/pp/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Application/AppUpdateSuccess.js":
/*!********************************************************************!*\
  !*** ./build.definitions/pp/Rules/Application/AppUpdateSuccess.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/pp/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/pp/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Application/ClientIsMultiUserMode.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/pp/Rules/Application/ClientIsMultiUserMode.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Application/GetClientSupportVersions.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/pp/Rules/Application/GetClientSupportVersions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Application/GetClientVersion.js":
/*!********************************************************************!*\
  !*** ./build.definitions/pp/Rules/Application/GetClientVersion.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Application/OnWillUpdate.js":
/*!****************************************************************!*\
  !*** ./build.definitions/pp/Rules/Application/OnWillUpdate.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/pp/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/pp/Actions/capurl/Service/CloseOffline.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Application/ResetAppSettingsAndLogout.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/pp/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/pp/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/pp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/pp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
    context.count('/pp/Services/capurl.service', 'ErrorArchive', '').then(errorCount => {
        if (errorCount > 0) {
            return context.getPageProxy().executeAction('/pp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function() {
                return Promise.reject(false);
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Logging/LogLevels.js":
/*!*********************************************************!*\
  !*** ./build.definitions/pp/Rules/Logging/LogLevels.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Logging/SetTraceCategories.js":
/*!******************************************************************!*\
  !*** ./build.definitions/pp/Rules/Logging/SetTraceCategories.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Logging/SetUserLogLevel.js":
/*!***************************************************************!*\
  !*** ./build.definitions/pp/Rules/Logging/SetUserLogLevel.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Logging/ToggleLogging.js":
/*!*************************************************************!*\
  !*** ./build.definitions/pp/Rules/Logging/ToggleLogging.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Logging/TraceCategories.js":
/*!***************************************************************!*\
  !*** ./build.definitions/pp/Rules/Logging/TraceCategories.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Logging/UserLogSetting.js":
/*!**************************************************************!*\
  !*** ./build.definitions/pp/Rules/Logging/UserLogSetting.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/pp/Rules/Service/Initialize.js":
/*!**********************************************************!*\
  !*** ./build.definitions/pp/Rules/Service/Initialize.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _capurl = context.executeAction('/pp/Actions/capurl/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_capurl]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/pp/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/capurl/Attachments_table/Attachments_table_CreateEntity.js":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/pp/Rules/capurl/Attachments_table/Attachments_table_CreateEntity.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
    return clientAPI.executeAction({
        'Name': '/pp/Actions/capurl/Attachments_table/Attachments_table_CreateEntity.action',
        'Properties': {
            'OnSuccess': ''
        }
    }).then((result) => {
        let newEntity = JSON.parse(result.data);
        return clientAPI.executeAction({
            'Name': '/pp/Actions/capurl/Attachments_table/Attachments_table_UploadStream.action',
            'Properties': {
                'Target': {
                    'ReadLink': newEntity['@odata.readLink']
                }
            }
        });
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/capurl/Attachments_table/Attachments_table_DeleteConfirmation.js":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/pp/Rules/capurl/Attachments_table/Attachments_table_DeleteConfirmation.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/pp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/pp/Actions/capurl/Attachments_table/Attachments_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/capurl/Bid_reply/Bid_reply_DeleteConfirmation.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/pp/Rules/capurl/Bid_reply/Bid_reply_DeleteConfirmation.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/pp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/pp/Actions/capurl/Bid_reply/Bid_reply_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/capurl/Dropdown/Dropdown_DeleteConfirmation.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/pp/Rules/capurl/Dropdown/Dropdown_DeleteConfirmation.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/pp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/pp/Actions/capurl/Dropdown/Dropdown_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/capurl/Header_table/Header_table_DeleteConfirmation.js":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/pp/Rules/capurl/Header_table/Header_table_DeleteConfirmation.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/pp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/pp/Actions/capurl/Header_table/Header_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/capurl/Item_table/Item_table_DeleteConfirmation.js":
/*!***************************************************************************************!*\
  !*** ./build.definitions/pp/Rules/capurl/Item_table/Item_table_DeleteConfirmation.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/pp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/pp/Actions/capurl/Item_table/Item_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DeleteConfirmation.js":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/pp/Rules/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DeleteConfirmation.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/pp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/capurl/Questionnaire_table/Questionnaire_table_DeleteConfirmation.js":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/pp/Rules/capurl/Questionnaire_table/Questionnaire_table_DeleteConfirmation.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/pp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/capurl/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/pp/Rules/capurl/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/pp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/capurl/Supplier_table/Supplier_table_DeleteConfirmation.js":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/pp/Rules/capurl/Supplier_table/Supplier_table_DeleteConfirmation.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/pp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/pp/Actions/capurl/Supplier_table/Supplier_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Rules/capurl/supplier_replay/supplier_replay_DeleteConfirmation.js":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/pp/Rules/capurl/supplier_replay/supplier_replay_DeleteConfirmation.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/pp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/pp/Actions/capurl/supplier_replay/supplier_replay_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/pp/Styles/Styles.css":
/*!************************************************!*\
  !*** ./build.definitions/pp/Styles/Styles.css ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/pp/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/pp/Styles/Styles.less":
/*!*************************************************!*\
  !*** ./build.definitions/pp/Styles/Styles.less ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/pp/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/pp/Styles/Styles.nss":
/*!************************************************!*\
  !*** ./build.definitions/pp/Styles/Styles.nss ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/pp/Pages/Application/About.page":
/*!***********************************************************!*\
  !*** ./build.definitions/pp/Pages/Application/About.page ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/pp/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/pp/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/pp/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/pp/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/pp/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/pp/Pages/Application/Support.page":
/*!*************************************************************!*\
  !*** ./build.definitions/pp/Pages/Application/Support.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/pp/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/pp/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/pp/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/pp/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/pp/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/pp/Pages/Application/UserActivityLog.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/pp/Pages/Application/UserActivityLog.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/pp/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/pp/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/pp/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/pp/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/pp/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/pp/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/pp/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/pp/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/pp/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/pp/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","Caption":"Details","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/ErrorArchive/ErrorArchive_List.page":
/*!************************************************************************!*\
  !*** ./build.definitions/pp/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/pp/Services/capurl.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/pp/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","Caption":"Error List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/Main.page":
/*!**********************************************!*\
  !*** ./build.definitions/pp/Pages/Main.page ***!
  \**********************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader_capurl","AccessoryType":"None","UseTopPadding":true,"Caption":"capurl"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Buttons":[{"OnPress":"/pp/Actions/capurl/Attachments_table/NavToAttachments_table_List.action","Alignment":"Center","Title":"Attachments_table","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/pp/Actions/capurl/Bid_reply/NavToBid_reply_List.action","Alignment":"Center","Title":"Bid_reply","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/pp/Actions/capurl/Dropdown/NavToDropdown_List.action","Alignment":"Center","Title":"Dropdown","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/pp/Actions/capurl/Header_table/NavToHeader_table_List.action","Alignment":"Center","Title":"Header_table","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/pp/Actions/capurl/Item_table/NavToItem_table_List.action","Alignment":"Center","Title":"Item_table","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_List.action","Alignment":"Center","Title":"Questionnaire_reply_table","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_List.action","Alignment":"Center","Title":"Questionnaire_table","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_List.action","Alignment":"Center","Title":"Supplier_bid_table","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_List.action","Alignment":"Center","Title":"supplier_replay","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/pp/Actions/capurl/Supplier_table/NavToSupplier_table_List.action","Alignment":"Center","Title":"Supplier_table","ButtonType":"Text","Semantic":"Tint"}],"_Name":"SectionButtonTable_capurl","_Type":"Section.Type.ButtonTable"}]}],"_Name":"Main","_Type":"Page","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/pp/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Attachments_table/Attachments_table_Create.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Attachments_table/Attachments_table_Create.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Rules/capurl/Attachments_table/Attachments_table_CreateEntity.js","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Attachments_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker"},{"AttachmentTitle":"content","AttachmentAddTitle":"Browse","AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"],"AllowedFileTypes":["jpg","png","gif"],"_Name":"content","_Type":"Control.Type.FormCell.Attachment"},{"Caption":"mediaType","_Name":"mediaType","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"size","KeyboardType":"Number","_Name":"size","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"url","_Name":"url","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Attachments_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Attachments_table/Attachments_table_Detail.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Attachments_table/Attachments_table_Detail.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Attachments_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Attachments_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/pp/Actions/capurl/Attachments_table/Attachments_table_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"/pp/Services/capurl.service/{@odata.readLink}/content","HeadlineText":"{fileName}","Subhead":"{doc_id}","BodyText":"","Footnote":"{mediaType}","Description":"{invitationId}","StatusText":"{size}","StatusImage":"","SubstatusImage":"","SubstatusText":"{url}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"invitationId","Value":"{invitationId}"},{"KeyName":"mediaType","Value":"{mediaType}"},{"KeyName":"fileName","Value":"{fileName}"},{"KeyName":"size","Value":"{size}"},{"KeyName":"url","Value":"{url}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Attachments_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Attachments_table/Attachments_table_Edit.page":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Attachments_table/Attachments_table_Edit.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Attachments_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Attachments_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/pp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/pp/Actions/capurl/Attachments_table/Attachments_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","Value":"{doc_id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"Value":"{invitationId}","_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"mediaType","_Name":"mediaType","Value":"{mediaType}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","Value":"{fileName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"size","_Name":"size","Value":"{size}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"url","_Name":"url","Value":"{url}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Attachments_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Attachments_table/Attachments_table_List.page":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Attachments_table/Attachments_table_List.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Attachments_table","ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":"/pp/Services/capurl.service/{@odata.readLink}/content"}],"ImageIsCircular":false},"Icons":[],"OnPress":"/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Detail.action","StatusImage":"","Title":"{fileName}","Footnote":"{mediaType}","PreserveIconStackSpacing":false,"StatusText":"{size}","Subhead":"{doc_id}","SubstatusText":"{url}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Attachments_table","Service":"/pp/Services/capurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Attachments_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Bid_reply/Bid_reply_Create.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Bid_reply/Bid_reply_Create.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Bid_reply/Bid_reply_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Bid_reply Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone","_Name":"phone","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Bid_reply_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Bid_reply/Bid_reply_Detail.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Bid_reply/Bid_reply_Detail.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Bid_reply Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Bid_reply","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Bid_reply/NavToBid_reply_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/pp/Rules/capurl/Bid_reply/Bid_reply_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{item_name}","Subhead":"{doc_id}","BodyText":"","Footnote":"","Description":"{phone}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"item_name","Value":"{item_name}"},{"KeyName":"phone","Value":"{phone}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Bid_reply_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Bid_reply/Bid_reply_Edit.page":
/*!*************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Bid_reply/Bid_reply_Edit.page ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Bid_reply Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Bid_reply","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/pp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/pp/Actions/capurl/Bid_reply/Bid_reply_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","Value":"{doc_id}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","Value":"{item_name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone","_Name":"phone","Value":"{phone}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Bid_reply_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Bid_reply/Bid_reply_List.page":
/*!*************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Bid_reply/Bid_reply_List.page ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Bid_reply","ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Bid_reply/NavToBid_reply_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{phone}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/pp/Actions/capurl/Bid_reply/NavToBid_reply_Detail.action","StatusImage":"","Title":"{item_name}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{doc_id}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Bid_reply","Service":"/pp/Services/capurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Bid_reply_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Dropdown/Dropdown_Create.page":
/*!*************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Dropdown/Dropdown_Create.page ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Dropdown/Dropdown_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Dropdown Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"questionnaire_id","_Name":"questionnaire_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"dropdown_value","_Name":"dropdown_value","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Dropdown_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Dropdown/Dropdown_Detail.page":
/*!*************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Dropdown/Dropdown_Detail.page ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Dropdown Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Dropdown","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Dropdown/NavToDropdown_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/pp/Rules/capurl/Dropdown/Dropdown_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{id}","Subhead":"{questionnaire_id}","BodyText":"","Footnote":"","Description":"{dropdown_value}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"questionnaire_id","Value":"{questionnaire_id}"},{"KeyName":"dropdown_value","Value":"{dropdown_value}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Dropdown_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Dropdown/Dropdown_Edit.page":
/*!***********************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Dropdown/Dropdown_Edit.page ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Dropdown Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Dropdown","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/pp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/pp/Actions/capurl/Dropdown/Dropdown_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"questionnaire_id","_Name":"questionnaire_id","Value":"{questionnaire_id}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"dropdown_value","_Name":"dropdown_value","Value":"{dropdown_value}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Dropdown_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Dropdown/Dropdown_List.page":
/*!***********************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Dropdown/Dropdown_List.page ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Dropdown","ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Dropdown/NavToDropdown_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{dropdown_value}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/pp/Actions/capurl/Dropdown/NavToDropdown_Detail.action","StatusImage":"","Title":"{id}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{questionnaire_id}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Dropdown","Service":"/pp/Services/capurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Dropdown_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_Create.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Header_table/Header_table_Create.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Header_table/Header_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Header_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"eventTypeName","_Name":"eventTypeName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"date_created","_Name":"date_created","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_CreateItem_table.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Header_table/Header_table_CreateItem_table.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Header_table/Header_table_CreateItem_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Item_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"itemid","_Name":"itemid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"improvise_amount","KeyboardType":"Number","_Name":"improvise_amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_CreateItem_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_CreateQuestionnaire_table.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Header_table/Header_table_CreateQuestionnaire_table.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Header_table/Header_table_CreateQuestionnaire_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Questionnaire_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"questionnaire_id","_Name":"questionnaire_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_CreateQuestionnaire_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_CreateSupplier_bid_table.page":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Header_table/Header_table_CreateSupplier_bid_table.page ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Header_table/Header_table_CreateSupplier_bid_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_bid_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"item_id","_Name":"item_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"eventTypeName","_Name":"eventTypeName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"leadBid","KeyboardType":"Number","_Name":"leadBid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_price","KeyboardType":"Number","_Name":"supp_quot_price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_quantity","KeyboardType":"Number","_Name":"supp_quot_quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ariba_status","_Name":"ariba_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"whatsapp_status","_Name":"whatsapp_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_price","KeyboardType":"Number","_Name":"award_price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_status","_Name":"award_status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_CreateSupplier_bid_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_CreateSupplier_table.page":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Header_table/Header_table_CreateSupplier_table.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Header_table/Header_table_CreateSupplier_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"main_invitationId","_Name":"main_invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"smvendor_id","_Name":"smvendor_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone_main","_Name":"phone_main","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_status","_Name":"award_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_msg_status","_Name":"award_msg_status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_CreateSupplier_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_Detail.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Header_table/Header_table_Detail.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Header_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Header_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Header_table/NavToHeader_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/pp/Actions/capurl/Header_table/Header_table_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{title}","Subhead":"{doc_id}","BodyText":"","Footnote":"{status}","Description":"{eventTypeName}","StatusText":"{date_created}","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"eventTypeName","Value":"{eventTypeName}"},{"KeyName":"title","Value":"{title}"},{"KeyName":"status","Value":"{status}"},{"KeyName":"date_created","Value":"{date_created}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"header_item_rel"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{itemid}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{item_name}","Footnote":"{improvise_amount}","PreserveIconStackSpacing":false,"StatusText":"{price}","Subhead":"{doc_id}","SubstatusText":"{quantity}","OnPress":"/pp/Actions/capurl/Item_table/NavToItem_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/header_item_rel","Service":"/pp/Services/capurl.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"header_supplier_rel"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{title}","Footnote":"{main_invitationId}","PreserveIconStackSpacing":false,"StatusText":"{smvendor_id}","Subhead":"{doc_id}","SubstatusText":"{phone_main}","OnPress":"/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/header_supplier_rel","Service":"/pp/Services/capurl.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"header_supplier_bid_rel"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{title}","Footnote":"{item_id}","PreserveIconStackSpacing":false,"StatusText":"{eventTypeName}","Subhead":"{doc_id}","SubstatusText":"{leadBid}","OnPress":"/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/header_supplier_bid_rel","Service":"/pp/Services/capurl.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"header_questionnarie_rel"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{description}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{doc_id}","Footnote":"{type}","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{questionnaire_id}","SubstatusText":"","OnPress":"/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/header_questionnarie_rel","Service":"/pp/Services/capurl.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Item_table","Supplier_table","Supplier_bid_table","Questionnaire_table"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Header_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_Edit.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Header_table/Header_table_Edit.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Header_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Header_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/pp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/pp/Actions/capurl/Header_table/Header_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","Value":"{doc_id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"eventTypeName","_Name":"eventTypeName","Value":"{eventTypeName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"date_created","_Name":"date_created","Value":"{date_created}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Header_table/Header_table_List.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Header_table/Header_table_List.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Header_table","ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Header_table/NavToHeader_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{eventTypeName}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/pp/Actions/capurl/Header_table/NavToHeader_table_Detail.action","StatusImage":"","Title":"{title}","Footnote":"{status}","PreserveIconStackSpacing":false,"StatusText":"{date_created}","Subhead":"{doc_id}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Header_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Item_table/Item_table_Create.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Item_table/Item_table_Create.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Item_table/Item_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Item_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"itemid","_Name":"itemid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"improvise_amount","KeyboardType":"Number","_Name":"improvise_amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Item_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Item_table/Item_table_Detail.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Item_table/Item_table_Detail.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Item_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Item_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Item_table/NavToItem_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/pp/Rules/capurl/Item_table/Item_table_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{item_name}","Subhead":"{doc_id}","BodyText":"","Footnote":"{improvise_amount}","Description":"{itemid}","StatusText":"{price}","StatusImage":"","SubstatusImage":"","SubstatusText":"{quantity}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"itemid","Value":"{itemid}"},{"KeyName":"item_name","Value":"{item_name}"},{"KeyName":"improvise_amount","Value":"{improvise_amount}"},{"KeyName":"price","Value":"{price}"},{"KeyName":"quantity","Value":"{quantity}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Item_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Item_table/Item_table_Edit.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Item_table/Item_table_Edit.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Item_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Item_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/pp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/pp/Actions/capurl/Item_table/Item_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service"}},"Value":"{doc_id}","_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"itemid","_Name":"itemid","Value":"{itemid}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"item_name","_Name":"item_name","Value":"{item_name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"improvise_amount","_Name":"improvise_amount","Value":"{improvise_amount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","Value":"{price}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","Value":"{quantity}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Item_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Item_table/Item_table_List.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Item_table/Item_table_List.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Item_table","ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Item_table/NavToItem_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{itemid}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/pp/Actions/capurl/Item_table/NavToItem_table_Detail.action","StatusImage":"","Title":"{item_name}","Footnote":"{improvise_amount}","PreserveIconStackSpacing":false,"StatusText":"{price}","Subhead":"{doc_id}","SubstatusText":"{quantity}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Item_table","Service":"/pp/Services/capurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Item_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Create.page":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Create.page ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Questionnaire_reply_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"questionnaire_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{questionnaire_id}","ReturnValue":"{questionnaire_id}","Target":{"EntitySet":"Questionnaire_table","Service":"/pp/Services/capurl.service"}},"_Name":"questionnaire_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"user_reply","_Name":"user_reply","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_reply_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_CreateDropdown.page":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_CreateDropdown.page ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_CreateDropdown.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Dropdown","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"questionnaire_id","_Name":"questionnaire_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"dropdown_value","_Name":"dropdown_value","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_reply_table_CreateDropdown","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Detail.page":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Detail.page ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Questionnaire_reply_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Questionnaire_reply_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{doc_id}","Subhead":"{questionnaire_id}","BodyText":"","Footnote":"{user_reply}","Description":"{invitationId}","StatusText":"{description}","StatusImage":"","SubstatusImage":"","SubstatusText":"{type}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"questionnaire_id","Value":"{questionnaire_id}"},{"KeyName":"invitationId","Value":"{invitationId}"},{"KeyName":"user_reply","Value":"{user_reply}"},{"KeyName":"description","Value":"{description}"},{"KeyName":"type","Value":"{type}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"quest_reply_dropdown_rel"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{dropdown_value}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{id}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{questionnaire_id}","SubstatusText":"","OnPress":"/pp/Actions/capurl/Dropdown/NavToDropdown_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/quest_reply_dropdown_rel","Service":"/pp/Services/capurl.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Dropdown"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_reply_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Edit.page":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Edit.page ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Questionnaire_reply_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Questionnaire_reply_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/pp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","Value":"{doc_id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"questionnaire_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{questionnaire_id}","ReturnValue":"{questionnaire_id}","Target":{"EntitySet":"Questionnaire_table","Service":"/pp/Services/capurl.service"}},"Value":"{questionnaire_id}","_Name":"questionnaire_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"Value":"{invitationId}","_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"user_reply","_Name":"user_reply","Value":"{user_reply}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","Value":"{description}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","Value":"{type}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_reply_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_List.page":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_List.page ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Questionnaire_reply_table","ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action","StatusImage":"","Title":"{doc_id}","Footnote":"{user_reply}","PreserveIconStackSpacing":false,"StatusText":"{description}","Subhead":"{questionnaire_id}","SubstatusText":"{type}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Questionnaire_reply_table","Service":"/pp/Services/capurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_reply_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Create.page":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Create.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Questionnaire_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"questionnaire_id","_Name":"questionnaire_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.page":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.page ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Questionnaire_reply_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"questionnaire_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{questionnaire_id}","ReturnValue":"{questionnaire_id}","Target":{"EntitySet":"Questionnaire_table","Service":"/pp/Services/capurl.service"}},"_Name":"questionnaire_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{questionnaire_id}"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"user_reply","_Name":"user_reply","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_table_CreateQuestionnaire_reply_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Detail.page":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Detail.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Questionnaire_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Questionnaire_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{doc_id}","Subhead":"{questionnaire_id}","BodyText":"","Footnote":"{type}","Description":"{description}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"questionnaire_id","Value":"{questionnaire_id}"},{"KeyName":"description","Value":"{description}"},{"KeyName":"type","Value":"{type}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"quest_quest_reply_rel"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{doc_id}","Footnote":"{user_reply}","PreserveIconStackSpacing":false,"StatusText":"{description}","Subhead":"{questionnaire_id}","SubstatusText":"{type}","OnPress":"/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/quest_quest_reply_rel","Service":"/pp/Services/capurl.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Questionnaire_reply_table"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Edit.page":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Edit.page ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Questionnaire_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Questionnaire_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/pp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service"}},"Value":"{doc_id}","_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"questionnaire_id","_Name":"questionnaire_id","Value":"{questionnaire_id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"description","_Name":"description","Value":"{description}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","Value":"{type}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_List.page":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_List.page ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Questionnaire_table","ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{description}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Detail.action","StatusImage":"","Title":"{doc_id}","Footnote":"{type}","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{questionnaire_id}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Questionnaire_table","Service":"/pp/Services/capurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Create.page":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Create.page ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_bid_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"item_id","_Name":"item_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"eventTypeName","_Name":"eventTypeName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"leadBid","KeyboardType":"Number","_Name":"leadBid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_price","KeyboardType":"Number","_Name":"supp_quot_price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_quantity","KeyboardType":"Number","_Name":"supp_quot_quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ariba_status","_Name":"ariba_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"whatsapp_status","_Name":"whatsapp_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_price","KeyboardType":"Number","_Name":"award_price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_status","_Name":"award_status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_bid_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Detail.page":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Detail.page ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Supplier_bid_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Supplier_bid_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/pp/Rules/capurl/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{title}","Subhead":"{doc_id}","BodyText":"","Footnote":"{item_id}","Description":"{invitationId}","StatusText":"{eventTypeName}","StatusImage":"","SubstatusImage":"","SubstatusText":"{leadBid}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"invitationId","Value":"{invitationId}"},{"KeyName":"item_id","Value":"{item_id}"},{"KeyName":"eventTypeName","Value":"{eventTypeName}"},{"KeyName":"leadBid","Value":"{leadBid}"},{"KeyName":"title","Value":"{title}"},{"KeyName":"item_name","Value":"{item_name}"},{"KeyName":"supp_quot_price","Value":"{supp_quot_price}"},{"KeyName":"supp_quot_quantity","Value":"{supp_quot_quantity}"},{"KeyName":"price","Value":"{price}"},{"KeyName":"quantity","Value":"{quantity}"},{"KeyName":"status","Value":"{status}"},{"KeyName":"ariba_status","Value":"{ariba_status}"},{"KeyName":"whatsapp_status","Value":"{whatsapp_status}"},{"KeyName":"award_price","Value":"{award_price}"},{"KeyName":"award_status","Value":"{award_status}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Supplier_bid_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Edit.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Edit.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Supplier_bid_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Supplier_bid_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/pp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"Value":"{doc_id}","_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"Value":"{invitationId}","_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"item_id","_Name":"item_id","Value":"{item_id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"eventTypeName","_Name":"eventTypeName","Value":"{eventTypeName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"leadBid","_Name":"leadBid","Value":"{leadBid}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","Value":"{item_name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_price","_Name":"supp_quot_price","Value":"{supp_quot_price}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_quantity","_Name":"supp_quot_quantity","Value":"{supp_quot_quantity}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","Value":"{price}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","Value":"{quantity}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ariba_status","_Name":"ariba_status","Value":"{ariba_status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"whatsapp_status","_Name":"whatsapp_status","Value":"{whatsapp_status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_price","_Name":"award_price","Value":"{award_price}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_status","_Name":"award_status","Value":"{award_status}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_bid_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_List.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_List.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Supplier_bid_table","ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Detail.action","StatusImage":"","Title":"{title}","Footnote":"{item_id}","PreserveIconStackSpacing":false,"StatusText":"{eventTypeName}","Subhead":"{doc_id}","SubstatusText":"{leadBid}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Supplier_bid_table","Service":"/pp/Services/capurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Supplier_bid_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_Create.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_Create.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Supplier_table/Supplier_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"main_invitationId","_Name":"main_invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"smvendor_id","_Name":"smvendor_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone_main","_Name":"phone_main","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_status","_Name":"award_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_msg_status","_Name":"award_msg_status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_CreateAttachments_table.page":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_CreateAttachments_table.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Supplier_table/Supplier_table_CreateAttachments_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Attachments_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker","Value":"{invitationId}"},{"AttachmentTitle":"content","AttachmentAddTitle":"Browse","AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"],"AllowedFileTypes":["jpg","png","gif"],"_Name":"content","_Type":"Control.Type.FormCell.Attachment"},{"Caption":"mediaType","_Name":"mediaType","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"size","KeyboardType":"Number","_Name":"size","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"url","_Name":"url","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_CreateAttachments_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.page":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.page ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Questionnaire_reply_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"questionnaire_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{questionnaire_id}","ReturnValue":"{questionnaire_id}","Target":{"EntitySet":"Questionnaire_table","Service":"/pp/Services/capurl.service"}},"_Name":"questionnaire_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker","Value":"{invitationId}"},{"Caption":"user_reply","_Name":"user_reply","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_CreateQuestionnaire_reply_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_CreateSupplier_bid_table.page":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_CreateSupplier_bid_table.page ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/Supplier_table/Supplier_table_CreateSupplier_bid_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_bid_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker","Value":"{invitationId}"},{"Caption":"item_id","_Name":"item_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"eventTypeName","_Name":"eventTypeName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"leadBid","KeyboardType":"Number","_Name":"leadBid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_price","KeyboardType":"Number","_Name":"supp_quot_price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_quantity","KeyboardType":"Number","_Name":"supp_quot_quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ariba_status","_Name":"ariba_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"whatsapp_status","_Name":"whatsapp_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_price","KeyboardType":"Number","_Name":"award_price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_status","_Name":"award_status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_CreateSupplier_bid_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_Detail.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_Detail.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Supplier_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Supplier_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/pp/Actions/capurl/Supplier_table/Supplier_table_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{title}","Subhead":"{doc_id}","BodyText":"","Footnote":"{main_invitationId}","Description":"{invitationId}","StatusText":"{smvendor_id}","StatusImage":"","SubstatusImage":"","SubstatusText":"{phone_main}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"invitationId","Value":"{invitationId}"},{"KeyName":"main_invitationId","Value":"{main_invitationId}"},{"KeyName":"title","Value":"{title}"},{"KeyName":"smvendor_id","Value":"{smvendor_id}"},{"KeyName":"phone_main","Value":"{phone_main}"},{"KeyName":"status","Value":"{status}"},{"KeyName":"award_status","Value":"{award_status}"},{"KeyName":"award_msg_status","Value":"{award_msg_status}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"supplier_to_sbid"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{title}","Footnote":"{item_id}","PreserveIconStackSpacing":false,"StatusText":"{eventTypeName}","Subhead":"{doc_id}","SubstatusText":"{leadBid}","OnPress":"/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/supplier_to_sbid","Service":"/pp/Services/capurl.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"supplier_to_attachment"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":"/pp/Services/capurl.service/{@odata.readLink}/content"}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{fileName}","Footnote":"{mediaType}","PreserveIconStackSpacing":false,"StatusText":"{size}","Subhead":"{doc_id}","SubstatusText":"{url}","OnPress":"/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/supplier_to_attachment","Service":"/pp/Services/capurl.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"supplier_to_question_reply_rel"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{doc_id}","Footnote":"{user_reply}","PreserveIconStackSpacing":false,"StatusText":"{description}","Subhead":"{questionnaire_id}","SubstatusText":"{type}","OnPress":"/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/supplier_to_question_reply_rel","Service":"/pp/Services/capurl.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Supplier_bid_table","Attachments_table","Questionnaire_reply_table"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_Edit.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_Edit.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Supplier_table Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"Supplier_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/pp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/pp/Actions/capurl/Supplier_table/Supplier_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service"}},"Value":"{doc_id}","_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"invitationId","_Name":"invitationId","Value":"{invitationId}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"main_invitationId","_Name":"main_invitationId","Value":"{main_invitationId}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"smvendor_id","_Name":"smvendor_id","Value":"{smvendor_id}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone_main","_Name":"phone_main","Value":"{phone_main}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_status","_Name":"award_status","Value":"{award_status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_msg_status","_Name":"award_msg_status","Value":"{award_msg_status}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_List.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_Supplier_table/Supplier_table_List.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Supplier_table","ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Detail.action","StatusImage":"","Title":"{title}","Footnote":"{main_invitationId}","PreserveIconStackSpacing":false,"StatusText":"{smvendor_id}","Subhead":"{doc_id}","SubstatusText":"{phone_main}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_supplier_replay/supplier_replay_Create.page":
/*!***************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_supplier_replay/supplier_replay_Create.page ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/pp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/pp/Actions/capurl/supplier_replay/supplier_replay_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create supplier_replay Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"OriginalRepliedMessageSender","_Name":"OriginalRepliedMessageSender","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsMessageSid","_Name":"SmsMessageSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NumMedia","_Name":"NumMedia","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ProfileName","_Name":"ProfileName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsSid","_Name":"SmsSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"WaId","_Name":"WaId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsStatus","_Name":"SmsStatus","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Body","_Name":"Body","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ButtonText","_Name":"ButtonText","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"To","_Name":"To","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ButtonPayload","_Name":"ButtonPayload","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NumSegments","_Name":"NumSegments","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ReferralNumMedia","_Name":"ReferralNumMedia","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"MessageSid","_Name":"MessageSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AccountSid","_Name":"AccountSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"OriginalRepliedMessageSid","_Name":"OriginalRepliedMessageSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"From","_Name":"From","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ApiVersion","_Name":"ApiVersion","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"supplier_replay_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_supplier_replay/supplier_replay_Detail.page":
/*!***************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_supplier_replay/supplier_replay_Detail.page ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"supplier_replay Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"supplier_replay","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/pp/Rules/capurl/supplier_replay/supplier_replay_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProfileName}","Subhead":"{OriginalRepliedMessageSender}","BodyText":"","Footnote":"{NumMedia}","Description":"{SmsMessageSid}","StatusText":"{SmsSid}","StatusImage":"","SubstatusImage":"","SubstatusText":"{WaId}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"OriginalRepliedMessageSender","Value":"{OriginalRepliedMessageSender}"},{"KeyName":"SmsMessageSid","Value":"{SmsMessageSid}"},{"KeyName":"NumMedia","Value":"{NumMedia}"},{"KeyName":"ProfileName","Value":"{ProfileName}"},{"KeyName":"SmsSid","Value":"{SmsSid}"},{"KeyName":"WaId","Value":"{WaId}"},{"KeyName":"SmsStatus","Value":"{SmsStatus}"},{"KeyName":"Body","Value":"{Body}"},{"KeyName":"ButtonText","Value":"{ButtonText}"},{"KeyName":"To","Value":"{To}"},{"KeyName":"ButtonPayload","Value":"{ButtonPayload}"},{"KeyName":"NumSegments","Value":"{NumSegments}"},{"KeyName":"ReferralNumMedia","Value":"{ReferralNumMedia}"},{"KeyName":"MessageSid","Value":"{MessageSid}"},{"KeyName":"AccountSid","Value":"{AccountSid}"},{"KeyName":"OriginalRepliedMessageSid","Value":"{OriginalRepliedMessageSid}"},{"KeyName":"From","Value":"{From}"},{"KeyName":"ApiVersion","Value":"{ApiVersion}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"supplier_replay_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_supplier_replay/supplier_replay_Edit.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_supplier_replay/supplier_replay_Edit.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update supplier_replay Detail","DesignTimeTarget":{"Service":"/pp/Services/capurl.service","EntitySet":"supplier_replay","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/pp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/pp/Actions/capurl/supplier_replay/supplier_replay_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"OriginalRepliedMessageSender","_Name":"OriginalRepliedMessageSender","Value":"{OriginalRepliedMessageSender}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsMessageSid","_Name":"SmsMessageSid","Value":"{SmsMessageSid}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"NumMedia","_Name":"NumMedia","Value":"{NumMedia}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ProfileName","_Name":"ProfileName","Value":"{ProfileName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsSid","_Name":"SmsSid","Value":"{SmsSid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"WaId","_Name":"WaId","Value":"{WaId}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsStatus","_Name":"SmsStatus","Value":"{SmsStatus}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Body","_Name":"Body","Value":"{Body}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ButtonText","_Name":"ButtonText","Value":"{ButtonText}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"To","_Name":"To","Value":"{To}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ButtonPayload","_Name":"ButtonPayload","Value":"{ButtonPayload}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NumSegments","_Name":"NumSegments","Value":"{NumSegments}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ReferralNumMedia","_Name":"ReferralNumMedia","Value":"{ReferralNumMedia}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"MessageSid","_Name":"MessageSid","Value":"{MessageSid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AccountSid","_Name":"AccountSid","Value":"{AccountSid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"OriginalRepliedMessageSid","_Name":"OriginalRepliedMessageSid","Value":"{OriginalRepliedMessageSid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"From","_Name":"From","Value":"{From}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ApiVersion","_Name":"ApiVersion","Value":"{ApiVersion}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"supplier_replay_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/pp/Pages/capurl_supplier_replay/supplier_replay_List.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/pp/Pages/capurl_supplier_replay/supplier_replay_List.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"supplier_replay","ActionBar":{"Items":[{"OnPress":"/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{SmsMessageSid}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Detail.action","StatusImage":"","Title":"{ProfileName}","Footnote":"{NumMedia}","PreserveIconStackSpacing":false,"StatusText":"{SmsSid}","Subhead":"{OriginalRepliedMessageSender}","SubstatusText":"{WaId}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"supplier_replay","Service":"/pp/Services/capurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"supplier_replay_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"pp","Version":"/pp/Globals/Application/AppDefinition_Version.global","MainPage":"/pp/Pages/Main.page","OnLaunch":"/pp/Rules/Service/Initialize.js","OnWillUpdate":"/pp/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/pp/Rules/Service/Initialize.js","Styles":"/pp/Styles/Styles.less","Localization":"/pp/i18n/i18n.properties","_SchemaVersion":"24.4","StyleSheets":{"Styles":{"css":"/pp/Styles/Styles.css","ios":"/pp/Styles/Styles.nss","android":"/pp/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/pp/Actions/Application/AppUpdate.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/pp/Actions/Application/AppUpdate.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/pp/Rules/Application/AppUpdateFailure.js","OnSuccess":"/pp/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/pp/Actions/Application/AppUpdateFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/Application/AppUpdateFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/Application/AppUpdateProgressBanner.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/Application/AppUpdateProgressBanner.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/pp/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/pp/Actions/Application/AppUpdateSuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/Application/AppUpdateSuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/Application/Logout.action":
/*!****************************************************************!*\
  !*** ./build.definitions/pp/Actions/Application/Logout.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/pp/Actions/Application/NavToAbout.action":
/*!********************************************************************!*\
  !*** ./build.definitions/pp/Actions/Application/NavToAbout.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/pp/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/Application/NavToActivityLog.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/pp/Actions/Application/NavToActivityLog.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/pp/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/Application/NavToSupport.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/pp/Actions/Application/NavToSupport.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/pp/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/Application/OnWillUpdate.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/pp/Actions/Application/OnWillUpdate.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/pp/Actions/Application/Reset.action":
/*!***************************************************************!*\
  !*** ./build.definitions/pp/Actions/Application/Reset.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/pp/Actions/Application/ResetMessage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/pp/Actions/Application/ResetMessage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/pp/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/pp/Actions/Application/UserMenuPopover.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/pp/Actions/Application/UserMenuPopover.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/pp/Actions/capurl/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/pp/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/pp/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/pp/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/pp/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/pp/Actions/Application/Logout.action","Title":"Logout","Visible":"/pp/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/pp/Actions/CloseModalPage_Cancel.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/pp/Actions/CloseModalPage_Cancel.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/CloseModalPage_Complete.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/pp/Actions/CloseModalPage_Complete.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/ClosePage.action":
/*!*******************************************************!*\
  !*** ./build.definitions/pp/Actions/ClosePage.action ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/CreateEntityFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/pp/Actions/CreateEntityFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/CreateEntitySuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/pp/Actions/CreateEntitySuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/pp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/DeleteConfirmation.action":
/*!****************************************************************!*\
  !*** ./build.definitions/pp/Actions/DeleteConfirmation.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/pp/Actions/DeleteEntityFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/pp/Actions/DeleteEntityFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/DeleteEntitySuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/pp/Actions/DeleteEntitySuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/pp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/pp/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/pp/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/pp/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/pp/Actions/GenericBannerMessage.action":
/*!******************************************************************!*\
  !*** ./build.definitions/pp/Actions/GenericBannerMessage.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/pp/Actions/GenericMessageBox.action":
/*!***************************************************************!*\
  !*** ./build.definitions/pp/Actions/GenericMessageBox.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/pp/Actions/GenericNavigation.action":
/*!***************************************************************!*\
  !*** ./build.definitions/pp/Actions/GenericNavigation.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/pp/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/GenericToastMessage.action":
/*!*****************************************************************!*\
  !*** ./build.definitions/pp/Actions/GenericToastMessage.action ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/pp/Actions/Logging/LogUploadFailure.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/pp/Actions/Logging/LogUploadFailure.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/pp/Actions/Logging/LogUploadSuccessful.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/pp/Actions/Logging/LogUploadSuccessful.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/Logging/UploadLog.action":
/*!***************************************************************!*\
  !*** ./build.definitions/pp/Actions/Logging/UploadLog.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/pp/Actions/Logging/LogUploadFailure.action","OnSuccess":"/pp/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/pp/Actions/Logging/UploadLogProgress.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/pp/Actions/Logging/UploadLogProgress.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/pp/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/pp/Actions/UpdateEntityFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/pp/Actions/UpdateEntityFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/UpdateEntitySuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/pp/Actions/UpdateEntitySuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/pp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/UploadStreamFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/pp/Actions/UploadStreamFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload stream failure - {#ActionResults:uploadstream/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/UploadStreamSuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/pp/Actions/UploadStreamSuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Stream uploaded","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/pp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_CreateEntity.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_CreateEntity.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","invitationId":"#Control:invitationId/#SelectedValue","mediaType":"#Control:mediaType/#Value","fileName":"#Control:fileName/#Value","size":"#Control:size/#Value","url":"#Control:url/#Value"},"Target":{"EntitySet":"Attachments_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_DeleteEntity.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_DeleteEntity.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Attachments_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/pp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/pp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_DetailPopover.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_DetailPopover.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Open Document","OnPress":"/pp/Actions/capurl/Attachments_table/Attachments_table_OpenDocument.action"},{"Title":"Delete","OnPress":"/pp/Rules/capurl/Attachments_table/Attachments_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_OpenDocument.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_OpenDocument.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OpenDocument","Path":"/pp/Services/capurl.service/{@odata.readLink}/content","MimeType":"image/jpeg"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_UpdateEntity.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_UpdateEntity.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Attachments_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#Value","invitationId":"#Control:invitationId/#SelectedValue","mediaType":"#Control:mediaType/#Value","fileName":"#Control:fileName/#Value","size":"#Control:size/#Value","url":"#Control:url/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/pp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/pp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_UploadStream.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Attachments_table/Attachments_table_UploadStream.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UploadStream","Target":{"Service":"/pp/Services/capurl.service","EntitySet":"Attachments_table","ReadLink":"{@odata.readLink}"},"Properties":{"content":"#Control:content/#Value"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"uploadstream"},"OnSuccess":"/pp/Actions/UploadStreamSuccessMessage.action","OnFailure":"/pp/Actions/UploadStreamFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Create.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Create.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Attachments_table/Attachments_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Detail.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Detail.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Attachments_table/Attachments_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Edit.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Attachments_table/NavToAttachments_table_Edit.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Attachments_table/Attachments_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Attachments_table/NavToAttachments_table_List.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Attachments_table/NavToAttachments_table_List.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Attachments_table/Attachments_table_List.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Bid_reply/Bid_reply_CreateEntity.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Bid_reply/Bid_reply_CreateEntity.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","item_name":"#Control:item_name/#Value","phone":"#Control:phone/#Value"},"Target":{"EntitySet":"Bid_reply","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Bid_reply/Bid_reply_DeleteEntity.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Bid_reply/Bid_reply_DeleteEntity.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Bid_reply","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/pp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/pp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Bid_reply/Bid_reply_UpdateEntity.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Bid_reply/Bid_reply_UpdateEntity.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Bid_reply","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#Value","item_name":"#Control:item_name/#Value","phone":"#Control:phone/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/pp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/pp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Bid_reply/NavToBid_reply_Create.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Bid_reply/NavToBid_reply_Create.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Bid_reply/Bid_reply_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Bid_reply/NavToBid_reply_Detail.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Bid_reply/NavToBid_reply_Detail.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Bid_reply/Bid_reply_Detail.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Bid_reply/NavToBid_reply_Edit.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Bid_reply/NavToBid_reply_Edit.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Bid_reply/Bid_reply_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Bid_reply/NavToBid_reply_List.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Bid_reply/NavToBid_reply_List.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Bid_reply/Bid_reply_List.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Dropdown/Dropdown_CreateEntity.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Dropdown/Dropdown_CreateEntity.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"questionnaire_id":"#Control:questionnaire_id/#Value","dropdown_value":"#Control:dropdown_value/#Value"},"Target":{"EntitySet":"Dropdown","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Dropdown/Dropdown_DeleteEntity.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Dropdown/Dropdown_DeleteEntity.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Dropdown","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/pp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/pp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Dropdown/Dropdown_UpdateEntity.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Dropdown/Dropdown_UpdateEntity.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Dropdown","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"questionnaire_id":"#Control:questionnaire_id/#Value","dropdown_value":"#Control:dropdown_value/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/pp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/pp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Dropdown/NavToDropdown_Create.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Dropdown/NavToDropdown_Create.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Dropdown/Dropdown_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Dropdown/NavToDropdown_Detail.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Dropdown/NavToDropdown_Detail.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Dropdown/Dropdown_Detail.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Dropdown/NavToDropdown_Edit.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Dropdown/NavToDropdown_Edit.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Dropdown/Dropdown_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Dropdown/NavToDropdown_List.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Dropdown/NavToDropdown_List.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Dropdown/Dropdown_List.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateEntity.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateEntity.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","title":"#Control:title/#Value","status":"#Control:status/#Value","date_created":"#Control:date_created/#Value"},"Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateItem_table.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateItem_table.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"header_item_rel","Target":{"EntitySet":"Header_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","itemid":"#Control:itemid/#Value","item_name":"#Control:item_name/#Value","improvise_amount":"#Control:improvise_amount/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value"},"Target":{"EntitySet":"Item_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateQuestionnaire_table.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateQuestionnaire_table.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"header_questionnarie_rel","Target":{"EntitySet":"Header_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","questionnaire_id":"#Control:questionnaire_id/#Value","description":"#Control:description/#Value","type":"#Control:type/#Value"},"Target":{"EntitySet":"Questionnaire_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateSupplier_bid_table.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateSupplier_bid_table.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"header_supplier_bid_rel","Target":{"EntitySet":"Header_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#SelectedValue","item_id":"#Control:item_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","leadBid":"#Control:leadBid/#Value","title":"#Control:title/#Value","item_name":"#Control:item_name/#Value","supp_quot_price":"#Control:supp_quot_price/#Value","supp_quot_quantity":"#Control:supp_quot_quantity/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value","status":"#Control:status/#Value","ariba_status":"#Control:ariba_status/#Value","whatsapp_status":"#Control:whatsapp_status/#Value","award_price":"#Control:award_price/#Value","award_status":"#Control:award_status/#Value"},"Target":{"EntitySet":"Supplier_bid_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateSupplier_table.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/Header_table_CreateSupplier_table.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"header_supplier_rel","Target":{"EntitySet":"Header_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","main_invitationId":"#Control:main_invitationId/#Value","title":"#Control:title/#Value","smvendor_id":"#Control:smvendor_id/#Value","phone_main":"#Control:phone_main/#Value","status":"#Control:status/#Value","award_status":"#Control:award_status/#Value","award_msg_status":"#Control:award_msg_status/#Value"},"Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_DeleteEntity.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/Header_table_DeleteEntity.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/pp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/pp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_DetailPopover.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/Header_table_DetailPopover.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add Item_table","OnPress":"/pp/Actions/capurl/Header_table/NavToHeader_table_CreateItem_table.action"},{"Title":"Add Supplier_table","OnPress":"/pp/Actions/capurl/Header_table/NavToHeader_table_CreateSupplier_table.action"},{"Title":"Add Supplier_bid_table","OnPress":"/pp/Actions/capurl/Header_table/NavToHeader_table_CreateSupplier_bid_table.action"},{"Title":"Add Questionnaire_table","OnPress":"/pp/Actions/capurl/Header_table/NavToHeader_table_CreateQuestionnaire_table.action"},{"Title":"Delete","OnPress":"/pp/Rules/capurl/Header_table/Header_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/Header_table_UpdateEntity.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/Header_table_UpdateEntity.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Header_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","title":"#Control:title/#Value","status":"#Control:status/#Value","date_created":"#Control:date_created/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/pp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/pp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_Create.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_Create.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Header_table/Header_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_CreateItem_table.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_CreateItem_table.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Header_table/Header_table_CreateItem_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_CreateQuestionnaire_table.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_CreateQuestionnaire_table.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Header_table/Header_table_CreateQuestionnaire_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_CreateSupplier_bid_table.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_CreateSupplier_bid_table.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Header_table/Header_table_CreateSupplier_bid_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_CreateSupplier_table.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_CreateSupplier_table.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Header_table/Header_table_CreateSupplier_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_Detail.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_Detail.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Header_table/Header_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_Edit.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_Edit.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Header_table/Header_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_List.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Header_table/NavToHeader_table_List.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Header_table/Header_table_List.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Item_table/Item_table_CreateEntity.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Item_table/Item_table_CreateEntity.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","itemid":"#Control:itemid/#Value","item_name":"#Control:item_name/#Value","improvise_amount":"#Control:improvise_amount/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value"},"Target":{"EntitySet":"Item_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Item_table/Item_table_DeleteEntity.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Item_table/Item_table_DeleteEntity.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Item_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/pp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/pp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Item_table/Item_table_UpdateEntity.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Item_table/Item_table_UpdateEntity.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Item_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","itemid":"#Control:itemid/#Value","item_name":"#Control:item_name/#Value","improvise_amount":"#Control:improvise_amount/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/pp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/pp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Item_table/NavToItem_table_Create.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Item_table/NavToItem_table_Create.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Item_table/Item_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Item_table/NavToItem_table_Detail.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Item_table/NavToItem_table_Detail.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Item_table/Item_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Item_table/NavToItem_table_Edit.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Item_table/NavToItem_table_Edit.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Item_table/Item_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Item_table/NavToItem_table_List.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Item_table/NavToItem_table_List.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Item_table/Item_table_List.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Create.action":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Create.action ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_CreateDropdown.action":
/*!****************************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_CreateDropdown.action ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_CreateDropdown.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Edit.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Edit.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_List.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_List.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Questionnaire_reply_table/Questionnaire_reply_table_List.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_CreateDropdown.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_CreateDropdown.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"quest_reply_dropdown_rel","Target":{"EntitySet":"Questionnaire_reply_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"questionnaire_id":"#Control:questionnaire_id/#Value","dropdown_value":"#Control:dropdown_value/#Value"},"Target":{"EntitySet":"Dropdown","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_CreateEntity.action":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_CreateEntity.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","questionnaire_id":"#Control:questionnaire_id/#SelectedValue","invitationId":"#Control:invitationId/#SelectedValue","user_reply":"#Control:user_reply/#Value","description":"#Control:description/#Value","type":"#Control:type/#Value"},"Target":{"EntitySet":"Questionnaire_reply_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DeleteEntity.action":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DeleteEntity.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Questionnaire_reply_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/pp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/pp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DetailPopover.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DetailPopover.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add Dropdown","OnPress":"/pp/Actions/capurl/Questionnaire_reply_table/NavToQuestionnaire_reply_table_CreateDropdown.action"},{"Title":"Delete","OnPress":"/pp/Rules/capurl/Questionnaire_reply_table/Questionnaire_reply_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Questionnaire_reply_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#Value","questionnaire_id":"#Control:questionnaire_id/#SelectedValue","invitationId":"#Control:invitationId/#SelectedValue","user_reply":"#Control:user_reply/#Value","description":"#Control:description/#Value","type":"#Control:type/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/pp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/pp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Create.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Create.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_CreateQuestionnaire_reply_table.action":
/*!*********************************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_CreateQuestionnaire_reply_table.action ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Detail.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Detail.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Edit.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_Edit.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_List.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_List.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Questionnaire_table/Questionnaire_table_List.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_CreateEntity.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_CreateEntity.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","questionnaire_id":"#Control:questionnaire_id/#Value","description":"#Control:description/#Value","type":"#Control:type/#Value"},"Target":{"EntitySet":"Questionnaire_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.action":
/*!****************************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.action ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"quest_quest_reply_rel","Target":{"EntitySet":"Questionnaire_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","questionnaire_id":"#Control:questionnaire_id/#SelectedValue","invitationId":"#Control:invitationId/#SelectedValue","user_reply":"#Control:user_reply/#Value","description":"#Control:description/#Value","type":"#Control:type/#Value"},"Target":{"EntitySet":"Questionnaire_reply_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_DeleteEntity.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_DeleteEntity.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Questionnaire_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/pp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/pp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_DetailPopover.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_DetailPopover.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add Questionnaire_reply_table","OnPress":"/pp/Actions/capurl/Questionnaire_table/NavToQuestionnaire_table_CreateQuestionnaire_reply_table.action"},{"Title":"Delete","OnPress":"/pp/Rules/capurl/Questionnaire_table/Questionnaire_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_UpdateEntity.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Questionnaire_table/Questionnaire_table_UpdateEntity.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Questionnaire_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","questionnaire_id":"#Control:questionnaire_id/#Value","description":"#Control:description/#Value","type":"#Control:type/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/pp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/pp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Service/CloseOffline.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Service/CloseOffline.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/pp/Services/capurl.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/pp/Actions/capurl/Service/CloseOfflineSuccessMessage.action","OnFailure":"/pp/Actions/capurl/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Service/CloseOfflineFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Service/CloseOfflineFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Service/CloseOfflineSuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Service/CloseOfflineSuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Service/DownloadOffline.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Service/DownloadOffline.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/pp/Services/capurl.service","DefiningRequests":[{"Name":"Attachments_table","Query":"Attachments_table"},{"Name":"Bid_reply","Query":"Bid_reply"},{"Name":"Dropdown","Query":"Dropdown"},{"Name":"Header_table","Query":"Header_table"},{"Name":"Item_table","Query":"Item_table"},{"Name":"Questionnaire_reply_table","Query":"Questionnaire_reply_table"},{"Name":"Questionnaire_table","Query":"Questionnaire_table"},{"Name":"Supplier_bid_table","Query":"Supplier_bid_table"},{"Name":"supplier_replay","Query":"supplier_replay"},{"Name":"Supplier_table","Query":"Supplier_table"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/pp/Actions/capurl/Service/SyncFailureMessage.action","OnSuccess":"/pp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Service/DownloadStartedMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Service/DownloadStartedMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/pp/Actions/capurl/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Service/InitializeOffline.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Service/InitializeOffline.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/pp/Services/capurl.service","DefiningRequests":[{"Name":"Attachments_table","Query":"Attachments_table"},{"Name":"Bid_reply","Query":"Bid_reply"},{"Name":"Dropdown","Query":"Dropdown"},{"Name":"Header_table","Query":"Header_table"},{"Name":"Item_table","Query":"Item_table"},{"Name":"Questionnaire_reply_table","Query":"Questionnaire_reply_table"},{"Name":"Questionnaire_table","Query":"Questionnaire_table"},{"Name":"Supplier_bid_table","Query":"Supplier_bid_table"},{"Name":"supplier_replay","Query":"supplier_replay"},{"Name":"Supplier_table","Query":"Supplier_table"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnFailure":"/pp/Actions/capurl/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Service/InitializeOfflineFailureMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Service/InitializeOfflineFailureMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Service/SyncFailureMessage.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Service/SyncFailureMessage.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Service/SyncStartedMessage.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Service/SyncStartedMessage.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/pp/Actions/capurl/Service/UploadOffline.action","OnFailure":"/pp/Actions/capurl/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Service/UploadOffline.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Service/UploadOffline.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/pp/Services/capurl.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/pp/Actions/capurl/Service/DownloadStartedMessage.action","OnFailure":"/pp/Actions/capurl/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Create.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Create.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Detail.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Detail.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Edit.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_Edit.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_List.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_bid_table/NavToSupplier_bid_table_List.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Supplier_bid_table/Supplier_bid_table_List.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_CreateEntity.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_CreateEntity.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#SelectedValue","item_id":"#Control:item_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","leadBid":"#Control:leadBid/#Value","title":"#Control:title/#Value","item_name":"#Control:item_name/#Value","supp_quot_price":"#Control:supp_quot_price/#Value","supp_quot_quantity":"#Control:supp_quot_quantity/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value","status":"#Control:status/#Value","ariba_status":"#Control:ariba_status/#Value","whatsapp_status":"#Control:whatsapp_status/#Value","award_price":"#Control:award_price/#Value","award_status":"#Control:award_status/#Value"},"Target":{"EntitySet":"Supplier_bid_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Supplier_bid_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/pp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/pp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Supplier_bid_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#SelectedValue","item_id":"#Control:item_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","leadBid":"#Control:leadBid/#Value","title":"#Control:title/#Value","item_name":"#Control:item_name/#Value","supp_quot_price":"#Control:supp_quot_price/#Value","supp_quot_quantity":"#Control:supp_quot_quantity/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value","status":"#Control:status/#Value","ariba_status":"#Control:ariba_status/#Value","whatsapp_status":"#Control:whatsapp_status/#Value","award_price":"#Control:award_price/#Value","award_status":"#Control:award_status/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/pp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/pp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Create.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Create.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Supplier_table/Supplier_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateAttachments_table.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateAttachments_table.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Supplier_table/Supplier_table_CreateAttachments_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateQuestionnaire_reply_table.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateQuestionnaire_reply_table.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Supplier_table/Supplier_table_CreateSupplier_bid_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Detail.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Detail.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Supplier_table/Supplier_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Edit.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_Edit.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_Supplier_table/Supplier_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_List.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/NavToSupplier_table_List.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_Supplier_table/Supplier_table_List.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_CreateAttachments_table.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_CreateAttachments_table.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"supplier_to_attachment","Target":{"EntitySet":"Supplier_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","invitationId":"#Control:invitationId/#SelectedValue","mediaType":"#Control:mediaType/#Value","fileName":"#Control:fileName/#Value","size":"#Control:size/#Value","url":"#Control:url/#Value"},"Target":{"EntitySet":"Attachments_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_CreateEntity.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_CreateEntity.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","main_invitationId":"#Control:main_invitationId/#Value","title":"#Control:title/#Value","smvendor_id":"#Control:smvendor_id/#Value","phone_main":"#Control:phone_main/#Value","status":"#Control:status/#Value","award_status":"#Control:award_status/#Value","award_msg_status":"#Control:award_msg_status/#Value"},"Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"supplier_to_question_reply_rel","Target":{"EntitySet":"Supplier_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","questionnaire_id":"#Control:questionnaire_id/#SelectedValue","invitationId":"#Control:invitationId/#SelectedValue","user_reply":"#Control:user_reply/#Value","description":"#Control:description/#Value","type":"#Control:type/#Value"},"Target":{"EntitySet":"Questionnaire_reply_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_CreateSupplier_bid_table.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_CreateSupplier_bid_table.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"supplier_to_sbid","Target":{"EntitySet":"Supplier_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#SelectedValue","item_id":"#Control:item_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","leadBid":"#Control:leadBid/#Value","title":"#Control:title/#Value","item_name":"#Control:item_name/#Value","supp_quot_price":"#Control:supp_quot_price/#Value","supp_quot_quantity":"#Control:supp_quot_quantity/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value","status":"#Control:status/#Value","ariba_status":"#Control:ariba_status/#Value","whatsapp_status":"#Control:whatsapp_status/#Value","award_price":"#Control:award_price/#Value","award_status":"#Control:award_status/#Value"},"Target":{"EntitySet":"Supplier_bid_table","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_DeleteEntity.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_DeleteEntity.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/pp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/pp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_DetailPopover.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_DetailPopover.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add Supplier_bid_table","OnPress":"/pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action"},{"Title":"Add Attachments_table","OnPress":"/pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateAttachments_table.action"},{"Title":"Add Questionnaire_reply_table","OnPress":"/pp/Actions/capurl/Supplier_table/NavToSupplier_table_CreateQuestionnaire_reply_table.action"},{"Title":"Delete","OnPress":"/pp/Rules/capurl/Supplier_table/Supplier_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_UpdateEntity.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/Supplier_table/Supplier_table_UpdateEntity.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Supplier_table","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","main_invitationId":"#Control:main_invitationId/#Value","title":"#Control:title/#Value","smvendor_id":"#Control:smvendor_id/#Value","phone_main":"#Control:phone_main/#Value","status":"#Control:status/#Value","award_status":"#Control:award_status/#Value","award_msg_status":"#Control:award_msg_status/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/pp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/pp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Create.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Create.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_supplier_replay/supplier_replay_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Detail.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Detail.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_supplier_replay/supplier_replay_Detail.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Edit.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_Edit.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/pp/Pages/capurl_supplier_replay/supplier_replay_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_List.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/supplier_replay/NavTosupplier_replay_List.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/pp/Pages/capurl_supplier_replay/supplier_replay_List.page"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/supplier_replay/supplier_replay_CreateEntity.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/supplier_replay/supplier_replay_CreateEntity.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/pp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/pp/Actions/CreateEntitySuccessMessage.action","Properties":{"OriginalRepliedMessageSender":"#Control:OriginalRepliedMessageSender/#Value","SmsMessageSid":"#Control:SmsMessageSid/#Value","NumMedia":"#Control:NumMedia/#Value","ProfileName":"#Control:ProfileName/#Value","SmsSid":"#Control:SmsSid/#Value","WaId":"#Control:WaId/#Value","SmsStatus":"#Control:SmsStatus/#Value","Body":"#Control:Body/#Value","ButtonText":"#Control:ButtonText/#Value","To":"#Control:To/#Value","ButtonPayload":"#Control:ButtonPayload/#Value","NumSegments":"#Control:NumSegments/#Value","ReferralNumMedia":"#Control:ReferralNumMedia/#Value","MessageSid":"#Control:MessageSid/#Value","AccountSid":"#Control:AccountSid/#Value","OriginalRepliedMessageSid":"#Control:OriginalRepliedMessageSid/#Value","From":"#Control:From/#Value","ApiVersion":"#Control:ApiVersion/#Value"},"Target":{"EntitySet":"supplier_replay","Service":"/pp/Services/capurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/supplier_replay/supplier_replay_DeleteEntity.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/supplier_replay/supplier_replay_DeleteEntity.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"supplier_replay","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/pp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/pp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/pp/Actions/capurl/supplier_replay/supplier_replay_UpdateEntity.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/pp/Actions/capurl/supplier_replay/supplier_replay_UpdateEntity.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"supplier_replay","Service":"/pp/Services/capurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"OriginalRepliedMessageSender":"#Control:OriginalRepliedMessageSender/#Value","SmsMessageSid":"#Control:SmsMessageSid/#Value","NumMedia":"#Control:NumMedia/#Value","ProfileName":"#Control:ProfileName/#Value","SmsSid":"#Control:SmsSid/#Value","WaId":"#Control:WaId/#Value","SmsStatus":"#Control:SmsStatus/#Value","Body":"#Control:Body/#Value","ButtonText":"#Control:ButtonText/#Value","To":"#Control:To/#Value","ButtonPayload":"#Control:ButtonPayload/#Value","NumSegments":"#Control:NumSegments/#Value","ReferralNumMedia":"#Control:ReferralNumMedia/#Value","MessageSid":"#Control:MessageSid/#Value","AccountSid":"#Control:AccountSid/#Value","OriginalRepliedMessageSid":"#Control:OriginalRepliedMessageSid/#Value","From":"#Control:From/#Value","ApiVersion":"#Control:ApiVersion/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/pp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/pp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/pp/Globals/Application/AppDefinition_Version.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/pp/Globals/Application/AppDefinition_Version.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/pp/Globals/Application/ApplicationName.global":
/*!*************************************************************************!*\
  !*** ./build.definitions/pp/Globals/Application/ApplicationName.global ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/pp/Globals/Application/SupportEmail.global":
/*!**********************************************************************!*\
  !*** ./build.definitions/pp/Globals/Application/SupportEmail.global ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/pp/Globals/Application/SupportPhone.global":
/*!**********************************************************************!*\
  !*** ./build.definitions/pp/Globals/Application/SupportPhone.global ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/pp/Services/capurl.service":
/*!******************************************************!*\
  !*** ./build.definitions/pp/Services/capurl.service ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"capurl","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{"StoreParameters":{}},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/pp/Styles/Styles.json":
/*!*************************************************!*\
  !*** ./build.definitions/pp/Styles/Styles.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/pp/jsconfig.json":
/*!********************************************!*\
  !*** ./build.definitions/pp/jsconfig.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map