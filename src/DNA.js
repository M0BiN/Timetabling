import store from './redux/store';



// Constructor (makes a random DNA)
class DNA {
    constructor() {
        const { information, enrollment } = store.getState();
        this.genes = [];
        this.fitness = 0;
        this.normalFitness = 0;
        this.userData = enrollment;


        for (let i = 0; i < this.userData.enrollment.length; i++) {
            let dna = [];
            if (this.userData.dayEnrollment[i]) {
                // console.log(this.userData.dayEnrollment[i])
                dna.push(this.userData.dayEnrollment[i]);
            } else dna.push(Math.floor(Math.random() * 5) + 1); // Day from Sunday to Wensday
            if (this.userData.timeEnrollment[i]) {
                dna.push(this.userData.timeEnrollment[i]);
            } else dna.push(Math.floor(Math.random() * 4) + 1); /// Hour from 08:00 AM to 06:30 PM


            this.genes.push(dna);
        }

    }





    // Fitness function (returns floating point % of "correct" characters)
    calcFitness() {
        let score = 200;
        for (let i = 0; i < this.genes.length; i++) {
            let theProf = this.userData.enrollment[i][0];
            let theGroup = this.userData.enrollment[i][2];
            let isRotation = this.userData.rotationEnrollment[i];
            let theHour = this.genes[i][1];
            let theDay = this.genes[i][0];
            let number_of_rotation_in_same_time_for_prof = 0;
            let number_of_rotation_in_same_time_for_group = 0;
            for (let j = i + 1; j < this.genes.length; j++) {
                let theProf2nd = this.userData.enrollment[j][0];
                let theGroup2nd = this.userData.enrollment[j][2];
                let isRotation2nd = this.userData.rotationEnrollment[j];
                let theHour2nd = this.genes[j][1];
                let theDay2nd = this.genes[j][0];

                if (theDay === theDay2nd && theHour === theHour2nd) {
                    score -= 8;
                    if (theProf === theProf2nd) score -= 20;
                    if (theGroup === theGroup2nd) score -= 20;
                    if (isRotation2nd && isRotation && number_of_rotation_in_same_time_for_prof===0) {
                        let bounuce = false;
                        if (theProf === theProf2nd){
                            number_of_rotation_in_same_time_for_prof++;
                            score += 38;
                            bounuce= true;
                            
                        } 
                        if (theGroup === theGroup2nd && number_of_rotation_in_same_time_for_group===0){
                            score += 22;
                            number_of_rotation_in_same_time_for_group++;
                            if(bounuce)score+=4;
                        } 
                        
                    }
                }
                if ((theDay !== theDay2nd || theHour !== theHour2nd) && isRotation && isRotation2nd && theProf===theProf2nd){
                    if(theDay !== theDay2nd)score--;
                    if(theHour !== theHour2nd)score--;
                }


                // if(theProf===theProf2nd && isRotation && isRotation2nd && theDay!==theDay2nd && theHour!==theDay2nd){
                //     score = score-3;

                // }
                // if(theProf===theProf2nd && isRotation && isRotation2nd && theDay===theDay2nd && theHour===theDay2nd){
                //     score = score+3;

                // }

            }
        }
        if (score < 0){
            score = 0;
        }
    
        this.fitness =  score;
    }

    // getProffesor(dna) {
    //     return dna.substr(0, this.Line.profLine);
    // }

    // getDay(dna) {
    //     let i = this.Line.profLine + this.Line.courseLine + this.Line.groupLine + this.Line.classLine;
    //     let j = this.Line.dayLine
    //     return dna.substr(i, j);
    // }

    // getHour(dna) {
    //     let i = this.Line.profLine + this.Line.courseLine + this.Line.groupLine + this.Line.classLine + this.Line.dayLine;

    //     return dna.substr(i);
    // }

    // getClass(dna) {

    // }

    // Crossover
    crossover(partner) {
        // A new child
        let child1st = new DNA(this.userData);
        let child2nd = new DNA(this.userData);
        let midLine = Math.floor(Math.random() * this.genes.length);
        let oneLine = this.genes.length/3;
        let nextLine = this.genes.length/3+this.genes.length/3;;
        for (let i = 0; i < this.genes.length; i++) {
            // console.log(this.genes[i])
            if (Math.floor(Math.random()*100)) {
                child1st.genes[i][0] = this.genes[i][0];
                child1st.genes[i][1] = this.genes[i][1];
                child2nd.genes[i][0] = partner.genes[i][0];
                child2nd.genes[i][1] = partner.genes[i][1];
            } else {
                child1st.genes[i][0] = partner.genes[i][0];
                child1st.genes[i][1] = partner.genes[i][1];
                child2nd.genes[i][0] = this.genes[i][0];
                child2nd.genes[i][1] = this.genes[i][1];
            }
        }
        // child1st.mutate(0.1);
        // child2nd.mutate(0.1);
        return [child1st, child2nd];


    }

    // Based on a mutation probability, picks a new random character
    mutate(mutationRate) {
        for (let i = 0; i < this.genes.length; i++) {
            if (Math.random(1) < mutationRate) {


                if (!this.userData.dayEnrollment[i] || !this.userData.timeEnrollment[i]) {
                    if (!this.userData.dayEnrollment[i][i]) {
                        this.genes[i][0] = (Math.floor(Math.random() * 4) + 1); // Day from Sunday to Wensday
                    }
                    if (!this.userData.timeEnrollment[i]) {
                        this.genes[i][1] = (Math.floor(Math.random() * 3) + 1); // Hour from 08:00 AM to 06:30 PM
                    }
                    break;

                    
                }

            }
        }
    }
}

export default DNA;