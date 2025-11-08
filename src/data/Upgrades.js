/* PENDING TASKS
  - Add linkedin Premium
  - Set up real prices and effects of upgrades
 */

/* STRUCTURE
  - upgrade: {
      id: string,                    used for lang text matching
      basePrice: number,
      priceIncrement: number,        increases price by 1 + num
      type: enum(unlock, mumtiple, temporal),
      effects: {
        cps: number,                 amt added to passive clicks / sec
        multiplier: number,          amt added to click multiplier
        interviewChance: number,     amt added to iChance
        offerChance: number,         amt asded to oChance
      },
      subupgrades: { upgrade[] }     upgrades unlocked by this
    }
 */

export const upgrades = {
  active: {
   resume: {
     id: 'ua000',
     basePrice: 100,
     priceIncrement: 0.25,
     type: 'multiple',
     effects: {
       multiplier: 1,
       offerChance: 0.01,
     },
   },
    letter: {
     id: 'ua001',
     basePrice: 750,
     priceIncrement: 0.6,
     type: 'multiple',
     effects: {
       multiplier: 5,
       offerChance: 0.02,
     },
    },
    resumePhotos: {
      id: 'ua002',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
       multiplier: 1,
       offerChance: 0.01,
     },
    },
    organize: {
      id: 'ua003',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
       multiplier: 1,
       offerChance: 0.01,
     },
    },
    onlineCourse: {
      id: 'ua004',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
       multiplier: 1,
       offerChance: 0.01,
     },
    },
    volunteer: {
      id: 'ua005',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
       multiplier: 1,
       offerChance: 0.01,
     },
    },
    interviewTraining: {
      id: 'ua006',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
       multiplier: 1,
       offerChance: 0.01,
     },
    },
    certifyLanguage: {
      id: 'ua007',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 1,
        offerChance: 0.01,
      },
    },
    certifySoftSkills: {
      id: 'ua008',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
       multiplier: 1,
       offerChance: 0.01,
     },
    },
  },
  passive: {
    internet: {
      id: 'up000',
      basePrice: 5,
      type: 'unlock',
      effects: {
        cps: 0,
        interviewChance: 0.1,
      },
      subupgrades: {
        newsletters: {
          id: 'up010',
          basePrice: 15,
          priceIncrement: 0.15,
          type: 'multiple',
          effects: {
            cps: 0.1,
            interviewChance: 0.01,
          }
        },
        registrations: {
          id: 'up011',
          basePrice: 100,
          priceIncrement: 0.65,
          type: 'multiple',
          effects: {
            cps: 1,
            intervirewChance: 0.03
          }
        }
      }
    },
    linkedin: {
      id: 'up100',
      basePrice: 5000,
      type: 'unlock',
      effects: {
        cps: 5,
        interviewChance: 0.2,
      },
      subupgrades: {
        profileLinkedin: {
          id: 'up110',
          type: 'multiple',
        },
        contacts: {
          id: 'up111',
          type: 'multiple',
        },
        jobAlertLinkedin: {
          id: 'up112',
          basePrice: 100,
          priceIncrement: 0.1,
          type: 'multiple',
          effects: {
            cps: 1,
            interviewChance: 0.02,
          }
        },
        post: {
          id: 'up113',
          type: 'multiple',
        }
      }
    },
    site: {
      id: 'up200',
      type: 'unlock',
      subupgrades: {
        workPhotos: {},
        personalProject: {},
        referral: {},
      }
    },
    glassdoor: {
      id: 'up300',
      type: 'unlock',
      subupgrades: {
        profileGlassdoor: {},
        jobAlertGlassdoor: {},
        researchCompanies: {},
        researchSalaries: {}
      }
    }
  }
};