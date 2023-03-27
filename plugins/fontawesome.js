// ~/plugins/fontawesome.js
import Vue from 'vue'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, faBars, faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faBars, faXmark, faCaretDown)
dom.watch()