Java.perform(function () {
    // libc.so 모듈 가져오기
    var libcModule = Module.load('libc.so');
  
    // libc.so 모듈에서 내보내는 함수들 열거
    libcModule.enumerateExports().forEach(function (exp) {
      console.log('Function: ' + exp.name);
      console.log('Address: ' + exp.address);
      console.log('------------------');
    });
  });
  
  Interceptor.attach(Module.findExportByName("libc.so", ""), {
    onEnter: function (args) {
      // 함수 진입 시 동작
      console.log("nativeFunction called");
    },
    onLeave: function (retval) {
      // 함수 종료 시 동작
      console.log("nativeFunction returned:", retval);
    },
  });