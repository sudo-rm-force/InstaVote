var config = {}

config.host = process.env.HOST || "https://instavote.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "eAmtsu1QGesZXhezDjduKLx7ZIAYkzMN2Kjai7pK6s6tLG0hu0HOticgZjk7WvP0WJXRcE8BhQAlp6t6wxqnTQ==";
config.databaseId = "instaVote";
config.collectionId = "dummy";

config.endpoint = process.env.HOST || "https://instavote.documents.azure.com:443/";
config.key = process.env.AUTH_KEY || "eAmtsu1QGesZXhezDjduKLx7ZIAYkzMN2Kjai7pK6s6tLG0hu0HOticgZjk7WvP0WJXRcE8BhQAlp6t6wxqnTQ==";

// config.database = {
//     id: 'FamilyDatabase'
//   }
  
//   config.container = {
//     id: 'voters'
//   }

config.items = {
    AyanKanjoos: {
        id: 'Anderson.1',
        Country: 'USA',
        lastName: 'Andersen',
        parents: [
          {
            firstName: 'Thomas'
          },
          {
            firstName: 'Mary Kay'
          }
        ],
        children: [
          {
            firstName: 'Henriette Thaulow',
            gender: 'female',
            grade: 5,
            pets: [
              {
                givenName: 'Fluffy'
              }
            ]
          }
        ],
        address: {
          state: 'WA',
          county: 'King',
          city: 'Seattle'
        }
      }
}

module.exports = config;