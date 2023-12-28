/** Example: `"2023-12-28"` */
export function getTodayDate(date: Date): string {
   return date.toISOString().split('T')[0]
}

/** Example: `(2023, 12, 28) => "Ketvirtadienis"` */
export function getDayOfWeekInText(date: Date): string {
   const day = date.getUTCDay()

   switch (day) {
      case 0:
         return 'Sekmadienis'
      case 1:
         return 'Pirmadienis'
      case 2:
         return 'Antradienis'
      case 3:
         return 'Trečiadienis'
      case 4:
         return 'Ketvirtadienis'
      case 5:
         return 'Penktadienis'
      case 6:
         return 'Šeštadienis'
      default:
         throw Error(`Unknown value from "getUTCDay": (${day})"`)
   }
}
