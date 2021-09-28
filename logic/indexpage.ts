
import { Component, Vue } from 'vue-property-decorator'
import { warriorHero } from './data/charactor'
import { makeStaticFileURL } from './common'
import { charactorData, chooseItem, eventResult, logItem, stageItem } from './commonInterface'
import { goblinStage } from './data/sample'



@Component({
})
export default class PostPreview extends Vue {

    formError: string = ''
    nowStageTitle: string = ''
    nowStageText: string = ''

    nowEventTitle: string = ''
    nowEventText: string = ''

    nowstage:stageItem = goblinStage

    choosen: chooseItem[] = []


    logs: logItem[] = []

    defaultStatus:charactorData= warriorHero
    
    mounted() {
        this.choiceEventFromNow()
    }

    chooseCard(chooseCard: chooseItem) {

        let choosenAction:eventResult  = {
            logs: this.logs,
            charastatus: this.defaultStatus,
            choosenCard: chooseCard,
            depth: this.nowstage.depth,
            bossHp: this.nowstage.lastBoss.hp,
            understanding: this.nowstage.understanding,
            isWinLastBoss: new eventResult().isWinLastBoss
        }
        let choosenResult = this.nowstage.eventChoise().choosenResults(choosenAction)
        
        this.logs = choosenResult.logs
        this.defaultStatus = choosenResult.charastatus
        this.nowstage.depth = choosenResult.depth
        this.nowstage.lastBoss.hp = choosenResult.bossHp
        this.nowstage.understanding = choosenResult.understanding
        if(document.getElementById('scroll') !=null){
            document.getElementById('scroll')!.scrollTo(0, 10000000);
        }
    }

    choiceEventFromNow(){

        this.choosen = this.nowstage.eventChoise().choosens

    }

    next() {
        this.formError = ''

    }

    backMenu() {

        this.$router.push('/')
    }


}
