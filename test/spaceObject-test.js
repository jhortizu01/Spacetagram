import { expect } from 'chai';
import SpaceObject from '../src/classes/spaceObject.js';

describe('SpaceObject', () => {

  it('should be a function', () => {
    expect(SpaceObject).to.be.a('function');
  })

  it('should hold onto space object data', () => {
     let newSpaceObject = new SpaceObject({
      copyright: "Janika Hortizuela",
      date: "1990-01-21",
      explanation: "Explanation of how much Janika is amazing",
      hdurl: "https://someurl.com",
      media_type: "image",
      service_version: "v1",
      title: "Janika being the greatest",
      url: "https://someurl.com"
    })

    expect(newSpaceObject.copyright).to.equal("Janika Hortizuela"),
    expect(newSpaceObject.date).to.equal("1990-01-21"),
    expect(newSpaceObject.explanation).to.equal("Explanation of how much Janika is amazing"),
    expect(newSpaceObject.hdurl).to.equal("https://someurl.com"),
    expect(newSpaceObject.media_type).to.equal( "image"),
    expect(newSpaceObject.service_version).to.equal("v1"),
    expect(newSpaceObject.url).to.equal("https://someurl.com")
  })
})