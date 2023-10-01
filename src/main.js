import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faGithub, faInstagram, faYoutube, faFacebook, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot,  } from '@fortawesome/free-solid-svg-icons'
import {  faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(faUserSecret)

library.add(faGithub, faInstagram, faYoutube, faFacebook, faLinkedin, faLocationDot, faEnvelope, faUser)




const app = createApp(App)


// //
.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
