export type AttendedClasses = { id: string; attendedDate: string }

export type _User = {
  name: string
  email: string
  attendedClasses: AttendedClasses[]
  blocked?: boolean
}
