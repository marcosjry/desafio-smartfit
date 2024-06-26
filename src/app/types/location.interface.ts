export interface searchResponse {
    locations: Location[]
}
  
export interface Location {

    title: string
    content: string
    opened: boolean
    mask: string
    towel: string
    fountain: string
    locker_room: string
    schedules: Schedule[]
    
}
  
export interface Schedule {
    weekdays: string
    hour: string
}