function updateTaskHandler(e) {
  const elemId = e.target.dataset.id;

  if (!e.target.classList.contains('list__item-checkbox')) {
    return;
  }
  if (tasks.find((task) => task.id === Number(elemId)).done) {
    tasks.find((task) => task.id === Number(elemId)).done = false;
  } else {
    tasks.find((task) => task.id === Number(elemId)).done = true;
  }

  // let variable = null;
  // variable = tasks.find((task) => task.id === Number(elemId)).done
  //   ? (tasks.find((task) => task.id === Number(elemId)).done = false)
  //   : (tasks.find((task) => task.id === Number(elemId)).done = true);

  renderTasks(tasks);
}