import React from 'react';
import './App.css';
import Population from './Pupolation';
import P5Wrapper from 'react-p5-wrapper';
import { withRouter } from 'react-router-dom';
import store from './redux/store';
import Button from 'react-bootstrap/Button'


let mainHistory;
let exit;


function App({ history }) {

  mainHistory = history;



  return (
    <div className="App">
      <div className='canvasContainer'>
        <P5Wrapper sketch={sketch} ></P5Wrapper>
      </div>

      {/* <Table /> */}

      <Button variant="danger" onClick={() => {
        exit();
      }}
      >Finish NOW</Button>
    <h4>زمانی که تغییرات و بهترین برازندگی برای چندین نسل ثابت ماند، از این دکمه استفاده کنید</h4>
    </div>
  );
}

export default withRouter(App);










function sketch(p) {
  let po;
  let bestPhrase;
  let allPhrases;
  let stats;
  let high = { fitness: 0 }
  let final;

  p.setup = () => {
    bestPhrase = p.createP("All fittneses:");
    exit = () => {
      let b = po.getOverAll();
      store.dispatch({ type: 'SET_FINAL_ANSWER', payload: b });
      p.noLoop();
      mainHistory.push('/3')
    }
    //bestPhrase.position(10,10);
    bestPhrase.class("best");

    allPhrases = p.createP("All phrases:");
    allPhrases.position(600, 10);
    allPhrases.class("all");

    p.createCanvas(640, 360);


    // Create a population with a target phrase, mutation rate, and population max
    po = new Population(200, 0.1);
  }

  p.draw = () => {
    p.clear();
    po.calcFitness();
    p.fill(20);

    for (let i = 0; i < po.population.length; i++) {
      p.text(po.population[i].fitness, 10, 10 * i);
      if (high.fitness < po.population[i].fitness) {
        high = po.population[i];
      }

    }
    p.text('average: ' + po.avg, 40, 40)
    po.naturalSelection();
    po.generate();
    po.calcFitness();
    po.evaluate();
    p.text("The Best Fittness Ever :  " + po.getOverAll().fitness, 50, 90);
    p.text("Total Generations: " + po.generations, 60, 110)
    if (po.finished) {

      final = po.getOverAll();
      // for (let i = 0; i < final.genes.length; i++) {
      //   // console.log(' ostad:' + prof[enroll_prof[i]] + ' course:' + course[enroll_course[i]] + ' voridiye:' + group[enroll_group[i]] + ' ' + final.genes[i][0] + 'shanbe' + ' saat ' + final.genes[i][1] + ' ' + eroll_date_held_isV[i])
      //   console.log(final)
      // }
      p.noLoop();
      store.dispatch({ type: 'SET_FINAL_ANSWER', payload: final });
      let all = store.getState().enrollment.enrollment;


      let groups = [];
      for (let i = 0; i < all.length; i++) {
        groups.push(parseInt(all[i][2]));
      }

      groups = removeDuplicates(groups);
      groups = groups.sort();
      console.log(groups, ' removeDuplicaties...')
      store.dispatch({ type: 'SET_Group', payload: groups });




      mainHistory.push('/3')

    }





  }

}

function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b)
};