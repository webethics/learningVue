<template>
  <div id="app">
 <header>   
<b-container class="top-header">
  <b-row>
    <b-col>
      <div class="logo"><img src="./assets/images/logo.png"></div>
        <b-nav class="align-items-center">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>          
        <b-nav-item href="#">
         <svg id="account" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path id="Path_1" data-name="Path 1" d="M20,10A10,10,0,1,0,10,20,9.994,9.994,0,0,0,20,10ZM10,1.172a8.829,8.829,0,0,1,7.316,13.77,10,10,0,0,0-14.633,0A8.829,8.829,0,0,1,10,1.172ZM3.415,15.879a8.826,8.826,0,0,1,13.171,0A8.82,8.82,0,0,1,3.415,15.879Zm0,0" fill="#666"/>
          <path id="Path_2" data-name="Path 2" d="M169.516,69.2a3.52,3.52,0,0,0,3.516-3.516V64.516a3.516,3.516,0,0,0-7.031,0v1.172A3.52,3.52,0,0,0,169.516,69.2Zm-2.344-4.687a2.344,2.344,0,0,1,4.688,0v1.172a2.344,2.344,0,0,1-4.687,0Zm0,0" transform="translate(-159.516 -58.617)" fill="#666"/>
        </svg>
        MY ACCOUNT</b-nav-item>
        <b-nav-item href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.34" viewBox="0 0 20 17.34">
          <g id="shopping-cart_3_" data-name="shopping-cart(3)" transform="translate(0 0)">
            <path id="Path_3" data-name="Path 3" d="M6.444,11.228H17.07a.583.583,0,0,0,.563-.407l2.344-7.859a.543.543,0,0,0-.1-.492.6.6,0,0,0-.468-.223H5.092L4.673.44A.581.581,0,0,0,4.1,0H.586A.574.574,0,0,0,0,.562a.574.574,0,0,0,.586.561H3.631l2.115,9.121a1.686,1.686,0,0,0-1.06,1.545,1.724,1.724,0,0,0,1.758,1.684H17.07a.562.562,0,1,0,0-1.123H6.445a.562.562,0,1,1,0-1.123ZM18.637,3.368,16.628,10.1H6.915L5.353,3.368Zm0,0" fill="#666"/>
            <path id="Path_4" data-name="Path 4" d="M150,361.934A1.934,1.934,0,1,0,151.934,360,1.936,1.936,0,0,0,150,361.934Zm1.934-.645a.645.645,0,1,1-.645.645A.645.645,0,0,1,151.934,361.289Zm0,0" transform="translate(-144.266 -346.527)" fill="#666"/>
            <path id="Path_5" data-name="Path 5" d="M362,361.934A1.934,1.934,0,1,0,363.934,360,1.936,1.936,0,0,0,362,361.934Zm1.934-.645a.645.645,0,1,1-.645.645A.645.645,0,0,1,363.934,361.289Zm0,0" transform="translate(-348.445 -346.527)" fill="#666"/>
          </g>
        </svg>       
          Cart</b-nav-item>
        <b-nav-item href="#">
        <svg id="account" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path id="Path_1" data-name="Path 1" d="M20,10A10,10,0,1,0,10,20,9.994,9.994,0,0,0,20,10ZM10,1.172a8.829,8.829,0,0,1,7.316,13.77,10,10,0,0,0-14.633,0A8.829,8.829,0,0,1,10,1.172ZM3.415,15.879a8.826,8.826,0,0,1,13.171,0A8.82,8.82,0,0,1,3.415,15.879Zm0,0" fill="#666"/>
          <path id="Path_2" data-name="Path 2" d="M169.516,69.2a3.52,3.52,0,0,0,3.516-3.516V64.516a3.516,3.516,0,0,0-7.031,0v1.172A3.52,3.52,0,0,0,169.516,69.2Zm-2.344-4.687a2.344,2.344,0,0,1,4.688,0v1.172a2.344,2.344,0,0,1-4.687,0Zm0,0" transform="translate(-159.516 -58.617)" fill="#666"/>
        </svg>
          CHECKOUT</b-nav-item>
      </b-nav>
    </b-col>
  </b-row>
</b-container>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container>
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Featured Products</b-nav-item>
        <b-nav-item href="#">Government</b-nav-item>
        <b-nav-item href="#">Shop</b-nav-item>
        <b-nav-item href="#">Why Buy From Goat’s Beard?</b-nav-item>
        <b-nav-item href="#">Our Manufacturers </b-nav-item>
        <b-nav-item href="#">About Us</b-nav-item>
        <b-nav-item href="#">Contact Us</b-nav-item>
      </b-navbar-nav>


    </b-collapse>
    </b-container>
  </b-navbar>
</div>
 </header>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
