import { Drug, Pharmacy } from './pharmacy';
import fs from 'fs';

const drugs: Drug[] = [new Drug('Doliprane', 20, 30), new Drug('Herbal Tea', 10, 5), new Drug('Fervex', 5, 40), new Drug('Magic Pill', 15, 40), new Drug('Dafalgan', 15, 40)];

const trial = new Pharmacy(drugs);
const log: string[] = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

fs.writeFile('output1.txt', log.join(','), err => {
  if (err) throw err;
});
