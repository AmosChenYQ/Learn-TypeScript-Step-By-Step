enum Status {
    Uploading,
    Success,
    Failed,
}

console.log(Status.Uploading) // default is 0, then 1, 2
// And you can assign any number to it
// enum Status {
//     uploading,
//     Success = 2,
//     Failed, // Failed will be 3
// }

console.log(Status[Status.Uploading]) // uplaoding

enum Message {
    Error = 'Sorry',
    Success = 'Success',
    Failed = Error
}

console.log(Message.Error) // Error

// combination

enum Result {
    Failed = 0,
    Success = 'Success'
}

// 1. enum E { A }
// 2. enum E { A = 'a' }
// 3. enum E { A = -1 }

enum Animals {
    Dog = 1,
    Cat = 2,
}

interface Dog {
    type: Animals.Dog
}

const dog: Dog = {
    type: Animals.Dog
}

enum MyStatus {
    Off,
    On
}

interface Light {
    status: MyStatus
}

const light: Light = {
    status: MyStatus.Off
}

const enum MyAnimals {
    Dog = 1
}

// In shell all MyAnumals.Dog will be replaced 1, it will save memory without creat js object.
