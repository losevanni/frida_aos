Java.perform(function () {
    // 현재 로드된 클래스 가져오기
    Java.enumerateLoadedClasses({
      onMatch: function (className) {
        console.log('Class: ' + className);
      },
      onComplete: function () {
        console.log('------------------');
      }
    });
  });
  