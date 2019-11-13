Object.defineProperty(exports, "__esModule", {
  value: true
});

var _this = this;

var _reactNativeActivityFeedCore = require("react-native-activity-feed-core");

Object.keys(_reactNativeActivityFeedCore).forEach(function(key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reactNativeActivityFeedCore[key];
    }
  });
});

var Permissions = require("expo-permissions");
var ImagePicker = require("expo-image-picker");

(0, _reactNativeActivityFeedCore.registerNativeHandlers)({
  pickImage: function pickImage() {
    return regeneratorRuntime.async(
      function pickImage$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(
                Permissions.askAsync(Permissions.CAMERA_ROLL)
              );

            case 2:
              _context.next = 4;
              return regeneratorRuntime.awrap(
                ImagePicker.launchImageLibraryAsync({
                  allowsEditing: false,
                  aspect: [4, 3]
                })
              );

            case 4:
              return _context.abrupt("return", _context.sent);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      },
      null,
      _this
    );
  }
});
