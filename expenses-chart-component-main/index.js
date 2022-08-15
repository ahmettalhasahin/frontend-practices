

const newDiv = document.getElementsByClassName('amount');

function OnPageLoad()
{
	fetch('data.json') 
	.then(cevap => cevap.json()) 
	.then(veri => {
		let maxValue =  0; 
		veri.forEach(element => {
			if (element.amount > maxValue)
				maxValue = element.amount;
		});
		maxValueBigger = maxValue;
		let length = document.getElementsByClassName("graph-col").length;
		let j = 0;
		for(let i = 0; i < length; i++)
		{
			const graphCol = document.getElementsByClassName("graph-col");
			graphCol[i].style.height = `${110 * ((veri[i].amount)/maxValue)}px`
			if (veri[i].amount === maxValue)
				graphCol[i].id = 'maxValue';
			if (veri[i].amount > veri[j].amount)
				j = i;
			document.getElementsByClassName("amount")[i].innerHTML = `$${veri[i].amount}`
			//newDiv.style.bottom = `48%`;
		}
		document.getElementsByClassName("graph-col")[j].style.backgroundColor = "hsl(186, 34%, 60%)"
	})
	.then(() => {
	const eventDiv = document.getElementsByClassName('graph-col');
	for (let i = 0; i < eventDiv.length; i++){
		eventDiv[i].addEventListener('mouseover', (e) => {
		if (eventDiv[i].id === 'maxValue') {
			eventDiv[i].style.backgroundColor = 'hsl(186deg 38% 78%)';
		}
		else {
			eventDiv[i].style.backgroundColor = 'rgb(255 173 156)';
	}

	})
	eventDiv[i].addEventListener('mouseout', (e) => {
		if (eventDiv[i].id === 'maxValue') {
			eventDiv[i].style.backgroundColor = 'hsl(186, 34%, 60%)';
		}
		else {
			eventDiv[i].style.backgroundColor = 'hsl(10, 79%, 65%)';
		}
	})
	}
	})
	;
}


document.get