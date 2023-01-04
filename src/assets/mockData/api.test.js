/*const MockAPI= require('/api.js');

describe("Mock API",()=>{
  let mockAPI;
  let mockDatabase=
  {
    streams:[
        {
            "stream_country": "OM",
            "shuffle": "false",
            "repeat_play": "false",
            "timestamp": "20220321T15:43:00",
            "cached": "false",
            "stream_time": "04:00",
            "offline_timestamp": "20220321T15:39:00",
            "length": "240",
            "source": "radio",
            "source_uri": "",
            "device_type": "personal computer",
            "os": "Windows",
            "completion_flag": "true",
            "discovery_flag": "true",
            "user_country": "OM",
            "age_group": "35-44",
            "user_region": "OM-MA",
            "gender": "female",
            "isrc": "UKXN22059373",
            "track_name": "Sick",
            "track_artists": "Adam Hender"
          }, {
            "stream_country": "DO",
            "shuffle": "false",
            "repeat_play": "false",
            "timestamp": "20220323T20:31:00",
            "cached": "false",
            "stream_time": "-04:00",
            "offline_timestamp": "20220323T20:29:00",
            "length": "85",
            "source": "artist",
            "source_uri": "",
            "device_type": "cell phone",
            "os": "iOS",
            "completion_flag": "true",
            "discovery_flag": "false",
            "user_country": "DO",
            "age_group": "23-27",
            "user_region": "DO-32",
            "gender": "female",
            "isrc": "QMQGC2100606",
            "track_name": "Ophelia but it\u0027s Muffled and Slowed",
            "track_artists": "Dybbukk"
          }
    ]
  };

  beforeEach(()=>{
    mockAPI= new MockAPI(mockDatabase)
  })

  it("returns a 400 bad request status if the request is invalid",()=>{
    const mockApiCall=mockAPI.simulateAsyncCall({})
    return mockApiCall.then(response=>{
      expect(response.status).toBe(400)
    })
  })

  describe("get requests",()=>{
    const validRequest={method:'get',body:{user:"Jack"}};
    const invalidRequest={method:'get',body:{user:"Tod"}};

    it("returns a 404 status if a user is not found",()=>{
      const mockApiCall=mockAPI.simulateAsyncCall(invalidRequest)
      return mockApiCall.then(response=>{
      expect(response.status).toBe(404)
      })
    });

    it("returns a 200 status with a user's posts",()=>{
      const mockApiCall=mockAPI.simulateAsyncCall(validRequest)
      return mockApiCall.then(response=>{
      expect(response.status).toBe(200)
      expect(response.posts).toEqual(["I just bought some magic beans!"])
      })
    });
  })
})