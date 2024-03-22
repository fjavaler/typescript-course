import { Observable, of } from "rxjs";

// This is the same as...
of("fred", "is", "cool").subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log("done"),
});

// ...everything below this line
function handmadeOf(...args: any) {
  return new Observable((subscriber) => {
    for (let i = 0; i < args.length; i++) {
      subscriber.next(args[i]);
    }
    subscriber.complete();
  });
}

handmadeOf("fred", "is", "cool").subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log("done"),
});
