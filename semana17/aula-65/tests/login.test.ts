import { UserBusiness } from "../src/business/UserBusiness"
import { User, UserRole } from "../src/model/User"

const userDatabase = {
  createUser: jest.fn(
     async (user: User) => { }
  ),
  getUserByEmail: jest.fn(
     (email: string) => undefined
  )
} as any
const idGenerator = {
  generate: jest.fn(() => "id mock")
} as any
const hashGenerator = {
  hash: jest.fn((password: string) => "cypher password"),
  compareHash: jest.fn(
     async (s: string, hash: string) => false
  )
} as any
const tokenGenerator = {
  generate: jest.fn(
     (payload: { id: string, role: UserRole }) => "token de mentirinha"
  )
} as any

const userBusiness: UserBusiness = new UserBusiness(
  userDatabase,
  idGenerator,
  hashGenerator,
  tokenGenerator
)

describe("Testa o método de login", () => {

  test("Deve retornar erro quando um email não for passado", async () => {
     expect.assertions(2)

     try {
        await userBusiness.login(
           "",
           "bananinha"
        )
     } catch (error) {
        expect(error.message).toBe("Missing input")
        expect(error.statusCode).toBe(422)
     }
  })

  test("Deve retornar erro quando uma senha não for passada", async () => {
     expect.assertions(2)

     try {
        await userBusiness.login(
           "astrodev@labenu.com.br",
           ""
        )
     } catch (error) {
        expect(error.message).toBe("Missing input")
        expect(error.statusCode).toBe(422)
     }
  })

  test("Deve retornar erro quando o usuário não for encontrado", async () => {
     expect.assertions(2)

     try {
        await userBusiness.login(
           "astrodev@labenu.com.br",
           "bananinha"
        )
     } catch (error) {
        expect(error.message).toBe("User not found")
        expect(error.statusCode).toBe(404)
     }
  })

  test("Deve retornar erro quando a senha estiver incorreta", async () => {
     expect.assertions(2)

     userDatabase.getUserByEmail = (email: string) => {
        return new User(
           "id",
           "Astrodev",
           "astrodev@labenu.com.br",
           "bananinha",
           UserRole.ADMIN
        )
     }

     try {
        await userBusiness.login(
           "astrodev@labenu.com.br",
           "bananinha"
        )
     } catch (error) {
        expect(error.message).toBe("Invalid password")
        expect(error.statusCode).toBe(422)
     }
  })

  test("Deve retornar um token de acesso", async () => {

     hashGenerator.compareHash = jest.fn(
        async (s: string, hash: string) => true
     )

     const result = await userBusiness.login(
        "astrodev@labenu.com.br",
        "bananinha"
     )

     expect(result.accessToken).toBe("token de mentirinha")

  })
})