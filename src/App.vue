<script setup>
import { ref, onMounted } from 'vue'
import { computed } from 'vue'



const product = ref( 
 {
  brand: 'Vue',
  productName: 'socks',
  image: new URL('./assets/images/socks_blue.jpg', import.meta.url).href,
  premium: false,
  // image: './assets/images/socks_blue.jpg',
  color: 'green',
  selectedVariant: 0,
  description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sostrud exercitation ullamco laboris nisi.',
  details: ['30% wool', '50% cotton', '20% polyester'],
  variants: [
    {id: 3838, color: 'blue', image: new URL('./assets/images/socks_blue.jpg', import.meta.url).href,  quantity: 0},
    {id: 2929, color: 'green',  image: new URL('./assets/images/socks_green.jpg', import.meta.url).href, quantity: 50}
  ],
  sizes: ['36-39', '39-42', '42-45'],
 }
)

const selectedVariant = ref()

const title = computed(() => {
      return product.value.brand + ' ' + product.value.productName;
    });

const setVariant = (variant) => {
  selectedVariant.value = variant
};


  const inStock = computed(() => {
    return selectedVariant.value?.quantity > 0 ? true : false
  });

  onMounted(()=> {
    selectedVariant.value = product.value.variants[0]
  })

const cart = ref([])


const addToCart = () => {
  cart.value.push(selectedVariant.value.id)
  console.log(cart);
}

const reviewsList = ref([])

const review = ref({
  name: '',
  review: '',
  rating: null
});

const onSubmit = () => {
  validateForm()
  if(!isFormValid.value) {
    return
  }
  let productReview = {
    name: review.value.name,
    review: review.value.review,
    rating: review.value.rating
  }
  addReview(productReview)
  review.value.name = '',
  review.value.review = '',
  review.value.rating = null
}

const addReview = (review) => {
  reviewsList.value.push(review)
}


const errors = ref({

})

const validateForm = () => {
  if(review.value.name === '') {
    errors.value = {
      ...errors.value, 
      name: 'This field is required'
    }
  } else {
    delete errors.value.name
  }

  if(review.value.review === '') {
    errors.value = {
      ...errors.value, 
      review: 'This field is required'
    }
  } else {
    delete errors.value.review
  }

  if(!review.value.rating) {
    errors.value = {
      ...errors.value, 
      rating: 'This field is required'
    }
  } else {
    delete errors.value.rating
  }
  console.log('dupa');
}

const isFormValid = computed(() => {
  // return !!!Object.keys(errors.value).length 
  return Boolean(!Object.keys(errors.value).length)
})

const validateField = (event) => {
  console.log(event);
}

</script>


<template>
  <div class="top">
    <nav class="nav">
    <ul>
      <li>
        <a href="">\_/ CART {{ cart.length }}</a>
      </li>
    </ul>
  </nav>
  </div>
  <div class="product">
    <div class="product-img">
      <img :src="selectedVariant?.image" alt="">
    </div>
    <div class="product-info">
      <h1> {{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p v-if="product.premium" >Free</p>
      <p v-else >$2.99</p>
      <p>{{ product.description }}</p>
      <ul class="ingredients">
        <li v-for="detail in product.details">{{ detail }}</li>
      </ul>
      <ul class="sizes">
        <li v-for="size in product.sizes">{{ size }}</li>
      </ul>
      <div class="product-variants-container">
         <div class="product-variant" v-for="variant in product.variants" :key="variant.id" @mouseover="setVariant(variant)" :style="{ backgroundColor: variant.color}"></div>
      </div>
       <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    </div>
  </div>
  <div class="reviews">
    <div class="reviews-box">
      <h3>Reviews</h3>
      <ul>
        <li v-for="review in reviewsList" >
        {{ review.name }} gave this {{ review.rating }} stars
        <br>
        "{{ review.review }}"
      </li>
      </ul>
    </div>
    <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <div class="form-group">
      <label for="name">Name:</label>
      <input id="name" v-model="review.name" :class="{ 'form-input-error': errors.name }">
      <p class="form-error" v-if="errors.name"> {{ errors.name }}</p>
    </div>

    <div class="form-group">
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review.review" :class="{ 'form-input-error': errors.review }"></textarea>
      <p class="form-error" v-if="errors.review"> {{ errors.review }}</p>
    </div>

    <div class="form-group">
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="review.rating" :class="{ 'form-input-error': errors.rating }">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
      <p class="form-error" v-if="errors.rating"> {{ errors.rating }}</p>
    </div>
    <button class="submit-btn" type="submit">Submit</button>
  </form>
    
  </div>
</template>

<style scoped>
.top {
  display: flex;
  justify-content: flex-end;
}
li {
  list-style: none;
}
h1 {
  margin: 0;
  color: white;
  text-align: left;
}
p {
  color: white;
  text-align: left;
}

.product-img img{
  width: 80%;
}
.product {
  display: flex;
  justify-content: space-between;
  margin-top: 140px;
}
.sizes {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
}
.ingredients {
  text-align-last: left;
}
.sizes li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 40px;
  padding: 5px;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }
}
.ingredients li {
  list-style: circle;
}

.product-variants-container {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}
.product-variant {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 1px solid whitesmoke;
  border-radius: 50%;
  font-size: 15px;
  cursor: pointer;
}
.add-to-cart {
  width: 100%;
  margin-top: 40px;
}
nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 40px;
  padding: 3px 10px;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  color: whitesmoke;

  transition: all 0.25s;

  &:hover {
    border-color: #646cff;
    color: #646cff;
  }
}

.reviews {
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.submit-btn {
  margin-top: 40px;
  border-color: grey;
  transition: all .3s;

  &:hover {
    border-color: #646cff;
  }
}

form, .reviews-box {
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 30px;
  margin-bottom: 100px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #1a1a1a;
}

label {
  padding: 10px 0;
  text-align: left;
  display: block;
}
input, textarea, select {
  border: transparent;
  border-radius: 2px;
  height: 30px;
  width: 100%;
}

textarea {
  max-height: 80px;
  max-width: 99%;
  min-width: 99%;
}
h3 {
  font-size: 1.8em;
}

.form-input-error {
  border: 1px solid red;
}

.form-error {
  color: red;
}
</style>