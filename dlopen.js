
// 모듈 로드 시 호출되는 함수 후킹
Interceptor.attach(Module.findExportByName(null, "dlopen"), {
  onEnter: function (args) {
    var path = Memory.readUtf8String(args[0]);
    console.log("dlopen called with path:", path);
  },
});

// 네이티브 함수 후킹
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