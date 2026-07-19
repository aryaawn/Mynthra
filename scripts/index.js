console.log("I am insise index.js")
let bagItems = []; // using for cart storage
onLoad();
function addToBag(itemId){
  bagItems.push(itemId);
  bagItemCount();

  }

function onLoad(){
    let bagItemsstr = localStorage.getItem('bagItems')
    bagItems = bagItemsstr ? JSON.parse(bagItemsstr) : [];
    displatItems();
    bagItemCount();
}
displatItems();
function displatItems(){
  // we dont need to use it in bags page so that we do is that if the lement is nt found we will not use this fuction
  let itemsContainerElement = document.querySelector('.items-container');
  if(itemsContainerElement === null) return;
  let innerHtml = '';
  items.forEach(item => {
    innerHtml+=`
<div class="item-container">
    <img src="${item.image}" class="item-image">

    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>

    <div class="company-name">
        ${item.company}
    </div>

    <div class="item-name">
        ${item.item_name}
    </div>

    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>

    <button class="button-add"
        onclick="addToBag('${item.id}')">
        Add to Bag
    </button>
</div>
  `
  })
  itemsContainerElement.innerHTML = innerHtml;}

  function bagItemCount(){
    let count = document.querySelector(".bag-items-count")
    localStorage.setItem('bagItems', JSON.stringify(bagItems))
    count.innerText = bagItems.length;
  }