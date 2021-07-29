const express = require('express');
const dialogflow = require('@google-cloud/dialogflow');
const app = express();
const projectId = 'youtubedemoagent-tchv';
const intentClient = new dialogflow.IntentsClient();

app.use('/', async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.send('Server is Working !!!');
    try {
        const projectAgentPath = intentClient.projectAgentPath(projectId);
        const request = {
            parent: projectAgentPath
        }
        const [response] = await intentClient.listIntents(request);
        res.send(response);
    }catch(err){
        console.log(err);
        res.sendStatus(424);
    }
})

app.listen(process.env.PORT || 3001, ()=>{
    console.log('Live!!');
})