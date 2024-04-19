<template>
    <footer class=" bg-gray-800 text-gray-300 p-5  ">
        <p id="Rights" class="container mx-auto text-center ">
            {{ year }} &copy; Amine Triki || All Rights Reserved    
        </p>
    </footer>
    
</template>


<script>
export default {
    name : 'AppFooter' ,
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
}

</script>