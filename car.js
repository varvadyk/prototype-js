function Car (name){
	this.name= name;
	this.isTurnOn =false;
	this.spead=0;
	this.engine={
		v:1.6,
		horsesPower:120,
		isTurnOn:false
	};
	};
Car.prototype.start=function() {
		this.isTurnOn =true;
		this.spead =10;
		this.engine.isTurnOn =true;
		console.log(this.name, " ", this.spead);
		}
		// Car.prototype.spead=0;
		// 		Car.prototype.engine={
		// 		v:1.6,
		// 		horsesPower:120,
		// 		isTurnOn:false
		// 		}