export interface logItem {
    avatar: string,
    title: string,
    text: string,
    comment:string
}

export interface chooseItem extends logItem {
    choosen: number
}