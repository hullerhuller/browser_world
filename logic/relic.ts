import { cloneDeep } from "lodash"
import { charactorData, relicFunction } from "./commonInterface"

export const warriorRelic:relicFunction ={
    name: "仮データ特権",
    text: "武力が2倍になるよ",
    effect: function (params: charactorData): charactorData {
        let deepStatus = cloneDeep(params)
        deepStatus.attack *= 2
        return deepStatus
    }
}
