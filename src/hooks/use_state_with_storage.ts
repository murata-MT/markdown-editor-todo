import { useState } from 'react'

//init: string は初期値で、useState の引数と同じです。
//key: string は localStorage に保存する際のキーです。
//[string, (s: string) => void] はカスタムフックの戻り値で、useState の戻り値と同じ型になっています。
export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
    //ここは元の useState の呼び出しと同じで localStorage の値を取得しつつ、取得できない場合は引数の初期値を使っています。
    const [value, setValue] = useState<string>(localStorage.getItem(key) || init)

    //useState から取得した関数と localStorage への保存を組み合わせた関数を生成します。
    const setValueWithStorage = (nextValue: string): void => {
        setValue(nextValue)
        localStorage.setItem(key, nextValue)
    }

    //最後に useState から取得した値と localStorage への保存を組み合わせた更新関数を返却します。
    return [value, setValueWithStorage]
}