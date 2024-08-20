/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()
// eslint-disable-next-line node/prefer-global/process
const port = process.env.PORT || 3001

// 使用 body-parser 中间件解析 JSON 格式的请求体
app.use(bodyParser.json())

// 创建邮件传输器
const transporter = nodemailer.createTransport({
  service: '163', // 你的邮件服务
  host: 'smtp.163.com',
  port: 25,
  auth: {
    user: '', // 你的邮箱地址
    pass: '', // 你的邮箱密码或应用密钥
  },
})

// 邮件发送 API
app.post('/send-email', (req, res) => {
  const text = req.body.name

  // 定义邮件内容
  const mailOptions = {
    from: 'xp84b0@163.com', // 发件人地址
    to: '609141551@qq.com', // 收件人地址
    subject: 'cook', // 邮件主题
    text, // 邮件正文
    html, // HTML 格式的邮件正文
  }

  // 发送邮件
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred:', error)
      return res.status(500).json({ message: 'Failed to send email', error })
    }
    res.status(200).json({ message: 'Email sent', info })
  })
})

// 启动服务器
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
