<template>
    <div class="page">
        <van-swipe>
            <template>
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img :src="image.url" />
                </van-swipe-item>
            </template>
            <template>

            </template>
        </van-swipe>
        <van-cell title="技师印象"  size="large" style="text-align: left">
            <van-rate
                    v-model="techInfo.grade"
                    icon="like"
                    color="rgb(255, 152, 0)"
                    void-icon="like-o"
                    readonly
            />
        </van-cell>
        <van-row>
            <van-col span="8" v-for="(item,index) in techInfo.tags" :key="index">
                <van-tag size="large" :color="getColor(item.tag)" >{{item.tag}}+{{item.count}}</van-tag>
            </van-col>
        </van-row>
        <div style="margin-top:30px ;margin-bottom: 10px" @click="showEvalution=true">
            <van-icon name="thumb-circle-o" size="40px" color="rgb(255, 152, 0)"/>
            <div>评价</div>
        </div>
        <van-cell :title="item.content"  v-for="(item,index) in techInfo.assesses" :key="index" style="text-align: left;background: transparent">
            {{item.createdTime}}
        </van-cell>
        <van-action-sheet v-model="showEvalution" title="点击标签可+1" >
            <van-row>
                <van-col span="8" v-for="(item,index)  in tags" :key="index">
                    <van-tag size="large" :color="item.color" @click="setTags(index)">{{item.name}}{{item.isActive?'+1':''}}</van-tag>
                </van-col>
            </van-row>
            <input v-model="submitData.content" class="evaluation_content" placeholder="输入评价内容" maxlength="26"/>
            <van-button size="large" round   @click="evalution()">确认评价</van-button>
        </van-action-sheet>
        <van-button class="next" size="large" round   @click="nextStep()">下一步</van-button>
    </div>
</template>

<script>
    export default {
        name: "TechInfo",
        data(){
            return {
                images:[],
                techInfo:{},
                tags:[{
                    name:'技术好',
                    color:'rgb(236, 253, 251)',
                    isActive:false
                },{
                    name:'手法好',
                    color:'rgb(250, 236, 253)',
                    isActive:false
                },{
                    name:'态度端正',
                    color:'rgb(247, 244, 244)',
                    isActive:false
                },{
                    name:'礼貌好',
                    color:'rgb(247, 244, 244)',
                    isActive:false
                }],
                showEvalution:false,
                submitData:{
                    content: "",
                    detailId: 0,
                    grade: 0,
                    memberId: 0,
                    tags: [],
                    technicianId: 0
                }
            }
        },
        computed:{

        },
        created(){
            this.getTechInfo();
        },
        methods:{
            getTechInfo(){
                let techId=this.$route.query.techId;
                this.submitData.technicianId=techId;
                this.http(`/member/wc/technicians/${techId}`,'get')
                    .then(res=>{
                        if(res.data.photos&&res.data.photos.length){
                            this.images=res.data.photos;
                        }else {
                            this.images=[{url:'/noImg.jpg'}];
                        }
                        this.techInfo=res.data;
                        if(!this.techInfo.grade){
                            //如果没有被评价过 默认五星
                            this.techInfo.grade=5;
                        }
                        this.$store.commit('changeTechInfo',res.data);
                    })
            },
            getColor(name){
                let color='';
                switch (name) {
                    case '技术好':
                        color='rgb(236, 253, 251)';
                        break;
                    case '手法好':
                        color='rgb(250, 236, 253)';
                        break;
                    case '态度端正':
                        color='rgb(247, 244, 244)';
                        break;
                    case '礼貌好':
                        color='rgb(247, 244, 244)';
                        break;
                }
                return color;
            },
            setTags(index){
                this.tags[index].isActive=!this.tags[index].isActive;
            },
            evalution(){
                this.tags.forEach(obj=>{
                    if(obj.isActive) {
                        this.submitData.tags.push(obj.name);
                    }
                });
                this.http(`/member/wc/technician/assess`,'post',this.submitData)
                    .then(res=>{
                        if(res.code==0){
                            this.$toast.success({
                                message:'评价成功',
                                duration:1000
                            });
                            this.submitData.tags=[];
                            this.submitData.content='';
                            this.getTechInfo();
                            this.showEvalution=false
                        }
                    })
            },
            nextStep(){
                this.$router.push('/select-project')
            }
        }
    }
</script>

<style scoped>
    .van-swipe img{
        width: 100%;
    }
    .van-tag{
        color: rgb(166, 166, 166);
    }
    .van-col{
        margin-top: 10px;
    }
    .page{
        padding-bottom: 70px;
    }
    .next{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 15px;
        margin: auto;
    }
</style>