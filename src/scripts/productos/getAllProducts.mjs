const addToCart =async (id) => {
    try{

        const res = await fetch(`https://dummyjson.com/product/${id}`)
        const data = await res.json()

        const usuarioLoged = JSON.parse(localStorage.getItem('stateLogin'))
        usuarioLoged.user.cart.push(data)

        localStorage.setItem('stateLogin', JSON.stringify(usuarioLoged))
        
    }catch(e){

    }
}

export const getAllProducts =async () => {

    try{

        const res = await fetch('https://dummyjson.com/products')
        const { products } = await res.json();

        products.forEach(product => {
            
            document.querySelector('#products').innerHTML += `
            <div class="card">
            <div class="image_container">
            </div>
            <div class="title">
              <span>${product.title}</span>
            </div>
            <div class="size">
              <span>Size</span>
              <ul class="list-size">
                <li class="item-list"><button class="item-list-button">37</button></li>
                <li class="item-list"><button class="item-list-button">38</button></li>
                <li class="item-list"><button class="item-list-button">39</button></li>
                <li class="item-list"><button class="item-list-button">40</button></li>
                <li class="item-list"><button class="item-list-button">41</button></li>
              </ul>
            </div>
            <div class="action">
              <div class="price">
                <span>$${product.price}</span>
              </div>
              <button id="btn-product-id" data-id=${product.id} class="cart-button">
                <svg
                  class="cart-icon"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <span>Add to cart</span>
              </button>
            </div>
          </div>
          
            `
        });

        const buttons = document.querySelectorAll('#btn-product-id')
        
        buttons.forEach( btn => {
            btn.addEventListener('click', () => {
                addToCart(btn.dataset.id)
            })
        })

    }catch(e){

    }

}