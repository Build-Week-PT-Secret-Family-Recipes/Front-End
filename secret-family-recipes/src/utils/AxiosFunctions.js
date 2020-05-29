import AxiosWithAuth from './AxiosWithAuth';

// function getRecipe(id) {
//   AxiosWithAuth()
//     .get(`/recipes/${id}`)
//     .then(res => setRecipe(res.data))
//     .catch(err => console.log('RecipeError:', err));
// }
const getUsers = e => {
  e.preventDefault();
  AxiosWithAuth.get('users')
    .then(res => console.log(res))
    .catch(err => console.log('User Get Err:', err));
};
const deleteRecipe = (e, id) => {
  e.preventDefault();
  AxiosWithAuth()
    .delete(`recipes/${id}`)
    .then(res => console.log(res.data))
    .catch(err => console.log('Delete Error: ', err));
};
export { deleteRecipe };
