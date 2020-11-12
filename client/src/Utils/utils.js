export function timeConverter(time){
    let date = new Date(time);
	let options = {
		weekday: 'short',
		year: 'numeric',
		month: '2-digit',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	};

	const startDate = date.toLocaleDateString('en', options);

	return startDate;

}