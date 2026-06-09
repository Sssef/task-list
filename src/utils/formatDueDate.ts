export function formatDueDate(dueDate: string): { label: string; tone: 'default' | 'upcoming' | 'overdue'; } {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(`${dueDate}T00:00:00`);
  const diffDays = Math.round((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return {
      label: `Due ${due.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`,
      tone: 'overdue',
    };
  }

  if (diffDays === 0) {
    return { label: 'Due today', tone: 'upcoming' };
  }

  if (diffDays === 1) {
    return { label: 'Due tomorrow', tone: 'upcoming' };
  }

  return {
    label: `Due ${due.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`,
    tone: 'default',
  };
}

export function isOverdue(dueDate: string, status: string): boolean {
  if (status === 'done') return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(`${dueDate}T00:00:00`);
  return due < today;
}
