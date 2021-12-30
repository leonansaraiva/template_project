const user = require('../api/user')
const router = require("express").Router()

const auth = require('../api/auth')
const passport = require('../config/passport')
const admin = require('../config/admin')

router.route('/test')
  .get(function(req, res) {
    res.status(200).json({ name: 'john' })
})

router.route('/')
  .get((req, res) => {
    console.log("GET")
    const msg = `Server is running`
    res.status(200).send(msg);
})



router.route('/signup')
  .post(user.save)

router.route('/signin')
  .post(auth.signin)

router.route('/validateToken')
  .post(auth.validateToken)

router.route('/users')
  .get(user.get)

router.route('/users')
  .all(passport.authenticate())
  .post(user.save);

router.route('/users/:id')
  .all(passport.authenticate())
  .get(user.getById)
  .put(user.save)
  .delete(user.remove)
  .delete(admin(user.remove))

module.exports = router;
