<template>
  <div
    class="icon"
    :class="this.color"
    :id="id"
  >
    <svg :id="id" v-if="this.size == 'sm'" width="16" height="16" viewBox="0 0 24 24" fill="none" v-html="chosenIcon" xmlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == 'middle'" width="20" height="20" viewBox="0 0 24 24" fill="none" v-html="chosenIcon" xmlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == '32'" width="32" height="32" viewBox="0 0 24 24 " fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == 'large'" width="36" height="36" viewBox="0 0 24 24 " fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == '48'" width="48" height="48" viewBox="0 0 24 24 " fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == 'lo'" width="20" height="24" viewBox="0 0 28 24" fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == 'custom'" :width="width" :height="height" :viewBox="'0 0 '+(viewboxW||width)+' '+(viewboxH||height)" fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else width="24" height="24" viewBox="0 0 24 24 " fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
  </div>
</template>

<script>
export default {
  name: 'chosenIcon',

  data() {
    return {
      icons: {
        calendar: `
          <path d="M8 2V5" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 2V5" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M3.5 9.09009H20.5" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M15.6947 13.7H15.7037" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M15.6947 16.7H15.7037" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M11.9955 13.7H12.0045" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M11.9955 16.7H12.0045" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M8.29431 13.7H8.30329" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M8.29431 16.7H8.30329" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        search: `
          <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M22 22L20 20" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        phone: `
          <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10"/>
          <path opacity="0.4" d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M22 9C22 5.13 18.87 2 15 2" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        clock: `
          <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="${ this.color || '#A4ABBD'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.7099 15.18L12.6099 13.33C12.0699 13.01 11.6299 12.24 11.6299 11.61V7.51001" stroke="${ this.color || '#A4ABBD'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        closeCircle: `
          <path d="M6 18L18 6" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18 18L6 6" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        closeFilled: `
          <path d="M12 22.5C17.775 22.5 22.5 17.775 22.5 12C22.5 6.225 17.775 1.5 12 1.5C6.225 1.5 1.5 6.225 1.5 12C1.5 17.775 6.225 22.5 12 22.5Z" fill="white"/>
          <path d="M9.16992 14.8299L14.8299 9.16992" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.8299 14.8299L9.16992 9.16992" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        searchClose: `
          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.16992 14.8299L14.8299 9.16992" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.8299 14.8299L9.16992 9.16992" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        dislike:`
          <path opacity="0.4" d="M16.5197 5.65039L13.4197 3.25039C13.0197 2.85039 12.1197 2.65039 11.5197 2.65039H7.71973C6.51973 2.65039 5.21973 3.55039 4.91973 4.75039L2.51973 12.0504C2.01973 13.4504 2.91973 14.6504 4.41973 14.6504H8.41973C9.01973 14.6504 9.51973 15.1504 9.41973 15.8504L8.91973 19.0504C8.71973 19.9504 9.31973 20.9504 10.2197 21.2504C11.0197 21.5504 12.0197 21.1504 12.4197 20.5504L16.5197 14.4504" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10"/>
          <path d="M21.6198 5.65049V15.4505C21.6198 16.8505 21.0198 17.3505 19.6198 17.3505H18.6198C17.2198 17.3505 16.6198 16.8505 16.6198 15.4505V5.65049C16.6198 4.25049 17.2198 3.75049 18.6198 3.75049H19.6198C21.0198 3.75049 21.6198 4.25049 21.6198 5.65049Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        download: `
          <path d="M16.4405 8.90039C20.0405 9.21039 21.5105 11.0604 21.5105 15.1104V15.2404C21.5105 19.7104 19.7205 21.5004 15.2505 21.5004H8.74047C4.27047 21.5004 2.48047 19.7104 2.48047 15.2404V15.1104C2.48047 11.0904 3.93047 9.24039 7.47047 8.91039" stroke="${this.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 2V14.88" stroke="${this.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.3504 12.6504L12.0004 16.0004L8.65039 12.6504" stroke="${this.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `
        ,
        upload: `
          <path d="M9.5 11V17L11.5 15" stroke="${this.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.5 17L7.5 15" stroke="${this.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.5 10V15C22.5 20 20.5 22 15.5 22H9.5C4.5 22 2.5 20 2.5 15V9C2.5 4 4.5 2 9.5 2H14.5" stroke="${this.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.5 10H18.5C15.5 10 14.5 9 14.5 6V2L22.5 10Z" stroke="${this.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        driver: `
          <path d="M19.32 10H4.69002C3.21002 10 2.01001 8.79002 2.01001 7.32002V4.69002C2.01001 3.21002 3.22002 2.01001 4.69002 2.01001H19.32C20.8 2.01001 22 3.22002 22 4.69002V7.32002C22 8.79002 20.79 10 19.32 10Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.32 22H4.69002C3.21002 22 2.01001 20.79 2.01001 19.32V16.69C2.01001 15.21 3.22002 14.01 4.69002 14.01H19.32C20.8 14.01 22 15.22 22 16.69V19.32C22 20.79 20.79 22 19.32 22Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M6 5V7" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M10 5V7" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M6 17V19" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M10 17V19" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M14 6H18" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M14 18H18" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        eye: `
          <path opacity="0.4" d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42004 13.9799 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z" stroke="${this.color||'#A4ABBD'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="${this.color||'#A4ABBD'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        hideEye: `
          <path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke="#413F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.8198 5.77047C16.0698 4.45047 14.0698 3.73047 11.9998 3.73047C8.46984 3.73047 5.17984 5.81047 2.88984 9.41047C1.98984 10.8205 1.98984 13.1905 2.88984 14.6005C3.67984 15.8405 4.59984 16.9105 5.59984 17.7705" stroke="#413F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.41992 19.5297C9.55992 20.0097 10.7699 20.2697 11.9999 20.2697C15.5299 20.2697 18.8199 18.1897 21.1099 14.5897C22.0099 13.1797 22.0099 10.8097 21.1099 9.39969C20.7799 8.87969 20.4199 8.38969 20.0499 7.92969" stroke="#413F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.5104 12.6992C15.2504 14.1092 14.1004 15.2592 12.6904 15.5192" stroke="#413F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.47 14.5293L2 21.9993" stroke="#413F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.0003 2L14.5303 9.47" stroke="#413F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          `
        ,
        pen: `
          <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#413F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.0399 3.01928L8.15988 10.8993C7.85988 11.1993 7.55988 11.7893 7.49988 12.2193L7.06988 15.2293C6.90988 16.3193 7.67988 17.0793 8.76988 16.9293L11.7799 16.4993C12.1999 16.4393 12.7899 16.1393 13.0999 15.8393L20.9799 7.95928C22.3399 6.59928 22.9799 5.01928 20.9799 3.01928C18.9799 1.01928 17.3999 1.65928 16.0399 3.01928Z" stroke="#413F3F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.9102 4.15039C15.5802 6.54039 17.4502 8.41039 19.8502 9.09039" stroke="#413F3F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        glasses: `
          <path opacity="0.4" d="M10 17.5H14" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 15.9101V19.2001C10 21.2001 9.2 22.0001 7.2 22.0001H4.8C2.8 22.0001 2 21.2001 2 19.2001V15.9101C2 13.9101 2.8 13.1101 4.8 13.1101H7.2C9.2 13.1101 10 13.9101 10 15.9101Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 15.9101V19.2001C22 21.2001 21.2 22.0001 19.2 22.0001H16.8C14.8 22.0001 14 21.2001 14 19.2001V15.9101C14 13.9101 14.8 13.1101 16.8 13.1101H19.2C21.2 13.1101 22 13.9101 22 15.9101Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        globus: `
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <g opacity="0.4">
          <path d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>`
        ,
        home: `
          <path d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.34" d="M12 17.99V14.99" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        like: `
          <path opacity="0.4" d="M7.47998 18.3505L10.58 20.7505C10.98 21.1505 11.88 21.3505 12.48 21.3505H16.28C17.48 21.3505 18.78 20.4505 19.08 19.2505L21.48 11.9505C21.98 10.5505 21.08 9.35046 19.58 9.35046H15.58C14.98 9.35046 14.48 8.85046 14.58 8.15046L15.08 4.95046C15.28 4.05046 14.68 3.05046 13.78 2.75046C12.98 2.45046 11.98 2.85046 11.58 3.45046L7.47998 9.55046" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10"/>
          <path d="M2.38 18.3504V8.55039C2.38 7.15039 2.98 6.65039 4.38 6.65039H5.38C6.78 6.65039 7.38 7.15039 7.38 8.55039V18.3504C7.38 19.7504 6.78 20.2504 5.38 20.2504H4.38C2.98 20.2504 2.38 19.7504 2.38 18.3504Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        link: `
          <path d="M3.27 12C2.48 11.05 2 9.83 2 8.5C2 5.48 4.47 3 7.5 3H12.5C15.52 3 18 5.48 18 8.5C18 11.52 15.53 14 12.5 14H10" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M20.73 12C21.52 12.95 22 14.17 22 15.5C22 18.52 19.53 21 16.5 21H11.5C8.48 21 6 18.52 6 15.5C6 12.48 8.47 10 11.5 10H14" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        location: `
          <path opacity="0.4" d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" stroke="#A4ABBD" stroke-width="1.5"/>
          <path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="#A4ABBD" stroke-width="1.5"/>`
        ,
        burgerMenu: `
          <path d="M3 7H21" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round"/>
          <path opacity="0.34" d="M6 12L21 12" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M9 17L21 17" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round"/>`
        ,
        play: `
          <path d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        pause: `
          <path d="M10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3H5.01C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.08 21 10.65 20.46 10.65 19.11Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20.9996 19.11V4.89C20.9996 3.54 20.4296 3 18.9896 3H15.3596C13.9296 3 13.3496 3.54 13.3496 4.89V19.11C13.3496 20.46 13.9196 21 15.3596 21H18.9896C20.4296 21 20.9996 20.46 20.9996 19.11Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        profile: `
          <path opacity="0.4" d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        file:`
          <path d="M21.6698 14.3L21.2698 19.3C21.1198 20.83 20.9998 22 18.2898 22H5.70977C2.99977 22 2.87977 20.83 2.72977 19.3L2.32977 14.3C2.24977 13.47 2.50977 12.7 2.97977 12.11C2.98977 12.1 2.98977 12.1 2.99977 12.09C3.54977 11.42 4.37977 11 5.30977 11H18.6898C19.6198 11 20.4398 11.42 20.9798 12.07C20.9898 12.08 20.9998 12.09 20.9998 12.1C21.4898 12.69 21.7598 13.46 21.6698 14.3Z" stroke="#001E49" stroke-width="1.5" stroke-miterlimit="10"/>
          <path d="M3.5 11.4303V6.28027C3.5 2.88027 4.35 2.03027 7.75 2.03027H9.02C10.29 2.03027 10.58 2.41027 11.06 3.05027L12.33 4.75027C12.65 5.17027 12.84 5.43027 13.69 5.43027H16.24C19.64 5.43027 20.49 6.28027 20.49 9.68027V11.4703" stroke="#001E49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.42969 17H14.5697" stroke="#001E49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        refresh: `
          <path d="M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M21.89 12C21.89 17.52 17.41 22 11.89 22C6.37 22 3 16.44 3 16.44M3 16.44H7.52M3 16.44V21.44" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        zoomIn: `
          <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <g opacity="0.4">
          <path d="M8.5 11H13.5" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11 13.5V8.5" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <path opacity="0.4" d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        zoomOut: `
          <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M8.5 11H13.5" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        share: `
          <path opacity="0.34" d="M16.96 6.16992C18.96 7.55992 20.34 9.76992 20.62 12.3199" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.34" d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.34" d="M8.18994 20.9399C9.34994 21.5299 10.6699 21.8599 12.0599 21.8599C13.3999 21.8599 14.6599 21.5599 15.7899 21.0099" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.06 7.69989C13.5954 7.69989 14.84 6.45524 14.84 4.91989C14.84 3.38454 13.5954 2.13989 12.06 2.13989C10.5247 2.13989 9.28003 3.38454 9.28003 4.91989C9.28003 6.45524 10.5247 7.69989 12.06 7.69989Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.83005 19.9201C6.3654 19.9201 7.61005 18.6755 7.61005 17.1401C7.61005 15.6048 6.3654 14.3601 4.83005 14.3601C3.2947 14.3601 2.05005 15.6048 2.05005 17.1401C2.05005 18.6755 3.2947 19.9201 4.83005 19.9201Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.17 19.9201C20.7054 19.9201 21.95 18.6755 21.95 17.1401C21.95 15.6048 20.7054 14.3601 19.17 14.3601C17.6347 14.3601 16.39 15.6048 16.39 17.1401C16.39 18.6755 17.6347 19.9201 19.17 19.9201Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        sitemap: `
          <path opacity="0.4" d="M12 12H6.73686C5.57415 12 4.63159 13.1193 4.63159 14.5M12 12H17.2632C18.4259 12 19.3684 13.1193 19.3684 14.5M12 12C12 10.6193 12.9426 9.5 14.1053 9.5H14.6316C15.7943 9.5 16.7369 8.38071 16.7369 7V4.5C16.7369 3.11929 15.7943 2 14.6316 2H9.36843C8.20573 2 7.26317 3.11929 7.26317 4.5V7C7.26317 8.38071 8.20573 9.5 9.36843 9.5H10.4211M12 12V14.5M10.125 4.14286H13.875M10.125 7H13.875" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.36842 17.3125C9.36842 16.4496 9.95752 15.75 10.6842 15.75H13.3158C14.0425 15.75 14.6316 16.4496 14.6316 17.3125V20.4375C14.6316 21.3004 14.0425 22 13.3158 22H10.6842C9.95752 22 9.36842 21.3004 9.36842 20.4375V17.3125Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.7368 17.3125C16.7368 16.4496 17.3259 15.75 18.0526 15.75H20.6842C21.4109 15.75 22 16.4496 22 17.3125V20.4375C22 21.3004 21.4109 22 20.6842 22H18.0526C17.3259 22 16.7368 21.3004 16.7368 20.4375V17.3125Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 17.3125C2 16.4496 2.5891 15.75 3.31579 15.75H5.94737C6.67406 15.75 7.26316 16.4496 7.26316 17.3125V20.4375C7.26316 21.3004 6.67406 22 5.94737 22H3.31579C2.5891 22 2 21.3004 2 20.4375V17.3125Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        mail: `
          <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        author: `
          <path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M11.9999 10.0001C13.2868 10.0001 14.33 8.95687 14.33 7.67004C14.33 6.38322 13.2868 5.34009 11.9999 5.34009C10.7131 5.34009 9.66992 6.38322 9.66992 7.67004C9.66992 8.95687 10.7131 10.0001 11.9999 10.0001Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M16 15.6599C16 13.8599 14.21 12.3999 12 12.3999C9.79 12.3999 8 13.8599 8 15.6599" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        vr: `
          <path d="M2 10C2 9.46957 2.21071 8.96086 2.58579 8.58579C2.96086 8.21071 3.46957 8 4 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H16.132C15.7866 19 15.4471 18.9106 15.1466 18.7404C14.8461 18.5702 14.5947 18.3252 14.417 18.029L12.857 15.429C12.7681 15.2811 12.6425 15.1588 12.4923 15.0739C12.3421 14.989 12.1725 14.9443 12 14.9443C11.8275 14.9443 11.6579 14.989 11.5077 15.0739C11.3575 15.1588 11.2319 15.2811 11.143 15.429L9.583 18.029C9.40531 18.3252 9.15395 18.5702 8.8534 18.7404C8.55286 18.9106 8.21337 19 7.868 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V10Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M5.25327 5.4735C4.67291 5.78418 4.17819 6.23329 3.813 6.781L3 8H21L20.186 6.781C19.8207 6.23315 19.3258 5.78395 18.7453 5.47326C18.1647 5.16257 17.5165 5.00001 16.858 5H7.14C6.48171 5.00018 5.83364 5.16282 5.25327 5.4735Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        arrDown: `
          <path d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.94995" stroke="${this.color||'#A4ABBD'}" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        arrUp: `
          <path d="M4.07996 16.0477L10.6 9.5277C11.37 8.7577 12.63 8.7577 13.4 9.5277L19.92 16.0477" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        arrRight: `
          <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        arrLeft: `
          <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        logOut: `
          <path d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.0001 12H3.62012" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.85 8.65039L2.5 12.0004L5.85 15.3504" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        tailArrRight: `
          <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.5 12H20.33" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        checked: `
          <g clip-path="url(#clip0_695_29508)">
          <path d="M4 11C4 11 7.5 14.5 8.5 15.5C9.5 16.5 10.5 16.5 11.5 15.5C12.5 14.5 20 7 20 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_695_29508">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        `,
        tick: `
          <path d="M6.45837 10L8.81671 12.3583L13.5417 7.64166" stroke="#216AD7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        cancel: `
          <path d="M1.51953 10.4812L10.4812 1.51953" stroke="#8E8F90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.4812 10.4812L1.51953 1.51953" stroke="#8E8F90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        check: `
          <path d="M1.27051 6.00036L5.75134 10.4812L14.7288 1.51953" stroke="#8E8F90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        uz: `
          <g clip-path="url(#clip0_50_267)">
          <path d="M0 0.00037384H24V16H0V0.00037384Z" fill="#D80027"/>
          <path d="M0 11.1305H24V15.9999H0V11.1305Z" fill="#6DA544"/>
          <path d="M0 0.00037384H24V4.89952H0V0.00037384Z" fill="#338AF3"/>
          <path d="M0 5.88488H24V10.0875H0V5.88488Z" fill="white"/>
          <path d="M0 0.00037384H24V4.89952H0V0.00037384Z" fill="#338AF3"/>
          <path d="M3.57142 2.44951C3.57142 1.70025 4.09801 1.07424 4.80123 0.920722C4.69106 0.896584 4.57862 0.884373 4.46584 0.8843C3.60137 0.8843 2.90063 1.58504 2.90063 2.44951C2.90063 3.31397 3.60137 4.01471 4.46584 4.01471C4.58106 4.01471 4.69318 4.00191 4.80123 3.97829C4.09801 3.82477 3.57142 3.19876 3.57142 2.44951ZM5.72626 3.16093L5.83224 3.48704H6.17513L5.89773 3.68865L6.00371 4.01471L5.72626 3.81315L5.44885 4.01471L5.55484 3.68865L5.27743 3.48704H5.62032L5.72626 3.16093ZM6.8207 3.16093L6.92663 3.48704H7.26953L6.99212 3.68865L7.0981 4.01471L6.8207 3.81315L6.54329 4.01471L6.64923 3.68865L6.37187 3.48704H6.71471L6.8207 3.16093ZM7.91509 3.16093L8.02103 3.48704H8.36392L8.08656 3.68865L8.19249 4.01471L7.91509 3.81315L7.63768 4.01471L7.74362 3.68865L7.46621 3.48704H7.8091L7.91509 3.16093ZM9.00948 3.16093L9.11551 3.48704H9.4584L9.18095 3.68865L9.28693 4.01471L9.00948 3.81315L8.73207 4.01471L8.8381 3.68865L8.56065 3.48704H8.90349L9.00948 3.16093ZM10.1039 3.16093L10.2099 3.48704H10.5527L10.2753 3.68865L10.3813 4.01471L10.1039 3.81315L9.82651 4.01471L9.93245 3.68865L9.65509 3.48704H9.99793L10.1039 3.16093ZM6.8207 2.02261L6.92663 2.34868H7.26953L6.99212 2.55024L7.0981 2.87635L6.8207 2.67483L6.54329 2.87635L6.64923 2.55024L6.37187 2.34868H6.71471L6.8207 2.02261ZM7.91509 2.02261L8.02103 2.34868H8.36392L8.08656 2.55024L8.19249 2.87635L7.91509 2.67483L7.63768 2.87635L7.74362 2.55024L7.46621 2.34868H7.8091L7.91509 2.02261ZM9.00948 2.02261L9.11551 2.34868H9.4584L9.18095 2.55024L9.28693 2.87635L9.00948 2.67483L8.73207 2.87635L8.8381 2.55024L8.56065 2.34868H8.90349L9.00948 2.02261ZM10.1039 2.02261L10.2099 2.34868H10.5527L10.2753 2.55024L10.3813 2.87635L10.1039 2.67483L9.82651 2.87635L9.93245 2.55024L9.65509 2.34868H9.99793L10.1039 2.02261ZM7.91509 0.8843L8.02103 1.21036H8.36392L8.08656 1.41193L8.19249 1.73804L7.91509 1.53647L7.63768 1.73804L7.74362 1.41193L7.46621 1.21036H7.8091L7.91509 0.8843ZM9.00948 0.8843L9.11551 1.21036H9.4584L9.18095 1.41193L9.28693 1.73804L9.00948 1.53647L8.73207 1.73804L8.8381 1.41193L8.56065 1.21036H8.90349L9.00948 0.8843ZM10.1039 0.8843L10.2099 1.21036H10.5527L10.2753 1.41193L10.3813 1.73804L10.1039 1.53647L9.82651 1.73804L9.93245 1.41193L9.65509 1.21036H9.99793L10.1039 0.8843Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_50_267">
          <rect width="24" height="16" rx="3" fill="white"/>
          </clipPath>
          </defs>
        `,
        ru: `
          <g clip-path="url(#clip0_52_305)">
          <path d="M0 -0.000274658V15.9997H24V-0.000274658H0Z" fill="white"/>
          <path d="M0 0H24V16.0002H0V0Z" fill="#0052B4"/>
          <path d="M0 0H24V5.33321H0V0Z" fill="white"/>
          <path d="M0 10.6665H24V15.9997H0V10.6665Z" fill="#D80027"/>
          </g>
          <defs>
          <clipPath id="clip0_52_305">
          <rect width="24" height="16" rx="3" fill="white"/>
          </clipPath>
          </defs>
          `,
          xls: `
          <path d="M4.14844 15.0469V18.2812H2.10938L2.39062 17.4375L4.14844 15.0469Z" fill="url(#paint0_linear_1155_5758)"/>
          <path d="M31.8516 15.0469V18.2812H33.8906L33.6094 17.4375L31.8516 15.0469Z" fill="url(#paint1_linear_1155_5758)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5391 0H5.55469C4.77804 0 4.14844 0.6296 4.14844 1.40625V34.5938C4.14844 35.3704 4.77804 36 5.55469 36H30.4453C31.222 36 31.8516 35.3704 31.8516 34.5938V7.20703H25.9453C25.1687 7.20703 24.5391 6.57743 24.5391 5.80078V0Z" fill="url(#paint2_linear_1155_5758)"/>
          <path d="M31.8516 7.91016V7.20703L24.5391 0.703125V6.50391C24.5391 7.28056 25.1687 7.91016 25.9453 7.91016H31.8516Z" fill="#E8E8E8"/>
          <path d="M31.8516 7.20703L24.5391 0V5.80078C24.5391 6.57743 25.1687 7.20703 25.9453 7.20703H31.8516Z" fill="#CCCCCC"/>
          <path d="M2.10938 18.2812C2.10938 17.5046 2.73897 16.875 3.51562 16.875H32.4844C33.261 16.875 33.8906 17.5046 33.8906 18.2812V27.5625C33.8906 28.3392 33.261 28.9688 32.4844 28.9688H3.51563C2.73898 28.9688 2.10938 28.3392 2.10938 27.5625V18.2812Z" fill="url(#paint3_linear_1155_5758)"/>
          <rect x="4.14844" y="28.9688" width="27.7031" height="0.984375" fill="url(#paint4_linear_1155_5758)"/>
          <path d="M8.08594 27.0529L10.6701 22.5477L8.51748 18.796H9.7402L11.2814 21.4847L12.8329 18.796H14.0557L11.8928 22.5477L14.4872 27.0529H13.2645L11.2814 23.6108L9.30865 27.0529H8.08594Z" fill="#001E49"/>
          <path d="M16.7876 27.0529V18.796H17.851V25.9795H20.7896V27.0529H16.7876Z" fill="#001E49"/>
          <path d="M25.3813 22.8161C24.799 22.62 24.3264 22.3413 23.9634 21.9801C23.6037 21.6154 23.4239 21.1647 23.4239 20.628C23.4239 20.1016 23.6106 19.6492 23.9839 19.2708C24.3607 18.8923 24.8162 18.7031 25.3505 18.7031C25.8779 18.7031 26.33 18.8906 26.7068 19.2656C26.9191 19.472 27.0972 19.8006 27.2411 20.2513L26.2752 20.6332C26.1588 20.3167 26.0526 20.1102 25.9567 20.0139C25.7889 19.8488 25.5868 19.7662 25.3505 19.7662C25.1107 19.7662 24.9069 19.8505 24.7391 20.0191C24.5713 20.1842 24.4874 20.3872 24.4874 20.628C24.4874 20.8688 24.5713 21.0735 24.7391 21.2421C24.9275 21.4279 25.1878 21.5982 25.52 21.753C26.1639 21.9629 26.7102 22.2931 27.1589 22.7438C27.6623 23.2427 27.9141 23.8482 27.9141 24.5603C27.9141 25.2725 27.6623 25.8815 27.1589 26.3872C26.6588 26.8895 26.056 27.1406 25.3505 27.1406C24.6415 27.1406 24.037 26.8878 23.5369 26.382C23.1362 25.9795 22.8828 25.4239 22.7766 24.7152L23.8092 24.3384C23.8743 24.9474 24.0336 25.3792 24.287 25.6337C24.5816 25.9296 24.936 26.0776 25.3505 26.0776C25.7649 26.0776 26.1194 25.9296 26.4139 25.6337C26.7085 25.3379 26.8557 24.9801 26.8557 24.5603C26.8557 24.1441 26.7085 23.788 26.4139 23.4921C26.1331 23.21 25.7889 22.9847 25.3813 22.8161Z" fill="#001E49"/>
          <defs>
          <linearGradient id="paint0_linear_1155_5758" x1="3.12891" y1="15.0469" x2="3.12891" y2="18.2812" gradientUnits="userSpaceOnUse">
          <stop stop-color="#989898"/>
          <stop offset="0.255208" stop-color="#D9D9D9"/>
          <stop offset="0.65625" stop-color="#EEEEEE"/>
          <stop offset="1" stop-color="#BCBCBC"/>
          </linearGradient>
          <linearGradient id="paint1_linear_1155_5758" x1="32.8711" y1="15.0469" x2="32.8711" y2="18.2812" gradientUnits="userSpaceOnUse">
          <stop stop-color="#989898"/>
          <stop offset="0.255208" stop-color="#D9D9D9"/>
          <stop offset="0.65625" stop-color="#EEEEEE"/>
          <stop offset="1" stop-color="#BCBCBC"/>
          </linearGradient>
          <linearGradient id="paint2_linear_1155_5758" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
          <stop stop-color="#989898"/>
          <stop offset="0.255208" stop-color="#D9D9D9"/>
          <stop offset="0.65625" stop-color="#EEEEEE"/>
          <stop offset="1" stop-color="#BCBCBC"/>
          </linearGradient>
          <linearGradient id="paint3_linear_1155_5758" x1="18" y1="16.875" x2="18" y2="28.9688" gradientUnits="userSpaceOnUse">
          <stop stop-color="#989898"/>
          <stop offset="0.255208" stop-color="#D9D9D9"/>
          <stop offset="0.65625" stop-color="#EEEEEE"/>
          <stop offset="1" stop-color="#BCBCBC"/>
          </linearGradient>
          <linearGradient id="paint4_linear_1155_5758" x1="18" y1="28.9688" x2="18" y2="29.9531" gradientUnits="userSpaceOnUse">
          <stop stop-color="#989898"/>
          <stop offset="0.255208" stop-color="#D9D9D9"/>
          <stop offset="0.65625" stop-color="#EEEEEE"/>
          <stop offset="1" stop-color="#BCBCBC"/>
          </linearGradient>
          </defs>
          `,
          oneId: `
            <path fill-rule="evenodd" clip-rule="evenodd" d="M129 20L128.999 22L128.998 22.8283L128.995 23.4638L128.992 23.9995L128.987 24.4712L128.982 24.8975L128.975 25.2893L128.967 25.6538L128.959 25.9959L128.949 26.3193L128.938 26.6266L128.926 26.9199L128.913 27.2009L128.9 27.4711L128.885 27.7314L128.869 27.9829L128.852 28.2264L128.834 28.4624L128.815 28.6916L128.795 28.9145L128.774 29.1315L128.752 29.343L128.729 29.5494L128.704 29.7509L128.679 29.9479L128.653 30.1406L128.626 30.3292L128.597 30.5139L128.568 30.6949L128.538 30.8724L128.506 31.0464L128.474 31.2172L128.44 31.385L128.405 31.5497L128.37 31.7115L128.333 31.8705L128.295 32.0269L128.256 32.1806L128.216 32.3319L128.175 32.4807L128.133 32.6271L128.09 32.7712L128.046 32.9131L128.001 33.0528L127.954 33.1904L127.907 33.3259L127.858 33.4594L127.809 33.5909L127.758 33.7204L127.706 33.8481L127.653 33.9739L127.599 34.0979L127.544 34.2202L127.488 34.3407L127.43 34.4594L127.372 34.5765L127.312 34.6919L127.251 34.8057L127.189 34.9179L127.126 35.0285L127.062 35.1376L126.997 35.2451L126.93 35.3512L126.863 35.4557L126.794 35.5587L126.724 35.6604L126.653 35.7605L126.58 35.8593L126.507 35.9567L126.432 36.0526L126.356 36.1472L126.279 36.2405L126.2 36.3324L126.12 36.423L126.04 36.5123L125.957 36.6003L125.874 36.6869L125.789 36.7724L125.703 36.8565L125.616 36.9394L125.527 37.021L125.437 37.1014L125.346 37.1806L125.253 37.2585L125.159 37.3353L125.064 37.4108L124.967 37.4852L124.869 37.5583L124.77 37.6303L124.669 37.7012L124.566 37.7708L124.462 37.8393L124.357 37.9066L124.25 37.9729L124.142 38.0379L124.032 38.1018L123.92 38.1646L123.807 38.2263L123.692 38.2869L123.576 38.3464L123.458 38.4047L123.338 38.4619L123.217 38.5181L123.094 38.5731L122.969 38.6271L122.842 38.68L122.713 38.7318L122.583 38.7825L122.45 38.8322L122.316 38.8808L122.179 38.9283L122.041 38.9747L121.9 39.0201L121.757 39.0645L121.612 39.1077L121.465 39.15L121.315 39.1912L121.163 39.2313L121.009 39.2704L120.851 39.3084L120.692 39.3455L120.529 39.3814L120.364 39.4164L120.195 39.4503L120.024 39.4832L119.849 39.515L119.671 39.5459L119.49 39.5757L119.305 39.6044L119.116 39.6322L118.924 39.6589L118.727 39.6847L118.525 39.7094L118.319 39.7331L118.109 39.7557L117.893 39.7774L117.671 39.7981L117.443 39.8177L117.209 39.8363L116.968 39.854L116.72 39.8706L116.463 39.8862L116.197 39.9008L115.921 39.9144L115.635 39.927L115.335 39.9386L115.022 39.9492L114.693 39.9588L114.344 39.9674L113.973 39.9749L113.574 39.9815L113.141 39.9871L112.663 39.9917L112.12 39.9953L111.48 39.9978L110.655 39.9994L99.0495 40L96.5079 39.9996L95.635 39.9982L94.9736 39.9957L94.4189 39.9923L93.9317 39.9879L93.4921 39.9825L93.0885 39.9761L92.7134 39.9686L92.3616 39.9602L92.0292 39.9508L91.7134 39.9403L91.4121 39.9289L91.1235 39.9165L90.8461 39.903L90.5789 39.8886L90.3207 39.8731L90.071 39.8567L89.8288 39.8392L89.5936 39.8207L89.365 39.8013L89.1424 39.7808L88.9254 39.7593L88.7138 39.7367L88.5071 39.7132L88.3051 39.6887L88.1075 39.6631L87.9142 39.6365L87.7248 39.6089L87.5392 39.5803L87.3573 39.5507L87.1789 39.52L87.0037 39.4883L86.8318 39.4556L86.663 39.4218L86.4971 39.3871L86.3341 39.3513L86.1738 39.3144L86.0163 39.2765L85.8612 39.2376L85.7087 39.1976L85.5587 39.1566L85.411 39.1145L85.2656 39.0714L85.1224 39.0273L84.9814 38.982L84.8425 38.9357L84.7057 38.8884L84.571 38.84L84.4382 38.7905L84.3073 38.74L84.1784 38.6883L84.0513 38.6356L83.9261 38.5818L83.8026 38.5269L83.6809 38.471L83.5609 38.4139L83.4426 38.3557L83.326 38.2964L83.211 38.236L83.0977 38.1745L82.9859 38.1119L82.8757 38.0482L82.7671 37.9833L82.66 37.9173L82.5544 37.8501L82.4502 37.7818L82.3476 37.7123L82.2464 37.6417L82.1466 37.5699L82.0482 37.4969L81.9513 37.4228L81.8557 37.3474L81.7615 37.2708L81.6687 37.1931L81.5772 37.1141L81.4871 37.0339L81.3982 36.9525L81.3107 36.8698L81.2245 36.7858L81.1395 36.7006L81.0559 36.6142L80.9735 36.5264L80.8923 36.4373L80.8124 36.3469L80.7338 36.2552L80.6564 36.1622L80.5802 36.0678L80.5052 35.972L80.4314 35.8749L80.3588 35.7764L80.2874 35.6764L80.2172 35.575L80.1482 35.4722L80.0803 35.3679L80.0136 35.2621L79.9481 35.1548L79.8837 35.046L79.8205 34.9356L79.7584 34.8237L79.6975 34.7102L79.6376 34.595L79.579 34.4782L79.5214 34.3597L79.465 34.2395L79.4096 34.1175L79.3554 33.9938L79.3023 33.8683L79.2503 33.7409L79.1994 33.6116L79.1496 33.4804L79.1008 33.3473L79.0532 33.2121L79.0066 33.0749L78.9612 32.9355L78.9168 32.794L78.8735 32.6502L78.8312 32.5042L78.7901 32.3557L78.75 32.2049L78.7109 32.0516L78.673 31.8956L78.636 31.737L78.6002 31.5756L78.5654 31.4114L78.5317 31.2442L78.499 31.0738L78.4673 30.9003L78.4367 30.7234L78.4072 30.543L78.3787 30.3589L78.3512 30.1709L78.3248 29.9789L78.2994 29.7826L78.2751 29.5818L78.2518 29.3762L78.2296 29.1655L78.2083 28.9494L78.1881 28.7275L78.169 28.4993L78.1509 28.2644L78.1338 28.0222L78.1177 27.7721L78.1027 27.5132L78.0887 27.2447L78.0757 26.9654L78.0638 26.6742L78.0528 26.3692L78.0429 26.0486L78.0341 25.7097L78.0262 25.3491L78.0194 24.962L78.0136 24.5418L78.0088 24.0783L78.0051 23.5546L78.0024 22.9388L78.0007 22.1533L78 20.7981L78.0004 18.1662L78.0017 17.2866L78.0041 16.6293L78.0075 16.0809L78.012 15.6005L78.0174 15.1678L78.0239 14.7711L78.0315 14.4026L78.04 14.0572L78.0496 13.7311L78.0602 13.4214L78.0718 13.1259L78.0844 12.843L78.0981 12.5712L78.1128 12.3094L78.1285 12.0565L78.1453 11.8119L78.1631 11.5747L78.1819 11.3445L78.2018 11.1206L78.2227 10.9027L78.2446 10.6903L78.2676 10.4831L78.2916 10.2808L78.3166 10.0831L78.3427 9.88977L78.3698 9.70054L78.398 9.51523L78.4272 9.33366L78.4575 9.15566L78.4888 8.98106L78.5211 8.80973L78.5545 8.64153L78.589 8.47635L78.6245 8.31407L78.6611 8.15459L78.6987 7.99781L78.7374 7.84365L78.7772 7.69202L78.818 7.54284L78.8599 7.39604L78.9029 7.25155L78.9469 7.10932L78.9921 6.96928L79.0383 6.83136L79.0855 6.69553L79.1339 6.56174L79.1834 6.42992L79.2339 6.30005L79.2856 6.17207L79.3384 6.04596L79.3922 5.92166L79.4472 5.79915L79.5033 5.67839L79.5605 5.55936L79.6188 5.44201L79.6783 5.32632L79.7389 5.21226L79.8006 5.09982L79.8635 4.98895L79.9275 4.87964L79.9926 4.77187L80.0589 4.66561L80.1264 4.56084L80.1951 4.45755L80.2649 4.35571L80.3359 4.2553L80.4081 4.15632L80.4815 4.05873L80.5561 3.96253L80.632 3.86771L80.709 3.77424L80.7872 3.68211L80.8667 3.59131L80.9475 3.50182L81.0295 3.41364L81.1127 3.32675L81.1973 3.24114L81.2831 3.1568L81.3702 3.07372L81.4586 2.99188L81.5484 2.91128L81.6394 2.83192L81.7318 2.75377L81.8256 2.67683L81.9207 2.60109L82.0172 2.52655L82.1151 2.4532L82.2144 2.38103L82.3152 2.31002L82.4174 2.24018L82.521 2.1715L82.6262 2.10398L82.7328 2.03759L82.841 1.97235L82.9507 1.90824L83.0619 1.84526L83.1748 1.7834L83.2892 1.72265L83.4053 1.66302L83.5231 1.6045L83.6425 1.54708L83.7636 1.49075L83.8866 1.43552L84.0112 1.38138L84.1377 1.32833L84.2661 1.27635L84.3963 1.22546L84.5285 1.17563L84.6626 1.12688L84.7987 1.0792L84.9369 1.03258L85.0772 0.987013L85.2197 0.942509L85.3644 0.899059L85.5114 0.856661L85.6607 0.815311L85.8124 0.775008L85.9666 0.735748L86.1234 0.697529L86.2828 0.660349L86.4449 0.624205L86.6098 0.589096L86.7777 0.555019L86.9486 0.521972L87.1227 0.489953L87.3001 0.458961L87.4809 0.428993L87.6653 0.400048L87.8534 0.372125L88.0455 0.345221L88.2417 0.319335L88.4422 0.294467L88.6474 0.270613L88.8575 0.247774L89.0727 0.225947L89.2934 0.205132L89.5201 0.185328L89.7531 0.166533L89.993 0.148747L90.2403 0.131969L90.4957 0.116197L90.7599 0.101431L91.034 0.0876701L91.3189 0.0749138L91.616 0.0631613L91.9269 0.052412L92.2537 0.0426653L92.599 0.0339208L92.9662 0.026178L93.3601 0.0194366L93.7872 0.0136961L94.2576 0.00895627L94.7878 0.00521693L95.4088 0.00247785L96.1932 0.000738904L97.4712 0L110.314 0.000261103L111.245 0.00152223L111.93 0.00378343L112.498 0.00704483L112.994 0.0113066L113.441 0.0165689L113.849 0.0228321L114.229 0.0300964L114.584 0.0383623L114.919 0.04763L115.237 0.0579002L115.541 0.0691733L115.831 0.0814499L116.11 0.0947307L116.379 0.109016L116.639 0.124307L116.89 0.140605L117.133 0.157909L117.369 0.176222L117.599 0.195544L117.823 0.215876L118.04 0.237219L118.253 0.259574L118.46 0.282943L118.663 0.307326L118.861 0.332726L119.055 0.359143L119.245 0.386579L119.431 0.415036L119.614 0.444515L119.793 0.475017L119.969 0.506545L120.141 0.539101L120.31 0.572685L120.477 0.607301L120.64 0.64295L120.801 0.679635L120.959 0.717357L121.114 0.756119L121.267 0.795924L121.418 0.836773L121.566 0.87867L121.711 0.921618L121.855 0.965618L121.996 1.01067L122.135 1.05679L122.273 1.10397L122.408 1.15221L122.541 1.20152L122.672 1.2519L122.801 1.30336L122.929 1.3559L123.054 1.40952L123.178 1.46423L123.3 1.52003L123.42 1.57693L123.539 1.63492L123.656 1.69402L123.771 1.75423L123.884 1.81556L123.996 1.87801L124.107 1.94158L124.216 2.00628L124.323 2.07212L124.429 2.1391L124.533 2.20723L124.636 2.27651L124.738 2.34695L124.838 2.41857L124.936 2.49136L125.033 2.56533L125.129 2.64049L125.224 2.71686L125.317 2.79442L125.408 2.87321L125.499 2.95322L125.588 3.03446L125.675 3.11695L125.762 3.20068L125.847 3.28569L125.931 3.37196L126.013 3.45953L126.095 3.54839L126.175 3.63856L126.254 3.73005L126.331 3.82288L126.408 3.91706L126.483 4.0126L126.557 4.10952L126.63 4.20783L126.701 4.30756L126.772 4.40871L126.841 4.5113L126.909 4.61537L126.976 4.72091L127.042 4.82796L127.106 4.93653L127.17 5.04665L127.232 5.15834L127.293 5.27162L127.353 5.38653L127.412 5.50308L127.469 5.6213L127.526 5.74124L127.582 5.86291L127.636 5.98634L127.689 6.11159L127.742 6.23867L127.793 6.36763L127.843 6.49851L127.891 6.63136L127.939 6.76621L127.986 6.90312L128.032 7.04214L128.076 7.18332L128.12 7.32672L128.162 7.4724L128.203 7.62044L128.244 7.77089L128.283 7.92383L128.321 8.07935L128.358 8.23752L128.394 8.39846L128.429 8.56224L128.463 8.72898L128.496 8.8988L128.528 9.07182L128.558 9.24818L128.588 9.42803L128.617 9.61152L128.644 9.79885L128.671 9.9902L128.697 10.1858L128.721 10.3859L128.745 10.5907L128.767 10.8005L128.788 11.0158L128.809 11.2367L128.828 11.4639L128.846 11.6977L128.864 11.9387L128.88 12.1875L128.895 12.4449L128.909 12.7119L128.922 12.9893L128.934 13.2786L128.945 13.5812L128.956 13.8991L128.965 14.2349L128.973 14.5918L128.98 14.9743L128.986 15.3887L128.99 15.8444L128.994 16.357L128.997 16.9548L128.999 17.7035L129 18.8712V20ZM99 31H107C114.579 31 119 26.2857 119 19.9371C119 13.5257 114.639 9 107.12 9H99V31ZM95 31H89V9H95V31ZM21.9545 20C21.9545 26.0677 17.5574 31.5 10.9461 31.5C4.33478 31.5 0 26.1312 0 20C0 13.9323 4.39715 8.5 11.0085 8.5C17.6198 8.5 21.9545 13.8688 21.9545 20ZM1.68401 20C1.68401 25.4959 5.61338 30.0069 11.0085 30.0069C16.4035 30.0069 20.2705 25.5594 20.2705 20C20.2705 14.5041 16.3412 9.99309 10.9461 9.99309C5.55101 9.99309 1.68401 14.4406 1.68401 20ZM29.5467 31H28V9H29.5158L44.4574 28.14V9H46.0041V31H44.7976L29.5467 11.4514V31ZM68 31H52.4398V9H67.8453V10.5086H54.0484V19.1514H66.4533V20.66H54.0484V29.4914H68V31ZM108.198 27.1445C108.788 27.1275 109.46 27.0505 110.144 26.8774C110.226 26.857 110.309 26.8351 110.395 26.8114C110.923 26.6649 111.495 26.4494 112.083 26.0885C112.227 26.0027 112.367 25.9106 112.505 25.8118L112.5 25.8097C112.919 25.5051 113.343 25.1197 113.764 24.6271C113.936 24.4249 114.233 23.9978 114.401 23.6664C114.012 23.2539 113.42 22.9147 112.865 22.6164L112.806 22.5845C112.549 22.4458 112.083 22.1949 111.649 22.025C111.603 22.007 111.554 21.9892 111.505 21.971C111.13 21.8327 110.691 21.671 110.647 21.2253C110.613 20.8814 110.787 20.6666 110.995 20.4106C111.045 20.3491 111.097 20.2853 111.148 20.2166C111.754 19.4074 112.324 18.3035 112.221 16.809C112.12 15.342 111.181 14.2028 109.61 14.027C109.428 14.0067 109.251 13.9979 109.079 14.0004C108.907 13.9979 108.729 14.0067 108.547 14.027C106.976 14.2028 106.037 15.342 105.936 16.809C105.833 18.3035 106.403 19.4074 107.009 20.2166C107.061 20.2853 107.112 20.3491 107.162 20.4106C107.37 20.6666 107.544 20.8814 107.51 21.2253C107.466 21.671 107.027 21.8327 106.652 21.971C106.603 21.9892 106.555 22.007 106.509 22.025C106.074 22.1949 105.609 22.4458 105.351 22.5845L105.292 22.6164C104.468 23.0591 103.564 23.5917 103.361 24.3202C103.112 25.2114 102.978 26.3301 103.003 27.1445H104.41C104.802 27.1445 105.205 27.1485 105.616 27.1526C106.46 27.1609 107.335 27.1694 108.198 27.1445Z" fill="white"/>
          `,
          plus: `
            <path d="M6 12H18" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 18V6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          `,
          pdf: `
            <path d="M0.000514097 2.26574C0.0750423 1.9247 0.170644 1.5924 0.387547 1.30837C0.817754 0.743908 1.39753 0.500969 2.09707 0.501483C5.35935 0.503537 8.62111 0.501483 11.8834 0.503024C12.8476 0.503537 12.6683 0.418791 13.3626 1.11217C14.4996 2.24725 15.6329 3.38593 16.7745 4.51639C16.9832 4.72286 17.0819 4.94834 17.0772 5.24366C17.0654 5.99508 17.0731 6.74701 17.0731 7.49893C17.0731 7.5657 17.0731 7.63196 17.0731 7.70952H15.7681V5.75214H15.5281C14.7689 5.75214 14.0098 5.75317 13.2506 5.75214C12.3635 5.7506 11.8212 5.20771 11.8197 4.31967C11.8186 3.49379 11.8197 2.6679 11.8197 1.81582H11.5894C8.42991 1.81582 5.27043 1.81582 2.11095 1.81582C1.55327 1.81582 1.31375 2.05567 1.31375 2.615C1.31375 8.20515 1.31375 13.7948 1.31375 19.3849C1.31375 19.9535 1.55121 20.1877 2.12791 20.1877C3.52287 20.1877 4.91783 20.1877 6.31331 20.1877H6.56671V21.5H1.76503C1.74036 21.4897 1.71672 21.4743 1.69102 21.4707C1.18371 21.3993 0.775093 21.1584 0.446141 20.7681C0.193259 20.4676 0.0806961 20.1097 0 19.7368V2.26574H0.000514097Z" fill="${this.color||'white'}"/>
            <path d="M11.8194 14.2685C11.8194 13.4287 11.8184 12.5889 11.8194 11.7487C11.8205 11.2587 12.0764 11.0009 12.5627 10.9998C13.3825 10.9983 14.2028 10.9967 15.0226 10.9998C15.8573 11.0034 16.4119 11.554 16.4145 12.3866C16.4181 13.6496 16.4186 14.913 16.4145 16.176C16.4119 16.9988 15.8594 17.554 15.0401 17.5592C14.2064 17.5643 13.3727 17.5622 12.539 17.5592C12.0816 17.5576 11.8205 17.2916 11.8194 16.8278C11.8174 15.9742 11.8189 15.1205 11.8189 14.2674L11.8194 14.2685ZM13.1476 12.3208V16.232H15.0915V12.3208H13.1476Z" fill="${this.color||'white'}"/>
            <path d="M7.88478 15.5927V17.5464H6.56641C6.56641 17.474 6.56641 17.4011 6.56641 17.3287C6.56641 15.4838 6.56641 13.6389 6.56641 11.794C6.56641 11.2393 6.80798 11.0005 7.36925 11.0005C8.15566 11.0005 8.94206 10.9994 9.72846 11.0005C10.6177 11.002 11.1609 11.5433 11.1625 12.4298C11.1635 13.0174 11.1651 13.605 11.1625 14.1931C11.1589 15.04 10.6089 15.5891 9.76135 15.5932C9.20727 15.5957 8.65371 15.5932 8.09963 15.5932H7.8853L7.88478 15.5927ZM9.83537 14.2711V12.3281H7.89095V14.2711H9.83537Z" fill="${this.color||'white'}"/>
            <path d="M20.9966 12.3164H18.3958V13.6174H20.9996V14.9255H18.3917V17.5496H17.0723C17.0723 17.4833 17.0723 17.4119 17.0723 17.34C17.0723 15.4879 17.0723 13.6359 17.0723 11.7838C17.0723 11.2419 17.3174 11 17.8638 11C18.9026 11 19.9419 11 20.996 11V12.3164H20.9966Z" fill="${this.color||'white'}"/>
          `,
          rar: `
            <path d="M0.0903578 2.26574C0.164886 1.9247 0.260488 1.5924 0.47739 1.30837C0.907598 0.743908 1.48738 0.500969 2.18691 0.501483C5.44919 0.503537 8.71096 0.501483 11.9732 0.503024C12.9375 0.503537 12.7581 0.418791 13.4525 1.11217C14.5894 2.24725 15.7228 3.38593 16.8643 4.51639C17.073 4.72286 17.1717 4.94834 17.1671 5.24366C17.1553 5.99508 17.163 6.74701 17.163 7.49893C17.163 7.5657 17.163 7.63196 17.163 7.70952H15.858V5.75214H15.6179C14.8588 5.75214 14.0996 5.75317 13.3404 5.75214C12.4533 5.7506 11.911 5.20771 11.9095 4.31967C11.9085 3.49379 11.9095 2.6679 11.9095 1.81582H11.6792C8.51975 1.81582 5.36027 1.81582 2.20079 1.81582C1.64311 1.81582 1.4036 2.05567 1.4036 2.615C1.4036 8.20515 1.4036 13.7948 1.4036 19.3849C1.4036 19.9535 1.64106 20.1877 2.21775 20.1877C3.61271 20.1877 5.00768 20.1877 6.40315 20.1877H6.65655V21.5H1.85488C1.83021 21.4897 1.80656 21.4743 1.78086 21.4707C1.27356 21.3993 0.864937 21.1584 0.535985 20.7681C0.283103 20.4676 0.17054 20.1097 0.0898438 19.7368V2.26574H0.0903578Z" fill="${this.color||'white'}"/>
            <path d="M10.4499 17.5008L9.28194 15.3808H8.95394V17.5008H7.58594V11.8848H9.88194C10.3246 11.8848 10.7006 11.9621 11.0099 12.1168C11.3246 12.2714 11.5593 12.4848 11.7139 12.7568C11.8686 13.0234 11.9459 13.3221 11.9459 13.6528C11.9459 14.0261 11.8393 14.3594 11.6259 14.6528C11.4179 14.9461 11.1086 15.1541 10.6979 15.2768L11.9939 17.5008H10.4499ZM8.95394 14.4128H9.80194C10.0526 14.4128 10.2393 14.3514 10.3619 14.2288C10.4899 14.1061 10.5539 13.9328 10.5539 13.7088C10.5539 13.4954 10.4899 13.3274 10.3619 13.2048C10.2393 13.0821 10.0526 13.0208 9.80194 13.0208H8.95394V14.4128Z" fill="white"/>
            <path d="M16.7007 16.5088H14.6047L14.2687 17.5008H12.8367L14.8687 11.8848H16.4527L18.4847 17.5008H17.0367L16.7007 16.5088ZM16.3487 15.4528L15.6527 13.3968L14.9647 15.4528H16.3487Z" fill="white"/>
            <path d="M22.3671 17.5008L21.1991 15.3808H20.8711V17.5008H19.5031V11.8848H21.7991C22.2418 11.8848 22.6178 11.9621 22.9271 12.1168C23.2418 12.2714 23.4765 12.4848 23.6311 12.7568C23.7858 13.0234 23.8631 13.3221 23.8631 13.6528C23.8631 14.0261 23.7565 14.3594 23.5431 14.6528C23.3351 14.9461 23.0258 15.1541 22.6151 15.2768L23.9111 17.5008H22.3671ZM20.8711 14.4128H21.7191C21.9698 14.4128 22.1565 14.3514 22.2791 14.2288C22.4071 14.1061 22.4711 13.9328 22.4711 13.7088C22.4711 13.4954 22.4071 13.3274 22.2791 13.2048C22.1565 13.0821 21.9698 13.0208 21.7191 13.0208H20.8711V14.4128Z" fill="white"/>
          `,
          delete: `
            <path d="M33.25 9.46745C27.9775 8.94495 22.6733 8.67578 17.385 8.67578C14.25 8.67578 11.115 8.83411 7.98 9.15078L4.75 9.46745" stroke="#DB0037" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.458 7.86852L13.8063 5.79435C14.0597 4.29018 14.2497 3.16602 16.9255 3.16602H21.0738C23.7497 3.16602 23.9555 4.35352 24.193 5.81018L24.5413 7.86852" stroke="#DB0037" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29.846 14.4707L28.8168 30.4149C28.6426 32.9007 28.5001 34.8324 24.0826 34.8324H13.9176C9.50013 34.8324 9.35763 32.9007 9.18346 30.4149L8.1543 14.4707" stroke="#DB0037" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.3555 26.125H21.628" stroke="#DB0037" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.042 19.791H22.9587" stroke="#DB0037" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          `,
          editPen: `
            <path d="M17.417 3.16602H14.2503C6.33366 3.16602 3.16699 6.33268 3.16699 14.2493V23.7493C3.16699 31.666 6.33366 34.8327 14.2503 34.8327H23.7503C31.667 34.8327 34.8337 31.666 34.8337 23.7493V20.5827" stroke="#006DDB" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.397 4.78231L12.9203 17.259C12.4453 17.734 11.9703 18.6681 11.8753 19.349L11.1945 24.1148C10.9411 25.8406 12.1603 27.044 13.8861 26.8065L18.652 26.1256C19.317 26.0306 20.2511 25.5556 20.742 25.0806L33.2186 12.604C35.372 10.4506 36.3853 7.94898 33.2186 4.78231C30.052 1.61564 27.5503 2.62898 25.397 4.78231Z" stroke="#006DDB" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.6074 6.57031C24.6683 10.3545 27.6291 13.3153 31.4291 14.392" stroke="#006DDB" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          `,
          menu: `
            <path d="M6 13.9961H42" stroke="${this.color || '#001E49'}" stroke-width="3.6" stroke-linecap="round"/>
            <path d="M12 24L42 24" stroke="${this.color || '#001E49'}" stroke-width="3.6" stroke-linecap="round"/>
            <path d="M18 34.0039L42 34.0039" stroke="${this.color || '#001E49'}" stroke-width="3.6" stroke-linecap="round"/>
          `
      },
    }
  },

  computed: {
    chosenIcon() {
      return this.icons[this.icon]
    },
  },

  props: {
    icon: String,
    size: String,
    color: String,
    width: String,
    viewboxW: String,
    viewboxH: String,
    height: String,
    id: String,
  },
}
</script>

<style>

</style>