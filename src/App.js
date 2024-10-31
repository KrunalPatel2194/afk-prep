import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import Question from './Question';
import Result from './Result';
import './App.css';
// const questions1 = [
//   { id: 1, question: "Which fibers are responsible for attaching the tooth to the alveolar bone?", options: ["Horizontal fibers", "Oblique fibers", "Alveolar crest fibers", "Circular fibers"], answer: 1 },
//   { id: 2, question: "A probing depth greater than 3mm but less than 5mm typically indicates:", options: ["Gingivitis", "Mild periodontitis", "Moderate periodontitis", "Severe periodontitis"], answer: 1 },
//   { id: 3, question: "Which bacterium is primarily associated with aggressive periodontitis?", options: ["Porphyromonas gingivalis", "Tannerella forsythia", "Fusobacterium nucleatum", "Aggregatibacter actinomycetemcomitans"], answer: 3 },
//   { id: 4, question: "Which of the following bacteria is most associated with chronic periodontitis?", options: ["Streptococcus mutans", "Aggregatibacter actinomycetemcomitans", "Porphyromonas gingivalis", "Staphylococcus aureus"], answer: 2 },
//   { id: 5, question: "A patient with less than 30% of sites affected by periodontitis is classified as:", options: ["Localized periodontitis", "Generalized periodontitis", "Stage III periodontitis", "Stage IV periodontitis"], answer: 0 },
//   { id: 6, question: "Radiographs are most useful in periodontal diagnosis to assess:", options: ["Soft tissue health", "Bone loss", "Plaque accumulation", "Tooth decay"], answer: 1 },
//   { id: 7, question: "Which of the following is a gram-negative, anaerobic pathogen involved in periodontal disease?", options: ["Actinomyces israelii", "Prevotella intermedia", "Treponema pallidum", "Candida albicans"], answer: 1 },
//   { id: 8, question: "Which of the following is an early sign of gingival inflammation?", options: ["Gingival recession", "Bone loss", "Bleeding on probing", "Tooth mobility"], answer: 2 },
//   { id: 9, question: "What is the primary factor for distinguishing between gingivitis and periodontitis in the 2018 AAP classification?", options: ["Gingival color", "Probing depth", "Presence of bone loss", "Bleeding on probing"], answer: 2 },
//   { id: 10, question: "Which of the following cells are responsible for collagen production in the periodontal ligament?", options: ["Osteoclasts", "Fibroblasts", "Osteoblasts", "Macrophages"], answer: 1 },
//   { id: 11, question: "The most superficial part of the gingiva is called the:", options: ["Attached gingiva", "Free gingiva", "Junctional epithelium", "Sulcular epithelium"], answer: 1 },
//   { id: 12, question: "According to the AAP 2018 classification, Stage II periodontitis is characterized by:", options: ["No bone loss", "Interproximal bone loss up to the coronal third of the root", "Interproximal bone loss extending to the apical third of the root", "Generalized tooth mobility"], answer: 1 },
//   { id: 13, question: "The primary etiologic factor in periodontal disease is:", options: ["Smoking", "Plaque biofilm", "Systemic diseases", "Genetic factors"], answer: 1 },
//   { id: 14, question: "Which of the following instruments is used to measure periodontal pocket depth?", options: ["Explorer", "Periodontal probe", "Dental mirror", "Scaler"], answer: 1 },
//   { id: 15, question: "Which of the following is not a virulence factor of periodontal pathogens?", options: ["Lipopolysaccharides (LPS)", "Collagenase", "Urease", "Hyaluronidase"], answer: 2 },
//   { id: 16, question: "The primary blood supply to the periodontal ligament comes from:", options: ["Lingual artery", "Facial artery", "Inferior alveolar artery", "Maxillary artery"], answer: 2 },
//   { id: 17, question: "Which of the following describes Stage IV periodontitis according to the AAP 2018 classification?", options: ["Slight bone loss, probing depths up to 5mm", "Severe bone loss, complex rehabilitation needs", "Mild bone loss with probing depths up to 4mm", "No clinical attachment loss"], answer: 1 },
//   { id: 18, question: "A probing depth greater than 5mm typically indicates:", options: ["Mild periodontitis", "Gingivitis", "Severe periodontitis", "Moderate periodontitis"], answer: 2 },
//   { id: 19, question: "Plaque-induced gingivitis is most commonly caused by:", options: ["Aerobic bacteria", "Anaerobic bacteria", "Viral infection", "Fungal infection"], answer: 1 },
//   { id: 20, question: "Which of the following is not part of the periodontium?", options: ["Gingiva", "Periodontal ligament", "Dentin", "Cementum"], answer: 2 }
// ];
// const questions = [
//   { id: 1, question: "Which drug class is commonly used as first-line treatment for hypertension?", options: ["Beta-blockers", "ACE inhibitors", "Calcium channel blockers", "Diuretics"], answer: 1 },
//   { id: 2, question: "Which enzyme is inhibited by statins to lower cholesterol levels?", options: ["Cyclooxygenase", "HMG-CoA reductase", "Angiotensin-converting enzyme", "Acetylcholinesterase"], answer: 1 },
//   { id: 3, question: "The therapeutic index of a drug is defined as the ratio between:", options: ["Toxic dose and therapeutic dose", "Effective dose and lethal dose", "Toxic dose and lethal dose", "Therapeutic dose and side effects"], answer: 0 },
//   { id: 4, question: "Which drug is classified as a non-selective beta-blocker?", options: ["Metoprolol", "Propranolol", "Atenolol", "Carvedilol"], answer: 1 },
//   { id: 5, question: "Which of the following is an example of a loop diuretic?", options: ["Furosemide", "Hydrochlorothiazide", "Spironolactone", "Amiloride"], answer: 0 },
//   { id: 6, question: "Which type of drug is used to prevent nausea and vomiting in chemotherapy patients?", options: ["Antihistamines", "Proton pump inhibitors", "Serotonin antagonists", "Beta-agonists"], answer: 2 },
//   { id: 7, question: "Which of the following antibiotics inhibits bacterial cell wall synthesis?", options: ["Tetracycline", "Ciprofloxacin", "Amoxicillin", "Azithromycin"], answer: 2 },
//   { id: 8, question: "Which of the following is a side effect commonly associated with opioid analgesics?", options: ["Hypertension", "Diarrhea", "Constipation", "Increased urination"], answer: 2 },
//   { id: 9, question: "Which neurotransmitter is primarily targeted by selective serotonin reuptake inhibitors (SSRIs)?", options: ["Dopamine", "Norepinephrine", "Serotonin", "Acetylcholine"], answer: 2 },
//   { id: 10, question: "Which of the following drugs is a proton pump inhibitor?", options: ["Ranitidine", "Omeprazole", "Metoclopramide", "Famotidine"], answer: 1 },
//   { id: 11, question: "What is the mechanism of action of benzodiazepines?", options: ["Inhibition of serotonin reuptake", "Activation of GABA receptors", "Blockade of beta-adrenergic receptors", "Inhibition of dopamine receptors"], answer: 1 },
//   { id: 12, question: "Which of the following drugs is used to treat Type 2 Diabetes by increasing insulin sensitivity?", options: ["Metformin", "Insulin", "Glipizide", "Acarbose"], answer: 0 },
//   { id: 13, question: "Which of the following is a common side effect of non-steroidal anti-inflammatory drugs (NSAIDs)?", options: ["Gastrointestinal bleeding", "Increased blood sugar", "Dry mouth", "Drowsiness"], answer: 0 },
//   { id: 14, question: "Which type of drug would be used to treat an anaphylactic reaction?", options: ["Antihistamine", "Corticosteroid", "Epinephrine", "Beta-blocker"], answer: 2 },
//   { id: 15, question: "Which of the following drugs is considered an angiotensin II receptor blocker (ARB)?", options: ["Lisinopril", "Losartan", "Amlodipine", "Atenolol"], answer: 1 },
//   { id: 16, question: "Which of the following is an anticoagulant that works by inhibiting vitamin K-dependent clotting factors?", options: ["Aspirin", "Warfarin", "Heparin", "Clopidogrel"], answer: 1 },
//   { id: 17, question: "Which of the following is a selective beta-1 adrenergic antagonist used to treat hypertension?", options: ["Propranolol", "Metoprolol", "Atenolol", "Bisoprolol"], answer: 2 },
//   { id: 18, question: "Which type of receptor is targeted by anticholinergic drugs to reduce bronchoconstriction in asthma?", options: ["Beta-2 adrenergic receptors", "Muscarinic receptors", "Alpha-1 adrenergic receptors", "Histamine receptors"], answer: 1 },
//   { id: 19, question: "Which of the following antibiotics is a macrolide?", options: ["Amoxicillin", "Cephalexin", "Azithromycin", "Ciprofloxacin"], answer: 2 },
//   { id: 20, question: "Which of the following drugs is classified as a corticosteroid?", options: ["Prednisone", "Ibuprofen", "Acetaminophen", "Diclofenac"], answer: 0 },
//   { id: 21, question: "Which of the following antibiotics is a broad-spectrum carbapenem used to treat multidrug-resistant infections?", options: ["Imipenem", "Ceftriaxone", "Vancomycin", "Ciprofloxacin"], answer: 0 },
//   { id: 22, question: "Which drug is a potent inhibitor of cytochrome P450 enzymes and can cause serious drug interactions?", options: ["Fluconazole", "Rifampin", "Omeprazole", "Clopidogrel"], answer: 0 },
//   { id: 23, question: "Which drug is classified as a direct oral anticoagulant (DOAC) and inhibits factor Xa?", options: ["Warfarin", "Rivaroxaban", "Heparin", "Aspirin"], answer: 1 },
//   { id: 24, question: "Which of the following drugs is used as an anti-arrhythmic agent and works by blocking potassium channels?", options: ["Lidocaine", "Amiodarone", "Adenosine", "Digoxin"], answer: 1 },
//   { id: 25, question: "Which of the following drugs is known to cause a potentially life-threatening serotonin syndrome when combined with SSRIs?", options: ["Linezolid", "Metronidazole", "Cefazolin", "Azithromycin"], answer: 0 },
//   { id: 26, question: "Which of the following drugs is a reversible non-selective COX inhibitor commonly used for its anti-inflammatory effects?", options: ["Acetaminophen", "Aspirin", "Ibuprofen", "Celecoxib"], answer: 2 },
//   { id: 27, question: "Which of the following mechanisms explains the prolonged duration of action of benzodiazepines such as diazepam?", options: ["High lipophilicity", "Inhibition of acetylcholinesterase", "Slow renal excretion", "Slow hepatic metabolism"], answer: 0 },
//   { id: 28, question: "Which of the following statements is true regarding zero-order kinetics?", options: ["The rate of elimination is constant and independent of drug concentration.", "The rate of elimination increases proportionally with drug concentration.", "The drug is metabolized by saturable enzymes.", "The drug is eliminated primarily via renal clearance."], answer: 0 },
//   { id: 29, question: "Which of the following drugs can cause hyperkalemia due to inhibition of aldosterone receptors?", options: ["Hydrochlorothiazide", "Furosemide", "Spironolactone", "Mannitol"], answer: 2 },
//   { id: 30, question: "Which of the following anti-cancer drugs is a monoclonal antibody that targets HER2 receptors?", options: ["Trastuzumab", "Bevacizumab", "Imatinib", "Rituximab"], answer: 0 },
//   { id: 31, question: "Which pharmacokinetic property is affected in patients with severe liver disease, leading to increased bioavailability of drugs?", options: ["Absorption", "Distribution", "First-pass metabolism", "Elimination"], answer: 2 },
//   { id: 32, question: "Which of the following drugs is used as a rescue medication to reverse opioid overdose?", options: ["Naloxone", "Buprenorphine", "Methadone", "Flumazenil"], answer: 0 },
//   { id: 33, question: "Which drug is used to treat hyperthyroidism by inhibiting thyroid peroxidase and blocking iodine organification?", options: ["Levothyroxine", "Methimazole", "Propylthiouracil", "Iodine-131"], answer: 1 },
//   { id: 34, question: "Which of the following drugs is used in the treatment of Parkinson's disease and works by inhibiting catechol-O-methyltransferase (COMT)?", options: ["Levodopa", "Carbidopa", "Entacapone", "Pramipexole"], answer: 2 },
//   { id: 35, question: "Which of the following drugs is used as a selective estrogen receptor modulator (SERM) to treat breast cancer?", options: ["Tamoxifen", "Anastrozole", "Flutamide", "Leuprolide"], answer: 0 },
//   { id: 36, question: "Which type of receptor is blocked by antipsychotic drugs such as haloperidol?", options: ["Dopamine D2 receptors", "Serotonin 5-HT receptors", "Histamine H1 receptors", "Muscarinic receptors"], answer: 0 },
//   { id: 37, question: "Which drug is commonly used to treat angina and works by increasing nitric oxide levels in vascular smooth muscle?", options: ["Nitroglycerin", "Isosorbide mononitrate", "Verapamil", "Diltiazem"], answer: 0 },
//   { id: 38, question: "Which drug is an irreversible acetylcholinesterase inhibitor and can be used as a nerve agent in chemical warfare?", options: ["Sarin", "Donepezil", "Neostigmine", "Atropine"], answer: 0 },
//   { id: 39, question: "Which drug is used to prevent transplant rejection by inhibiting calcineurin in T-lymphocytes?", options: ["Tacrolimus", "Cyclophosphamide", "Methotrexate", "Azathioprine"], answer: 0 },
//   { id: 40, question: "Which drug is a tyrosine kinase inhibitor used to treat chronic myelogenous leukemia (CML)?", options: ["Trastuzumab", "Imatinib", "Erlotinib", "Sunitinib"], answer: 1 }
// ];
// const questions = [
//   { id: 1, question: "Which of the following factors can influence drug absorption?", options: ["Blood flow to the absorption site", "Drug formulation (e.g., tablet, capsule)", "Surface area for absorption", "All of the above"], answer: 3 },
//   { id: 2, question: "Which of the following best describes the term 'bioavailability'?", options: ["The fraction of the administered dose of a drug that reaches the systemic circulation", "The rate at which a drug is eliminated from the body", "The amount of drug bound to plasma proteins", "The volume of distribution of a drug in the body"], answer: 0 },
//   { id: 3, question: "What is the primary site of drug metabolism in the body?", options: ["Kidneys", "Liver", "Lungs", "Intestines"], answer: 1 },
//   { id: 4, question: "Which of the following is an example of first-pass metabolism?", options: ["Drug elimination by the kidneys", "Drug breakdown in the liver before it reaches systemic circulation", "Drug excretion in bile", "Drug absorption in the small intestine"], answer: 1 },
//   { id: 5, question: "The therapeutic index (TI) of a drug is defined as:", options: ["The ratio between the toxic dose and the effective dose", "The half-life of a drug", "The amount of drug required to produce a specific effect", "The volume of distribution of a drug"], answer: 0 },
//   { id: 6, question: "Which of the following drug administration routes bypasses the first-pass effect?", options: ["Oral", "Sublingual", "Rectal", "Intramuscular"], answer: 1 },
//   { id: 7, question: "What does 'half-life' (t1/2) of a drug refer to?", options: ["The time it takes for half of the drug to be absorbed", "The time it takes for half of the drug to be metabolized", "The time it takes for the plasma concentration of the drug to be reduced by half", "The time required for the drug to reach steady-state concentration"], answer: 2 },
//   { id: 8, question: "Which type of receptor is involved in the rapid transmission of signals across synapses?", options: ["G-protein coupled receptors (GPCR)", "Ligand-gated ion channels", "Nuclear receptors", "Enzyme-linked receptors"], answer: 1 },
//   { id: 9, question: "Which of the following refers to a drug's ability to produce the maximum effect once it has bound to its receptor?", options: ["Potency", "Affinity", "Efficacy", "Selectivity"], answer: 2 },
//   { id: 10, question: "A drug with a high first-pass effect will:", options: ["Have low oral bioavailability", "Be rapidly eliminated by the kidneys", "Have a high plasma protein binding rate", "Have a long duration of action"], answer: 0 },
//   { id: 11, question: "In pharmacokinetics, what does 'clearance' refer to?", options: ["The rate at which a drug is absorbed", "The volume of plasma from which a drug is completely removed per unit time", "The amount of drug excreted by the kidneys", "The fraction of drug eliminated unchanged in the urine"], answer: 1 },
//   { id: 12, question: "Which of the following describes a drug agonist?", options: ["A drug that activates a receptor to produce a biological response", "A drug that binds to a receptor but does not activate it", "A drug that inhibits enzyme activity", "A drug that blocks a receptor"], answer: 0 },
//   { id: 13, question: "Which of the following is a Phase I reaction in drug metabolism?", options: ["Conjugation", "Hydrolysis", "Glucuronidation", "Sulfation"], answer: 1 },
//   { id: 14, question: "Which of the following terms refers to the movement of a drug from the site of administration to the bloodstream?", options: ["Distribution", "Absorption", "Metabolism", "Elimination"], answer: 1 },
//   { id: 15, question: "Which of the following types of drug interactions occurs when one drug reduces the effect of another?", options: ["Additive interaction", "Synergistic interaction", "Antagonistic interaction", "Potentiation interaction"], answer: 2 }
// ];

const questions = [
  // Adrenergic Agonists and Antagonists
  { id: 1, question: "Which of the following is a selective beta-1 adrenergic agonist?", options: ["Albuterol", "Dobutamine", "Phenylephrine", "Propranolol"], answer: 1 },
  { id: 2, question: "Which drug is a non-selective beta-blocker?", options: ["Atenolol", "Metoprolol", "Propranolol", "Esmolol"], answer: 2 },
  { id: 3, question: "Which adrenergic agonist is commonly used for treating asthma?", options: ["Propranolol", "Epinephrine", "Albuterol", "Atenolol"], answer: 2 },
  { id: 4, question: "Which of the following is an alpha-1 selective agonist?", options: ["Phenylephrine", "Albuterol", "Propranolol", "Metoprolol"], answer: 0 },
  { id: 5, question: "Which drug acts as an alpha-2 adrenergic agonist to reduce blood pressure?", options: ["Clonidine", "Atenolol", "Albuterol", "Prazosin"], answer: 0 },
  { id: 6, question: "What is the main therapeutic use of beta-2 adrenergic agonists?", options: ["Reducing blood pressure", "Bronchodilation", "Increasing heart rate", "Vasoconstriction"], answer: 1 },
  { id: 7, question: "Which drug is an alpha-1 antagonist used for treating hypertension?", options: ["Prazosin", "Epinephrine", "Phenylephrine", "Dobutamine"], answer: 0 },

  // Cholinergic Agonists and Antagonists
  { id: 8, question: "Which of the following is a direct-acting cholinergic agonist?", options: ["Atropine", "Bethanechol", "Neostigmine", "Scopolamine"], answer: 1 },
  { id: 9, question: "Which drug is a cholinergic antagonist used to treat bradycardia?", options: ["Bethanechol", "Atropine", "Pilocarpine", "Neostigmine"], answer: 1 },
  { id: 10, question: "Which of the following is a reversible cholinesterase inhibitor?", options: ["Atropine", "Bethanechol", "Neostigmine", "Scopolamine"], answer: 2 },
  { id: 11, question: "What is the primary effect of cholinergic antagonists on the body?", options: ["Increase heart rate", "Decrease heart rate", "Increase salivation", "Bronchoconstriction"], answer: 0 },
  { id: 12, question: "Which drug is used to treat glaucoma by increasing aqueous humor outflow?", options: ["Pilocarpine", "Atropine", "Scopolamine", "Ipratropium"], answer: 0 },
  { id: 13, question: "What is the main action of muscarinic cholinergic agonists?", options: ["Increase sympathetic activity", "Stimulate smooth muscle contraction", "Reduce heart rate", "Cause bronchodilation"], answer: 1 },
  { id: 14, question: "Which of the following is a muscarinic antagonist used in pre-anesthesia to reduce secretions?", options: ["Scopolamine", "Bethanechol", "Pilocarpine", "Neostigmine"], answer: 0 },

  // Hypertension
  { id: 15, question: "Which drug class is the first-line treatment for hypertension?", options: ["Beta-blockers", "ACE inhibitors", "Diuretics", "Calcium channel blockers"], answer: 2 },
  { id: 16, question: "Which of the following is an ACE inhibitor used to treat hypertension?", options: ["Atenolol", "Lisinopril", "Furosemide", "Verapamil"], answer: 1 },
  { id: 17, question: "What is the primary effect of angiotensin II receptor blockers (ARBs) in managing hypertension?", options: ["Vasoconstriction", "Vasodilation", "Increase heart rate", "Increase blood volume"], answer: 1 },
  { id: 18, question: "Which drug class works by blocking calcium entry into vascular smooth muscle?", options: ["Beta-blockers", "Calcium channel blockers", "Diuretics", "ACE inhibitors"], answer: 1 },
  { id: 19, question: "Which diuretic is commonly used in the treatment of hypertension?", options: ["Furosemide", "Spironolactone", "Hydrochlorothiazide", "Amiloride"], answer: 2 },
  { id: 20, question: "Which of the following is a side effect of ACE inhibitors?", options: ["Dry cough", "Bradycardia", "Hyperkalemia", "Hypoglycemia"], answer: 0 },
  { id: 21, question: "What is the mechanism of action of beta-blockers in hypertension treatment?", options: ["Block beta adrenergic receptors", "Block calcium channels", "Inhibit angiotensin II", "Promote diuresis"], answer: 0 },

  // Hemostasis
  { id: 22, question: "Which of the following is involved in the primary phase of hemostasis?", options: ["Platelet adhesion", "Fibrin formation", "Clot retraction", "Clot lysis"], answer: 0 },
  { id: 23, question: "Which factor is primarily involved in the initiation of the extrinsic coagulation pathway?", options: ["Factor VIII", "Factor VII", "Factor XII", "Factor V"], answer: 1 },
  { id: 24, question: "What is the role of fibrinogen in hemostasis?", options: ["Stimulates platelet adhesion", "Forms fibrin clot", "Inhibits thrombin", "Activates plasmin"], answer: 1 },
  { id: 25, question: "Which of the following is a vitamin K-dependent clotting factor?", options: ["Factor II", "Factor XI", "Factor XIII", "Factor IV"], answer: 0 },
  { id: 26, question: "Which component of hemostasis is targeted by warfarin?", options: ["Platelet aggregation", "Vitamin K", "Fibrinogen", "Thrombin"], answer: 1 },
  { id: 27, question: "Which phase of hemostasis involves platelet plug formation?", options: ["Primary", "Secondary", "Tertiary", "Final"], answer: 0 },
  { id: 28, question: "Which clotting factor deficiency causes hemophilia A?", options: ["Factor IX", "Factor VIII", "Factor VII", "Factor V"], answer: 1 },

  // Anti-platelets
  { id: 29, question: "Which of the following is an antiplatelet drug?", options: ["Warfarin", "Aspirin", "Heparin", "Vitamin K"], answer: 1 },
  { id: 30, question: "How does aspirin act as an antiplatelet agent?", options: ["Inhibits thromboxane A2", "Inhibits fibrin formation", "Blocks ADP receptors", "Enhances platelet aggregation"], answer: 0 },
  { id: 31, question: "Which drug is a P2Y12 receptor antagonist?", options: ["Clopidogrel", "Aspirin", "Warfarin", "Heparin"], answer: 0 },
  { id: 32, question: "Which of the following is used in the prevention of thrombotic events in patients with cardiovascular disease?", options: ["Heparin", "Aspirin", "Alteplase", "Warfarin"], answer: 1 },
  { id: 33, question: "Which of the following is used for dual antiplatelet therapy (DAPT)?", options: ["Aspirin + Clopidogrel", "Heparin + Warfarin", "Alteplase + Aspirin", "Furosemide + Spironolactone"], answer: 0 },
  { id: 34, question: "What is the primary adverse effect associated with aspirin use?", options: ["GI bleeding", "Hyperkalemia", "Arrhythmia", "Hypertension"], answer: 0 },
  { id: 35, question: "Which antiplatelet drug inhibits the glycoprotein IIb/IIIa receptor?", options: ["Abciximab", "Aspirin", "Warfarin", "Clopidogrel"], answer: 0 },

  // Anticoagulants
  { id: 36, question: "Which of the following is a commonly used anticoagulant?", options: ["Aspirin", "Warfarin", "Clopidogrel", "Propranolol"], answer: 1 },
  { id: 37, question: "What is the mechanism of action of heparin?", options: ["Inhibits thrombin", "Blocks ADP receptors", "Inhibits cyclooxygenase", "Enhances platelet aggregation"], answer: 0 },
  { id: 38, question: "Which anticoagulant requires monitoring with INR?", options: ["Warfarin", "Heparin", "Clopidogrel", "Aspirin"], answer: 0 },
  { id: 39, question: "Which factor does warfarin inhibit?", options: ["Factor II", "Factor V", "Factor IX", "Factor X"], answer: 0 },
  { id: 40, question: "Which antidote is used to reverse warfarin's effect?", options: ["Vitamin K", "Protamine sulfate", "Plasminogen", "Alteplase"], answer: 0 },
  { id: 41, question: "Which of the following is a direct oral anticoagulant (DOAC)?", options: ["Dabigatran", "Warfarin", "Aspirin", "Heparin"], answer: 0 },
  { id: 42, question: "Which drug is used for the rapid reversal of heparin?", options: ["Vitamin K", "Protamine sulfate", "Plasminogen", "Aspirin"], answer: 1 },

  // Coronary Artery Disease (CAD)
  { id: 43, question: "Which of the following is a common symptom of coronary artery disease?", options: ["Dyspnea", "Angina", "Palpitations", "Syncope"], answer: 1 },
  { id: 44, question: "Which drug is typically used for acute relief of angina in CAD?", options: ["Aspirin", "Nitroglycerin", "Warfarin", "Heparin"], answer: 1 },
  { id: 45, question: "Which of the following is a common risk factor for coronary artery disease?", options: ["Hypertension", "Asthma", "Rheumatoid arthritis", "Hyperthyroidism"], answer: 0 },
  { id: 46, question: "Which class of drugs is most effective in lowering LDL cholesterol in CAD?", options: ["Statins", "Beta-blockers", "ACE inhibitors", "Calcium channel blockers"], answer: 0 },
  { id: 47, question: "What is the role of aspirin in the management of coronary artery disease?", options: ["Antiplatelet", "Anticoagulant", "Thrombolytic", "Antihypertensive"], answer: 0 },
  { id: 48, question: "Which drug is commonly prescribed after percutaneous coronary intervention (PCI) to prevent stent thrombosis?", options: ["Aspirin", "Clopidogrel", "Warfarin", "Heparin"], answer: 1 },
  { id: 49, question: "Which of the following diagnostic tools is commonly used for detecting coronary artery disease?", options: ["ECG", "Chest X-ray", "Ultrasound", "MRI"], answer: 0 },

  // Heart Failure
  { id: 50, question: "Which of the following is a hallmark symptom of heart failure?", options: ["Orthopnea", "Tachycardia", "Cough", "Diarrhea"], answer: 0 },
  { id: 51, question: "Which drug class is used to reduce fluid overload in heart failure?", options: ["Beta-blockers", "Diuretics", "ACE inhibitors", "Calcium channel blockers"], answer: 1 },
  { id: 52, question: "Which drug class improves survival in patients with heart failure with reduced ejection fraction (HFrEF)?", options: ["Beta-blockers", "Calcium channel blockers", "Diuretics", "Nitrates"], answer: 0 },
  { id: 53, question: "Which of the following is commonly used as an inotropic agent in acute heart failure?", options: ["Digoxin", "Lisinopril", "Spironolactone", "Amlodipine"], answer: 0 },
  { id: 54, question: "Which peptide hormone is increased in heart failure and is used as a diagnostic marker?", options: ["BNP (B-type natriuretic peptide)", "Insulin", "Thyroxine", "Epinephrine"], answer: 0 },
  { id: 55, question: "Which drug reduces preload in heart failure patients?", options: ["Nitroglycerin", "Furosemide", "Lisinopril", "Atenolol"], answer: 1 },
  { id: 56, question: "Which of the following medications is avoided in acute decompensated heart failure due to negative inotropic effects?", options: ["Beta-blockers", "ACE inhibitors", "Diuretics", "Nitrates"], answer: 0 },

  // Arrhythmia
  { id: 57, question: "Which drug is commonly used for the acute management of ventricular arrhythmias?", options: ["Lidocaine", "Amiodarone", "Adenosine", "Warfarin"], answer: 1 },
  { id: 58, question: "Which class of drugs is typically used to treat atrial fibrillation?", options: ["Beta-blockers", "Calcium channel blockers", "ACE inhibitors", "Statins"], answer: 0 },
  { id: 59, question: "Which drug is used to terminate paroxysmal supraventricular tachycardia (PSVT)?", options: ["Adenosine", "Amiodarone", "Lidocaine", "Digoxin"], answer: 0 },
  { id: 60, question: "Which class of drugs blocks sodium channels and is used for ventricular arrhythmias?", options: ["Class I antiarrhythmics", "Class II antiarrhythmics", "Class III antiarrhythmics", "Class IV antiarrhythmics"], answer: 0 },
  { id: 61, question: "Which of the following is a side effect of amiodarone?", options: ["Pulmonary fibrosis", "Tachycardia", "Hypertension", "Bradycardia"], answer: 0 },
  { id: 62, question: "Which antiarrhythmic is commonly used for long-term management of atrial fibrillation?", options: ["Amiodarone", "Adenosine", "Lidocaine", "Digoxin"], answer: 0 },
  { id: 63, question: "Which drug prolongs the QT interval and can be used in arrhythmia management?", options: ["Sotalol", "Propranolol", "Furosemide", "Atropine"], answer: 0 }
];



function App() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const submitAnswers = () => {
    setSubmitted(true);
  };

  // Timer logic, set the duration
  const time = new Date();
  time.setSeconds(time.getSeconds() + 650 * 60); // 23 minutes timer
  const { seconds, minutes, hours, isRunning } = useTimer({
    expiryTimestamp: time,
    onExpire: submitAnswers
  });

  const handleAnswerChange = (questionId, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionId - 1] = optionIndex;
    setAnswers(newAnswers);
  };

  return (
    <div className="App">
      <h1>AFK Test Platform</h1>
      <div>
        <h3>Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h3>
      </div>

      {!submitted ? (
        <div>
          {questions.map((q) => (
            <Question
              key={q.id}
              question={q}
              selectedAnswer={answers[q.id - 1]}
              onAnswerChange={handleAnswerChange}
            />
          ))}
          <button onClick={submitAnswers}>Submit</button>
        </div>
      ) : (
        <Result questions={questions} answers={answers} />
      )}
    </div>
  );
}

export default App;
