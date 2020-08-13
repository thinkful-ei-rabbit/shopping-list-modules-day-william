import item from './item.js'

const items = [];
const hideCheckedItems = false;

function findById(id){
  return items.find(function(bob){
    bob.id == id;
  })
}

function addItem(name){
  try {
    item.validateName(name);
    let thisItem=item.createName(name);
    this.items.push(thisItem);
  } catch(error){
    console.log(error.message);
  }
}

function findAndToggleChecked(id){
  if (this.findById(id).checked == true){
    this.findById(id).checked = false
  } else {
    this.findById(id).checked = true
  }
}

function findAndUpdateName(id, newName){
  try {
    item.validateName(newName);
    this.findById(id).name = newName;
  }
  catch(error){
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id){
  let deleteItem = this.findById(id);
  this.items.filter(function(newArray){
    newArray != deleteItem
  })
}



export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};


