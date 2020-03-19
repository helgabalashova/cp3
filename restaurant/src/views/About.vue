<template>
  <div class="about">
    <h2>Welcome to Villa Restaurant</h2>
    <p>Villa Restaurant was founded with one store, one family and one concept in 1964, 
    when our founder, Michele Scotto brought his authentic old-world recipes from Naples, 
    Italy to New York City. Michele’s commitment to hospitality, quality ingredients, 
    like homemade dough, 100% whole milk mozzarella and fresh sauce and the strict loyalty 
    to those now famous recipes, built the business. From that first Villa Pizza that opened in 1964, 
    next to the CBS/Ed Sullivan Theater on Broadway, to over 225 Villa Restaurants later, 
    our commitment to quality and genuine hospitality remains the basis of our foundation.</p>
    <h2>Gallery</h2>
    <div class="gallery">
    <img src="../../public/images/gallery/villa-1.jpeg">
    <img src="../../public/images/gallery/villa-2.jpeg">
    <img src="../../public/images/gallery/villa-3.jpeg">
    <img src="../../public/images/gallery/villa-4.jpeg">
    <img src="../../public/images/gallery/villa-5.jpeg">
    <img src="../../public/images/gallery/villa-6.jpeg">
    </div>
  </div>
</template>
<style>
  .about {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    column-gap: 20px;
    row-gap: 20px;
  }
  .gallery img {
    max-width: 100%;
  }
</style>