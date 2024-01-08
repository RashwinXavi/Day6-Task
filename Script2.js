class UberPriceCalculator {
  constructor(distance, duration) {
    this.distance = distance;
    this.duration = duration;
  }

  calculateFare() {
   
    const baseFare = 2.5; 
    const costPerMile = 1.5; 
    const costPerMinute = 0.2;

    // Calculate total fare
    const fare = baseFare + (this.distance * costPerMile) + (this.duration * costPerMinute);

    return fare.toFixed(2); 
  }

  displayFare() {
    const fare = this.calculateFare();
    console.log(`Uber Fare Estimate:`);
    console.log(`Distance: ${this.distance} miles`);
    console.log(`Duration: ${this.duration} minutes`);
    console.log(`Estimated Fare: $${fare}`);
  }
}
