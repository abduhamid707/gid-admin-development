<template>
    <div class="wrapper">
        <Header :header_title="title[this.$i18n.locale]" :main_crumb="main_crumb"/>
        <div class="guide-sg">
            <div class="guide-add-wrapper">
                <div class="guide-add">
                    <div class="guide-inp">
                        <label for="">{{$t('name')}}</label>
                        <input :class="{required: ($v.guide.first_name.$dirty && !$v.guide.first_name.required)}" v-model="guide.first_name" class="el-input__inner" type="text" :placeholder="$t('placeholder_name')">
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('surname')}}</label>
                        <input :class="{required: ($v.guide.last_name.$dirty && !$v.guide.last_name.required)}" v-model="guide.last_name" class="el-input__inner" type="text" :placeholder="$t('placeholder_surname')">
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('midname')}}</label>
                        <input v-model="guide.middle_name" class="el-input__inner" type="text" :placeholder="$t('placeholder_midname')">
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('territory')}}</label>
                        <el-select v-model="guide.regions" multiple collapse-tags clearable filterable :placeholder="$t('regions')">
                            <el-option
                            v-for="item in regions"
                            :key="item.id"
                            :label="item.name?.[$i18n.locale]"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('gender')}}</label>
                        <el-select v-model="guide.gender" clearable filterable :placeholder="$t('placeholder_gender')">
                            <el-option
                            v-for="item in genders"
                            :key="item.id"
                            :label="item.name?.[$i18n.locale]"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('birth_date')}}</label>
                        <el-date-picker
                        v-model="guide.birth_date"
                        type="date"
                        :class="{required: ($v.guide.birth_date.$dirty && !$v.guide.birth_date.required)}"
                        format="dd.MM.yyyy"
                        placeholder="dd.mm.yyyy">
                        </el-date-picker>
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('langs')}}</label>
                        <el-select v-model="guide.languages" multiple collapse-tags clearable filterable :placeholder="$t('langs')">
                            <el-option
                            v-for="item in langs"
                            :key="item.id"
                            :label="item.name?.[$i18n.locale]"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('guide_type')}}</label>
                        <el-select :class="{required: ($v.guide.guide_type.$dirty && !$v.guide.guide_type.required)}" v-model="guide.guide_type" clearable filterable :placeholder="$t('placeholder_guide_type')">
                            <el-option
                            v-for="item in gtype"
                            :key="item.id"
                            :label="item.name?.[$i18n.locale]"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('category')}}</label>
                        <el-select :class="{required: ($v.guide.category.$dirty && !$v.guide.category.required)}" v-model="guide.category" clearable filterable :placeholder="$t('placeholder_guide_category')">
                            <el-option
                            v-for="item in category"
                            :key="item.id"
                            :label="item.name?.[$i18n.locale]"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('phone')}}</label>
                        <input :class="{required: ($v.guide.personal_phone_number.$dirty && !$v.guide.personal_phone_number.required)}" v-model="guide.personal_phone_number" class="el-input__inner" type='text' :placeholder="$t('placeholder_work_phone')">
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('work_phone')}}</label>
                        <input v-model="guide.work_phone_number" class="el-input__inner" type='text' :placeholder="$t('placeholder_work_phone')">
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('email')}}</label>
                        <input v-model="guide.email" class="el-input__inner" type='text' :placeholder="$t('placeholder_email')">
                    </div>
                </div>
                <div class="guide-add-auto">
                    <div class="guide-inp">
                        <div class="guide-file">
                            <img v-if="!logo" src="@/assets/image/Frame555.png" alt="">
                            <div v-else class="guide-file-uploaded">
                                <img :src="logo" alt="">
                                <div @click="clearImage" class="icons">
                                    <Icons
                                        icon="closeFilled"
                                        size="middle"
                                    />
                                </div>
                            </div>
                            <div class="guide-file-info">
                                <label for="">{{$t('badgePhoto')}}</label>
                                <input @change="setImage" id="imageguide" type="file" v-show="false">
                                <div class="guide-file-req">
                                    <p>{{$t('requirement')}}:</p>
                                    <span>{{$t('req1')}}</span>
                                    <span>{{ $t('req2') }}</span>
                                    <span>{{ $t('req3') }}</span>
                                    <span>{{ $t('req4') }}</span>
                                </div>
                                <label :class="{required: ($v.guide.logo.$dirty && !$v.guide.logo.required)}" for="imageguide" class="button">{{ $t('uploadImg') }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="guide-inp">
                        <div class="guide-file">
                            <img v-if="!certFile" src="@/assets/image/Frame556.png" alt="">
                            <div v-else class="guide-file-uploaded">
                                <img src="@/assets/image/Frame557.png" alt="">
                                <div @click="clearFile" class="icons">
                                    <Icons
                                        icon="closeFilled"
                                        size="middle"
                                    />
                                </div>
                            </div>
                            <div class="guide-file-info">
                                <label for="">{{ $t('diplomaUpload') }}</label>
                                <input accept=".pdf" @change="setFile" id="fileDiploma" type="file" v-show="false">
                                <div class="guide-file-req">
                                    <p>{{$t('requirement')}}</p>
                                    <span>{{$t('req50mb')}}</span>
                                    <span>{{$t('reqFileType')}} </span>
                                </div>
                                <label for="fileDiploma" class="button">{{$t('uploadFile')}}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="guide-add">
                    <div class="guide-inp">
                        <label for="">{{$t('diplomGraDate')}}</label>
                        <el-date-picker
                        v-model="guide.univer_graduate_date"
                        format="dd.MM.yyyy"
                        type="date"
                        placeholder="dd.mm.yyyy">
                        </el-date-picker>
                    </div>
                    <div class="guide-inp">
                        <label for="">{{ $t('nameuniver') }}</label>
                        <input v-model="guide.univer_name" class="el-input__inner" type='text' :placeholder="$t('placeholder_nameuniver')">
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('special')}}</label>
                        <input v-model="guide.univer_profession" class="el-input__inner" type='text' :placeholder="$t('placeholder_special')">
                    </div>
                </div>
                <div class="guide-add-auto">
                    <div class="guide-inp">
                        <label for="">{{ $t('major') }}</label>
                        <input class="el-input__inner" v-model="guide.univer_major" type='text' :placeholder="$t('placeholder_major')">
                    </div>
                </div>
                <div class="guide-add">
                    <div class="guide-inp">
                        <label for="">{{$t('certNumber')}}</label>
                        <input v-model="guide.reg_num" class="el-input__inner" type='text' :placeholder="$t('placeholder_certNumber')">
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('dipRegNum')}}</label>
                        <el-date-picker
                        v-model="guide.badge_given_date"
                        format="dd.MM.yyyy"
                        type="date"
                        placeholder="dd.mm.yyyy">
                        </el-date-picker>
                    </div>
                    <div class="guide-inp">
                        <label for="">{{$t('certDate')}}</label>
                        <el-date-picker
                        v-model="guide.expr_date"
                        format="dd.MM.yyyy"
                        type="date"
                        placeholder="dd.mm.yyyy">
                        </el-date-picker>
                    </div>
                </div>
                <div class="guide-save">
                    <button @click="$router.go(-1)" class="cancel">{{$t('cancel')}}</button>
                    <button @click="sendGuide" class="save">{{$t('save')}}</button>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
export default {
    validations:{
        guide:{
            first_name: {required},
            last_name: {required},
            birth_date: {required},
            category: {required},
            guide_type: {required},
            personal_phone_number: {required},
            logo: {required},
        },
    },
    data(){
        return{
            main_crumb:[],
            title: {ru:"Гид",en:"Guide",uz:"Gidlar"},
            title2: {ru:"Добавить",en:"Add",uz:"Qo'shish"},
            guide:{},
            loading:false,
            logo:null,
            certFile:false,
            genders:[
                {
                    id: 1,
                    value: 'F',
                    name: {
                        ru: 'Женской',
                        uz: 'Ayol',
                    }
                },
                {
                    id: 2,
                    value: 'M',
                    name: {
                        ru: 'Мужской',
                        uz: 'Erkak',
                    }
                },
            ],
            langs: this.$store.state.langs.langs,
            category: [
                {id: 1,
                value: '0',
                name: {
                    en: 'Toifasiz',
                    ru: 'Toifasiz',
                    uz: 'Toifasiz',
                }},
                {id: 2,
                value: '1',
                name: {
                    en: '1-Toifa',
                    ru: '1-Toifa',
                    uz: '1-Toifa',
                }},
                {id: 3,
                value: '2',
                name: {
                    en: '2-Toifa',
                    ru: '2-Toifa',
                    uz: '2-Toifa',
                }},
                {id: 4,
                value: '10',
                name: {
                    en: 'Oliy toifa',
                    ru: 'Oliy toifa',
                    uz: 'Oliy toifa',
                }
                },],
            regions:[
                {
                    id: 1,
                    name: {
                        ru: 'Андижанская область',
                        en: 'Andijon viloyati',
                        uz: 'Andijon viloyati',
                    }
                },
                {
                    id: 2,
                    name: {
                        ru: 'Бухарская область',
                        en: 'Buxoro viloyati',
                        uz: 'Buxoro viloyati',
                    }
                },
                {
                    id: 3,
                    name: {
                        ru: 'Ферганская область',
                        en: 'Farg\'ona viloyati',
                        uz: 'Farg\'ona viloyati',
                    }
                },
                {
                    id: 4,
                    name: {
                        ru: 'Джизакская область',
                        en: 'Jizzax viloyati',
                        uz: 'Jizzax viloyati',
                    }
                },
                {
                    id: 5,
                    name: {
                        ru: 'Наманганская область',
                        en: 'Namangan viloyati',
                        uz: 'Namangan viloyati',
                    }
                },
                {
                    id: 6,
                    name: {
                        ru: 'Навоийская область',
                        en: 'Navoiy viloyati',
                        uz: 'Navoiy viloyati',
                    }
                },
                {
                    id: 7,
                    name: {
                        ru: 'Кашкадарьинская область',
                        en: 'Qashqadaryo viloyati',
                        uz: 'Qashqadaryo viloyati',
                    }
                },
                {
                    id: 8,
                    name: {
                        ru: 'Республика Каракалпакстан',
                        en: 'Qoraqalpog\'iston Respublikasi',
                        uz: 'Qoraqalpog\'iston Respublikasi',
                    }
                },
                {
                    id: 9,
                    name: {
                        ru: 'Самаркандская область',
                        en: 'Samarqand viloyati',
                        uz: 'Samarqand viloyati',
                    }
                },
                {
                    id: 10,
                    name: {
                        ru: 'Сырдарьинская область',
                        en: 'Sirdaryo viloyati',
                        uz: 'Sirdaryo viloyati',
                    }
                },
                {
                    id: 11,
                    name: {
                        ru: 'Сурхандарьинская область',
                        en: 'Surxondaryo viloyati',
                        uz: 'Surxondaryo viloyati',
                    }
                },
                {
                    id: 12,
                    name: {
                        ru: 'город Ташкент',
                        en: 'Toshkent shahri',
                        uz: 'Toshkent shahri',
                    }
                },
                {
                    id: 13,
                    name: {
                        ru: 'Ташкентская область',
                        en: 'Toshkent viloyati',
                        uz: 'Toshkent viloyati',
                    }
                },
                {
                    id: 14,
                    name: {
                        ru: 'Хорезмская область',
                        en: 'Xorazm viloyati',
                        uz: 'Xorazm viloyati',
                    }
                },
                {
                    id: 15,
                    name: {
                        ru: 'Горы Узбекистана',
                        en: 'Mountains of Uzbekistan',
                        uz: 'O\'zbekiston tog\'lari',
                    }
                },
            ],
            gtype: [
                {id: 1,
                value: 'interpreter',
                name: {
                    ru: 'Гид (гид-переводчик)',
                    uz: 'gid-tarjimon',
                }},
                {id: 2,
                value: 'excursion_guide',
                name: {
                    ru: 'Руководитель экскурсии',
                    uz: 'ekskursiya yetakchisi',
                }},
                {id: 3,
                value: 'mountain_guide',
                name: {
                    ru: 'Путеводитель',
                    uz: 'yo‘riqchi-yo‘l boshlovchi',
                }}
            ],
        }
    },
    filters:{
        dateFilter(e){
            if(!!e){
                let date = new Date(e)
                let newdate = ('0'+date.getDate()).slice(-2)+'.'+('0'+(date.getMonth()+1)).slice(-2)+'.'+date.getFullYear()
                return  newdate
            }else{
                return '-'
            }
        }
    },
    components: {
    },
    methods:{
        clearFile(){
            this.guide.certFile = null
            this.certFile = null
        },
        clearImage(){
            this.guide.logo = null
            this.logo = null
        },
        setImage(e) {
            let img = new Image()
            img.src = window.URL.createObjectURL(e.target.files[0])
            img.onload = () => {
                if(((img.width/img.height)<=0.72)||(img.width/img.height)>=0.78){
                    this.$message.error('wrong image , img must be 3x4')
                }else{
                    if((e.target.files[0].size/1048576)>=5){
                        this.$message.error('wrong image , img must be smaller 5MB')
                    }else{
                        this.guide.logo = e.target.files[0];
                        this.logo = (URL.createObjectURL(e.target.files[0]))
                    }
                }
            }
        },
        setFile(e) {
            this.guide.certFile = e.target.files[0];
            this.certFile = (URL.createObjectURL(e.target.files[0]))
        },
        sendGuide(){
            if (this.$v.$invalid) {
                this.$v.$touch()
                this.$message.error("Заполните поле")
                return
            }
            let f = new FormData()
            Object.keys(this.guide).forEach(k => {
            if (k == 'logo') {
                this.guide[k] && f.append(k, this.guide[k], this.guide[k].name)
            }else if (Array.isArray(this.guide[k])) {
                f.append(k, JSON.stringify(this.guide[k]))
            }else {
                f.append(k, (this.guide[k]))
            }
            })
            return this.$axios({
            method: "POST",
            url: "guides/create",
            data: f
            }).then((res) => {
            return res
            }).catch((err) => {
            console.log(err);
            return err
            })
        },
        async getmenu() {
            this.loading = false
            if(this.$route.query.id){
                await this.$axios.get("/guides/single?id="+this.$route.query.id).then(el=>{
                    this.guide = el?.data?.result
                    this.pages = Math.ceil(this.table?.count/this.limit)
                    this.loading = true
                })
            }
        },
    },
    async mounted(){
        this.main_crumb=[
             {title:this.title[this.$i18n.locale],path:('/'+this.$i18n.locale+'/gids')},
             {title:this.title2[this.$i18n.locale],path:('/'+this.$i18n.locale+'/gids/add')}
            ],
        await this.getmenu()
    },
}
</script>