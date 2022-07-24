const bcrypt = require('bcryptjs')

const bcryptService = () => {
  const password = (pw) => {
    const hash = bcrypt.hashSync(pw, 10)
    return hash
  }

  const comparePassword = (pw, hash) => {
    return bcrypt.compareSync(pw, hash)
  }

  return {
    password,
    comparePassword,
  }
}

module.exports = bcryptService
