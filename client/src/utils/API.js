import axios from "axios";

export default {
  // Gets all meditations
  getMeditations: function() {
    return axios.get("/api/meditations");
  },
  // Gets the meditation with the given id
  getMeditation: function(id) {
    return axios.get("/api/meditations/" + id);
  },
  // Deletes the meditaion with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a meditation to the database
  saveMeditation: function(meditationData) {
    return axios.post("/api/meditations", meditationData);
  }
};