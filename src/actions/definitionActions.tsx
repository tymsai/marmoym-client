import axios from 'axios';
import * as Immutable from 'immutable';

import apis from '@src/apis'
import ActionType from './ActionType';
import Definition from '@src/models/Definition';

const definitions = [
  {
    id: 1,
    term: '실화니1',
    label: '실화니?의 뜻',
    pos: '명사',
    usage: '민수 차 산거 실화니?',
    media: 'link/to/image',
    origin: '아프리카 철구 방송',
    badges: ['hot', 'top']
  },
  {
    id: 2,
    term: '실화니2',
    label: '실화니?의 뜻',
    pos: '명사',
    usage: '민수 차 산거 실화니?',
    media: 'link/to/image',
    origin: '아프리카 철구 방송',
    badges: ['hot', 'top']
  }
];

const def = { 
  term: '실화니3',
  label: '실화니?의 뜻',
  pos: '명사',
  usage: '민수 차 산거 실화니?',
  media: 'link/to/image',
  origin: '아프리카 철구 방송',
  badges: ['hot', 'top']
};

export const requestGetDefinitions = () => (dispatch, getState) => {
  dispatch({
    type: ActionType.GET_DEFINITIONS
  });

  dispatch(requestGetDefinitionsSuccess(definitions));
  
  // TODO: later we transfer data via axios when API is ready.
  // axios.put(apis.ADD_TERM)
  //   .then(res => {
  //     console.log(1, res)
  //     dispatch(requestGetTermsSuccess(res.data))
  //   })
  //   .catch(err => {
  //     dispatch(requestGetTermsError(err))
  //   });
};

export const requestGetDefinitionsSuccess = (definitions) => ({
  type: ActionType.GET_DEFINITIONS_SUCCESS,
  payload: definitions
});

export const requestGetDefinitionsError = (err) => ({
  type: ActionType.GET_DEFINITIONS_ERROR
});

export const requestAddDefinition = () => (dispatch, getState) => {
  dispatch({
    type: ActionType.TEMP,
    payload: def
  });
}

export const removeDefinition = () => (dispatch, getState) => {
  dispatch({
    type: ActionType.REMOVE_DEFINITION
  });
};