import Dexie from 'dexie'

// ts
export interface MemoRecord {
    datetime: string
    title: string
    text: string
}

const database = new Dexie('markdown-editor')
database.version(1).stores({ memos: '&datetime' })
const memos: Dexie.Table<MemoRecord, string> = database.table('memos')

// 非同期
export const putMemo = async (title: string, text: string): Promise<void> => {
    const datetime = new Date().toISOString()
    console.log(datetime)
    await memos.put({ datetime, title, text })
}