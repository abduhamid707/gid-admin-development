<template>
    <div class="wrapper">
        <Header :header_title="title[this.$i18n.locale]" :main_crumb="[{title:title[this.$i18n.locale],path:'/'}]" />
        <div class="statistics">
            <div class="chart-block-progress">
                <div class="chart-header">
                    <p>Gidlar soni</p>
                    <div @mouseleave="openSelect = false" class="chart-select">
                        <button @mouseenter="openSelect = true">yanvar <Icons icon="arrDown" color="black" size="middle"/></button>
                        <div @mouseleave="openSelect = false" v-show="openSelect" class="chart-select-items">
                            <div class="chart-select-item">123</div>
                            <div class="chart-select-item">123</div>
                            <div class="chart-select-item">123</div>
                            <div class="chart-select-item">123</div>
                            <div class="chart-select-item">123</div>
                        </div>
                    </div>
                </div>
                <div class="chart-el">
                    <div class="chart-label active">
                        <span>Sertifikat (beyj) muddati amalda bo‘lgan gidlar</span>
                        <p>16.8% - 1 500</p>
                        <div class="progress" :style="'width:'+97+'%'"></div>
                    </div>
                    <div class="chart-label cancelled">
                        <span>Sertifikat (beyj) muddati amalda bo‘lgan gidlar</span>
                        <p>16.8% - 1 500</p>
                        <div class="progress" :style="'width:'+72+'%'"></div>
                    </div>
                    <div class="chart-label expired">
                        <span>Sertifikat (beyj) muddati amalda bo‘lgan gidlar</span>
                        <p>16.8% - 1 500</p>
                        <div class="progress" :style="'width:'+95+'%'"></div>
                    </div>
                </div>
            </div>
            <div class="chart-block-progress barD">
                <div class="chart-header">
                    <p>Gidlar faoliyat hududlari</p>
                </div>
                <div class="chart-el">
                    <div class="chart-bar">
                        <div v-for="el,index in bar" :key="index" class="chart-bar-el">{{el.per}} <div :style="'height:' + el.per + '%;'" class="chartbarstroke"></div> </div>
                    </div>
                    <div class="hr"></div>
                    <div class="chart-bartext">
                        <div v-for="el,index in bar" :key="index">{{el.text}}</div>
                    </div>
                </div>
            </div>
            <div class="chart-block-progress barM">
                <div class="chart-header">
                    <p>Gidlar faoliyat hududlari</p>
                </div>
                <div class="chart-elM">
                    <div class="chart-bartextM">
                        <div v-for="el,index in bar" :key="index">{{el.text}}</div>
                    </div>
                    <div class="chart-barM">
                        <div v-for="el,index in bar" :key="index" class="chart-bar-el"><div :style="'width:' + el.per + '%;'" class="chartbarstroke"></div>{{el.per}}</div>
                    </div>
                </div>
            </div>
            <div v-if="loading" class="g2">
                <div ref="chartQuart" class="chart-block-progress">
                    <div class="chart-header">
                        <p>Gidlar toifalari</p>
                    </div>
                    <div class="donut-chart">
                        <div class="donut-chart-series">
                            <div class="donut-chart-serie"><p>ass</p><span>Lorem</span></div>
                            <div class="donut-chart-serie"><p>ass</p><span>Lorem</span></div>
                            <div class="donut-chart-serie"><p>ass</p><span>Lorem</span></div>
                        </div>
                        <div class="total-donut-chart">
                            <p class="total-donut-text">5525</p>
                            <apexchart width="396" type="donut" :options="chartOptions" :series="series"></apexchart>
                        </div>
                    </div>
                </div>
                <div class="chart-block-progress">
                    <div class="chart-header">
                        <p>Gidlar faoliyat hududlari</p>
                    </div>
                    <div class="chart-block">
                        <div class="g2">
                            <div class="chart-item">
                                <p>1. Ingliz tili</p>
                                <span>1 375</span>
                            </div>
                            <div class="chart-item">
                                <p>2. Ingliz tili</p>
                                <span>1 375</span>
                            </div>
                            <div class="chart-item">
                                <p>3. Ingliz tili</p>
                                <span>1 375</span>
                            </div>
                            <div class="chart-item">
                                <p>4. Ingliz tili</p>
                                <span>1 375</span>
                            </div>
                            <div class="chart-item">
                                <p>5. Ingliz tili</p>
                                <span>1 375</span>
                            </div>
                            <div class="chart-item">
                                <p>6. Ingliz tili</p>
                                <span>1 375</span>
                            </div>
                            <div class="chart-item">
                                <p>7. Ingliz tili</p>
                                <span>1 375</span>
                            </div>
                            <div class="chart-item">
                                <p>8. Ingliz tili</p>
                                <span>1 375</span>
                            </div>
                            <div class="chart-item">
                                <p>9. Ingliz tili</p>
                                <span>1 375</span>
                            </div>
                            <div class="chart-item">
                                <p>10. Ingliz tili</p>
                                <span>1 375</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import icons from '@/components/content/icons.vue'
export default {
  components: { icons },
    data(){
        return{
            series: [598, 175, 33, 10],
            chartOptions: {
                labels:['#D1B314', '#00AB6D', '#E20036', '#00405B'],
                colors:['#D1B314', '#00AB6D', '#E20036', '#00405B'],
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            chartwidth: 396,
            chartheight: 396,
            total: 0,
            loading: false,
            openSelect: false,
            graph:[
                {  num: 1, color: '#00405B'  },
                {  num: 5, color: '#E20036'  },
                {  num: 21, color: '#00AB6D'  },
                {  num: 73, color: '#D1B314'  },
            ],
            bar:[
                {
                    id: 1,
                    per: 68,
                    text:'Qoraqalpog‘iston'
                },
                {
                    id: 2,
                    per: 86,
                    text:'Samarqand'
                },
                {
                    id: 3,
                    per: 78,
                    text:'Andijon'
                },
                {
                    id: 4,
                    per: 48,
                    text:'Surxondaryo'
                },
                {
                    id: 5,
                    per: 18,
                    text:'Xorazm'
                },
                {
                    id: 6,
                    per: 58,
                    text:'Qashqadaryo'
                },
                {
                    id: 7,
                    per: 82,
                    text:'Namangan'
                },
                {
                    id: 8,
                    per: 30,
                    text:'Tog‘lar'
                },
                {
                    id: 9,
                    per: 76,
                    text:'Buxoro'
                },
                {
                    id: 10,
                    per: 45,
                    text:'Navoiy'
                },
                {
                    id: 11,
                    per: 5,
                    text:'Farg‘ona'
                },
                {
                    id: 12,
                    per: 100,
                    text:'Sirdaryo'
                },
                {
                    id: 13,
                    per: 74,
                    text:'Toshkent viloyati'
                },
                {
                    id: 14,
                    per: 25,
                    text:'Jizzax'
                },
                {
                    id: 15,
                    per: 92,
                    text:'Toshkent shahri'
                },
            ],
            title: {ru:"Statistika",en:"Statistics",uz:"Statistika"},
        }
    },
    mounted(){
        this.loading=false
        let sum=0;
        this.graph.forEach((el)=>{this.total += el.num})
        this.graph.forEach((el)=>{el.per = el.num/this.total*100})
        this.graph.forEach((el,index)=>{el.strokeDashoffset = 0})
        this.graph.forEach((el,index)=>{(sum=sum+((this.graph[index-1]?.per)||0)),el.strokeDashoffset = 125 - (el.strokeDashoffset+sum)})
        this.loading=true
    }
}
</script>
<style scoped>
circle{
    border-radius: 5px;
}
.chart-text {
  /*font: 16px/1.4em "Montserrat", Arial, sans-serif;*/
  fill: #000;
  -moz-transform: translateY(0.25em);
  -ms-transform: translateY(0.25em);
  -webkit-transform: translateY(0.25em);
  transform: translateY(0.25em);
}

.chart-number {
  font-size: 0.5em;
  line-height: 1;
  text-anchor: middle;
  -moz-transform: translateY(-0.25em);
  -ms-transform: translateY(-0.25em);
  -webkit-transform: translateY(-0.25em);
  transform: translateY(-0.25em);
}

.chart-label {
  font-size: 0.2em;
  text-transform: uppercase;
  text-anchor: middle;
  -moz-transform: translateY(0.7em);
  -ms-transform: translateY(0.7em);
  -webkit-transform: translateY(0.7em);
  transform: translateY(0.7em);
}
</style>