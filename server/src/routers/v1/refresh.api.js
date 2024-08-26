const cookiesConfig = require('../configs/cookiesConfig')
const { verifyAccessToken, verifyRefreshToken } = require('../middleWares/verifyToken')
const generateToken = require('../utils/generateToken')

const router = require('express').Router()
router.get('/refresh', verifyRefreshToken, (req,res)=>{
    try {
        const { user } = res.locals
        const {accessToken, refreshToken} = generateToken({user})
        res.cookie('refreshToken', refreshToken, cookiesConfig.refresh).json({user, accessToken})
    } catch (error) {
        console.log(error)
        res.status(203).json({message: 'не удалось передать REFRESH токен', user: {}, accessToken: ''})
    }
})
module.exports = router