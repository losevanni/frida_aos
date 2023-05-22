const openFunc = Module.findExportByName(null, "open");
Interceptor.attach(openFunc, {
  onEnter: function (args) {
    const path = Memory.readUtf8String(args[0]);
    const flags = args[1].toInt32();
    console.log("open called with path:", path);
    console.log("open called with flags:", flags);
  },
});

const readFunc = Module.findExportByName(null, "read");
Interceptor.attach(readFunc, {
  onEnter: function (args) {
    const fd = args[0].toInt32();
    const buffer = args[1];
    const count = args[2].toInt32();
    console.log("read called with fd:", fd);
    console.log("read called with count:", count);
    // buffer 데이터를 읽어오는 방법은 추가 구현이 필요합니다.
  },
});

const writeFunc = Module.findExportByName(null, "write");
Interceptor.attach(writeFunc, {
  onEnter: function (args) {
    const fd = args[0].toInt32();
    const buffer = args[1];
    const count = args[2].toInt32();
    console.log("write called with fd:", fd);
    console.log("write called with count:", count);
    // buffer 데이터를 쓰는 방법은 추가 구현이 필요합니다.
  },
});

const closeFunc = Module.findExportByName(null, "close");
Interceptor.attach(closeFunc, {
  onEnter: function (args) {
    const fd = args[0].toInt32();
    console.log("close called with fd:", fd);
  },
});
