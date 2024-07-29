<template>
  <div class="paginate d-f fd-r j-b">
    
    <div class="w-a d-f fd-r gap-24">
      <button
        @click="prev()"
        class="primPaginator leftRightBtn w-2 h-48p gap-12"
        :disabled="currentPageNumber <= 1 ? true : false"
      >
        <Icons
          icon="arrLeft"
          size="middle"
        />
        <span>{{$t('prev')}}</span>
      </button>

      <button
        @click="next()"
        class="primPaginator leftRightBtn w-2 h-48p gap-12"
        :disabled="currentPageNumber === pages ? true : false"
      >
        <span>{{$t('next')}}</span>
        <Icons
          icon="arrRight"
          size="middle"
        />
      </button>
    </div>

    <div class="w-a d-f fd-r ml-a gap-96">
      <div class="w-a d-f fd-r ml-a align-c gap-24">
        <p class="colorGreyD">{{$t('page')}}</p>
        <input
          v-model="goToPage"
          type="number"
          class="pageInput w-1c"
          min="1"
          :max="this.pages"
        >
        <p class="colorGreyD">{{$t('all')}}  <span class="colorType">{{pages}}</span>  </p>
      </div>

      <div class="w-a d-f align-c">
        <button
          @click="goingToPage()"
          class="primPaginator goToPageBtn w-2 h-48p gap-12"
        >
        <span>{{$t('go')}}</span>
        <Icons
          icon="arrRight"
          size="middle"
        />
      </button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'paginateComponent',

  components: {
  },

  data() {
    return {
      goToPage: 1,
      currentPageNumber: 1
    }
  },

  props: {
    pages: {
      type: Number,
      required: true
    },
    staticPagination: {
      type: Boolean,
      required: false,
      default: false
    },
    staticCurrentPage: {
      required: false,
    }
  },

  methods: {
    goToPageChanger() {
      this.goToPage = this.currentPageNumber
    },

    next() {
      this.$emit('next')

      if(this.staticPagination === false) {
        this.$router.push(
          {
            query: {
              ...this.$route.query,
              page: this.currentPageNumber + 1
            }
          }
        )
        this.$router.go()
      }
      else
      this.goToPage ++
      this.currentPageNumber ++
    },

    prev() {
      this.$emit('prev')

      if(this.staticPagination === false) {
        this.$router.push(
          {
            query: {
              ...this.$route.query,
              page: this.currentPageNumber - 1
            }
          }
        )
      }
      else
      this.goToPage --
      this.currentPageNumber --
    },

    goingToPage() {
      if(this.goToPage > this.pages) {
        this.goToPage = this.pages
        this.$emit('goingToPage')

        if(this.staticPagination === false) {
          this.$router.push({
              query: {
                ...this.$route.query,
                page: this.pages
              }
            }
          )
          this.$router.go()
        }
        else
        this.$emit('goingToPageStatic', this.goToPage)
        this.currentPageNumber = this.goToPage
      }
      else {
        this.$emit('goingToPage')
        if(this.staticPagination === false) {
          this.$router.push({
            query: {
              ...this.$route.query,
              page: this.goToPage
            }
          })
          this.$router.go()
        }
        else
        this.$emit('goingToPageStatic', this.goToPage)
        this.currentPageNumber = this.goToPage
      }
    }
  },

  mounted() {
    this.goToPageChanger()
    if(this.$route.query.page === undefined) {
      if(this.staticPagination === false) {
        this.currentPageNumber = 1
        this.goToPage = 1
      }
      else
      this.currentPageNumber = this.staticCurrentPage
      this.goToPage = this.staticCurrentPage
    }
    else
    if(this.staticPagination === false) {
      this.currentPageNumber = Number(this.$route.query.page)
      this.goToPage = Number(this.$route.query.page)
    }
    else
    this.currentPageNumber = this.staticCurrentPage
    this.goToPage = this.staticCurrentPage
  },

  watch: {
    '$route'() {
      this.$router.go()
    },

    goToPage() {
      if (this.goToPage < 1) {
        this.goToPage = 1
      }else if(this.goToPage > this.pages){
        this.goToPage = this.pages
      }
    }
  }
}
</script>