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

export const changeColor = (mag) => {

       if(mag <= 4.90){

           return "small";

       }else if(mag <= 5.90){

           return "medium";

       }else if(mag <= 6.90){
           return "large"
       }else{
           return "huge"
       }
    }