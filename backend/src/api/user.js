
const db = require('../config/db');
const bcrypt = require('bcrypt-nodejs')
const {existsOrError, notExistsOrError, equalsOrError } = require('./validation')

const save = async (req, res) => {
    
    const user = {...req.body}

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    if(req.params.id) user.id = req.params.id

    try {
        existsOrError(user.name,'Nome não informado')
        existsOrError(user.email,'E-mail não informado')
        existsOrError(user.password,'Senha não informado')
        existsOrError(user.confirmPassword,'Confirmação da Senha não informado')
        equalsOrError(user.password,user.confirmPassword,'Senhas não conferem!')

        const userFromDB = await db('users').where({email: user.email}).first()
        if(!user.id) {
            notExistsOrError(userFromDB,'Usuário já foi Cadastrado')
        } 

    } catch (error) {
        return res.status(400).send(error)
    }

    user.password = encryptPassword(user.password)

    delete user.confirmPassword
    if(user.id) {
        db('users').update(user)
            .where({id:user.id})
            .then(_=> res.status(200).send(user))
            .catch(error => res.status(500).send(error))
    } else {
        db('users').insert(user)
        .then(_=> res.status(200).send(user))
        .catch(error => res.status(500).send(error))
    }
    
 }

const get = (req, res) => {
    db('users').select('id','name','email','admin')
    .whereNull('deletedAt')
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).send(error))
}


const getById = (req, res) => {

    db('users').select('id','name','email','admin')
    .where({id:req.params.id})
    .whereNull('deletedAt')
    .first()
    .then(user => res.status(200).json(user))
    .catch(error => res.status(500).send(error))
}

const remove = async (req, res) => {
    try {
       
        const rowsUpdated = await db('users')
            .update({deletedAt: new Date()})
            .where({ id: req.params.id })
        existsOrError(rowsUpdated, 'Usuário não foi encontrado.')

        res.status(204).send()
    } catch(msg) {
        res.status(400).send(msg)
    }
}

module.exports =  {
    save, get, getById, remove
}