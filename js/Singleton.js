var mySingleton = (function() {

	var instance;

	function init() {

		var myPrivateProperty = "My private Property";

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
		if (!instance) {
			instance = int();
		}

		return instance;
	}

})();