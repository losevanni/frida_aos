Java.perform(function () {
    // 대상 클래스 이름
    var targetClassName = 'classPath';
  
    // 대상 클래스 로드
    var targetClass = Java.use(targetClassName);
  
    // 클래스의 모든 메서드 가져오기
    var methods = targetClass.class.getDeclaredMethods();
  
    // 메서드 이름 출력
    methods.forEach(function (method) {
      console.log('Class: ' + targetClassName);
      console.log('Method: ' + method.getName());
      console.log('------------------');
    });
  });