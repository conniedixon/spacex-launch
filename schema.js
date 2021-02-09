//This is the file for all graphql stuff

const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean} = require("graphql")

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