import { hasProto } from "vue-class-component/lib/util";
import { makeStaticFileURL } from "../common";
import { bossItem, charactorData, chooseItem, eventItem, eventResult, logItem, stageItem } from "../commonInterface";

const battleChoosen = {
    naguru: 1,
    mottoNaguru: 2,
    naguranai: 3
}
const naguru: chooseItem = {
    choosen: battleChoosen.naguru,
    choosenFunction: (params: charactorData) => {
        return true;
    },
    avatar: makeStaticFileURL('favicon.ico'),
    title: "ぼこぼこにするサンプル",
    text: "ぼこぼこにするぜ",
    comment: "「ぼっこぼこ」"
}

const mottoNaguru: chooseItem = {
    choosen: battleChoosen.mottoNaguru,
    choosenFunction: (params: charactorData) => {
        return true;
    },
    avatar: makeStaticFileURL('favicon.ico'),
    title: "もっとぼこぼこにするサンプル",
    text: "もっとぼこぼこにするぜ",
    comment: "「ぼっこぼこ」"
}

const naguranai: chooseItem = {
    choosen: battleChoosen.naguranai,
    choosenFunction: (params: charactorData) => {
        return true;
    },
    avatar: makeStaticFileURL('favicon.ico'),
    title: "殴らない選択肢サンプル",
    text: "殴らない",
    comment: "「やさしいね」"
}

const battle: eventItem = {
    title: "goblin battle",
    text: "goblin battle",
    choosens: [naguru, naguranai, mottoNaguru],
    choosenResults: function (params: eventResult): eventResult {
        if(params.nowLastBoss === undefined){
            return params
        }
        params.logs.push(params.choosenCard)
        switch (params.choosenCard.choosen) {
            case battleChoosen.naguru:
                params.nowLastBoss.nowHp -= params.charastatus.result().attack
                let messageNaguru: logItem = {
                    avatar: "",
                    title: "",
                    text: "",
                    comment: "ダメージ:" + params.charastatus.result().attack
                }
                params.logs.push(messageNaguru)
                break;
            case battleChoosen.mottoNaguru:
                params.nowLastBoss.nowHp -= params.charastatus.result().attack * 2
                let messageMottoNaguru: logItem = {
                    avatar: "",
                    title: "",
                    text: "",
                    comment: "ダメージ:" + params.charastatus.result().attack * 2
                }
                params.logs.push(messageMottoNaguru)
                break;
            case battleChoosen.naguranai:

                break;
            default:
                break;
        }
        return params
    }
}

const goInnerChoosen = {
    susumu: 1
}


const susumu: chooseItem = {
    choosen: goInnerChoosen.susumu,
    choosenFunction: (params: charactorData) => {
        return true;
    },
    avatar: makeStaticFileURL('favicon.ico'),
    title: "すすむぜサンプル",
    text: "すすむぜ",
    comment: "「すすむ」"
}

const goInner: eventItem = {
    title: "susumu",
    text: "goblin battle",
    choosens: [susumu],
    choosenResults: function (params: eventResult): eventResult {
        params.logs.push(params.choosenCard)

        params.nowDepth += 1

            return params
    }
}

export const goblin: bossItem = {
    title: function (): string { return "goblin HP:" + this.hp },
    text: function (): string { return "" },
    hp: 100,
    nowHp: 100,
    events: [battle],
    eventChoise: function (): eventItem {
        return this.events[0]
    }
}
export const nothing: bossItem = {
    title: function (): string { return "goblin HP:" + this.hp },
    text: function (): string { return "" },
    hp: 0,
    nowHp: 0,
    events: [battle],
    eventChoise: function (): eventItem {
        return this.events[0]
    }
}
export const goblinStage: stageItem = {
    title: function (): string { return "goblinStage"; },
    text: function (): string { return "深度:" + this.nowDepth; },
    depth: 8,
    nowDepth: 0,
    middleBossDepth: 0,
    middleBoss: {},
    lastBossDepth: 0,
    lastBoss: { goblin: goblin },
    ramdomEvent: {go:goInner},
    understanding: 0,
    eventChoise: function (): eventItem {
        switch (this.nowDepth) {
            case this.depth:
                if (this.nowLastBoss === undefined) {
                    this.nowLastBoss = this.lastBoss.goblin
                }
                return this.nowLastBoss.eventChoise()
            default:
                return this.ramdomEvent.go
        }
    }
}

