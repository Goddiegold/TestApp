import $ from "jquery";
import { toast } from "react-toastify";

function log(error) {
  console.log(error);
}

$.ajaxSetup({
  beforeSend: function (xhr) {
    xhr.fail((err) => {
      const expectedError = err && err.status >= 400 && err.status < 500;
      if (!expectedError) {
        log(err);
        toast.error("An unexpected error occurred");
      }
      return Promise.reject(err);
    });
  },
});


let api = "http://img.omdbapi.com/?apikey=3f98267d&";

let http = {
    get: $.get
}

export default http;