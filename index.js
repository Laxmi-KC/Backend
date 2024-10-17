require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData= {
  "login": "ShoomanKhatri",
  "id": 112597601,
  "node_id": "U_kgDOBrYaYQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/112597601?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ShoomanKhatri",
  "html_url": "https://github.com/ShoomanKhatri",
  "followers_url": "https://api.github.com/users/ShoomanKhatri/followers",
  "following_url": "https://api.github.com/users/ShoomanKhatri/following{/other_user}",
  "gists_url": "https://api.github.com/users/ShoomanKhatri/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ShoomanKhatri/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ShoomanKhatri/subscriptions",
  "organizations_url": "https://api.github.com/users/ShoomanKhatri/orgs",
  "repos_url": "https://api.github.com/users/ShoomanKhatri/repos",
  "events_url": "https://api.github.com/users/ShoomanKhatri/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ShoomanKhatri/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Shooman Khatri",
  "company": null,
  "blog": "sumankhatri1.com.np ",
  "location": "Butwal,Nepal",
  "email": null,
  "hireable": null,
  "bio": "IT Student | Frontend Wizard\r\n",
  "twitter_username": null,
  "public_repos": 101,
  "public_gists": 2,
  "followers": 60,
  "following": 105,
  "created_at": "2022-09-01T01:45:20Z",
  "updated_at": "2024-09-26T12:32:50Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
  res.send("suman");
})

app.get('/login',(req,res)=>{
  res.send('<h1>Please Login</h1>')
})

app.get('/youtube',(req,res)=>{
   res.send("<h2>Chai aur code</h2>")
})

app.get('/github', (req,res)=>{
  res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})