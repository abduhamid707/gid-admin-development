<template>
  <div class="wrapper" @click="openFiles(null)">
    <Header
      :header_title="title[this.$i18n.locale]"
      :main_crumb="[{ title: title[this.$i18n.locale], path: '/' }]"
    />
    <div class="g1 mt-32">
      <div class="app-t2">
        <p>1336</p>
        <span>Hozirgi kundagi holat bo‘yicha gidlar <b>UMUMIY SONI</b></span>
      </div>
    </div>
    <div class="g2">
      <div class="app-t2">
        <p>1336</p>
        <span><b>Sertifikat (beyj) muddati tugamagan gidlar</b></span>
      </div>
      <div class="app-t2">
        <p>756</p>
        <b><b>Gid (gid-tarjimonlar)</b></b>
      </div>
    </div>
    <div class="g2">
      <div class="app-t2">
        <p>1336</p>
        <span><b>Ekskursiya yetakchisi</b></span>
      </div>
      <div class="app-t2">
        <p>756</p>
        <b>Yo‘riqchi yo‘l-boshlovchi</b>
      </div>
    </div>
    <div class="count-app">
      <p>Gidlar soni:</p>
      <p>{{ table?.count }}</p>
    </div>
    <div class="app-list">
      <div class="add-guide">
        <button @dblclick="$router.push('/' + $i18n.locale + '/gids/add')">
          <Icons icon="plus" size="middle" />{{ $t('addGuide') }}
        </button>
      </div>
      <div class="table">
        <div class="thead">
          <div class="thead-tr">
            <div class="td">№</div>
            <div class="td">{{ $t('FIO') }}</div>
            <div class="td">{{ $t('certNumber') }}</div>
            <div class="td">{{ $t('category') }}</div>
            <div class="td">{{ $t('status') }}</div>
            <div class="td">{{ $t('certificates') }}</div>
          </div>
          <div class="thead-filter">
            <div class="td"></div>
            <div class="td">
              <el-input
                @input="typeFilter"
                :placeholder="$t('search')"
                v-model="filter.name"
              ></el-input>
            </div>
            <div class="td">
              <el-select
                @change="changeFilter"
                v-model="filter.hasCertificate"
                clearable
                filterable
                :placeholder="$t('guides')"
              >
                <el-option
                  v-for="item in certList"
                  :key="item.id"
                  :label="item.name?.[$i18n.locale]"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="td">
              <el-select
                @change="changeFilter"
                v-model="filter.category"
                collapse-tags
                clearable
                filterable
                :placeholder="$t('selectCat')"
              >
                <el-option
                  v-for="item in category"
                  :key="item.id"
                  :label="item.name?.[$i18n.locale]"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="td">
              <el-select
                @change="changeFilter"
                v-model="filter.activity"
                collapse-tags
                clearable
                filterable
                :placeholder="$t('selectSta')"
              >
                <el-option
                  v-for="item in status"
                  :key="item.id"
                  :label="item.name?.[$i18n.locale]"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="td"></div>
          </div>
        </div>
        <div v-if="!loading" class="tbody">
          <div class="td"></div>
          <div class="td">{{ $t('downloading') }}</div>
          <div class="td">{{ $t('downloading') }}</div>
          <div class="td">{{ $t('downloading') }}</div>
          <div class="td">{{ $t('downloading') }}</div>
          <div class="td">{{ $t('downloading') }}</div>
        </div>
        <div
          v-show="loading"
          @click.stop="
            $router.push({ name: 'gids_id', query: { id: el?.data_token } })
          "
          class="tbody"
          v-for="(el, index) in table?.rows"
          :key="index"
        >
          <div class="td">{{ offset + index + 1 }}</div>
          <div class="td">
            <img
              :src="'http://test.gidlar.uz/api/cdn/' + el?.guide_photo"
              alt=""
            />
            <p>
              {{ el?.first_name }} {{ el?.last_name }} {{ el?.middle_name }}
            </p>
          </div>
          <div class="td">{{ el?.badges?.[0]?.reg_num }}</div>
          <div class="td">
            <span v-if="el?.category == 0">{{
              no_category?.name[$i18n.locale]
            }}</span
            ><span v-else-if="el?.category == 1 || el?.category == 2"
              >{{ el?.category }}-{{ num_category?.name[$i18n.locale] }}</span
            ><span v-else-if="el?.category == 10">{{
              best_category?.name[$i18n.locale]
            }}</span>
          </div>
          <div
            class="td"
            :class="el?.activity == 'active' ? 'success' : 'error'"
          >
            {{
              el?.activity == 'active'
                ? $t('active')
                : el?.activity == 'expired'
                ? $t('expired')
                : $t('canceled')
            }}
          </div>
          <div class="td">
            <div class="td-files" @click.stop="openFiles(index)">
              Fayllar
              <Icons icon="upload" size="middle" color="#8E8F90" />
            </div>
            <div
              v-if="openIndex == index && openFile"
              class="modal-certs"
              @click.stop
            >
              <div class="g2">
                <div class="modal-certbadg">
                  <p>Sertifikatlar</p>
                  <div class="modal-cert">
                    <Icons icon="pdf" size="middle" color="white" />
                    Sertifikatlar
                    <Icons icon="download" size="middle" color="white" />
                  </div>
                  <div class="modal-cert">
                    <Icons icon="pdf" size="middle" color="white" />
                    Sertifikatlar
                    <Icons icon="download" size="middle" color="white" />
                  </div>
                </div>
                <div class="modal-certbadg">
                  <p>Beyjlar</p>
                  <div class="modal-cert">
                    <Icons icon="pdf" size="middle" color="white" />
                    Beyjlar
                    <Icons icon="download" size="middle" color="white" />
                  </div>
                  <div class="modal-cert">
                    <Icons icon="pdf" size="middle" color="white" />
                    Beyjlar
                    <Icons icon="download" size="middle" color="white" />
                  </div>
                </div>
              </div>
              <div class="g1">
                <div class="modal-certs-down">
                  <Icons icon="rar" size="middle" color="white" />
                  Barchasi
                  <Icons icon="download" size="middle" color="white" />
                </div>
              </div>
            </div>
            <Icons icon="file" size="middle" />
          </div>
        </div>
      </div>
    </div>
    <Pagination
      :staticCurrentPage="page"
      @goingToPage="goingToPage"
      @next="goingToPage"
      @prev="goingToPage"
      v-if="loading"
      :pages="pages"
    />
  </div>
</template>
<script>
import Pagination from '@/components/content/paginatorButtons.vue'
export default {
  data() {
    return {
      title: { ru: 'Гид', en: 'Guide', uz: 'Gidlar' },
      limit: 8,
      offset: 0,
      page: 1,
      openIndex: null,
      openFile: null,
      pages: 0,
      loading: false,
      filter: {
        activity: [],
        name: this.$route.query.name,
        hasCertificate: this.$route.query.hasCertificate,
        category: [],
        languages: [],
      },
      category: [
        {
          id: 1,
          value: '0',
          name: {
            en: 'Toifasiz',
            ru: 'Toifasiz',
            uz: 'Toifasiz',
          },
        },
        {
          id: 2,
          value: '1',
          name: {
            en: '1-Toifa',
            ru: '1-Toifa',
            uz: '1-Toifa',
          },
        },
        {
          id: 3,
          value: '2',
          name: {
            en: '2-Toifa',
            ru: '2-Toifa',
            uz: '2-Toifa',
          },
        },
        {
          id: 4,
          value: '10',
          name: {
            en: 'Oliy toifa',
            ru: 'Oliy toifa',
            uz: 'Oliy toifa',
          },
        },
      ],
      status: [
        {
          id: 1,
          value: 'active',
          name: {
            ru: 'Aktiv',
            en: 'Aktiv',
            uz: 'Aktiv',
          },
        },
        {
          id: 2,
          value: 'expired',
          name: {
            ru: 'Muddati o‘tgan',
            en: 'Muddati o‘tgan',
            uz: 'Muddati o‘tgan',
          },
        },
        {
          id: 3,
          value: 'canceled',
          name: {
            ru: 'Bekor qilingan',
            en: 'Bekor qilingan',
            uz: 'Bekor qilingan',
          },
        },
      ],
      langs: this.$store.state.langs.langs,
      no_category: {
        name: {
          uz: 'Toifasiz',
          ru: 'Без категории',
          en: 'Uncategorized',
        },
      },
      num_category: {
        name: {
          uz: 'toifa',
          ru: 'категория',
          en: 'category',
        },
      },
      best_category: {
        name: {
          uz: 'Oliy toifa',
          ru: 'Высшая категория',
          en: 'High category',
        },
      },
      table: {},
      certList: [
        {
          id: 1,
          value: '',
          name: {
            en: 'All',
            ru: 'Все',
            uz: 'Barchasi',
          },
        },
        {
          id: 2,
          value: 'exist',
          name: {
            en: 'Certified guides',
            ru: 'Сертифицированные гиды',
            uz: 'Sertifikati mavjud gidlar',
          },
        },
      ],
      timeout: null,
    }
  },
  components: {
    Pagination,
  },
  watch: {
    '$route.query.searchWord': function (val) {
      this.filter.name = val
    },
    '$route.query.hasCertificate': function (val) {
      this.filter.hasCertificate = val
    },
  },
  methods: {
    openFiles(index) {
      if (index == this.openIndex) {
        this.openFile = !this.openFile
      } else {
        this.openIndex = index
        this.openFile = true
      }
    },
    async goingToPage() {
      this.page = this.$route.query.page || 1
      this.offset = (this.page - 1) * this.limit
      this.getmenu()
    },
    async getmenu() {
      var params = {}
      params.limit = this.limit
      params.offset = this.offset
      this.filter.name = this.$route.query.searchWord
      this.filter.hasCertificate = this.$route.query.hasCertificate || ''
      !!this.$route.query.searchWord &&
        (params.searchWord = this.$route.query.searchWord)
      !!this.$route.query.hasCertificate &&
        (params.hasCertificate = this.$route.query.hasCertificate)
      !!this.$route.query.activity &&
        ((params.activity = this.$route.query.activity),
        (this.filter.activity = this.$route.query.activity))
      this.$route.query.category &&
        ((params.category = this.$route.query.category),
        (this.filter.category = this.$route.query.category))
      this.$route.query.languages &&
        JSON.parse(this.$route.query.languages)?.length > 0 &&
        ((params.languages = this.$route.query.languages),
        (this.filter.languages = JSON.parse(this.$route.query.languages)))
      this.loading = false
      await this.$axios.get('/guides', { params: { ...params } }).then((el) => {
        this.table = el?.data?.result
        this.pages = Math.ceil(this.table?.count / this.limit)
        this.loading = true
      })
    },
    typeFilter() {
      this.openFiles(null)
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        this.loading = false

        this.$router.push({
          query: {
            ...this.$route.query,
            searchWord: this.filter.name,
            hasCertificate: this.filter.hasCertificate,
          },
        })
        this.page = 1
        this.offset = (this.page - 1) * this.limit
        var params = {}
        params.limit = this.limit
        params.offset = this.offset
        this.$route.query.searchWord &&
          (params.searchWord = this.$route.query.searchWord)
        this.$route.query.hasCertificate &&
          (params.hasCertificate = this.filter.hasCertificate)
        !!this.filter.activity && (params.activity = this.filter.activity)
        this.filter.category && (params.category = this.filter.category)
        !!this.filter.languages.length &&
          (params.languages = JSON.stringify(this.filter.languages))
        this.$axios.get('guides', { params: { ...params } }).then((el) => {
          this.table = el?.data?.result
          this.pages = Math.ceil(this.table?.count / this.limit)
          this.loading = true
        })
      }, 500)
    },
    async changeFilter() {
      this.openFiles(null)
      this.loading = false
      this.page = 1
      this.offset = (this.page - 1) * this.limit
      this.$router.push({
        query: {
          ...this.$route.query,
          page: this.page,
          activity: this.filter.activity,
          category: this.filter.category,
          languages: JSON.stringify(this.filter.languages),
        },
      })
      var params = {}
      params.limit = this.limit
      params.offset = this.offset
      !!this.filter.name && (params.searchWord = this.filter.name)
      !!this.filter.hasCertificate &&
        (params.hasCertificate = this.filter.hasCertificate)
      !!this.$route.query.activity &&
        ((params.activity = this.$route.query.activity),
        (this.filter.activity = this.$route.query.activity))
      this.$route.query.category &&
        ((params.category = this.$route.query.category),
        (this.filter.category = this.$route.query.category))
      JSON.parse(this.$route.query.languages)?.length > 0 &&
        ((params.languages = this.$route.query.languages),
        (this.filter.languages = JSON.parse(this.$route.query.languages)))
      this.loading = false
      this.$axios.get('guides', { params: { ...params } }).then((el) => {
        this.table = el?.data?.result
        this.pages = Math.ceil(this.table?.count / this.limit)
        this.loading = true
      })
    },
  },
  async mounted() {
    this.page = this.$route.query.page || 1
    this.offset = (this.page - 1) * this.limit
    // await this.getmenu()
  },
}
</script>
