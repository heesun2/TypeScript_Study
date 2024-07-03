// Queue - 제네릭 클래스
// 07-01.ts 복사

(() => {
  // interface StringQueue {
  //   data: string[];
  //   push(item: string): void;
  //   pop(): string | undefined;
  // }
  // interface NumQueue {
  //   data: number[];
  //   push(item: number): void;
  //   pop(): number | undefined;
  // }

  // class StringQueue implements Queue {
  //   data: string[] = [];
  //   push(item: string) {
  //     this.data.push(item);
  //   }

  //   pop(): string | undefined {
  //     return this.data.shift();
  //   }
  // }

  // class NumberQueue implements NumQueue {
  //   data: number[] = [];
  //   push(item: number) {
  //     this.data.push(item);
  //   }

  //   pop(): number | undefined {
  //     return this.data.shift();
  //   }
  // }

  interface IQueue<T> {
    data: T[];
    push(item: T): void;
    pop(): T | undefined;
  }

  class MyQueue<T> implements IQueue<T> {
    data: T[] = [];
    push(item: T) {
      this.data.push(item);
    }

    pop(): T | undefined {
      return this.data.shift();
    }
  }

  const sq = new MyQueue<string>();
  sq.push('hello');
  sq.push('typescript');
  sq.push('world');

  const s1 = sq.pop();
  const s2 = sq.pop();
  const s3 = sq.pop();

  console.log(s1, s2?.toUpperCase(), s3);

  const nq = new MyQueue<number>();
  nq.push(10);
  nq.push(20.123456);
  nq.push(300);

  const n1 = nq.pop();
  const n2 = nq.pop();
  const n3 = nq.pop();

  console.log(n1, n2?.toFixed(3), n3);
})();