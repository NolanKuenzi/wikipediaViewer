"use strict";

var _regeneratorRuntime = require("regenerator-runtime");

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function handleEvent() {
  var searchTerm = document.getElementById("sBar").value;
  if (searchTerm === "") {
    alert("Please enter name of the article you would like to access into the search box.");
    return;
  }
  var api = "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" + searchTerm + "&limit=8";
  var getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime2.default.mark(function _callee() {
    var response, data, list, outputSection;
    return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch(api);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;

            if (data[1].length === 0) {
              alert("No results found for search item.");
            }
            list = "<ul>" + data[1].map(function (item, index) {
              return "<li><a href=\"" + data[3][index] + "\" target=\"_blank\">" + item + "</a><p>" + data[2][index] + "</p></li>";
            }).join("") + "</ul>";
            outputSection = document.getElementById("outputSection");

            outputSection.innerHTML = list;
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);

            alert("Data failed to load, please try again.");

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 13]]);
  }))();
}

var body = document.querySelector("body");
body.addEventListener("keypress", function (event) {
  if (event.charCode === 13) {
    handleEvent();
  }
});

var button0 = document.getElementById("button0");
button0.addEventListener("click", handleEvent);

var button1 = document.getElementById("button1");
button1.addEventListener("click", function () {
  var randomArticle = "https://en.wikipedia.org/wiki/Special:Random";
  window.open(randomArticle);
});