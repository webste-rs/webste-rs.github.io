<template>
  <div class="p-products">
    <div class="b-products__list">
      <div 
        class="o-product"
        v-for="product in products" >
        <nuxt-link :to="product.slug">{{ product.name }}</nuxt-link> 
        <button @click="addCart(product.id, 1)">ADD TO CART</button>  
        <button @click="removeCart(product.id, 1)">REMOVE FROM CART</button>            
      </div>
    </div>
    <div class="payment">
      <button @click="submitPayment">PAY</button> 
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters  } from "vuex"

export default {
  name: 'app',
  methods: {
    ...mapActions({ 
      setProducts: "setProducts", 
      isLocalCart: "isLocalCart", 
      removeFromCart: "removeFromCart" 
    }),
    addCart(product_id, quantity) {
      const checkId = obj => obj.id === product_id;
      const currentProducts = [...this.products];

      if (this.getLocalCart.some(checkId)) {
        alert('The item you are trying to add is already in your cart!');
        return false;
      } else {
        const newCart = currentProducts.filter((product, productIndex) => {
            return product.id === product_id
        })
        this.$store.commit("setLocalCart", [...this.getLocalCart, ...newCart]);
      }

      const data = JSON.stringify({
        // "billing": {
        //   "first_name": "John",
        //   "last_name": "Doe",
        //   "address_1": "969 Market",
        //   "address_2": "",
        //   "city": "San Francisco",
        //   "state": "CA",
        //   "postcode": "94103",
        //   "country": "US",
        //   "email": "john.doe@example.com",
        //   "phone": "(555) 555-5555"
        // },
        // "shipping": {
        //   "first_name": "John",
        //   "last_name": "Doe",
        //   "address_1": "969 Market",
        //   "address_2": "",
        //   "city": "San Francisco",
        //   "state": "CA",
        //   "postcode": "94103",
        //   "country": "US"
        // },
        line_items: [
          {
            product_id: product_id,
            quantity: quantity
          },
        ],
      });
      // this.getLocalCart();
      // this.$axios.post('https://beautyqueen.rs/este/wp-json/wc/v3/orders', data, {
      //   credientials: true,
      //   auth: {
      //     username: 'ck_ef3591c22d7d0ed689bd78c91bc05cf3ceaa6f2d',
      //     password: 'cs_96d3684b4a7cc665f551de8fbd5b8f31f5b99010'
      //   }
      // })
      // .then((response) => {
      //   console.log(response.data);
      // })
      // .catch((error) => {
      //   console.log(error.response.data);
      // });
    },
    removeCart(product_id, quantity){
      const payload = {
        product_id,
        quantity
      }
      this.removeFromCart(payload);
    },
    submitPayment(){
      const line_items = this.getLocalCart.map(item => {
        return {
          product_id: item.id,
          quantity: 1
        }
      });
      let orderData = JSON.stringify({
        // set_paid: false,
        // billing: {
        //   first_name: firstName,
        //   last_name: lastName,
        //   postcode: postal,
        //   email: email
        // },
        line_items: line_items
      })
      console.log(line_items)

      this.$axios.post('https://beautyqueen.rs/este/wp-json/wc/v3/orders', orderData, {
        credientials: true,
        auth: {
          username: 'ck_ef3591c22d7d0ed689bd78c91bc05cf3ceaa6f2d',
          password: 'cs_96d3684b4a7cc665f551de8fbd5b8f31f5b99010'
        }
      })
      .then((response) => {
        // console.log(response.data);
        console.log('Process order', response)
        // setPending(true)
        // setOrder(response.data)
        // return response
      })
      .then(response => {
          // console.log('Send order id', response.data.id)
          this.paymentSubmit({
            order_id: response.data.id,
            token: token
          })
      })
      .catch(err => {
        console.log('AXIOS ERROR processOrder: ', err)
      })
      
    },
    paymentSubmit(){
    //   alert('este')
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.setProducts();
      this.isLocalCart();
    })
  },
  computed: {
    ...mapGetters(['getLocalCart']),
    products() {
      let productsAll = this.$store.getters.getProducts;
      return productsAll;
    }
  }

}
</script>
