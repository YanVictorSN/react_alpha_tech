export interface Iform {
    onSubmit : (e : React.FormEvent<HTMLFormElement>) => void,
    textSubmit : string,
    children : React.ReactNode
}