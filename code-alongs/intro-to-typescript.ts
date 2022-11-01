let username: string = 'Fred'
let userAge: number = 22
let userIsAdult: boolean = true

function addNumbers (number1: number, number2: number): number {
  return number1 + number2
}

let sum: number = addNumbers(7, 5)

function addTwoNumbers (number1: number, number2: number): void {
  console.log(number1 + number2)
}
addTwoNumbers(2, 8)

interface Profile {
  profileId: string,
  profileName: string,
  profileImageUrl: string | null,
  profileAge: number
}

let profile: Profile = {
  profileId: 'asdfasfgwertywyw4usfdgsdsfg34567456',
  profileName: 'Jimmy McGill (Saul Goodman)',
  profileImageUrl: 'https://skjdfghsadkjhgkjsdhfg.com/jimmy',
  profileAge: 50
}

let names: string[] = ['jim', 'bob', 'sue']
let ages: Array<number> = [22, 45, 34]
let profiles: Array<Profile> = [profile, profile]