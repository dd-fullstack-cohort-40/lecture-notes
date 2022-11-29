let misquotes = [{
  'misquoteId': 'a36a7d90-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'John Wayne',
  'misquoteContent': 'There is a snake in my boots',
  'misquoteSubmitter': 'prospector'
}, {
  'misquoteId': 'a36bd968-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'John Wayne',
  'misquoteContent': 'There is a snake in my boots',
  'misquoteSubmitter': 'prospector'
}, {
  'misquoteId': 'a36cde4d-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'John Wayne',
  'misquoteContent': 'There is a snake in my boots',
  'misquoteSubmitter': 'prospector'
}, {
  'misquoteId': 'a36dcd89-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'random dude at the airport',
  'misquoteContent': 'Everyone loves Cinnabons',
  'misquoteSubmitter': 'Billy Murray'
}, {
  'misquoteId': 'a36ea112-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'Hansel',
  'misquoteContent': 'Have you ever thought there is more to life than looking really really really  ridiculously good looking',
  'misquoteSubmitter': 'Mugata'
}, {
  'misquoteId': 'a36f6677-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'Bill Murray',
  'misquoteContent': 'In Japan, you have no idea what they are saying, and they can&#x27;t help you either. ...',
  'misquoteSubmitter': 'John Rodgers'
}, {
  'misquoteId': 'a37038a2-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'Luke Skywalker',
  'misquoteContent': 'To inifinity and beyond',
  'misquoteSubmitter': 'Jean Luc'
}, {
  'misquoteId': 'a3710f8f-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'George',
  'misquoteContent': 'cannot tell a lie; it was I who chopped down the cherry tree',
  'misquoteSubmitter': 'Marty'
}, {
  'misquoteId': 'a371d57f-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'Marie',
  'misquoteContent': 'let them eat cake',
  'misquoteSubmitter': 'Antoinette'
}, {
  'misquoteId': 'a3729941-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'Hagrid',
  'misquoteContent': 'Run you fools',
  'misquoteSubmitter': 'Harry'
}, {
  'misquoteId': 'a3735c57-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'Dumbldore',
  'misquoteContent': 'Do or do not there is no try',
  'misquoteSubmitter': 'Goloum'
}, {
  'misquoteId': 'a3741e83-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'Dumbldore',
  'misquoteContent': 'Do or do not there is no try',
  'misquoteSubmitter': 'Goloum'
}, {
  'misquoteId': 'a374f440-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'Hagrid',
  'misquoteContent': 'You are a wizard Dudley',
  'misquoteSubmitter': 'kadams'
}, {
  'misquoteId': 'a37b4b42-ebbb-11ea-907e-0242c0a81003',
  'misquoteAttribution': 'Dumbldore',
  'misquoteContent': 'Do or do not there is no try',
  'misquoteSubmitter': 'Goloum'
}]

const dumbldore = misquotes.filter(misquote => misquote.misquoteId === 'a37b4b42-ebbb-11ea-907e-0242c0a81003')
console.log(dumbldore)

let objectOfMisquotes = misquotes.reduce((accumulatedObjectOfMisquotes, currentMisquote)=>{ accumulatedObjectOfMisquotes[currentMisquote.misquoteId]=currentMisquote
return accumulatedObjectOfMisquotes
}, {})
console.log(objectOfMisquotes)

// const arr = ['a','b','c'];
// const res = arr.reduce((acc,curr)=> (acc[curr]='',acc),{});
// console.log(res)

const key = 'a37b4b42-ebbb-11ea-907e-0242c0a81003'

console.log(objectOfMisquotes[key])