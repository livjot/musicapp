//all the callbacks will be added to controllers
exports.music = (req,res) =>{
    //res.send('this is express js log')
    
    res.json({
        music:[
            {
            genre:'Pop',
            artist:'ABC',
            realease_year:1999
            },
            {
            genre:'classics',
            artist:'ACB',
            realease_year:1960
            },
            {
            genre:'rock',
            artist:'CG',
            realease_year:1974
            },
            {
            genre:'jazz',
            artist:'P',
            realease_year:1995
            },
            {
            genre:'heavy metal',
            artist:'AH',
            realease_year:2000
            }
            
    ]
    })
};