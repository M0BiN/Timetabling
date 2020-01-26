import DNA from './DNA';
import store from './redux/store';
let bestOverAll = { fitness: -1 };

class Population {
  constructor(popMax, mutationRate) {
    const { enrollment } = store.getState();
    this.population = []; // Array to hold the current population
    this.matingPool = []; // ArrayList which we will use for our "mating pool"
    this.generations = 0; // Number of generations
    this.finished = false; // Are we finished evolving?
    this.userData = enrollment; // Target phrase
    this.mutationRate = mutationRate; // Mutation rate
    this.perfectScore = 100;
    this.bestofThebest = { fitness: -1 };
    this.avg = 0;
    this.totalFitness = 0;

    this.best = { fitness: 0 };
    this.population = [];
    for (let i = 0; i < popMax; i++) {
      this.population[i] = new DNA(this.userData, this.hotSpot);
      this.best = this.population[i];
      // this.bestofThebest = this.population[i];
    }
    this.matingPool = [];
  }
  getOverAll() {
    return this.bestofThebest;
  }

  // Fill our fitness array with a value for every member of the population
  calcFitness() {
    this.avg = 0;
    this.totalFitness = 0;
    for (let i = 0; i < this.population.length; i++) {
      this.population[i].calcFitness();
      bestOverAll = this.population[i].fitness > bestOverAll.fitness ? this.population[i] : bestOverAll;
      this.avg += this.population[i].fitness;
      this.totalFitness += this.population[i].fitness;
      if (this.bestofThebest.fitness < this.population[i].fitness) {
        this.bestofThebest = this.population[i];
      }
    }
    this.avg = this.avg / this.population.length;
  }

  // Generate a mating pool
  naturalSelection() {
    let total = this.totalFitness;
    for (let i = 0; i < this.population.length; i++) {
      this.population[i].normalFitness = this.population[i].fitness / total;
    }
  }

  // Create a new generation
  generate() {
    // Refill the population with children from the mating pool
    let newpop = [];
    const saved = this.saveMEjesus();
    // newpop.push(saved[0],saved[1],saved[2])
    // console.log('tol poll=',this.matingPool.length)
    for (let i = 0; i < (this.population.length / 2)-1; i++) {
      let partnerA = (Math.random(1) > 0.01 ? this.giveMeOneGoodChild() : saved[0]);
      let partnerB = this.giveMeOneGoodChild()
      let child = partnerA.crossover(partnerB);
      child[0].mutate(this.mutationRate);
      child[1].mutate(this.mutationRate);
      newpop.push(child[0]);
      newpop.push(child[1]);
    }
    newpop.push(saved[0]);
    newpop.push(saved[1]);
    this.generations++;

    this.population = newpop;
  }



  saveMEjesus() {
    let first = { fitness: -1 };
    let second = { fitness: -1 };
    let third = { fitness: -1 };
    for (let i = 0; i < this.population.length; i++) {
      const num = this.population[i].fitness;
      if (num > first.fitness) {
        first = this.population[i];
      } else {
        if (num > second.fitness) {
          second = this.population[i];
        } else {
          if (num > third.fitness) {
            third = this.population[i];
          }
        }
      }
    }

    return [first, second, third];
  }




  giveMeOneGoodChild() {

    let chance = Math.random(1);
    let index = 0;
    while (chance > 0) {
      chance -= this.population[index++].normalFitness;
    }
    return this.population[index - 1];
  }



  getTotal() {
    let sum = 0;
    for (let i = 0; i < this.population.length; i++) {
      sum += this.population[i].fitness;
    }
    return sum;
  }

  getBest() {
    return this.best;
  }

  // Compute the current "most fit" member of the population
  evaluate() {
    let worldrecord = 0.0;
    let index = 0;
    for (let i = 0; i < this.population.length; i++) {
      if (this.population[i].fitness > worldrecord) {
        index = i;
        worldrecord = this.population[i].fitness;
        this.bestofThebest = this.population[index].fitness > this.bestofThebest.fitness ? this.population[index] : this.bestofThebest;
      }

    }

    if (worldrecord >= 99) {
      this.finished = true;
    }
    // this.bestofThebest = this.population[index].fitness>this.bestofThebest.fitness?this.population[index] : this.bestofThebest;
    // if(worldrecord > bestOverAll.fitness){
    //   console.log(worldrecord, ' >',bestOverAll.fitness, ' ?' )
    //   bestOverAll = this.population[index];
    // }
  }

  isFinished() {
    return this.finished;
  }

  getGenerations() {
    return this.generations;
  }

  // Compute average fitness for the population


}
export default Population;