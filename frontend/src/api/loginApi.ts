interface LoginApiProps {
    email: string,
    password: string
}

export async function loginApi({ email, password }: LoginApiProps) {
    console.log(email, password)

    return {
        nome: "Bruno Faller",
        email: "fallerbruno@gmail.com",
        password: 'teste'
    }
}