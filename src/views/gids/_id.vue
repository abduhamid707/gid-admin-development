<template>
  <div class="wrapper" v-if="loading">
    <Header :header_title="title[this.$i18n.locale]" :main_crumb="main_crumb" />
    <div class="guide-sg">
      <div class="guide-sg-wrapper">
        <div class="guide-img">
          <img
            :src="'http://test.gidlar.uz/api/cdn/' + guide?.guide_photo"
            alt=""
          />
        </div>
        <div class="guide-infos">
          <div class="guide-info">
            <span
              >{{ guide?.first_name }} {{ guide?.last_name }}
              {{ guide?.middle_name }}</span
            >
          </div>
          <!-- <div class="guide-info">
                        <p>{{$t('certDate')}}:</p>
                        <span class="success">{{guide?.badges?.[0]?.expr_date|dateFilter}}</span>
                    </div>
                    <div class="guide-info">
                        <p>{{$t('lang')}}:</p>
                        <span><span v-for="item,idx in guide?.languages" :key="idx">{{langs[item-1]?.name?.[$i18n.locale]}}, </span></span>
                    </div>
                    <div class="guide-info">
                        <p>{{$t('badgeNum')}}:</p>
                        <span>{{guide?.badges?.[0]?.reg_num || '-'}}</span>
                    </div>
                    <div class="guide-info">
                        <p>{{$t('typeGuide')}}:</p>
                        <span>{{$t('translator')}}</span>
                    </div>
                    <div class="guide-info">
                        <p>{{$t('regions')}}:</p>
                        <span><span v-for="item,idx in guide?.regions" :key="idx">{{regions[item-1]?.name?.[$i18n.locale]}}, </span></span>
                    </div> -->
        </div>
      </div>
      <div class="guide-info-g2">
        <div class="guide-info-g2block">
          <p>Gid turi</p>
          <span>{{ $t(guide?.guide_type || 'interpreter') }}</span>
        </div>
        <div class="guide-info-g2block">
          <p>Sertifikat (beyj) qayd raqami</p>
          <span>{{ guide?.certificates?.[0]?.reg_num }}</span>
        </div>
        <div class="guide-info-g2block">
          <p>Gid toifasi</p>
          <span v-if="guide?.category == 0">{{
            no_category?.name[$i18n.locale]
          }}</span
          ><span v-else-if="guide?.category == 1 || guide?.category == 2"
            >{{ guide?.category }}-{{ num_category?.name[$i18n.locale] }}</span
          ><span v-else-if="guide?.category == 10">{{
            best_category?.name[$i18n.locale]
          }}</span>
          <span v-if="guide?.guide_type == 'excursion_guide'">{{
            $t('guide_type2')
          }}</span
          ><span v-else-if="guide?.guide_type == 'mountain_guide'">{{
            $t('guide_type3')
          }}</span
          ><span v-else>{{ $t('guide_type1') }}</span>
        </div>
        <div class="guide-info-g2block">
          <p>Sertifikat (beyj) amal qilish muddati</p>
          <span><del>07.10.2026</del></span>
        </div>
      </div>
      <div class="guide-info-g1">
        <div class="guide-info-g2block">
          <p>OTM yoki qayta tayyorlash kurslarini bitirgan sanasi</p>
          <span><del>07.10.2026</del></span>
        </div>
        <div class="guide-info-g2block">
          <p>Faoliyat olib boriladigan hududlar:</p>
          <div>
            <span v-for="(el, index) in guide?.regions" :key="index"
              >{{ el?.['name_' + $i18n.locale] }},
            </span>
            <span v-if="user?.regions?.length == 0">-</span>
          </div>
        </div>
        <div class="guide-info-g2block">
          <p>Faoliyat olib boriladigan tillar:</p>
          <div class="d-f gap-24 fw-w">
            <span v-for="(el, index) in guide?.languages" :key="index"
              >{{ el?.['name_' + $i18n.locale] }},
            </span>
            <span v-if="guide?.languages?.length == 0">-</span>
          </div>
        </div>
      </div>
      <div class="guide-info-g2">
        <div class="guide-info-g2block">
          <p>Faol sertifikati (beyji)</p>
          <span><del>-</del></span>
        </div>
        <div class="guide-info-g2block">
          <p>Sertifikat holati</p>
          <span><del>-</del></span>
        </div>
      </div>
      <div class="guide-certs-files">
        <p>Gid sertifikatlari</p>
        <div class="guide-certs-file-block">
          <div class="guide-cert-files">
            <div class="guide-cert-file">
              <Icons icon="pdf" size="middle" color="#8E8F90" />
              Sertifikat
              <Icons icon="download" size="middle" color="#8E8F90" />
            </div>
            <div class="guide-cert-file">
              <Icons icon="pdf" size="middle" color="#8E8F90" />
              Sertifikat
              <Icons icon="download" size="middle" color="#8E8F90" />
            </div>
            <div class="guide-cert-file">
              <Icons icon="pdf" size="middle" color="#8E8F90" />
              Sertifikat
              <Icons icon="download" size="middle" color="#8E8F90" />
            </div>
            <div class="guide-cert-file">
              <Icons icon="pdf" size="middle" color="#8E8F90" />
              Sertifikat
              <Icons icon="download" size="middle" color="#8E8F90" />
            </div>
            <div class="guide-cert-file">
              <Icons icon="pdf" size="middle" color="#8E8F90" />
              Sertifikat
              <Icons icon="download" size="middle" color="#8E8F90" />
            </div>
          </div>
        </div>
      </div>
      <div class="guide-certs-files">
        <p>Gid beyjlari</p>
        <div class="guide-certs-file-block">
          <div class="guide-cert-files">
            <div class="guide-cert-file">
              <Icons icon="pdf" size="middle" color="#8E8F90" />
              Beyj
              <Icons icon="download" size="middle" color="#8E8F90" />
            </div>
            <div class="guide-cert-file">
              <Icons icon="pdf" size="middle" color="#8E8F90" />
              Beyj
              <Icons icon="download" size="middle" color="#8E8F90" />
            </div>
            <div class="guide-cert-file">
              <Icons icon="pdf" size="middle" color="#8E8F90" />
              Beyj
              <Icons icon="download" size="middle" color="#8E8F90" />
            </div>
            <div class="guide-cert-file">
              <Icons icon="pdf" size="middle" color="#8E8F90" />
              Beyj
              <Icons icon="download" size="middle" color="#8E8F90" />
            </div>
            <div class="guide-cert-file">
              <Icons icon="pdf" size="middle" color="#8E8F90" />
              Beyj
              <Icons icon="download" size="middle" color="#8E8F90" />
            </div>
            <div class="guide-cert-file">
              <Icons icon="pdf" size="middle" color="#8E8F90" />
              Beyj
              <Icons icon="download" size="middle" color="#8E8F90" />
            </div>
          </div>
        </div>
      </div>
      <div class="guide-cert" v-show="false">
        <button class="download-cert">
          <Icons color="white" icon="upload" size="middle" />{{
            $t('downcert')
          }}
        </button>
        <button class="download-badge">
          <Icons color="white" icon="upload" size="middle" />
          {{ $t('downbadge') }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      main_crumb: [],
      title: { ru: 'Гид', en: 'Guide', uz: 'Gidlar' },
      guide: {},
      loading: false,
      langs: this.$store.state.langs.langs,
      regions: [
        {
          id: 1,
          name: {
            ru: 'Андижанская область',
            en: 'Andijon viloyati',
            uz: 'Andijon viloyati',
          },
        },
        {
          id: 2,
          name: {
            ru: 'Бухарская область',
            en: 'Buxoro viloyati',
            uz: 'Buxoro viloyati',
          },
        },
        {
          id: 3,
          name: {
            ru: 'Ферганская область',
            en: "Farg'ona viloyati",
            uz: "Farg'ona viloyati",
          },
        },
        {
          id: 4,
          name: {
            ru: 'Джизакская область',
            en: 'Jizzax viloyati',
            uz: 'Jizzax viloyati',
          },
        },
        {
          id: 5,
          name: {
            ru: 'Наманганская область',
            en: 'Namangan viloyati',
            uz: 'Namangan viloyati',
          },
        },
        {
          id: 6,
          name: {
            ru: 'Навоийская область',
            en: 'Navoiy viloyati',
            uz: 'Navoiy viloyati',
          },
        },
        {
          id: 7,
          name: {
            ru: 'Кашкадарьинская область',
            en: 'Qashqadaryo viloyati',
            uz: 'Qashqadaryo viloyati',
          },
        },
        {
          id: 8,
          name: {
            ru: 'Республика Каракалпакстан',
            en: "Qoraqalpog'iston Respublikasi",
            uz: "Qoraqalpog'iston Respublikasi",
          },
        },
        {
          id: 9,
          name: {
            ru: 'Самаркандская область',
            en: 'Samarqand viloyati',
            uz: 'Samarqand viloyati',
          },
        },
        {
          id: 10,
          name: {
            ru: 'Сырдарьинская область',
            en: 'Sirdaryo viloyati',
            uz: 'Sirdaryo viloyati',
          },
        },
        {
          id: 11,
          name: {
            ru: 'Сурхандарьинская область',
            en: 'Surxondaryo viloyati',
            uz: 'Surxondaryo viloyati',
          },
        },
        {
          id: 12,
          name: {
            ru: 'город Ташкент',
            en: 'Toshkent shahri',
            uz: 'Toshkent shahri',
          },
        },
        {
          id: 13,
          name: {
            ru: 'Ташкентская область',
            en: 'Toshkent viloyati',
            uz: 'Toshkent viloyati',
          },
        },
        {
          id: 14,
          name: {
            ru: 'Хорезмская область',
            en: 'Xorazm viloyati',
            uz: 'Xorazm viloyati',
          },
        },
        {
          id: 15,
          name: {
            ru: 'Горы Узбекистана',
            en: 'Mountains of Uzbekistan',
            uz: "O'zbekiston tog'lari",
          },
        },
      ],
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
    }
  },
  components: {},
  filters: {
    dateFilter(e) {
      if (!!e) {
        let date = new Date(e)
        let newdate =
          ('0' + date.getDate()).slice(-2) +
          '.' +
          ('0' + (date.getMonth() + 1)).slice(-2) +
          '.' +
          date.getFullYear()
        return newdate
      } else {
        return '-'
      }
    },
  },
  methods: {
    async getmenu() {
      this.loading = false
      if (this.$route.query.id) {
        await this.$axios
          .get('/guides/single?id=' + this.$route.query.id)
          .then((el) => {
            this.guide = el?.data?.result?.guideDocument
            this.pages = Math.ceil(this.table?.count / this.limit)
            this.loading = true
          })
      }
    },
  },
  async mounted() {
    await this.getmenu()
    this.main_crumb = [
      {
        title: this.title[this.$i18n.locale],
        path: '/' + this.$i18n.locale + '/gids',
      },
      {
        title:
          (this.guide?.first_name || '') +
          ' ' +
          (this.guide?.last_name || '') +
          ' ' +
          (this.guide?.middle_name || ''),
        path:
          '/' + this.$i18n.locale + '/gids/single?id=' + this.$route.query.id,
      },
    ]
  },
}
</script>
