export const randomName = (): string => {
    const names: Array<string> = ['A', 'B', 'C']
    return names[Math.floor(Math.random() * names.length)]
}