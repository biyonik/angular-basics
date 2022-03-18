import { FormControl } from "@angular/forms"
import { map, switchMap, timer } from "rxjs"

export const UserNameExistsValidator = (
  userService: any,
  time: number = 500
) => {
  return (input: FormControl) => {
    return timer(time).pipe(
      switchMap(() => userService.isExistsName(input.value)),
      map(res => {
        return !res ? null : {usernameExist: true}
      })
    )
  }
}
