const { Router } = require('express')
const router = Router()

router.post('/', async (req, res) => {
  try {
    const limit = parseInt(req.body.limit)
    const skip = parseInt(req.body.skip)

    const collection = global.db.db('app').collection('data')
    const data = await collection
      .find({})
      .skip(skip)
      .limit(limit)
      .toArray()

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' })
  }
})

module.exports = router
