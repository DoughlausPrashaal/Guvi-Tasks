class Movie {
    constructor(title,studio,rating = "PG 13"){
        this.title = title
        this.studio = studio
        this.rating = rating
    }

    getMovies(movies){
        let pgmovies = []
        for(let i in movies){
            if(movies[i].rating === "PG 13"){
                pgmovies.push(movies[i])
            }
        }
        console.log(pgmovies)
    }
}

let movies = [
    new Movie("Transformers", "Paramount Pictures", "PG 13"),
    new Movie("Spiderman", "Sony Pictures", "R"),
    new Movie("Oppenheimer", "Warner Bros. Pictures"),
    new Movie("The Dark Knight", "Warner Bros. Pictures", "PG 13"),
    new Movie("The Lion King", "Walt Disney Pictures", "R"),
];

let movieInstance = new Movie();

movieInstance.getMovies(movies);
let movie1 = new Movie("Casino Royale","Eon Productions")
console.log(`movie tile : ${movie1.title}
movie studio : ${movie1.studio}
movie rating : ${movie1.rating}
`)

class Circle{
    constructor(radius,color){
        this.radius = radius.toFixed(2)
        this.color = color
    }

    circle(){
        {`circle radius is ${this.radius}
        circle color is ${this.color}`}
    }

    getcolor(){
        console.log(`circle color is ${this.color}`)
    }

    getradius(){
        console.log(`Cicle radius is ${this.radius}`)
    }

    setcolor(str){
        this.color = str
        this.getcolor()
    }

    setRadius(r){
        this.radius = r
        this.getradius()
    }

    getarea(){
        let area = (Math.PI * Math.pow(this.radius,2)).toFixed(2)
        console.log(`Circle Area is ${area}`)
    }

    getCircumfrence(){
        let circumfrence = (2 * Math.PI * this.radius).toFixed(2)
        console.log(`Circle circumfrence is ${circumfrence}`)
    }
}

const circle1 = new Circle(5.5,"red")
circle1.getradius()
circle1.getarea()
circle1.getCircumfrence()
circle1.getcolor()
circle1.setcolor("Blue")
circle1.setRadius(6)
circle1.circle()

// Write a person class to hold all details

class Person{
    constructor(firstName,lastName,gender,age,occupation,email,phoneNo){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender,
        this.age = age,
        this.occupation = occupation,
        this.email = email,
        this.phoneNo = phoneNo
    }

    getPersonName(){
        return`the person full name is ${this.firstName} ${this.lastName}`
    }

    getPersonGender(){
        return `The person is ${this.gender}`
    }

    getOccupation() {
        return `The Person is ${this.occupation}` ;
      }
    
    getPhoneNumber() {
     return `The Person Phone number is ${this.phoneNo}`;
    }

    getEmailAddress() {
     return `Person Email address is ${this.email} `;
    }

    getAge(){
        return `Person Age is ${this.age}`
    }

    setFirstName(firstName) {
     this.firstName = firstName;
    }

    setLastName(lastName) {
     this.lastName = lastName;
    }

    setAge(age) {
     this.age = age;
    }

    setGender(gender) {
     this.gender = gender;
    }

    setOccupation(occupation) {
     this.occupation = occupation;
    }

    setPhoneNumber(phoneNumber) {
     this.phoneNo = phoneNumber;
    }

    setEmailAddress(emailAddress) {
     this.emailAddress = emailAddress;
    }

    
} 

const person1 = new Person("Doughlaus", "Prashaal", 25, "Male", " Software Engineer","prashaal98@gmail.com", "6382445922")
console.log(person1.getPersonName());
console.log(person1.getPersonGender());
console.log(person1.getAge());
console.log(person1.getOccupation());
console.log(person1.getPhoneNumber());
console.log(person1.getEmailAddress());

class UberPriceCalculator {
    constructor(vehicleType,distance,waitingTime,signalTime,rates){
        this.vehicleType = vehicleType
        this.distance = distance
        this.waitingTime = waitingTime
        this.signalTime = signalTime,
        this.rates = {
            bike: {
                baseRate: 25,
                distanceRate: 16,
                waitingTimeRate: 2,
                signalTimeRate: 4
            },
            auto: {
                baseRate: 40,
                distanceRate: 20,
                waitingTimeRate: 3,
                signalTimeRate: 6
            },
            taxi: {
                baseRate: 50,
                distanceRate: 25,
                waitingTimeRate: 5,
                signalTimeRate: 8
            }
        };
    }

    calculatePrice(){
        if(!this.rates.hasOwnProperty(this.vehicleType)){
            return `${this.vehicleType} is not a valid vehicle`
        }else{
            let vehicle = this.rates[this.vehicleType]
            let amount =  (vehicle.baseRate + (this.distance*vehicle.distanceRate) 
            +(this.waitingTime*vehicle.waitingTimeRate)+ (this.signalTime *vehicle.signalTimeRate)
            )
            return `Total cost is ${amount}` 
        }
    }
    
}

const vehicle = new UberPriceCalculator('taxi', 10, 5, 3)
console.log(vehicle.calculatePrice())