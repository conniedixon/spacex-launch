//This is the file for all graphql stuff

const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema} = require("graphql")
const axios = require("axios")

//Launch type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: ()=>({
        //each field will also have a type (string, int, object...) and the key will match the keys of the database
        flight_number: {type: GraphQLInt },
        mission_name: {type: GraphQLString },
        launch_year: {type: GraphQLString },
        launch_date_local: {type: GraphQLString },
        launch_success: {type: GraphQLBoolean },
        //This will be an object
        rocket: {type: RocketType },
    })
})

//Create a relationship within the schema: Rocket Type

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: ()=>({
        rocket_id: {type: GraphQLString},
        rocket_name: {type: GraphQLString},
        rocket_type: {type: GraphQLString},
    })
})

//This is the actual set up for making calls

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    // note object not function
    fields: {
        launches: {
            //get an array of all launches
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                //make request to actual db inside here
                return axios.get('https://api.spacexdata.com/v3/launches')
                .then(res=>res.data)
            }
        }
    }
})

//export as a GraphQL Schema
module.exports = new GraphQLSchema({
    query: RootQuery
    //also takes in mutations here
})