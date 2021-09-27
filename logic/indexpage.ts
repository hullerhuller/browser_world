
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { makeStaticFileURL } from './common'
import { chooseItem, logItem } from './commonInterface'



@Component({
})
export default class PostPreview extends Vue {

    formError: string = ''
    dateJi: string = ''
    dateIt: string = ''

    choosen: chooseItem[] = [{
        avatar: makeStaticFileURL('favicon.ico'),
        title: '1',
        text: `<font color="red">Ali Connors</font> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        comment:'yeah',
        choosen: 1
    }, {
        avatar: makeStaticFileURL('favicon.ico'),
        title: '2',
        text: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        comment:'yeah',
        choosen: 2
    }, {
        avatar: makeStaticFileURL('favicon.ico'),
        title: '3?',
        text: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        comment:'yeah',
        choosen: 3
    }

    ]

    logs: logItem[] = [{
        avatar: makeStaticFileURL('favicon.ico'),
        title: 'Brunch this weekend?',
        text: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        comment:'yeah',
    }
    ]

    mounted() {
    }

    chooseCard(chooseCard: chooseItem) {
        this.logs.push(chooseCard)
        if(document.getElementById('scroll') !=null){
            document.getElementById('scroll')!.scrollTo(0, 10000000);
        }
    }


    next() {
        this.formError = ''

    }

    backMenu() {

        this.$router.push('/')
    }


}
