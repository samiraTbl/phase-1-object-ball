const { defaultDocumentFeatures } = require("jsdom");

function  gameObject()
{ let obj={
    Home: {
        teamName:'Brooklyn Nets',
        colors: ['black','White'],
        players:{
            AlanAnderson:{
            number:0,
            shoe:16,
            points:22,
            rebounds:12,
            assists:12,
            steals:3,
            blocks:1,
            slamDunks:1},
        
             ReggieEvans:{
            number:30,
            shoe:14,
            points:12,
            rebounds:12,
            assists:12,
            steals:12,
            blocks:12,
            slamDunks:7
        },     BrookLopez:{
            number:11,
            shoe:17,
            points:17,
            rebounds:19,
            assists:10,
            steals:3,
            blocks:1,
            slamDunks:15
        }  ,
         MasonPlumlee  :{
            number:1,
            shoe:19,
            points:26,
            rebounds:12,
            assists:6,
            steals:3,
            blocks:8,
            slamDunks:5
        } ,    JasonTerry:{
            number:31,
            shoe:15,
            points:19,
            rebounds:2,
            assists:2,
            steals:4,
            blocks:11,
            slamDunks:1
        }}
    },
    away: {
        teamName:'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players:{
            JeffAdrien:{
            number:4,
            shoe:18,
            points:10,
            rebounds:1,
            assists:1,
            steals:2,
            blocks:7,
            slamDunks:2},
               BismakBiyombo:{
            number:0,
            shoe:16,
            points:12,
            rebounds:4,
            assists:7,
            steals:7,
            blocks:15,
            slamDunks:10},
                  DeSagnaDiop: {
            number:2,
            shoe:14,
            points:24,
            rebounds:12,
            assists:12,
            steals:4,
            blocks:5,
            slamDunks:5},
                   BenGorden:{
            number:8,
            shoe:15,
            points:33,
            rebounds:3,
            assists:2,
            steals:1,
            blocks:1,
            slamDunks:0},
                   BrendanHaywood:{
            number:33,
            shoe:15,
            points:6,
            rebounds:12,
            assists:12,
            steals:22,
            blocks:5,
            slamDunks:12}
            }
    }
    }
    return obj;
}

function homeTeamName() {
    let object = gameObject()
   
    return object['Home']['players']
  }
  
  function numPointsScored (plNa)
  { let object = gameObject()
    let msg="player don't exists";
    if (object['Home']['players'][plNa] !=undefined)
       { return object['Home']['players'][plNa]['points']}
    else if (object['away']['players'][plNa] !=undefined)
    return object['away']['players'][plNa]['points']
else return msg;

  }
  
  function shoeSize(plNa)
  { let object = gameObject()
    let msg="player don't exists";
    if (object['Home']['players'][plNa] !=undefined)
       { return object['Home']['players'][plNa]['shoe']}
    else if (object['away']['players'][plNa] !=undefined)
    return object['away']['players'][plNa]['shoe']
else return msg;
  }


  function teamColors(plNa)
  { let object = gameObject()
    let msg="player don't exists";
    if (object['Home']['teamName'] ===plNa)
       { return object['Home']['colors']}
    else if (object['away']['teamName'] ===plNa)
    return object['away']['colors']
else return msg;
  }

  function teamNames()
  {
    let object = gameObject()
    let list=[]
    for (let gameKey in object)
    {
        list.push(object[gameKey]['teamName'])
    }
    return list;
  }

  function playerNumbers(teamN)
  {
    let object = gameObject()
    let list=[]
    for (let gameKey in object)
    {
        if (object[gameKey]['teamName']===teamN)
         for (let key in object[gameKey]['players'])
        list.push(object[gameKey]['players'][key]['number']);
    }
    return list;
  }

  function playerStats(playerN)
  {
    let object = gameObject()
    for (let gameKey in object)
    {
        for (let key in object[gameKey]['players'])
          if (key===playerN)
          return object[gameKey]['players'][key];
    }

  }
 // console.log(playerStats('AlanAnderson'))
  function bigShoeRebounds()
  {let reb,big=0;
    
    let object = gameObject()
    for (let gameKey in object)
    {
        for (let key in object[gameKey]['players'])
          if (object[gameKey]['players'][key]['shoe'] >big)
         { big =object[gameKey]['players'][key]['shoe'];
          reb =object[gameKey]['players'][key]['rebounds'];}
    }
    console.log(reb);
  }
  bigShoeRebounds()