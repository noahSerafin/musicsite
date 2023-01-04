//const MockAPI = require('./mockStreams.js');
import { type } from "@testing-library/user-event/dist/type";
import mockStreams from "./mockStreams.json" assert {type: 'json'};
const streams = mockStreams.streams;

const getArtists = () => {
  return streams.filter(streams.track_artists);
}

console.log(getArtists());
