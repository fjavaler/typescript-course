// Use from instead of 'of' for iterable types.
import { from } from 'rxjs';

// An array is iterable.
let array = ['fred', 'is', 'cool'];
from(array).subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log('done'),
});