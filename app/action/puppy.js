const apiURL = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan';

function parseJson(r) {
  return r.json();
}

export function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data
  };
}

export function findAll() {
  return dispatch => fetch(apiURL)
  .then(parseJson)
  .then((response) => {
    dispatch(findAllComplete(response));
  });
}
