
import { cloneDeep, Function } from 'lodash';

export interface logItem {
    avatar: string,
    title: string,
    text: string,
    comment: string
}

export interface choosenFunction {
    (params: charactorData): boolean
}

export interface chooseItem extends logItem {
    choosen: number
    choosenFunction: choosenFunction
}

export interface relicFunction {
    name: string
    text: string
    effect(params: charactorData): charactorData
}

export class charactorData {
    // 称号
    nickname!: string;
    // 名前
    name!: string;
    // 説明
    text!: string;
    // 体力
    hp!: number;
    // 武力
    attack!: number;
    // 魔力 
    magic!: number;
    // 探知力
    search!: number;
    // 勇敢
    brave!: number;
    // 野心
    ambish!: number;
    // 統率
    // 統率
    lead!: number;
    // 有名
    fame!: number;
    // 汚名
    stigma!: number;
    // 戦闘経験
    battleExperience!: number;
    // 探索経験
    searchExperience!: number;
    // 成功率
    successrate!: number;
    // 所持レリック集
    relics!: relicFunction[];
    // レリック補正
    result(): charactorData {
        let deepCopy = cloneDeep(this) as charactorData
        for (let index = 0; index < deepCopy.relics.length; index++) {
            deepCopy = deepCopy.relics[index].effect(deepCopy)
        }
        return deepCopy
    }
}

export class world {
    charactor: charactorData
    logs: logItem[]
    choosen: chooseItem[]
    nowstage: stageItem

    init = () => {
        this.choosen = this.nowstage.eventChoise().choosens
    }

    refresh = (event: eventResult) => {

        this.charactor = event.charastatus
        this.logs = event.logs
        this.nowstage.depth = event.depth
        this.nowstage.nowDepth = event.nowDepth
        this.nowstage.understanding = event.understanding

        this.nowstage.nowLastBoss = event.nowLastBoss
        this.nowstage.nowMiddleBoss = event.nowMiddleBoss


        this.choosen = this.nowstage.eventChoise().choosens
    }

    action = (event: eventResult) => {
        this.refresh(this.nowstage.eventChoise().choosenResults(event))

    }
    constructor(params: {
        charactor: charactorData
        logs: logItem[]
        choosen: chooseItem[]
        nowstage: stageItem
    }) {
        this.charactor = params.charactor
        this.logs = params.logs
        this.choosen = params.choosen
        this.nowstage = params.nowstage
    }
}



export class eventResult {
    logs: logItem[];
    charastatus: charactorData;
    choosenCard: chooseItem;
    depth: number;
    nowDepth: number;
    nowMiddleBoss?: bossItem
    middleBoss: { [key: string]: bossItem }
    nowLastBoss?: bossItem
    lastBoss: { [key: string]: bossItem };
    understanding: number;

    isWinLastBoss = () => {
        return this.nowLastBoss !== undefined
            && this.nowLastBoss.nowHp <= 0
    }
    constructor(params: { world: world, choosenCard: chooseItem }) {
        this.logs = params.world.logs
        this.charastatus = params.world.charactor
        this.choosenCard = params.choosenCard
        this.middleBoss = params.world.nowstage.middleBoss
        this.nowMiddleBoss = params.world.nowstage.nowMiddleBoss
        this.lastBoss = params.world.nowstage.lastBoss
        this.nowLastBoss = params.world.nowstage.nowLastBoss
        this.depth = params.world.nowstage.depth
        this.nowDepth = params.world.nowstage.nowDepth || 0
        this.understanding = params.world.nowstage.understanding

    }
}


export interface eventItem {
    title: string
    text: string
    choosens: chooseItem[]

    choosenResults: (params: eventResult) => eventResult;
}



export interface stageItem {
    title: () => string
    text: () => string
    depth: number
    nowDepth: number
    nowMiddleBoss?: bossItem
    middleBossDepth: number
    middleBoss: { [key: string]: bossItem }
    lastBossDepth: number
    nowLastBoss?: bossItem
    lastBoss: { [key: string]: bossItem }
    understanding: number
    ramdomEvent: { [key: string]: eventItem }
    eventChoise: () => eventItem
}
export interface bossItem {
    title: () => string
    text: () => string
    hp: number
    nowHp: number
    events: eventItem[]
    eventChoise: () => eventItem
}



