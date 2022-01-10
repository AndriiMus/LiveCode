const timer = {
  minsPassed: 0,
  secondsPassed: 0,
  startTimer() {
    setInterval(() => this.secondsPassed++, 1000);

    console.log(setInterval());
  },
  getTime() {},
  stopTimer() {},
  resetTimer() {},
};

const obj = {
  n: 'Jam',
  fn() {
    console.log(this.n);
  },
};

obj.fn();
timer.startTimer();
