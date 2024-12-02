const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

let habits = []; 

app.post('/habits', (req, res) => {
    const { name, dailygoal } = req.body; 
    const newHabit = { name, dailygoal }; 
    
    habits.push(newHabit); 

    res.status(201).json(newHabit); 
});


app.get('/habits', (req, res) => {
    res.json(habits); 
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
