const electionProvider = require('../providers/electionProvider');

const createServices = (app) => {
    
    app.get('/api/election/all', (req, res) => {
        electionProvider.getAll(
            (result) =>{
                res.send(result);
            }
        );
    });


    app.put('/api/election/update/:id', (req, res)=>{
        let vote = req.params.id;
        electionProvider.updateVote(vote, (result)=>{
            res.send(result);
        })

    });

    app.get('/api/election/allVotes', (req,res)=>{
        electionProvider.getVotes(
            (result) =>{
                res.send(result);
            }
        );

    });




    

}

module.exports.createServices = createServices;