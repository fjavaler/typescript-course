import { Observable } from "rxjs";

let observable$ = new Observable((observer) => {
  observer.next("Hello world");
  observer.complete();
  observer.error();
});

let observer = {
  next: (value: any) => console.log(value),
  complete: () => console.log("Completed"),
  error: (error: any) => console.log("This is broken"),
};

observable$.subscribe(observer);
