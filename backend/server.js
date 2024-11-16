import express from 'express';
const app=  express();

app.use(express.static('dist'));  //for running  frontend from  build. on same folder
// app.get('/', (req,res)=>{
//     res.send('server is ready');
// }
// );

//get a list of 5 jokes



app.get('/api/jokes', (req,res)=>{

    const jokes = [
        { 
          id: 1, 
          title: "Array Humor", 
          content: "Why did the programmer quit his job? Because he didn’t get arrays."
        },
        { 
          id: 2, 
          title: "Undefined", 
          content: "How do you comfort a JavaScript bug? You console it!"
        },
        { 
          id: 3, 
          title: "Closure Issue", 
          content: "Why did the function break up with the variable? Because it couldn’t commit."
        },
        { 
          id: 4, 
          title: "Async Problems", 
          content: "Why was the JavaScript developer sad? Because he didn't know how to 'callback' his friends."
        },
        { 
          id: 5, 
          title: "Scope Wars", 
          content: "Why did the variable stay single? Because it was let down."
        }
      ];
      res.send(jokes);
})

const port  = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
})