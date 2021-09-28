import { charactorData } from "../commonInterface";
import { warriorRelic } from "../relic";



export const warriorHero:charactorData = {
    nickname: "test",
    name: "テスト名前",
    text: "テスト説明",
    hp: 100,
    attack: 20,
    magic: 10,
    brave: 100,
    ambish: 0,
    lead: 100,
    fame: 50,
    stigma: 0,
    search: 0,
    battleExperience: 100,
    searchExperience: 0,
    successrate: 1,
    relics: [warriorRelic],
    result: new charactorData().result
}