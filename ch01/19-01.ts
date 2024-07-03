// Enum으로 상수를 그룹화 -숫자형
// 18-04.ts 복사

(() => {
  //그룹화는 상수끼리 중복되지 않도록 값을 지정하면 된다
  enum SubjectName {
    TYPE_SCRIPT,
    NEXT_JS,
  }
  function getSchedule(subject: number) {
    console.log(SubjectName[subject]);
    if (SubjectName.TYPE_SCRIPT === subject) {
      return '타입스크립트 수업은 이론 1주 + 프로젝트 1주 입니다';
    } else if (SubjectName.NEXT_JS === subject) {
      return '넥스트 JS수업 이론 2주+ 프로젝트 4주 입니다';
    }
  }
  console.log(getSchedule(SubjectName.TYPE_SCRIPT));
  console.log(getSchedule(SubjectName.NEXT_JS));

  console.log(SubjectName);
})();
