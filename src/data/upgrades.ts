/* PENDING TASKS
  - Add linkedin Premium
  - Set up real prices and effects of upgrades
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
          effects: {
            cps: 5,
            interviewChance: 0.2,
          },
        },
        contacts: {
          id: 'up111',
          type: 'multiple',
          effects: {
            cps: 5,
            interviewChance: 0.2,
          },
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
      basePrice: 0,
      type: 'unlock',
      subupgrades: {
        workPhotos: {
          id: 'up210',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
        personalProject: {
          id: 'up211',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
        referral: {
          id: 'up212',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
      }
    },
    discordSlack: {
      id: 'up300',
      basePrice: 0,
      type: 'unlock',
      subupgrades: {
        joinCommunity: {
          id: 'up310',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
        participate: {
          id: 'up311',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
        networking: {
          id: 'up312',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
      }
    },
    glassdoor: {
      id: 'up400',
      basePrice: 0,
      type: 'unlock',
      subupgrades: {
        profileGlassdoor: {
          id: 'up410',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
        jobAlertGlassdoor: {
          id: 'up411',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
        researchCompanies: {
          id: 'up412',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
        monitorSalaries: {
          id: 'up413',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        }
      }
    },
    expertise: {
      id: 'up500',
      basePrice: 0,
      type: 'unlock',
      subupgrades:{
        personalBrand: {
          id: 'up510',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
        attendConferences: {
          id: 'up511',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
        talk:{
          id: 'up512',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
        podcast: {
          id: 'up513',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
        book: {
          id: 'up514',
          basePrice: 0,
          priceIncrement: 0,
          type: 'multiple',
          effects: {}
        },
      }
    }
  }
};