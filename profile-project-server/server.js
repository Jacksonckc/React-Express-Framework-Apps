const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3001

// app.use('/build', express.static('build'))

app.use(bodyParser.json()) 
app.use(cookieParser())

// This makes the server listens to all the server calls from the app that runs on port 3001
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/api/test', (req, res) => {
  const body = req.body
  res.json({ data: body })
})

app.get('/api/test', (req, res) => {
  res.json({'score': '20'})
})

app.use(bodyParser.urlencoded({ extended: true })); 

const userInfos=[{username:'Jackson', password:'Hello', secret: 'Has 400 million dollars'},{username:'Steven', password:'Hey', secret: 'Like to eat choudoufu'}]

app.post('/login',(req, res)=>{
  const body = req.body
  const matchingUserInfo = userInfos.find((userInfo)=>{
    if (userInfo.username == body.username) {
      if (userInfo.password == body.password){
        return true
      }
    }
  })
  if (matchingUserInfo){
    res.cookie('Session',JSON.stringify({username:body.username})).redirect('/users/page')
  }
  else {
    res.redirect('/?login=false')
  }
})

app.get('/logout', (req, res) => {
  res.clearCookie('Session').redirect('/');
})

app.get('/get/info', (req, res)=> {
  res.json({ secret: '400' })
})

// app.get('/get/info',(req, res)=> {
//   try{
//     const currentUserSessionId = JSON.parse(req.cookies['Session']).sessionId
//     const currentUser = userInfos.find((userInfo) => currentUserSessionId == userInfo.sessionId)
//     if(currentUser){
//       res.json({secret:currentUser.secret})
//     }
//     else{
//       res.status(401).send("Can't verify your id")
//     }
//   }
//   catch(err){
//     res.status(500).send(err)
//   } 
// })