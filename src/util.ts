interface getDateType {
  (): string
}

interface setDateType {
  (date: string): string
}


export const getDate: getDateType  = ()=> {

  return new Date().toLocaleDateString()
}


export const setDate: setDateType = (date: string): string => {
  return new Date(date).toLocaleDateString()
}
