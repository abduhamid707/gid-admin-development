<template>
  <div class="wrapper">
    <Header header_title="AE158357" :main_crumb="main_crumb" />



    <div class="aplls_id2">
      <!-- Ariza sanasi -->
      <div class="apll_id">
        <span>Ariza sanasi:</span>
        <p>{{ user?.createdAt | dateFilter }}</p>
      </div>
      <!-- Arizachining F.I.Shi -->
      <div class="apll_id">
        <span>Arizachining F.I.Shi:</span>
        <p>
          {{ user?.first_name }} {{ user?.sur_name }} {{ user?.middle_name }}
        </p>
      </div>
      <!-- Arizachining manzili -->
      <div class="apll_id">
        <span>Manzil:</span>
        <p>{{ user?.address }}</p>
      </div>
      <!-- Doimiy manzil -->
      <div class="apll_id">
        <span>Doimiy manzil:</span>
        <p>{{ user?.per_adr }}</p>
      </div>
      <!-- TIN -->
      <div class="apll_id">
        <span>TIN:</span>
        <p>{{ user?.tin }}</p>
      </div>
      <!-- Tug'ilgan joy -->
      <div class="apll_id">
        <span>Tug‘ilgan joy:</span>
        <p>{{ user?.birth_place }}</p>
      </div>
      <!-- Tug'ilgan sana -->
      <div class="apll_id">
        <span>Tug‘ilgan sana:</span>
        <p>{{ user?.birth_date | dateFilter }}</p>
      </div>
      <!-- E-mail -->
      <div class="apll_id">
        <span>Email:</span>
        <p>{{ user?.email }}</p>
      </div>
      <!-- Telefon raqami -->
      <div class="apll_id">
        <span>Telefon raqami:</span>
        <p>{{ user?.phone_number }}</p>
      </div>
      <!-- Ariza turi -->
      <div class="apll_id">
        <span>Ariza turi:</span>
        <p>{{ $t(user?.application_type) }}</p>
      </div>
      <!-- Universitet -->
      <div class="apll_id">
        <span>Universitet:</span>
        <p>{{ user?.university }}</p>
      </div>
      <!-- Mutaxassislik -->
      <div class="apll_id">
        <span>Mutaxassislik:</span>
        <p>{{ user?.major }}</p>
      </div>
      <!-- Tajriba -->
      <div class="apll_id">
        <span>Tajriba:</span>
        <p>{{ user?.experience }}</p>
      </div>
      <!-- Badge rasm -->
      <div class="apll_id">
        <span>Badge Rasm:</span>
        <img
          v-if="user?.badge_img"
          :src="'https://culturevolunteers.uz/' + user?.badge_img.path"
          :alt="user?.badge_img.mimetype"
          style="width: 100px; height: auto"
        />
      </div>
    </div>
    <div class="aplls_id1">
      <!-- Faoliyat olib boriladigan hududlar -->
      <div class="apll_id">
        <span>Faoliyat olib boriladigan hududlar:</span>
        <div>
          <p v-for="(region, index) in user?.regions" :key="index">
            {{ region['name_' + $i18n.locale] }},
          </p>
          <p v-if="user?.regions.length == 0">-</p>
        </div>
      </div>
      <!-- Faoliyat olib boriladigan tillar -->
      <div class="apll_id">
        <span>Faoliyat olib boriladigan tillar:</span>
        <div>
          <p v-for="(language, index) in user?.languages" :key="index">
            {{ language['name_' + $i18n.locale] }},
          </p>
          <p v-if="user?.languages.length == 0">-</p>
        </div>
      </div>
    </div>
    <div class="button-group">
      <button @click="updateStatus('accepted')" class="btn-yes">Ha</button>
      <button @click="updateStatus('cancelled')" class="btn-no">Yo'q</button>
    </div>
    <div
      class="levels"
      v-if="user?.status != 'cancelled' && user?.status != 'accepted'"
    >
      <div v-if="user?.stage > 1" class="level-deactive">
        <span>1-chi bosqich</span>
        <p>Fayllarni talablarga muvofiqligini tekshirish</p>
        <Icons
          icon="check"
          color="#0D152C"
          size="custom"
          width="16"
          height="12"
        />
      </div>
      <div class="level" v-if="user?.stage == 1">
        <div class="level-num">
          <span>1-chi bosqich</span>
          <p>Fayllarni talablarga muvofiqligini tekshirish</p>
        </div>
        <p class="level-file-head">Asosiy fayllar</p>
        <div class="level-files">
          <div class="level-file" v-if="user?.certificate_doc?.path">
            <Icons
              icon="pdf"
              color="#8E8F90"
              size="custom"
              width="58"
              height="58"
              viewboxW="21"
              viewboxH="21"
            />
            <p>
              Sertifikat, yoki qayta tayyorlash kursidan o‘tganligini
              tasdiqlovchi hujjat nusxasi
            </p>

            <div class="level-btns">
              <button
                class="level-download"
                @click="downloadFile(user?.certificate_doc?.path)"
              >
                <Icons icon="download" color="#0D152C" size="36" />
              </button>
              <div class="level-confirmats">
                <button
                  class="level-cancel"
                  :class="{ active: user.certificate_doc.approved == false }"
                  @click="
                    ;(user.certificate_doc.approved = false), checkFiles()
                  "
                >
                  <Icons
                    icon="cancel"
                    color="#0D152C"
                    size="custom"
                    width="12"
                    height="12"
                  />
                </button>
                <button
                  class="level-confirm"
                  :class="{ active: user.certificate_doc.approved == true }"
                  @click=";(user.certificate_doc.approved = true), checkFiles()"
                >
                  <Icons
                    icon="check"
                    color="#0D152C"
                    size="custom"
                    width="16"
                    height="12"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="level-file" v-if="user?.medical_cer_doc?.path">
            <Icons
              icon="pdf"
              color="#8E8F90"
              size="custom"
              width="58"
              height="58"
              viewboxW="21"
              viewboxH="21"
            />
            <p>
              086 shaklidagi tibbiy ma’lumotnoma (yo‘riqchi-yo‘l boshlovchilar
              uchun)
            </p>
            <div class="level-btns">
              <button
                class="level-download"
                @click="downloadFile(user?.medical_cer_doc?.path)"
              >
                <Icons icon="download" color="#0D152C" size="36" />
              </button>
              <div class="level-confirmats">
                <button
                  class="level-cancel"
                  :class="{ active: user.medical_cer_doc.approved == false }"
                  @click="
                    ;(user.medical_cer_doc.approved = false), checkFiles()
                  "
                >
                  <Icons
                    icon="cancel"
                    color="#0D152C"
                    size="custom"
                    width="12"
                    height="12"
                  />
                </button>
                <button
                  class="level-confirm"
                  :class="{ active: user.medical_cer_doc.approved == true }"
                  @click=";(user.medical_cer_doc.approved = true), checkFiles()"
                >
                  <Icons
                    icon="check"
                    color="#0D152C"
                    size="custom"
                    width="16"
                    height="12"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="level-file" v-if="user?.notarial?.path">
            <Icons
              icon="pdf"
              color="#8E8F90"
              size="custom"
              width="58"
              height="58"
              viewboxW="21"
              viewboxH="21"
            />
            <p>Notarial tasdiqlangan ishonchnoma</p>
            <div class="level-btns">
              <button
                class="level-download"
                @click="downloadFile(user?.notarial?.path)"
              >
                <Icons icon="download" color="#0D152C" size="36" />
              </button>
              <div class="level-confirmats">
                <button
                  class="level-cancel"
                  :class="{ active: user.notarial.approved == false }"
                  @click=";(user.notarial.approved = false), checkFiles()"
                >
                  <Icons
                    icon="cancel"
                    color="#0D152C"
                    size="custom"
                    width="12"
                    height="12"
                  />
                </button>
                <button
                  class="level-confirm"
                  :class="{ active: user.notarial.approved == true }"
                  @click=";(user.notarial.approved = true), checkFiles()"
                >
                  <Icons
                    icon="check"
                    color="#0D152C"
                    size="custom"
                    width="16"
                    height="12"
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            class="level-file"
            v-for="(el, index) in user?.lang_files"
            :key="index"
          >
            <Icons
              icon="pdf"
              color="#8E8F90"
              size="custom"
              width="58"
              height="58"
              viewboxW="21"
              viewboxH="21"
            />
            <p>
              Chet tili sertifikati:
              {{ el?.path?.split('/')[el?.path?.split('/').length - 1] }}
            </p>
            <div class="level-btns">
              <button class="level-download" @click="downloadFile(el?.path)">
                <Icons icon="download" color="#0D152C" size="36" />
              </button>
              <div class="level-confirmats">
                <button
                  class="level-cancel"
                  :class="{ active: el.approved == false }"
                  @click=";(el.approved = false), checkFiles()"
                >
                  <Icons
                    icon="cancel"
                    color="#0D152C"
                    size="custom"
                    width="12"
                    height="12"
                  />
                </button>
                <button
                  class="level-confirm"
                  :class="{ active: el.approved == true }"
                  @click=";(el.approved = true), checkFiles()"
                >
                  <Icons
                    icon="check"
                    color="#0D152C"
                    size="custom"
                    width="16"
                    height="12"
                  />
                </button>
              </div>
            </div>
          </div>
          <div v-if="user?.badge_img?.path" class="profile-mode">
            <div class="profile-image">
              <label for="">Fotosurat</label>
              <div class="profile-img">
                <img
                  :src="
                    'http://test.gidlar.uz/api/cdn/' + user?.badge_img?.path
                  "
                  alt=""
                />
                <div class="profile-img-edit level-btns">
                  <div class="level-confirmats">
                    <button
                      class="level-cancel"
                      :class="{ active: user.badge_img.approved == false }"
                      @click=";(user.badge_img.approved = false), checkFiles()"
                    >
                      <Icons
                        icon="cancel"
                        color="#0D152C"
                        size="custom"
                        width="12"
                        height="12"
                      />
                    </button>
                    <button
                      class="level-confirm"
                      :class="{ active: user.badge_img.approved == true }"
                      @click=";(user.badge_img.approved = true), checkFiles()"
                    >
                      <Icons
                        icon="check"
                        color="#0D152C"
                        size="custom"
                        width="16"
                        height="12"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="profile-image">
              <label for="">Toifasi</label>
              <el-select
                v-model="user.category"
                clearable
                filterable
                :placeholder="$t('selectSta')"
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
          </div>
          <div class="level-confirm-btns">
            <button
              v-if="level1CheckFile"
              @click="save1Level('checking')"
              class="level-confirm-btn"
            >
              Tasdiqlash
            </button>
            <button
              v-else
              @click="save1Level('cancelled')"
              class="level-cancel-btn"
            >
              Qayta yuborish so‘rovi
            </button>
          </div>
        </div>
      </div>

      <div class="level-deactive" v-if="user?.stage != 2">
        <span>2-chi bosqich</span>
        <p>Fayllarni talablarga muvofiqligini tekshirish</p>
        <Icons
          v-if="user?.stage < 2"
          icon="clock"
          size="middle"
          color="black"
        />
        <Icons
          v-if="user?.stage > 2"
          icon="check"
          color="#0D152C"
          size="custom"
          width="16"
          height="12"
        />
      </div>

      <div class="level" v-if="user?.stage == 2">
        <div class="level-num">
          <span>2-chi bosqich</span>
          <p>Xizmat uchun to'lov</p>
        </div>
        <div class="level-payment">
          <Icons
            v-if="!user?.paymentFile"
            icon="clock"
            size="48"
            color="black"
          />
          <span v-if="!user?.paymentFile" class="pending-paid"
            >To‘lov kutilmoqda</span
          >
          <span
            v-else
            @click="downloadFile(user?.paymentFile)"
            class="download-paid"
            >To‘lov faylini yuklab olish</span
          >
          <div v-if="user?.paymentFile" class="level-btns">
            <div class="level-confirm-btns">
              <button @click="save2Level" class="level-payment-btn">
                Tasdiqlash
              </button>
            </div>
          </div>
          <div v-if="!user?.paymentFile">
            <p>Muddat</p>
            <p>{{ user?.updatedAt | dateFilter2 }}</p>
          </div>
        </div>
        <!-- <div class="level-confirm-btns">
                    <button @click="save2Level" class="level-confirm-btn">
                        Tasdiqlash
                    </button>
                </div>               -->
      </div>

      <div class="level" v-if="user?.stage == 3">
        <div class="level-num">
          <span>3-chi bosqich</span>
          <p>Test sinovlari</p>
        </div>
        <div class="level-exam">
          <span>Imtihon topshirish manzili va vaqtini kiriting</span>
          <p v-if="user?.test_address">
            Manzil: {{ user?.test_address?.address }}
          </p>
          <p v-if="user?.test_address">
            Vaqti: {{ user?.test_address?.exam_date | dateFilter }}
          </p>
          <div class="level-btns">
            <div class="level-confirm-btns">
              <div class="level-confirmats" v-if="user?.test_address">
                <button
                  class="level-cancel"
                  :class="{ active: approved3l == false }"
                  @click=";(approved3l = false), checkFiles"
                >
                  <Icons
                    icon="cancel"
                    color="#0D152C"
                    size="custom"
                    width="12"
                    height="12"
                  />O‘tmadi
                </button>
                <button
                  class="level-confirm"
                  :class="{ active: approved3l == true }"
                  @click=";(approved3l = true), checkFiles"
                >
                  <Icons
                    icon="check"
                    color="#0D152C"
                    size="custom"
                    width="16"
                    height="12"
                  />O‘tdi
                </button>
              </div>
              <button
                v-if="!user?.test_address"
                @click="level3modal = true"
                class="level-confirm-btn"
              >
                Manzil va vaqtni kiritish
              </button>
              <button v-else @click="save3Level" class="level-confirm-btn">
                Natijani tasdiqlash
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="level-deactive" v-if="user?.stage != 3">
        <span>3-chi bosqich</span>
        <p>Test sinovlari</p>
        <Icons
          v-if="user?.stage < 3"
          icon="clock"
          size="middle"
          color="black"
        />
        <Icons
          v-if="user?.stage > 3"
          icon="check"
          color="#0D152C"
          size="custom"
          width="16"
          height="12"
        />
      </div>
      <div class="level" v-if="user?.stage == 4">
        <div class="level-num">
          <span>4-chi bosqich</span>
          <p>Amaliyot</p>
        </div>
        <div class="level-exam">
          <span v-if="!user?.practice_address"
            >Amaliyot imtihonini topshirish manzili va vaqtini kiriting</span
          >
          <span v-else>Amaliyot imtihoni natijasini ko‘rsating</span>
          <p v-if="user?.practice_address">
            Manzil: {{ user?.practice_address?.address }}
          </p>
          <p v-if="user?.practice_address">
            Vaqti: {{ user?.practice_address?.exam_date | dateFilter }}
          </p>
          <div class="level-btns">
            <div class="level-confirm-btns">
              <div class="level-confirmats" v-if="user?.practice_address">
                <button
                  class="level-cancel"
                  :class="{ active: approved4l == false }"
                  @click=";(approved4l = false), checkFiles"
                >
                  <Icons
                    icon="cancel"
                    color="#0D152C"
                    size="custom"
                    width="12"
                    height="12"
                  />O‘tmadi
                </button>
                <button
                  class="level-confirm"
                  :class="{ active: approved4l == true }"
                  @click=";(approved4l = true), checkFiles"
                >
                  <Icons
                    icon="check"
                    color="#0D152C"
                    size="custom"
                    width="16"
                    height="12"
                  />O‘tdi
                </button>
              </div>
              <button
                v-if="!user?.practice_address"
                @click="level4modal = true"
                class="level-confirm-btn"
              >
                Manzil va vaqtni kiritish
              </button>
              <button v-else @click="save4Level" class="level-confirm-btn">
                Natijani tasdiqlash
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="level-deactive" v-if="user?.stage != 4">
        <span>4-chi bosqich</span>
        <p>Amaliyot</p>
        <Icons
          v-if="user?.stage < 4"
          icon="clock"
          size="middle"
          color="black"
        />
        <Icons
          v-if="user?.stage > 4"
          icon="check"
          color="#0D152C"
          size="custom"
          width="16"
          height="12"
        />
      </div>
    </div>
    <modal3l v-if="level3modal" @modalShow="level3modal = false" />
    <modal4l v-if="level4modal" @modalShow="level4modal = false" />
  </div>
</template>
<script>
import modal3l from '@/components/popup/exam.vue'
import modal4l from '@/components/popup/exam2.vue'
export default {
  data() {
    return {
      user: {},
      date: null,
      main_crumb: [],
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
      title: { ru: 'Заявки', en: 'Applications', uz: 'Arizalar' },
      loading: false,
      level3modal: false,
      level4modal: false,
      approved3l: false,
      approved4l: false,
      level1CheckFile: false,
    }
  },
  components: {
    modal3l,
    modal4l,
  },
  methods: {
    async updateStatus(status) {
            try {
                await this.$axios.put(`applications/${this.$route.params.id}`, {
                    status: status,
                    user: {
                        user_id: this.user.user_id
                    }
                });
                // Ma'lumotlarni yangilash yoki foydalanuvchini boshqa sahifaga o'tkazish
                this.fetchUserData(); // Statusni yangilashdan so'ng ma'lumotlarni qayta olish
            } catch (error) {
                console.error("Error updating status:", error);
            }
        },
    checkFiles() {
      if (
        this.user.badge_img &&
        this.user.badge_img.approved &&
        this.user.certificate_doc &&
        this.user.certificate_doc.approved
      ) {
        this.user.lang_files.forEach((element) => {
          if (element.approved == true) {
            this.level1CheckFile = true
          } else {
            this.level1CheckFile = false
          }
        })
      } else {
        this.level1CheckFile = false
      }
    },
    save1Level(e) {
      this.user.method = 'CHECKFILES'
      this.user.status = e
      this.$axios
        .put('applications/' + this.$route.params.id, this.user)
        .then((res) => {
          if (res) {
            this.$router.go(-1)
          }
        })
    },
    save2Level() {
      let payload = {
        method: 'CHECKPAYMENT',
        status: 'checking',
      }
      this.$axios
        .put('applications/' + this.$route.params.id, payload)
        .then((res) => {
          if (res) {
            this.$router.go(-1)
          }
        })
    },
    save3Level() {
      let level3 = {
        method: 'TESTANSWER',
        status: 'checking',
        approved: JSON.stringify(this.approved3l),
      }
      this.$axios
        .put('applications/' + this.$route.params.id, level3)
        .then((res) => {
          if (res) {
            this.$router.go(-1)
          }
        })
    },
    save4Level() {
      let level4 = {
        method: 'PRACTICEANSWER',
        status: 'checking',
        approved: JSON.stringify(this.approved4l),
      }
      this.$axios
        .put('applications/' + this.$route.params.id, level4)
        .then((res) => {
          if (res) {
            this.$router.go(-1)
          }
        })
    },
    downloadFile(e) {
      if (e) {
        const apiUrl = 'http://test.gidlar.uz/api/cdn/' + e
        return this.$axios({
          method: 'GET',
          url: apiUrl,
          responseType: 'blob',
        }).then((response) => {
          var file = new Blob([response.data])
          var fileURL = window.URL.createObjectURL(new Blob([file]))
          var fileLink = document.createElement('a')
          fileLink.href = fileURL
          var fileType = e && e.split('.')[e.split('.').length - 1]
          var fileName = e && e.split('.')[e.split('.').length - 2]
          fileLink.setAttribute('download', `${fileName}.${fileType}`)
          document.body.appendChild(fileLink)
          fileLink.click()
          return 'fileUploaded'
        })
      }
    },
  },
  async mounted() {
    this.main_crumb = [
      {
        title: this.title[this.$i18n.locale],
        path: '/' + this.$i18n.locale + '/applications',
      },
      {
        title: 'AE158357',
        path:
          '/' + this.$i18n.locale + '/applications/' + this.$route.params.id,
      },
    ]
    this.$axios.get('applications/' + this.$route.params.id).then((res) => {
      this.user = res?.data?.result?.application
    })
    this.checkFiles()
  },
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
        let newtime =
          ('0' + date.getHours()).slice(-2) +
          ':' +
          ('0' + date.getMinutes()).slice(-2)
        return newdate + ' -- ' + newtime
      } else {
        return 'Деактив'
      }
    },
    dateFilter2(e) {
      if (!!e) {
        let date = new Date(e)
        let newdate =
          ('0' + (date.getDate() + 3)).slice(-2) +
          '.' +
          ('0' + (date.getMonth() + 1)).slice(-2) +
          '.' +
          date.getFullYear()
        let newtime =
          ('0' + date.getHours()).slice(-2) +
          ':' +
          ('0' + date.getMinutes()).slice(-2)
        return newdate + ' -- ' + newtime
      } else {
        return 'Деактив'
      }
    },
  },
}
</script>
<style scoped>
.button-group {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.btn-yes, .btn-no {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.btn-yes {
    background-color: #28a745; /* Yashil rang */
}

.btn-yes:hover {
    background-color: #218838; /* Yashil rangni biroz qoraytirish */
}

.btn-no {
    background-color: #dc3545; /* Qizil rang */
}

.btn-no:hover {
    background-color: #c82333; /* Qizil rangni biroz qoraytirish */
}
</style>
