import React, { FC } from "react";
import { ITask } from "../InterFaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask: FC<Props> = ({ task, completeTask }) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName} </span>
        <span>{task.deadline} </span>
      </div>
      <button onClick={() => completeTask(task.taskName)}>X</button>
    </div>
  );
};

export default TodoTask;
