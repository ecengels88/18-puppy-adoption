const apiURL = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ecengels88';
const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

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

export function findOneComplete(data = {}) {
  return {
    type: 'PUPPY@FINDONE_COMPLETE',
    data
  };
}

export function findOne(id) {
  return dispatch => fetch(`${apiURL}/${id}`).then(parseJson)
      .then((response) => {
        dispatch(findOneComplete(response));
      });
}

export function createComplete(data = {}) {
  return {
    type: 'PUPPY@CREATE_COMPLETE',
    data
  };
}

export function create(formData) {
  return dispatch => fetch(apiURL, {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(formData),
  }).then(parseJson)
    .then((puppy) => {
      dispatch(createComplete(puppy));
    });
}

export function updateComplete(data = {}) {
  return {
    type: 'PUPPY@UPDATE_COMPLETE',
    data
  };
}

export function update(id, formData) {
  return dispatch => fetch(`${apiURL}/${id}`, {
    method: 'PUT',
    headers: jsonHeaders,
    body: JSON.stringify(formData),
  }).then(parseJson)
    .then((puppy) => {
      dispatch(updateComplete(puppy));
    });
}

export function toggleAdopted(puppy) {
  return update(puppy.id, { ...puppy, adopted: !puppy.adopted });
}
