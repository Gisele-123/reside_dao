import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as residenceIdl } from '../../declarations/reside_backend/reside_backend.did.js';

const agent = new HttpAgent({ host: 'http://127.0.0.1:4943/?canisterId=be2us-64aaa-aaaaa-qaabq-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai' }); 

const residenceCanisterId = 'bkyz2-fmaaa-aaaaa-qaaaq-cai'; 

const residenceActor = Actor.createActor(residenceIdl, {
  agent,
  canisterId: residenceCanisterId,
});

export const setupResidence = async (name, apartmentsCount, builderIdentifier, expenses) => {
  return await residenceActor.setupResidence(name, apartmentsCount, builderIdentifier, expenses);
};

export const getResidence = async () => {
  return await residenceActor.getResidence();
};

export const addApartment = async (apartmentNumber, apartmentName, ownerIdentifier) => {
  return await residenceActor.addApartment(apartmentNumber, apartmentName, ownerIdentifier);
};

export const getApartments = async () => {
  return await residenceActor.getApartments();
};

export const applyForCouncil = async (apartmentNumber, councilRole) => {
  return await residenceActor.applyForCouncil(apartmentNumber, councilRole);
};

export const getCouncilApplications = async () => {
  return await residenceActor.getCouncilApplications();
};