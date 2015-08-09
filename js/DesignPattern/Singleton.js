var mySingleton = (function() {

	var instance;

	function init() {

		var myPrivateProperty = Math.random();

		function myPrivateFunction() {
			return "my private function";
		}

		function myPublicFunction() {
			return myPrivateProperty;
		}

		return {
			myPublicFunction : myPublicFunction
		}

	}

	return {
		getInstance : function() {
			if (!instance) {
				instance = init();
			}

			return instance;
		}
	}

})();

var mySingleton1 = mySingleton.getInstance();
var mySingleton2 = mySingleton.getInstance();

// /console.log(mySingleton1 === mySingleton2);
