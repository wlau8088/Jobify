const express = require('express');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController')
const router = express.Router();

// login user (expect email, password in body)
router.post('/login', userController.verifyUser, cookieController.setCookie, (req,res)=> res.status(200).json('Success'));

// user form - single user id (expect id in query param)
router.get('/:id', userController.getUser, (req, res) => res.status(200).json(res.locals.user));

// create user (expects all user info in body)
router.post('/', userController.createUser, (req, res) => res.status(201).json('Success'));

// update user (expects all user info in body)
router.put('/:id', userController.updateUser, (req, res) => (req,res)=> res.status(200).json('User has been updated!'));

// delete user (expect id in query param)
router.delete('/:id', userController.deleteUser, (req,res)=> res.status(200).json('User has been deleted!'));

module.exports = router;
