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
    title: "",
    text: "",
    choosens: [naguru],
    choosenResults: function (params: eventResult): eventResult {
        params.logs.push(params.choosenCard)
        switch (params.choosenCard.choosen) {
            case battleChoosen.naguru:
                params.bossHp -= params.charastatus.result().attack
                let messageNaguru: logItem = {
                    avatar: "",
                    title: "",
                    text: "",
                    comment: "ダメージ:" + params.charastatus.result().attack
                }
                params.logs.push(messageNaguru)
                break;
            case battleChoosen.mottoNaguru:
                params.bossHp -= params.charastatus.result().attack * 2
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


export const goblin: bossItem = {
    title: function (): string { return "goblin HP:" + this.hp },
    text: function (): string { return "" },
    hp: 100,
    events: [battle],
    eventChoise: function (): eventItem {
        return this.events[0]
    }
}
export const goblinStage: stageItem = {
    title: function (): string { return "goblinStage" },
    text: function (): string { return "深度:" + this.depth },
    depth: 0,
    lastBossDepth: 0,
    lastBoss: goblin,
    ramdomEvent: [],
    understanding: 0,
    eventChoise: function (): eventItem {
        return goblin.eventChoise()
    }
}

