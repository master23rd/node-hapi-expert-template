const RegisterUser = require('../../Domains/users/entities/RegisterUser')

class AddUserUseCase {
  // use dependecy injection - parameter is function to call other class to process
  constructor({ userRepository, passwordHash }) {
    this._userRepository = userRepository
    this._passwordHash = passwordHash
  }

  async execute(useCasePayload) {
    const registerUser = new RegisterUser(useCasePayload)
    await this._userRepository.verifyAvailableUsername(registerUser.username)
    registerUser.password = await this._passwordHash.hash(registerUser.password)

    // return true
    return this._userRepository.addUser(registerUser)
  }
}

module.exports = AddUserUseCase
