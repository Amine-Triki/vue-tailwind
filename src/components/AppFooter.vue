<template>
    <footer class=" bg-gray-800 text-gray-300 p-5  ">
        <p id="Rights" class="container mx-auto text-center "> </p>
    </footer>
    
</template>


<script>
export default {
    name : 'AppFooter' ,
    mounted(){
    let year = new Date().getFullYear();
document.getElementById("Rights").innerHTML = `${year} &copy Amine Triki || All Rights Reserved`;
}
}

</script>