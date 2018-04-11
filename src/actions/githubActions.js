import GithubApi from '../api/mockGithubApi';
import * as types from './actionTypes';
import { beginAjaxCall } from "./ajaxStatusActions";

export function loadLanguagesSuccess(languages) {
  return {type: types.LOAD_LANGUAGES_SUCCESS, languages};
}

export function loadLanguages(username,reponame) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return GithubApi.getLanguages(username,reponame).then(languages => {
      dispatch(loadLanguagesSuccess(languages));
    }).catch(error => {
      throw(error);
    });
  };
}
