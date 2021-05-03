import {Tache} from './tache';

export const TACHES: Tache[] = [
  {libelle: 'RDV chez le médecin', description: 'Examens, radio et consultation', date: new Date(2021, 3, 19), estValide: false, priorite: 'haute'},
  {libelle: 'Appeler assurrance', description: 'Changer véhicule', date: new Date(2021, 4, 8), estValide: false, priorite: 'moyenne'},
  {libelle: 'Rendre travail d\'études', description: 'L\'emploi dans les startups de la EdTech', date: new Date(2021, 3, 20), estValide: true, priorite: 'haute'},
  {libelle: 'Faire des emplettes', description: 'Vêtements : budget 65€', date: new Date(2021, 5, 15), estValide: false, priorite: 'faible'},
  {libelle: 'Passer l\'examen de conduite', description: 'Pour la énième fois ;-)', date: new Date(2021, 6, 14), estValide: false, priorite: 'moyenne'}
]
