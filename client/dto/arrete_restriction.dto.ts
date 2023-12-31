export class ArreteRestriction {
  id: number | null;
  numero: string;
  dateDebut: string | null;
  dateFin: string | null;
  dateSignature: string | null;
  statut: 'a_valider' | 'publie' | 'abroge';

  constructor() {
    this.id = null;
    this.numero = '';
    this.dateDebut = null;
    this.dateFin = null;
    this.statut = 'a_valider';
  }
}

export enum ArreteRestrictionStatutFr {
  a_valider = 'Brouillon',
  publie = 'Publié',
  abroge = 'Abrogé',
}
