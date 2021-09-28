
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

export class eventResult {
    logs!: logItem[];
    charastatus!: charactorData;
    choosenCard!: chooseItem;
    depth!: number;
    middleBossHp?: number
    bossHp!: number;
    understanding!: number;

    isWinLastBoss = () =>  {
        return this.bossHp <= 0
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
    middleBossDepth?: number
    middleBoss?: bossItem
    lastBossDepth: number
    lastBoss: bossItem
    understanding: number
    ramdomEvent: eventItem[]
    eventChoise: () => eventItem
}
export interface bossItem {
    title: () => string
    text: () => string
    hp: number
    events: eventItem[]
    eventChoise: () => eventItem
}


export function isWinLastBoss(params: eventResult) {
    return
}

