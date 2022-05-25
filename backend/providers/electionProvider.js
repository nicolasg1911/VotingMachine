const db = require('../db/DBConnection');

const getAll = (onResult)=>{
    db.con.query("SELECT * FROM options_A00365529 order by id", (err,result)=>{
        if(!err){
            onResult(result);
        }
    });
}


const updateVote = (id)=>{
    let vote;
    db.con.query("SELECT voteCount FROM vote_A00365529 WHERE optionId = ('"+id+"')", (err,result)=>{
        
            vote = result[0].voteCount;
            console.log(vote);

            vote++;

            db.con.query("UPDATE vote_A00365529 set voteCount = ('"+vote+"') WHERE optionId = ('"+id+"')",(err)=>{

                if(!err){
                    console.log({result:"OK"});
                }else{
                    console.log({result:"ERROR"})
                }
        
            });
        
    });


    

   
}

const getVotes = (onResult)=>{
    db.con.query("SELECT * FROM vote_A00365529 order by optionId", (err,result)=>{
        if(!err){
            onResult(result);
        }
    });
}




module.exports.getAll = getAll;
module.exports.getVotes = getVotes;
module.exports.updateVote = updateVote;