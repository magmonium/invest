// The dynamic import is what lets Module Federation share a scope before any
// Angular code evaluates. It is not optional even while `remotes` is empty.
import('./bootstrap').catch((err) => console.error(err));
