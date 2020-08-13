function validateName(name){
  if (!name){
    throw new TypeError('Name must not be blank.');
  }
}

function create(name){
  this.id=cuid();
  this.name=name;
  this.checked=false;
}

export default {
  validateName,
  create,
};