module.exports = function toReadable (number) {
	let data={zero:0,one:1,	two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9}
	function getNum(num){
		return Object.keys(data)[+num]
	}
	function getTen(num){
		let cur=`${num}`
		if(+cur[0]==1){
			if (+cur[1]===0) return 'ten'
			if (+cur[1]===1)return 'eleven'
			if (+cur[1]===2) return 'twelve'
			if (+cur[1]===3) return 'thirteen'
			if (+cur[1]===5) return 'fifteen'
			if (+cur[1]===8) return 'eighteen'
			else{
				return Object.keys(data)[+cur[1]]+'teen'
			}
		}
		if(+cur[0]==0){
			if(cur[1]==0) return ''
			else return Object.keys(data)[+cur[1]]
		}
		else if(+cur[0]==2){
			if (+cur[1]==0)return 'twenty'
			else {return 'twenty' + ' ' + getNum(+cur[1]);}
		}
		else if(+cur[0]==3){
			if (+cur[1]==0)return 'thirty'
			else {return 'thirty' + ' ' + getNum(+cur[1]);}
		}
		else if(+cur[0]==4){
			if (+cur[1]==0)return 'forty'
			else {return 'forty' + ' ' + getNum(+cur[1]);}
		}
		else if(+cur[0]==5){
			if (+cur[1]==0)return 'fifty'
			else {return 'fifty' + ' ' + getNum(+cur[1]);}
		}
		else if(+cur[0]==8){
			if (+cur[1]==0)return 'eighty'
			else {return 'eighty' + ' ' + getNum(+cur[1]);}
		}
		else {
			if(+cur[1]==0) return Object.keys(data)[+cur[0]] + "ty"
			else return Object.keys(data)[+cur[0]] + "ty" + ' ' + getNum(+cur[1])
		}
	}
	function getHundred(num){
		let curNum=`${num}`;
		if (+curNum[1]===0 && +curNum[2]===0) return Object.keys(data)[+curNum[0]]+ ' ' + "hundred"
		else{
			return Object.keys(data)[+curNum[0]]+ ' ' + "hundred"+' '+getTen(curNum.slice(1))
		}
		
	}
	function getTotal(num){
		let cur=`${num}`
		if(cur.length===1){
			return getNum(+cur)
		}
		if(cur.length===2){
			return getTen(+cur)
		}
		if(cur.length===3){
			return getHundred(+cur)
		}
	}
	return getTotal(number)
}
