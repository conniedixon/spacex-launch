# SpaceX Launches Web App

A web app that displays SpaceX launches.
SpaceX API: https://docs.spacexdata.com/

## Using GraphQL

To query the database (locally):

- `npm i`
- `npm run start` will start the sever on localhost:5000
- navigate to localhost:5000/graphql

### Get data from all launches

<code>  
{
    launches {
    //request the data you want here
    flight_number
    rocket {
        rocket_id
    }
    }
} </code>

Will return:

<code>
{
  "data": {
    "launches": [
      {
        "flight_number": 1
        "rocket": {
            "rocket_id": "falcon1"
        }
        ...etc
      }
    ]
  }
}
</code>

### Get launches by flight_number

<code>
  {
    launch(flight_number: 2) {
      mission_name
    }
  }
</code>

Will return:

<code>
{
  "data": {
    "launch": {
      "flight_number": 2
    }
  }
}
</code>
