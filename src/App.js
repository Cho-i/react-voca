import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import { Routes, Route } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<DayList />} />
				<Route path="/day/:day" element={<Day />} />
				<Route path="*" element={<EmptyPage />} />
			</Routes>
		</div>
	);
}

export default App;
