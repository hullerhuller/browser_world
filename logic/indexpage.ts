
import { Component, Vue, Watch } from 'vue-property-decorator'
import { warriorHero } from './data/charactor'
import { makeStaticFileURL } from './common'
import { charactorData, chooseItem, eventResult, logItem, stageItem, world } from './commonInterface'
import { goblin, goblinStage } from './data/sample'



@Component({
})
export default class PostPreview extends Vue {

    formError: string = ''
    nowStageTitle: string = ''
    nowStageText: string = ''

    nowEventTitle: string = ''
    nowEventText: string = ''

    newWorld :world = new world({
        charactor:warriorHero,
        choosen:[],
        logs:[],
        nowstage :goblinStage
    })


    mounted() {
        this.choiceEventFromNow()
    }

    chooseCard(chooseCard: chooseItem) {

        this.newWorld.action( new eventResult({
            world: this.newWorld,
        choosenCard: chooseCard}))

        // this.logs = choosenResult.logs
        // this.defaultStatus = choosenResult.charastatus
        // this.nowstage.depth = choosenResult.depth
        // this.nowstage.nowLastBoss = choosenResult.nowLastBoss
        // this.nowstage.understanding = choosenResult.understanding


        // this.choosen = this.nowstage.eventChoise().choosens
    }

    choiceEventFromNow() {

       this.newWorld.init()

    }
    @Watch('newWorld.logs')
    onChange() {
        setTimeout(() => {
            let element = document.getElementById('scroll')
            if (element != null) {
                element.scrollTo({
                    top: element.scrollHeight,
                    behavior: 'smooth',
                });
            }
        }, 100)
    }


    next() {
        this.formError = ''

    }

    backMenu() {

        this.$router.push('/')
    }


}
