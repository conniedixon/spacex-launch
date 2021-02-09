const express = require("express");
const graphqlhttp = require("express-graphql")
const schema = require("./schema.js")

//graphql only has one endpoint, as it has a schema 

const app = express()

app.use("/graphql", graphqlhttp.graphqlHTTP({
    //we called schema 'schema' here
    schema,
    graphiql: true
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{console.log("listening on " + PORT)})