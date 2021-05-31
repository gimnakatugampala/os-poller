const express = require('express')
const router = express.Router();
const Pusher = require("pusher");
const Vote = require('../models/Vote')

const pusher = new Pusher({
    appId: "1211942",
    key: "2b54481c900f43650fca",
    secret: "34b933dd2a05a6ce8221",
    cluster: "mt1",
    useTLS: true
  });
  

router.get('/',(req,res) =>{
    Vote.find().then(votes => res.json({success:true,votes:votes}))
})

router.post('/',(req,res) =>{

    const newVote = {
        os:req.body.os,
        points:1
    }

    new Vote(newVote).save().then(vote =>{
        pusher.trigger("os-poll", "os-vote", {
            points:parseInt(vote.points),
            os:vote.os
          });
    
          return res.json({success:true,message:'Thank You for Voting'})
    })

})

module.exports = router;