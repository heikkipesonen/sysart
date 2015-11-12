import {EventEmitter} from 'events';

class MainStore extends EventEmitter {
  constructor (dispatcher) {
    super(dispatcher);
    console.log(this);
  }
}

export default MainStore;
