import VueDsfr from '@gouvminint/vue-dsfr'

import {
  RiCloseLine,
  RiFlagLine,
  RiHome2Line,
  RiRefreshLine,
  RiBallPenLine,
  RiDeleteBin5Line,
  RiArticleLine,
  RiGroupLine,
  RiLogoutBoxRLine,
  GiFrance,
  RiArrowRightLine,
  RiMore2Fill,
  RiSunFill,
  RiLoader4Line
} from "oh-vue-icons/icons";

const icons = [
  RiCloseLine,
  RiFlagLine,
  RiHome2Line,
  RiRefreshLine,
  RiBallPenLine,
  RiDeleteBin5Line,
  RiArticleLine,
  RiGroupLine,
  RiLogoutBoxRLine,
  GiFrance,
  RiArrowRightLine,
  RiMore2Fill,
  RiSunFill,
  RiLoader4Line
]

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDsfr, { icons })
})
