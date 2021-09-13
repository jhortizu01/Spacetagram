class SpaceObject {
  constructor(singleSpaceObject) {
    this.copyright = singleSpaceObject.copyright,
    this.date = singleSpaceObject.date,
    this.explanation = singleSpaceObject.explanation,
    this.hdurl = singleSpaceObject.hdurl,
    this.media_type = singleSpaceObject.media_type,
    this.service_version = singleSpaceObject.service_version,
    this.title = singleSpaceObject.title,
    this.url = singleSpaceObject.url
  }
}

export default SpaceObject;