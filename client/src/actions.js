import { createAction } from 'util';

export const requestStarted = createAction('REQUEST_STARTED');
export const requestFinished = createAction('REQUEST_FINISHED');
export const requestError = createAction('REQUEST_ERROR');

export const togglePageContainer = createAction('TOGGLE_PAGE_CONTAINER');
export const clearPageScroll = createAction('CLEAR_PAGE_SCROLL');
export const setAlertRedirect = createAction('SET_ALERT_REDIRECT');

/* Account API */
export const loadedCurrentUser = createAction('LOADED_CURRENT_USER');
export const changePasswordSuccess = createAction('CHANGE_PASSWORD_SUCCESS');
export const updateProfileSuccess = createAction('UPDATE_PROFILE_SUCESS');
export const forgotPasswordSuccess = createAction('FORGOT_PASSWORD_SUCCESS');
export const resetPasswordSuccess = createAction('RESET_PASSWORD_SUCCESS');
export const sendHelpMessageSuccess = createAction('SEND_HELP_MESSAGE_SUCCESS');

/* Alert API */
export const loadedAlerts = createAction('LOADED_ALERTS');
export const loadedAlert = createAction('LOADED_ALERT');
export const sendAlertSucces = createAction('SEND_ALERT_SUCCESS');

/* Category API */
export const loadedCategories = createAction('LOADED_CATEGORIES');
export const loadedCategory = createAction('LOADED_CATEGORY');
export const setCategorySortSuccess = createAction('SET_CATEGORY_SORT_SUCESS');
export const createCategorySuccess = createAction('CREATE_CATEGORY_SUCCESS');
export const editCategorySuccess = createAction('EDIT_CATEGORY_SUCCESS');
export const deleteCategorySuccess = createAction('DELETE_CATEGORY_SUCCESS');

/* Need API */
export const loadedNeed = createAction('LOADED_NEED');
export const resolveNeedSuccess = createAction('RESOLVE_NEED_SUCCESS');

/* Response API */
export const sendResponseSuccess = createAction('SEND_RESPONSE_SUCCESS');

/* Service (administration) API */
export const loadedServices = createAction('LOADED_SERVICES');
export const loadedService = createAction('LOADED_SERVICE');
export const createServiceSuccess = createAction('CREATE_SERVICE_SUCCESS');
export const editServiceSuccess = createAction('EDIT_SERVICE_SUCCESS');
export const deleteServiceSuccess = createAction('DELETE_SERVICE_SUCCESS');

/* User (administration) API */
export const loadedUsers = createAction('LOADED_USERS');
export const loadedUser = createAction('LOADED_USER');
export const createUserSuccess = createAction('CREATE_USER_SUCCESS');
export const editUserSuccess = createAction('EDIT_USER_SUCCESS');
export const deleteUserSuccess = createAction('DELETE_USER_SUCCESS');
