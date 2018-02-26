require('server/models')

db.listings.create( {
  title: 'Marcus and Ben'
})

User.findAll().then(users => {
  console.log(users)
})
