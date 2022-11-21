import axios from 'axios';

export function getDogs() {
  return async function (dispatch) {
    let response = await axios.get('http://localhost:3001/dogs');
    return dispatch({
      type: 'GET_DOGS',
      payload: response.data,
    });
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    let response = await axios.get('http://localhost:3001/temperaments');
    return dispatch({
      type: 'GET_TEMPERAMENTS',
      payload: response.data,
    });
  };
}

export function filterDogsByTemperament(payload) {
  return {
    type: 'FILTER_BY_TEMPERAMENT',
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: 'FILTER_CREATED',
    payload,
  };
}

export function sortByName(payload) {
  return {
    type: 'SORT_BY_NAME',
    payload,
  };
}

export function sortByWeight(payload) {
  return {
    type: 'SORT_BY_WEIGHT',
    payload,
  };
}
