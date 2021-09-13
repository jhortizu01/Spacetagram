import { expect } from 'chai';
import SpaceRepository from '../src/classes/spaceRepository.js'

describe('SpaceRepository', () => {

  it('should be a function', () => {
    expect(SpaceRepository).to.be.a('function');
  });

  it('should hold onto all of the space data', () => {
    let spaceRepo = new SpaceRepository ([
      {
        copywright: "Janika Hortizuela",
        date: "1990-01-21",
        explanation: "Explanation of how much Janika is amazing",
        hdurl: "https://someurl.com",
        media_type: "image",
        service_version: "v1",
        title: "Janika being the greatest",
        url: "https://someurl.com"
      },
      {
        copywright: "Ava Hortizuela",
        date: "2019-07-30",
        explanation: "Explanation of how much Ava is amazing",
        hdurl: "https://someurl.com",
        media_type: "image",
        service_version: "v1",
        title: "Ava being the greatest",
        url: "https://someurl.com"
      },
      {
        copywright: "Lydia Hortizuela",
        date: "2021-01-10",
        explanation: "Explanation of how much Lydia is amazing",
        hdurl: "https://someurl.com",
        media_type: "image",
        service_version: "v1",
        title: "Lydia being the greatest",
        url: "https://someurl.com"
      },
      {
        copywright: "Ellianna Hutchens",
        date: "2010-01-03",
        explanation: "Explanation of how much Ellianna is amazing",
        hdurl: "https://someurl.com",
        media_type: "image",
        service_version: "v1",
        title: "Ellianna being the greatest",
        url: "https://someurl.com"
      }
    ])
    expect(spaceRepo.spaceRepository).to.deep.equal(spaceRepo.spaceRepository)
  })

});
