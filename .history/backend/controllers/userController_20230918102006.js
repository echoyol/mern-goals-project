const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandle = require('express-async-handler')
const User = require('../models/userModel')

//@desc Register new user
//@route POST/api/users
//@access Public
const registerUser = asyncHandle(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new error('Please add all fields')
  }
  res.json({ message: 'Register User' })
})

//@desc Authenticate a user
//@route POST/api/users/login
//@access Public
const loginUser = asyncHandle(async (req, res) => {
  res.json({ message: 'Login User' })
})

//@desc Get user data
//@route GET/api/users/me
//@access Public
const getMe = asyncHandle(async (req, res) => {
  res.json({ message: 'User data display' })
})

module.exports = { registerUser, loginUser, getMe }
