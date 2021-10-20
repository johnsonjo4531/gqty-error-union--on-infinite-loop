/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Float: true,
  ID: true,
  Int: true,
  String: true,
};
export const generatedSchema = {
  Film: {
    __typename: { __type: "String!" },
    title: { __type: "String" },
    episodeID: { __type: "Int" },
    openingCrawl: { __type: "String" },
    director: { __type: "String" },
    producers: { __type: "[String]" },
    releaseDate: { __type: "String" },
    speciesConnection: {
      __type: "FilmSpeciesConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    starshipConnection: {
      __type: "FilmStarshipsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    vehicleConnection: {
      __type: "FilmVehiclesConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    characterConnection: {
      __type: "FilmCharactersConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    planetConnection: {
      __type: "FilmPlanetsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    created: { __type: "String" },
    edited: { __type: "String" },
    id: { __type: "ID!" },
  },
  FilmCharactersConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FilmCharactersEdge]" },
    totalCount: { __type: "Int" },
    characters: { __type: "[Person]" },
  },
  FilmCharactersEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Person" },
    cursor: { __type: "String!" },
  },
  FilmPlanetsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FilmPlanetsEdge]" },
    totalCount: { __type: "Int" },
    planets: { __type: "[Planet]" },
  },
  FilmPlanetsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Planet" },
    cursor: { __type: "String!" },
  },
  FilmSpeciesConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FilmSpeciesEdge]" },
    totalCount: { __type: "Int" },
    species: { __type: "[Species]" },
  },
  FilmSpeciesEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Species" },
    cursor: { __type: "String!" },
  },
  FilmStarshipsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FilmStarshipsEdge]" },
    totalCount: { __type: "Int" },
    starships: { __type: "[Starship]" },
  },
  FilmStarshipsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Starship" },
    cursor: { __type: "String!" },
  },
  FilmVehiclesConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FilmVehiclesEdge]" },
    totalCount: { __type: "Int" },
    vehicles: { __type: "[Vehicle]" },
  },
  FilmVehiclesEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Vehicle" },
    cursor: { __type: "String!" },
  },
  FilmsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FilmsEdge]" },
    totalCount: { __type: "Int" },
    films: { __type: "[Film]" },
  },
  FilmsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Film" },
    cursor: { __type: "String!" },
  },
  Node: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    $on: { __type: "$Node!" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
    endCursor: { __type: "String" },
  },
  PeopleConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PeopleEdge]" },
    totalCount: { __type: "Int" },
    people: { __type: "[Person]" },
  },
  PeopleEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Person" },
    cursor: { __type: "String!" },
  },
  Person: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    birthYear: { __type: "String" },
    eyeColor: { __type: "String" },
    gender: { __type: "String" },
    hairColor: { __type: "String" },
    height: { __type: "Int" },
    mass: { __type: "Float" },
    skinColor: { __type: "String" },
    homeworld: { __type: "Planet" },
    filmConnection: {
      __type: "PersonFilmsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    species: { __type: "Species" },
    starshipConnection: {
      __type: "PersonStarshipsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    vehicleConnection: {
      __type: "PersonVehiclesConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    created: { __type: "String" },
    edited: { __type: "String" },
    id: { __type: "ID!" },
  },
  PersonFilmsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PersonFilmsEdge]" },
    totalCount: { __type: "Int" },
    films: { __type: "[Film]" },
  },
  PersonFilmsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Film" },
    cursor: { __type: "String!" },
  },
  PersonStarshipsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PersonStarshipsEdge]" },
    totalCount: { __type: "Int" },
    starships: { __type: "[Starship]" },
  },
  PersonStarshipsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Starship" },
    cursor: { __type: "String!" },
  },
  PersonVehiclesConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PersonVehiclesEdge]" },
    totalCount: { __type: "Int" },
    vehicles: { __type: "[Vehicle]" },
  },
  PersonVehiclesEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Vehicle" },
    cursor: { __type: "String!" },
  },
  Planet: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    diameter: { __type: "Int" },
    rotationPeriod: { __type: "Int" },
    orbitalPeriod: { __type: "Int" },
    gravity: { __type: "String" },
    population: { __type: "Float" },
    climates: { __type: "[String]" },
    terrains: { __type: "[String]" },
    surfaceWater: { __type: "Float" },
    residentConnection: {
      __type: "PlanetResidentsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    filmConnection: {
      __type: "PlanetFilmsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    created: { __type: "String" },
    edited: { __type: "String" },
    id: { __type: "ID!" },
  },
  PlanetFilmsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PlanetFilmsEdge]" },
    totalCount: { __type: "Int" },
    films: { __type: "[Film]" },
  },
  PlanetFilmsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Film" },
    cursor: { __type: "String!" },
  },
  PlanetResidentsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PlanetResidentsEdge]" },
    totalCount: { __type: "Int" },
    residents: { __type: "[Person]" },
  },
  PlanetResidentsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Person" },
    cursor: { __type: "String!" },
  },
  PlanetsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PlanetsEdge]" },
    totalCount: { __type: "Int" },
    planets: { __type: "[Planet]" },
  },
  PlanetsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Planet" },
    cursor: { __type: "String!" },
  },
  Species: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    classification: { __type: "String" },
    designation: { __type: "String" },
    averageHeight: { __type: "Float" },
    averageLifespan: { __type: "Int" },
    eyeColors: { __type: "[String]" },
    hairColors: { __type: "[String]" },
    skinColors: { __type: "[String]" },
    language: { __type: "String" },
    homeworld: { __type: "Planet" },
    personConnection: {
      __type: "SpeciesPeopleConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    filmConnection: {
      __type: "SpeciesFilmsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    created: { __type: "String" },
    edited: { __type: "String" },
    id: { __type: "ID!" },
  },
  SpeciesConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[SpeciesEdge]" },
    totalCount: { __type: "Int" },
    species: { __type: "[Species]" },
  },
  SpeciesEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Species" },
    cursor: { __type: "String!" },
  },
  SpeciesFilmsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[SpeciesFilmsEdge]" },
    totalCount: { __type: "Int" },
    films: { __type: "[Film]" },
  },
  SpeciesFilmsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Film" },
    cursor: { __type: "String!" },
  },
  SpeciesPeopleConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[SpeciesPeopleEdge]" },
    totalCount: { __type: "Int" },
    people: { __type: "[Person]" },
  },
  SpeciesPeopleEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Person" },
    cursor: { __type: "String!" },
  },
  Starship: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    model: { __type: "String" },
    starshipClass: { __type: "String" },
    manufacturers: { __type: "[String]" },
    costInCredits: { __type: "Float" },
    length: { __type: "Float" },
    crew: { __type: "String" },
    passengers: { __type: "String" },
    maxAtmospheringSpeed: { __type: "Int" },
    hyperdriveRating: { __type: "Float" },
    MGLT: { __type: "Int" },
    cargoCapacity: { __type: "Float" },
    consumables: { __type: "String" },
    pilotConnection: {
      __type: "StarshipPilotsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    filmConnection: {
      __type: "StarshipFilmsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    created: { __type: "String" },
    edited: { __type: "String" },
    id: { __type: "ID!" },
  },
  StarshipFilmsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[StarshipFilmsEdge]" },
    totalCount: { __type: "Int" },
    films: { __type: "[Film]" },
  },
  StarshipFilmsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Film" },
    cursor: { __type: "String!" },
  },
  StarshipPilotsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[StarshipPilotsEdge]" },
    totalCount: { __type: "Int" },
    pilots: { __type: "[Person]" },
  },
  StarshipPilotsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Person" },
    cursor: { __type: "String!" },
  },
  StarshipsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[StarshipsEdge]" },
    totalCount: { __type: "Int" },
    starships: { __type: "[Starship]" },
  },
  StarshipsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Starship" },
    cursor: { __type: "String!" },
  },
  Vehicle: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    model: { __type: "String" },
    vehicleClass: { __type: "String" },
    manufacturers: { __type: "[String]" },
    costInCredits: { __type: "Float" },
    length: { __type: "Float" },
    crew: { __type: "String" },
    passengers: { __type: "String" },
    maxAtmospheringSpeed: { __type: "Int" },
    cargoCapacity: { __type: "Float" },
    consumables: { __type: "String" },
    pilotConnection: {
      __type: "VehiclePilotsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    filmConnection: {
      __type: "VehicleFilmsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    created: { __type: "String" },
    edited: { __type: "String" },
    id: { __type: "ID!" },
  },
  VehicleFilmsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[VehicleFilmsEdge]" },
    totalCount: { __type: "Int" },
    films: { __type: "[Film]" },
  },
  VehicleFilmsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Film" },
    cursor: { __type: "String!" },
  },
  VehiclePilotsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[VehiclePilotsEdge]" },
    totalCount: { __type: "Int" },
    pilots: { __type: "[Person]" },
  },
  VehiclePilotsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Person" },
    cursor: { __type: "String!" },
  },
  VehiclesConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[VehiclesEdge]" },
    totalCount: { __type: "Int" },
    vehicles: { __type: "[Vehicle]" },
  },
  VehiclesEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Vehicle" },
    cursor: { __type: "String!" },
  },
  mutation: {},
  query: {
    __typename: { __type: "String!" },
    allFilms: {
      __type: "FilmsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    film: { __type: "Film", __args: { id: "ID", filmID: "ID" } },
    allPeople: {
      __type: "PeopleConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    person: { __type: "Person", __args: { id: "ID", personID: "ID" } },
    allPlanets: {
      __type: "PlanetsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    planet: { __type: "Planet", __args: { id: "ID", planetID: "ID" } },
    allSpecies: {
      __type: "SpeciesConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    species: { __type: "Species", __args: { id: "ID", speciesID: "ID" } },
    allStarships: {
      __type: "StarshipsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    starship: { __type: "Starship", __args: { id: "ID", starshipID: "ID" } },
    allVehicles: {
      __type: "VehiclesConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    vehicle: { __type: "Vehicle", __args: { id: "ID", vehicleID: "ID" } },
    node: { __type: "Node", __args: { id: "ID!" } },
  },
  subscription: {},
  [SchemaUnionsKey]: {
    Node: ["Film", "Species", "Planet", "Person", "Starship", "Vehicle"],
  },
} as const;

/**
 * A single film.
 */
export interface Film {
  __typename?: "Film";
  /**
   * The title of this film.
   */
  title?: Maybe<ScalarsEnums["String"]>;
  /**
   * The episode number of this film.
   */
  episodeID?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The opening paragraphs at the beginning of this film.
   */
  openingCrawl?: Maybe<ScalarsEnums["String"]>;
  /**
   * The name of the director of this film.
   */
  director?: Maybe<ScalarsEnums["String"]>;
  /**
   * The name(s) of the producer(s) of this film.
   */
  producers?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * The ISO 8601 date format of film release at original creator country.
   */
  releaseDate?: Maybe<ScalarsEnums["String"]>;
  speciesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<FilmSpeciesConnection>;
  starshipConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<FilmStarshipsConnection>;
  vehicleConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<FilmVehiclesConnection>;
  characterConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<FilmCharactersConnection>;
  planetConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<FilmPlanetsConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
}

/**
 * A connection to a list of items.
 */
export interface FilmCharactersConnection {
  __typename?: "FilmCharactersConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmCharactersEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  characters?: Maybe<Array<Maybe<Person>>>;
}

/**
 * An edge in a connection.
 */
export interface FilmCharactersEdge {
  __typename?: "FilmCharactersEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface FilmPlanetsConnection {
  __typename?: "FilmPlanetsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmPlanetsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<Planet>>>;
}

/**
 * An edge in a connection.
 */
export interface FilmPlanetsEdge {
  __typename?: "FilmPlanetsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Planet>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface FilmSpeciesConnection {
  __typename?: "FilmSpeciesConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmSpeciesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<Species>>>;
}

/**
 * An edge in a connection.
 */
export interface FilmSpeciesEdge {
  __typename?: "FilmSpeciesEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Species>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface FilmStarshipsConnection {
  __typename?: "FilmStarshipsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmStarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
}

/**
 * An edge in a connection.
 */
export interface FilmStarshipsEdge {
  __typename?: "FilmStarshipsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Starship>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface FilmVehiclesConnection {
  __typename?: "FilmVehiclesConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmVehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
}

/**
 * An edge in a connection.
 */
export interface FilmVehiclesEdge {
  __typename?: "FilmVehiclesEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Vehicle>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface FilmsConnection {
  __typename?: "FilmsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
}

/**
 * An edge in a connection.
 */
export interface FilmsEdge {
  __typename?: "FilmsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * An object with an ID
 */
export interface Node {
  __typename?:
    | "Film"
    | "Species"
    | "Planet"
    | "Person"
    | "Starship"
    | "Vehicle";
  /**
   * The id of the object.
   */
  id: ScalarsEnums["ID"];
  $on: $Node;
}

/**
 * Information about pagination in a connection.
 */
export interface PageInfo {
  __typename?: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: ScalarsEnums["Boolean"];
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: ScalarsEnums["Boolean"];
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor?: Maybe<ScalarsEnums["String"]>;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor?: Maybe<ScalarsEnums["String"]>;
}

/**
 * A connection to a list of items.
 */
export interface PeopleConnection {
  __typename?: "PeopleConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PeopleEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<Person>>>;
}

/**
 * An edge in a connection.
 */
export interface PeopleEdge {
  __typename?: "PeopleEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * An individual person or character within the Star Wars universe.
 */
export interface Person {
  __typename?: "Person";
  /**
   * The name of this person.
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear?: Maybe<ScalarsEnums["String"]>;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor?: Maybe<ScalarsEnums["String"]>;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender?: Maybe<ScalarsEnums["String"]>;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor?: Maybe<ScalarsEnums["String"]>;
  /**
   * The height of the person in centimeters.
   */
  height?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The mass of the person in kilograms.
   */
  mass?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The skin color of this person.
   */
  skinColor?: Maybe<ScalarsEnums["String"]>;
  /**
   * A planet that this person was born on or inhabits.
   */
  homeworld?: Maybe<Planet>;
  filmConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PersonFilmsConnection>;
  /**
   * The species that this person belongs to, or null if unknown.
   */
  species?: Maybe<Species>;
  starshipConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PersonStarshipsConnection>;
  vehicleConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PersonVehiclesConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
}

/**
 * A connection to a list of items.
 */
export interface PersonFilmsConnection {
  __typename?: "PersonFilmsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PersonFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
}

/**
 * An edge in a connection.
 */
export interface PersonFilmsEdge {
  __typename?: "PersonFilmsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface PersonStarshipsConnection {
  __typename?: "PersonStarshipsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PersonStarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
}

/**
 * An edge in a connection.
 */
export interface PersonStarshipsEdge {
  __typename?: "PersonStarshipsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Starship>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface PersonVehiclesConnection {
  __typename?: "PersonVehiclesConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PersonVehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
}

/**
 * An edge in a connection.
 */
export interface PersonVehiclesEdge {
  __typename?: "PersonVehiclesEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Vehicle>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export interface Planet {
  __typename?: "Planet";
  /**
   * The name of this planet.
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * The diameter of this planet in kilometers.
   */
  diameter?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity?: Maybe<ScalarsEnums["String"]>;
  /**
   * The average population of sentient beings inhabiting this planet.
   */
  population?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The climates of this planet.
   */
  climates?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * The terrains of this planet.
   */
  terrains?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * The percentage of the planet surface that is naturally occurring water or bodies
   * of water.
   */
  surfaceWater?: Maybe<ScalarsEnums["Float"]>;
  residentConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PlanetResidentsConnection>;
  filmConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PlanetFilmsConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
}

/**
 * A connection to a list of items.
 */
export interface PlanetFilmsConnection {
  __typename?: "PlanetFilmsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PlanetFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
}

/**
 * An edge in a connection.
 */
export interface PlanetFilmsEdge {
  __typename?: "PlanetFilmsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface PlanetResidentsConnection {
  __typename?: "PlanetResidentsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PlanetResidentsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  residents?: Maybe<Array<Maybe<Person>>>;
}

/**
 * An edge in a connection.
 */
export interface PlanetResidentsEdge {
  __typename?: "PlanetResidentsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface PlanetsConnection {
  __typename?: "PlanetsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PlanetsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<Planet>>>;
}

/**
 * An edge in a connection.
 */
export interface PlanetsEdge {
  __typename?: "PlanetsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Planet>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A type of person or character within the Star Wars Universe.
 */
export interface Species {
  __typename?: "Species";
  /**
   * The name of this species.
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * The classification of this species, such as "mammal" or "reptile".
   */
  classification?: Maybe<ScalarsEnums["String"]>;
  /**
   * The designation of this species, such as "sentient".
   */
  designation?: Maybe<ScalarsEnums["String"]>;
  /**
   * The average height of this species in centimeters.
   */
  averageHeight?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The average lifespan of this species in years, null if unknown.
   */
  averageLifespan?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  eyeColors?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * Common hair colors for this species, null if this species does not typically
   * have hair.
   */
  hairColors?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * Common skin colors for this species, null if this species does not typically
   * have skin.
   */
  skinColors?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * The language commonly spoken by this species.
   */
  language?: Maybe<ScalarsEnums["String"]>;
  /**
   * A planet that this species originates from.
   */
  homeworld?: Maybe<Planet>;
  personConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<SpeciesPeopleConnection>;
  filmConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<SpeciesFilmsConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
}

/**
 * A connection to a list of items.
 */
export interface SpeciesConnection {
  __typename?: "SpeciesConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<SpeciesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<Species>>>;
}

/**
 * An edge in a connection.
 */
export interface SpeciesEdge {
  __typename?: "SpeciesEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Species>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface SpeciesFilmsConnection {
  __typename?: "SpeciesFilmsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<SpeciesFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
}

/**
 * An edge in a connection.
 */
export interface SpeciesFilmsEdge {
  __typename?: "SpeciesFilmsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface SpeciesPeopleConnection {
  __typename?: "SpeciesPeopleConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<SpeciesPeopleEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<Person>>>;
}

/**
 * An edge in a connection.
 */
export interface SpeciesPeopleEdge {
  __typename?: "SpeciesPeopleEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A single transport craft that has hyperdrive capability.
 */
export interface Starship {
  __typename?: "Starship";
  /**
   * The name of this starship. The common name, such as "Death Star".
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  model?: Maybe<ScalarsEnums["String"]>;
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  starshipClass?: Maybe<ScalarsEnums["String"]>;
  /**
   * The manufacturers of this starship.
   */
  manufacturers?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * The cost of this starship new, in galactic credits.
   */
  costInCredits?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The length of this starship in meters.
   */
  length?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The number of personnel needed to run or pilot this starship.
   */
  crew?: Maybe<ScalarsEnums["String"]>;
  /**
   * The number of non-essential people this starship can transport.
   */
  passengers?: Maybe<ScalarsEnums["String"]>;
  /**
   * The maximum speed of this starship in atmosphere. null if this starship is
   * incapable of atmosphering flight.
   */
  maxAtmospheringSpeed?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The class of this starships hyperdrive.
   */
  hyperdriveRating?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring
   * the difference in speed of starships. We can assume it is similar to AU, the
   * distance between our Sun (Sol) and Earth.
   */
  MGLT?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The maximum number of kilograms that this starship can transport.
   */
  cargoCapacity?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: Maybe<ScalarsEnums["String"]>;
  pilotConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<StarshipPilotsConnection>;
  filmConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<StarshipFilmsConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
}

/**
 * A connection to a list of items.
 */
export interface StarshipFilmsConnection {
  __typename?: "StarshipFilmsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<StarshipFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
}

/**
 * An edge in a connection.
 */
export interface StarshipFilmsEdge {
  __typename?: "StarshipFilmsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface StarshipPilotsConnection {
  __typename?: "StarshipPilotsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<StarshipPilotsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<Person>>>;
}

/**
 * An edge in a connection.
 */
export interface StarshipPilotsEdge {
  __typename?: "StarshipPilotsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface StarshipsConnection {
  __typename?: "StarshipsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<StarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
}

/**
 * An edge in a connection.
 */
export interface StarshipsEdge {
  __typename?: "StarshipsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Starship>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A single transport craft that does not have hyperdrive capability
 */
export interface Vehicle {
  __typename?: "Vehicle";
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  model?: Maybe<ScalarsEnums["String"]>;
  /**
   * The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
   */
  vehicleClass?: Maybe<ScalarsEnums["String"]>;
  /**
   * The manufacturers of this vehicle.
   */
  manufacturers?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * The cost of this vehicle new, in Galactic Credits.
   */
  costInCredits?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The length of this vehicle in meters.
   */
  length?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The number of personnel needed to run or pilot this vehicle.
   */
  crew?: Maybe<ScalarsEnums["String"]>;
  /**
   * The number of non-essential people this vehicle can transport.
   */
  passengers?: Maybe<ScalarsEnums["String"]>;
  /**
   * The maximum speed of this vehicle in atmosphere.
   */
  maxAtmospheringSpeed?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The maximum number of kilograms that this vehicle can transport.
   */
  cargoCapacity?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: Maybe<ScalarsEnums["String"]>;
  pilotConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<VehiclePilotsConnection>;
  filmConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<VehicleFilmsConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
}

/**
 * A connection to a list of items.
 */
export interface VehicleFilmsConnection {
  __typename?: "VehicleFilmsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<VehicleFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
}

/**
 * An edge in a connection.
 */
export interface VehicleFilmsEdge {
  __typename?: "VehicleFilmsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface VehiclePilotsConnection {
  __typename?: "VehiclePilotsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<VehiclePilotsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<Person>>>;
}

/**
 * An edge in a connection.
 */
export interface VehiclePilotsEdge {
  __typename?: "VehiclePilotsEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface VehiclesConnection {
  __typename?: "VehiclesConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<VehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
}

/**
 * An edge in a connection.
 */
export interface VehiclesEdge {
  __typename?: "VehiclesEdge";
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Vehicle>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
  allFilms: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<FilmsConnection>;
  film: (args?: {
    id?: Maybe<Scalars["ID"]>;
    filmID?: Maybe<Scalars["ID"]>;
  }) => Maybe<Film>;
  allPeople: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PeopleConnection>;
  person: (args?: {
    id?: Maybe<Scalars["ID"]>;
    personID?: Maybe<Scalars["ID"]>;
  }) => Maybe<Person>;
  allPlanets: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PlanetsConnection>;
  planet: (args?: {
    id?: Maybe<Scalars["ID"]>;
    planetID?: Maybe<Scalars["ID"]>;
  }) => Maybe<Planet>;
  allSpecies: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<SpeciesConnection>;
  species: (args?: {
    id?: Maybe<Scalars["ID"]>;
    speciesID?: Maybe<Scalars["ID"]>;
  }) => Maybe<Species>;
  allStarships: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<StarshipsConnection>;
  starship: (args?: {
    id?: Maybe<Scalars["ID"]>;
    starshipID?: Maybe<Scalars["ID"]>;
  }) => Maybe<Starship>;
  allVehicles: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<VehiclesConnection>;
  vehicle: (args?: {
    id?: Maybe<Scalars["ID"]>;
    vehicleID?: Maybe<Scalars["ID"]>;
  }) => Maybe<Vehicle>;
  node: (args: { id: Scalars["ID"] }) => Maybe<Node>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Film: Film;
  FilmCharactersConnection: FilmCharactersConnection;
  FilmCharactersEdge: FilmCharactersEdge;
  FilmPlanetsConnection: FilmPlanetsConnection;
  FilmPlanetsEdge: FilmPlanetsEdge;
  FilmSpeciesConnection: FilmSpeciesConnection;
  FilmSpeciesEdge: FilmSpeciesEdge;
  FilmStarshipsConnection: FilmStarshipsConnection;
  FilmStarshipsEdge: FilmStarshipsEdge;
  FilmVehiclesConnection: FilmVehiclesConnection;
  FilmVehiclesEdge: FilmVehiclesEdge;
  FilmsConnection: FilmsConnection;
  FilmsEdge: FilmsEdge;
  Mutation: Mutation;
  PageInfo: PageInfo;
  PeopleConnection: PeopleConnection;
  PeopleEdge: PeopleEdge;
  Person: Person;
  PersonFilmsConnection: PersonFilmsConnection;
  PersonFilmsEdge: PersonFilmsEdge;
  PersonStarshipsConnection: PersonStarshipsConnection;
  PersonStarshipsEdge: PersonStarshipsEdge;
  PersonVehiclesConnection: PersonVehiclesConnection;
  PersonVehiclesEdge: PersonVehiclesEdge;
  Planet: Planet;
  PlanetFilmsConnection: PlanetFilmsConnection;
  PlanetFilmsEdge: PlanetFilmsEdge;
  PlanetResidentsConnection: PlanetResidentsConnection;
  PlanetResidentsEdge: PlanetResidentsEdge;
  PlanetsConnection: PlanetsConnection;
  PlanetsEdge: PlanetsEdge;
  Query: Query;
  Species: Species;
  SpeciesConnection: SpeciesConnection;
  SpeciesEdge: SpeciesEdge;
  SpeciesFilmsConnection: SpeciesFilmsConnection;
  SpeciesFilmsEdge: SpeciesFilmsEdge;
  SpeciesPeopleConnection: SpeciesPeopleConnection;
  SpeciesPeopleEdge: SpeciesPeopleEdge;
  Starship: Starship;
  StarshipFilmsConnection: StarshipFilmsConnection;
  StarshipFilmsEdge: StarshipFilmsEdge;
  StarshipPilotsConnection: StarshipPilotsConnection;
  StarshipPilotsEdge: StarshipPilotsEdge;
  StarshipsConnection: StarshipsConnection;
  StarshipsEdge: StarshipsEdge;
  Subscription: Subscription;
  Vehicle: Vehicle;
  VehicleFilmsConnection: VehicleFilmsConnection;
  VehicleFilmsEdge: VehicleFilmsEdge;
  VehiclePilotsConnection: VehiclePilotsConnection;
  VehiclePilotsEdge: VehiclePilotsEdge;
  VehiclesConnection: VehiclesConnection;
  VehiclesEdge: VehiclesEdge;
}
export type SchemaObjectTypesNames =
  | "Film"
  | "FilmCharactersConnection"
  | "FilmCharactersEdge"
  | "FilmPlanetsConnection"
  | "FilmPlanetsEdge"
  | "FilmSpeciesConnection"
  | "FilmSpeciesEdge"
  | "FilmStarshipsConnection"
  | "FilmStarshipsEdge"
  | "FilmVehiclesConnection"
  | "FilmVehiclesEdge"
  | "FilmsConnection"
  | "FilmsEdge"
  | "Mutation"
  | "PageInfo"
  | "PeopleConnection"
  | "PeopleEdge"
  | "Person"
  | "PersonFilmsConnection"
  | "PersonFilmsEdge"
  | "PersonStarshipsConnection"
  | "PersonStarshipsEdge"
  | "PersonVehiclesConnection"
  | "PersonVehiclesEdge"
  | "Planet"
  | "PlanetFilmsConnection"
  | "PlanetFilmsEdge"
  | "PlanetResidentsConnection"
  | "PlanetResidentsEdge"
  | "PlanetsConnection"
  | "PlanetsEdge"
  | "Query"
  | "Species"
  | "SpeciesConnection"
  | "SpeciesEdge"
  | "SpeciesFilmsConnection"
  | "SpeciesFilmsEdge"
  | "SpeciesPeopleConnection"
  | "SpeciesPeopleEdge"
  | "Starship"
  | "StarshipFilmsConnection"
  | "StarshipFilmsEdge"
  | "StarshipPilotsConnection"
  | "StarshipPilotsEdge"
  | "StarshipsConnection"
  | "StarshipsEdge"
  | "Subscription"
  | "Vehicle"
  | "VehicleFilmsConnection"
  | "VehicleFilmsEdge"
  | "VehiclePilotsConnection"
  | "VehiclePilotsEdge"
  | "VehiclesConnection"
  | "VehiclesEdge";

export interface $Node {
  Film?: Film;
  Species?: Species;
  Planet?: Planet;
  Person?: Person;
  Starship?: Starship;
  Vehicle?: Vehicle;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
