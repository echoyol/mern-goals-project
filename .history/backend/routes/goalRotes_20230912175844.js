const exprress = require('express')
const router = express.Router()

router.get('/api/goals', (req, res) => {
  res.status(200).json({ message: 'Get goals' })
})

module.exports = router
