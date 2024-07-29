<template>
    <div class="wrapper">
        <!-- Bosh bo'lim -->
        <Header :header_title="title[this.$i18n.locale]" :main_crumb="[{title: title[this.$i18n.locale], path: '/'}]"/>
        
        <!-- Arizalar statistikasi bo'limi -->
        <div class="g2 mt-64">
            <div class="app-t2">
                <p>{{data?.totalNumberApplications}}</p>
                <span>Hozirgi kundagi holat bo‘yicha arizalar <b>UMUMIY SONI</b></span>
            </div>
            <div class="app-t2">
                <p>{{data?.newApplications}}</p>
                <b>YANGI ARIZALAR</b>
            </div>
        </div>
        
        <!-- Arizalar holati bo'limi -->
        <div class="g3">
            <div class="app-t2">
                <p>{{data?.checkingApplications}}</p>
                <b>KO‘RIB CHIQILMOQDA</b>
            </div>
            <div class="app-t2">
                <p>{{data?.acceptedApplications}}</p>
                <b>TASDIQLANGAN</b>
            </div>
            <div class="app-t2">
                <p>{{data?.cancelledApplications}}</p>
                <b>BEKOR QILINGAN</b>
            </div>
        </div>
        
        <!-- Umumiy arizalar soni -->
        <div class="count-app">
            <p>Arizalar soni:</p>
            <p>{{data?.count}}</p>
        </div>
        
        <!-- Arizalar jadvali bo'limi -->
        <div class="app-list">
            <div class="table">
                <div class="thead">
                    <div class="thead-tr">
                        <div class="td">№</div>
                        <div class="td">F.I.Sh</div>
                        <div class="td">Ariza turi</div>
                        <div class="td">Ariza raqami</div>
                        <div class="td">Ariza holati</div>
                        <div class="td">Ariza bosqichi</div>
                    </div>
                    <div class="thead-filter">
                        <div class="td"></div>
                        <div class="td">
                            <el-input
                                @input="typeFilter"
                                :placeholder="$t('search')"
                                v-model="filter.searchWord">
                            </el-input>
                        </div>
                        <div class="td">
                            <el-select @change="changeFilter" v-model="filter.application_type" clearable :placeholder="$t('selectCat')">
                                <el-option
                                v-for="item in application_type"
                                :key="item.id"
                                :label="item.name?.[$i18n.locale]"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="td">
                            <el-input
                                @input="typeFilter"
                                placeholder="Ariza raqami"
                                v-model="filter.searchAppNum">
                            </el-input>
                        </div>
                        <div class="td">
                            <el-select @change="changeFilter" v-model="filter.status" clearable filterable :placeholder="$t('selectSta')">
                                <el-option
                                v-for="item in status"
                                :key="item.id"
                                :label="item.name?.[$i18n.locale]"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="td">
                            <el-select @change="changeFilter" v-model="filter.stage" clearable filterable :placeholder="$t('selectSta')">
                                <el-option
                                v-for="item in stage"
                                :key="item.id"
                                :label="item.name?.[$i18n.locale]"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <div @click="$router.push('applications/'+el?.application_id)" class="tbody" v-for="(el, index) in data?.rows" :key="index">
                    <div class="td">{{index + 1}}</div>
                    <div class="td">
                        <p>{{el.first_name}} {{el.sur_name}} {{el.middle_name}}</p>
                    </div>
                    <div class="td">{{el.application_type}}</div>
                    <div class="td">{{el.application_number}}</div>
                    <div class="td">{{el.status}}</div>
                    <div class="td">{{el.stage || '-'}}</div>
                </div>
            </div>
        </div>
        <Pagination :staticCurrentPage="page" @goingToPage="goingToPage" @next="goingToPage" @prev="goingToPage" v-if="loading" :pages="pages"/>
    </div>
</template>

<script>
import Pagination from '@/components/content/paginatorButtons.vue'

export default {
    data() {
        return {
            title: {ru:"Заявки", en:"Applications", uz:"Arizalar"},
            loading: false,
            data: null,
            limit: 8,
            offset: 0,
            page: 1,
            pages: 0,
            filter: {
                searchWord: this.$route.query.searchWord,
                searchAppNum: this.$route.query.searchAppNum,
                application_type: this.$route.query.application_type,
                status: this.$route.query.status,
                stage: this.$route.query.stage,
            },
            application_type: [
                {
                    id: 1,
                    value: 'registration',
                    name: {
                        en: 'Сдать сертификационный экзамен',
                        ru: 'Сдать сертификационный экзамен',
                        uz: 'Attestatsiya imtihonini topshirish',
                    }
                },
                {
                    id: 2,
                    value: 'update',
                    name: {
                        en: 'Продление сертификата эксперта',
                        ru: 'Продление сертификата эксперта',
                        uz: 'Ekspert guvohnomasini qayta rasmiylashtirish',
                    }
                },
                {
                    id: 3,
                    value: 'expansion',
                    name: {
                        en: 'Продлить срок действия',
                        ru: 'Продлить срок действия',
                        uz: 'Amal qilish muddatini uzaytirish',
                    }
                },
                {
                    id: 4,
                    value: 'badge',
                    name: {
                        en: 'Только для получения значка',
                        ru: 'Только для получения значка',
                        uz: 'Faqat beyjik olish uchun',
                    }
                },
            ],
            status: [
                {
                    id: 1,
                    value: 'new',
                    name: {
                        ru: 'Yangi',
                        en: 'Yangi',
                        uz: 'Yangi',
                    }
                },
                {
                    id: 2,
                    value: 'checking',
                    name: {
                        ru: 'Tekshirilmoqda',
                        en: 'Tekshirilmoqda',
                        uz: 'Tekshirilmoqda',
                    }
                },
                {
                    id: 3,
                    value: 'cancelled',
                    name: {
                        ru: 'Bekor qilingan',
                        en: 'Bekor qilingan',
                        uz: 'Bekor qilingan',
                    }
                },
                {
                    id: 4,
                    value: 'accepted',
                    name: {
                        ru: 'Tasdiqlangan',
                        en: 'Tasdiqlangan',
                        uz: 'Tasdiqlangan',
                    }
                },
            ],
            stage: [
                {
                    id: 1,
                    value: '1',
                    name: {
                        ru: '1',
                        en: '1',
                        uz: '1',
                    }
                },
                {
                    id: 2,
                    value: '2',
                    name: {
                        ru: '2',
                        en: '2',
                        uz: '2',
                    }
                },
                {
                    id: 3,
                    value: '3',
                    name: {
                        ru: '3',
                        en: '3',
                        uz: '3',
                    }
                },
                {
                    id: 4,
                    value: '4',
                    name: {
                        ru: '4',
                        en: '4',
                        uz: '4',
                    }
                },
            ],
            timeout: null,
        }
    },
    components: {
        Pagination
    },
    methods: {
        async goingToPage() {
            this.page = this.$route.query.page || 1;
            this.offset = (this.page - 1) * this.limit;
            this.getmenu();
        },
        typeFilter() {
            if (this.timeout) {  
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(() => {
                Object.keys(this.filter).forEach((key) => {
                    if (!this.filter[key]) {
                        delete this.filter[key];
                    }
                });
                this.$router.push({
                    query: {
                        ...this.$route.query,
                        ...this.filter,
                    }
                });
                this.$axios.get('applications', {params: {...this.filter}}).then((el) => {
                    this.data = el.data.result;
                    this.loading = true;
                });
            }, 500);
        },
        changeFilter() {
            Object.keys(this.filter).forEach((key) => {
                if (!this.filter[key]) {
                    delete this.filter[key];
                }
            });
            this.$router.push({
                query: {
                    ...this.$route.query,
                    ...this.filter,
                }
            });
            this.$axios.get('applications', {params: {...this.filter}}).then((el) => {
                this.data = el.data.result;
            });
        }
    },
    async mounted() {
        this.$axios.get('applications').then((res) => {
            this.data = res.data.result;
                    console.log('el.data.result :', el.data.result);
        });
    },
}
</script>

<style scoped>
.wrapper {
    padding: 20px;
}
.g2, .g3 {
    display: grid;
    gap: 20px;
}
.g2 {
    grid-template-columns: 1fr 1fr;
}
.g3 {
    grid-template-columns: repeat(3, 1fr);
}
.app-t2 {
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
}
.count-app, .app-list {
    margin-top: 20px;
}
.table {
    width: 100%;
    border-collapse: collapse;
}
.thead, .tbody {
    display: contents;
}
.thead-tr, .thead-filter, .tbody {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
}
.td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
}
</style>
