import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Feed die Hunde',
			day: 'Feb 5th at 2:30pm',
			reminder: true,
		},
		{
			id: 2,
			text: 'Feed die Katzen',
			day: 'Feb 6th at 1:30pm',
			reminder: true,
		},
		{
			id: 3,
			text: 'Vet appointment',
			day: 'Feb 5th at 2:30pm',
			reminder: false,
		},
	]);

	// Delete Task
	const deleteTask = (id) => {
		console.log('delete: ', id);
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle Reminder
	const toggleReminder = (id) => {
		console.log('toggle reminder: ', id);
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};

	return (
		<div className="container">
			<Header />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'There are no active tasks:)'
			)}
		</div>
	);
}

export default App;
