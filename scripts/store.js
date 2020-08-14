import item from './item.js'

const items = [];
const hideCheckedItems = false;

function findById(id){
  return items.find(function(foundItem){
    return foundItem.id == id;
  })
}

function addItem(name){
  try {
    item.validateName(name);
    let thisItem=item.createName(name);
    items.push(thisItem);
  } catch(error){
    console.log(error.message);
  }
}

function findAndToggleChecked(id){
  let check = this.findById(id)
  check.checked = !check.checked;

  // if (this.findById(id).checked == true){
  //   this.findById(id).checked = false
  // } else {
  //   this.findById(id).checked = true
  // }
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
  //let deleteItem = this.findById(id);
  let deleteIndex = items.findIndex(item => item.id == id);
  // let deleteIndex = items.map(item => item.id).indexOf(id);
  items.splice(deleteIndex, 1);
}
function toggleCheckedFilter(){
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter,
};


