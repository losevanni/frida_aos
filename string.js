Java.perform(function () {
    const StringBuilder = Java.use('java.lang.StringBuilder');
    
    StringBuilder.toString.implementation = function () {
            var retVal = this.toString();
            console.log("StringBuilder.toString(): " + retVal);
            return retVal;
    };
});