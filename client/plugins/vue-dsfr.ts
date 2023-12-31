import VueDsfr from '@gouvminint/vue-dsfr';

import {
  RiCloseLine,
  RiFlagLine,
  RiHome2Line,
  RiRefreshLine,
  RiBallPenLine,
  RiDeleteBin5Fill,
  RiArticleLine,
  RiGroupLine,
  RiLogoutBoxRLine,
  GiFrance,
  RiArrowRightLine,
  RiMore2Fill,
  RiSunFill,
  RiLoader4Line,
  RiCalendarFill,
  RiArrowLeftLine,
  RiSettings3Line,
  RiEdit2Fill,
  RiEyeFill
} from "oh-vue-icons/icons";

const icons = [
  RiCloseLine,
  RiFlagLine,
  RiHome2Line,
  RiRefreshLine,
  RiBallPenLine,
  RiDeleteBin5Fill,
  RiArticleLine,
  RiGroupLine,
  RiLogoutBoxRLine,
  GiFrance,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiSettings3Line,
  RiMore2Fill,
  RiSunFill,
  RiLoader4Line,
  RiCalendarFill,
  RiEdit2Fill,
  RiEyeFill
];

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDsfr, { icons });
});
