export function useUndoRedo<T>(): {
  undo(): T | null | undefined;
  redo(): T | null | undefined;
  push(s: T): void;
} {
  const undoStack = ref<T[]>([]) as Ref<T[]>;
  const redoStack = ref<T[]>([]) as Ref<T[]>;

  const push = (item: T) => {
    undoStack.value = [...undoStack.value, item];
    redoStack.value = [];
  };

  const undo = () => {
    if (undoStack.value.length) {
      const last = undoStack.value[undoStack.value.length - 1];
      const desired = undoStack.value.length > 1 ? undoStack.value[undoStack.value.length - 2] : null;
      undoStack.value = undoStack.value.slice(0, undoStack.value.length - 1)
      redoStack.value = [...redoStack.value, last];

      return desired;
    }
  };

  const redo = () => {
    if (redoStack.value.length) {
      const last = redoStack.value[redoStack.value.length - 1];
      undoStack.value = [...undoStack.value, last];
      redoStack.value = redoStack.value.slice(0, redoStack.value.length - 1);
      return last;
    }
  };

  return { push, undo, redo };
}