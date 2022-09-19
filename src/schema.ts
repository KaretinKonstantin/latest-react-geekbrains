export interface Chat{
    id: number,
    author: string,
    message: string
}

export interface ChatsL{
    [key: string]: Chat[]
}