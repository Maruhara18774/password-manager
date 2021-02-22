const crypto = require('crypto');
const secret = 'pppppppp'

const encrypt = (password) =>{
    const iv = Buffer.from(crypto.randomBytes(16));
    const cipher = crypto.createCipheriv('aes-256-ctr',Buffer.from(secret),iv)

    const encryptedPassword = Buffer.concat([cipher.update(password)],cipher.final())
    return encryptedPassword;
}
const decrypt = (encryption) =>{
    
}

module.exports = {encrypt,decrypt}