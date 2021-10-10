function makeFriendsList(friends) {
  let list = document.createElement('UL');
  for (let friend of friends) {
    let listItem = document.createElement('LI');
    listItem.innerHTML = `${friend.firstName} ${friend.lastName}`; 
    list.appendChild(listItem);
  }
  return list;
}
