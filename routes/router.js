
const path = require('path');
const express = require('express');

const controllerData = require('../controllers/controller')
const router = express.Router();



router.get('/',(req, res, next) =>{
    res.sendFile(path.join(__dirname,'../','views', 'user.html'));
})

router.get('/login',(req, res, next) =>{
    res.sendFile(path.join(__dirname,'../','views', 'login.html'));
})

router.get('/expenses',(req, res, next) =>{
    res.sendFile(path.join(__dirname,'../','views', 'expenses.html'));
})


router.post('/user', controllerData.PostNewUserData);
router.post('/login',controllerData.GetuserDataAndlogin);

router.post('/expenses',controllerData.PostExpensesData);
router.delete('/delete/:id',controllerData.DeleteExpenses);
router.get('/getexpenses',controllerData.GetExpensesData);

module.exports = router;