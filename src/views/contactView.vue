<template>
  <main>
    <section class=" text-center pt-5 pb-5" id="Contact">
  <div class="container mx-auto">
    <div class="main-title mt-5 mb-5 relative">
      <h2 class="text-3xl my-5">Contact Me </h2>
      <p class="text-xl">Get in touch</p>
    </div>
    <div id="flex" class="flex  justify-center  mt-20">
      <div id="touch">
          <div class="text-start mt-4">
            <h3 class="text-lg font-semibold">
                Get in touch 
            </h3>
            <p class="mt-4">
                If you have any questions or proposals, you can simply write to us.<br> We will answer you as soon as possible.
            </p>
        </div>
        <div class="text-start  flex  justify-start items-center mt-4">
          <font-awesome-icon icon="fa-regular fa-user"  style=" margin-right: 10px;" />
            <div  class="head">
                <span><b>Name :</b></span>
                <span>Amine Triki</span>
            </div>
        </div>
        <div class="text-start  flex  justify-start items-center mt-4">
          <font-awesome-icon icon="fa-solid fa-location-dot" style=" margin-right: 10px;"/>
            <div class="head">
                <span><b>Address :</b></span>
                <span>Sakiet Ezzit , Sfax , Tunisia</span>
            </div>
        </div>
        <div class="text-start  flex  justify-start items-center mt-4">
          <font-awesome-icon icon="fa-regular fa-envelope" style=" margin-right: 10px;"/>
            <div  class="head">
                <span><b>Email :</b></span>
                <span>Contact@aminetriki.com.tn</span>
            </div>
        </div>
      </div>

      <form class="container mx-auto mb-5 text-start mt-4" >
                <div class="flex flex-col mb-4 sm:w-2/4 md:w-7/12 xl:w-2/3 2xl:w-3/4">
          <label for="first-name">first name </label>
          <input type="text" class="border px-2 py-1 rounded-md" id="first-name" placeholder="first name">
        </div>
        <div class="flex flex-col mb-4 sm:w-2/4 md:w-7/12 xl:w-2/3 2xl:w-3/4">
          <label for="last-name">last name </label>
          <input type="text" class="border px-2 py-1 rounded-md" id="last-name" placeholder="Last name">
        </div>
        <div class="flex flex-col mb-4 sm:w-2/4 md:w-7/12 xl:w-2/3 2xl:w-3/4">
            <label for="inputEmail4">Email</label>
            <input type="email" class="border px-2 py-1 rounded-md" id="inputEmail4" placeholder="Email">
          </div>
        <div class="flex flex-col mb-4 sm:w-2/4 md:w-7/12 xl:w-2/3 2xl:w-3/4">
          <label for="subject">subject </label>
          <input type="text" class="border px-2 py-1 rounded-md" id="subject" placeholder="subject">
        </div>
        <button type="submit" class="bg-gray-300 py-2 px-3 rounded-lg">Send</button>
      </form>

    </div>
  </div>
</section>
  </main>
</template>


<style>

/*  start contact */
form , #touch{ 
    flex: 1;
}
@media  (max-width: 992px) {
    #flex {
        flex-direction: column;
    }
}

/*end contact */

</style>