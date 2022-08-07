const RegisterUser = require('../RegisterUser')

describe('a RegisterUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'abc',
      password: 'abc',
    }

    // action and assert
    expect(() => new RegisterUser(payload)).toThrowError(
      'REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY'
    )
  })

  it('should throw error when payload did not meet data type specification', () => {
    //arrange
    const payload = {
      username: 123,
      fullname: true,
      password: 'aba',
    }

    expect(() => new RegisterUser(payload)).toThrowError(
      'REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION'
    )
  })

  it('should throw error when username contains more than 50 characters', () => {
    const payload = {
      username: 'dicodingindonesiadicodingindonesiadicodingindonesiadicoding',
      fullname: 'adamadi',
      password: 'abc',
    }

    expect(() => new RegisterUser(payload)).toThrowError(
      'REGISTER_USER.USERNAME_LIMIT_CHAR'
    )
  })

  it('should throw error when username contains restricted chracter', () => {
    const payload = {
      username: 'ada-dimana',
      fullname: 'adaddd',
      password: 'aba',
    }

    expect(() => new RegisterUser(payload)).toThrowError(
      'REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER'
    )
  })

  it('should create registerUser object correctly', () => {
    const payload = {
      username: 'adam',
      fullname: 'adam adi',
      password: 'adada',
    }

    const { username, fullname, password } = new RegisterUser(payload)

    expect(username).toEqual(payload.username)
    expect(fullname).toEqual(payload.fullname)
    expect(password).toEqual(payload.password)
  })
})
