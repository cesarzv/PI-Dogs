const initialState = {
  dogs: [],
  copyDogs: [],
  temperaments: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_DOGS':
      return {
        ...state,
        dogs: action.payload,
        copyDogs: action.payload,
      };
    case 'GET_TEMPERAMENTS':
      return {
        ...state,
        temperaments: action.payload,
      };
    case 'FILTER_BY_TEMPERAMENT':
      const allDogs = state.copyDogs;
      const tempFilter =
        action.payload === 'All'
          ? allDogs
          : allDogs.filter((d) => d.temperament?.includes(action.payload));
      return {
        ...state,
        dogs: tempFilter,
      };
    case 'FILTER_CREATED':
      const createdFilter =
        action.payload === 'Created'
          ? state.copyDogs.filter((d) => typeof d.id === 'string')
          : state.copyDogs.filter((d) => typeof d.id === 'number');

      return {
        ...state,
        dogs: action.payload === 'All' ? state.copyDogs : createdFilter,
      };
    case 'SORT_BY_NAME':
      const sortDogs =
        action.payload === 'asc'
          ? state.copyDogs.sort((a, b) => {
              if (a.name < b.name) {
                return -1; //indica que a.name va antes que b.name
              }
              if (a.name > b.name) {
                return 1; //indica que a.name va despues que b.name
              }
              return 0; // indica que ambos son iguales y no cambian de lugar
            })
          : state.copyDogs.sort((a, b) => {
              if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortDogs,
      };
    case 'SORT_BY_WEIGHT':
      const sortWeight =
        action.payload === 'wAsc'
          ? state.copyDogs.sort((a, b) => {
              console.log(state.copyDogs);
              let pesoA = a.weight.metric.split(' - ')[0];
              let pesoB = b.weight.metric.split(' - ')[0];
              if (isNaN(pesoA) || isNaN(pesoB)) {
                return -1;
              }
              if (parseInt(pesoA) > parseInt(pesoB)) {
                return 1;
              }
              if (parseInt(pesoA) < parseInt(pesoB)) {
                return -1;
              }
              return 0;
            })
          : state.copyDogs.sort((a, b) => {
              let pesoA = a.weight.metric.split(' - ')[0];
              let pesoB = b.weight.metric.split(' - ')[0];
              if (isNaN(pesoA) || isNaN(pesoB)) {
                return -1;
              }
              if (parseInt(pesoA) > parseInt(pesoB)) {
                return -1;
              }
              if (parseInt(pesoA) < parseInt(pesoB)) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortWeight,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
