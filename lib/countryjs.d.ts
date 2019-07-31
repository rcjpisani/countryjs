// Type definitions for countryjs 1.8
// Project: https://github.com/therebelrobot/countryjs
// Definitions by:  Robert Pisani <https://github.com/rcjpisani>
// TypeScript Version: 3.5

/// <reference types="node" />
/// <reference types="geojson" />

import fs = require("fs");

export as namespace Country;

export type GeoJsonObject = GeoJSON.Geometry | GeoJSON.Feature | GeoJSON.FeatureCollection;

export interface Iso {
  alpha2: string;
  alpha3: string;
}

export interface Translations {
  [index: string]: string;
}

export interface Country {
  name: string;
  altSpellings: string[];
  area: number;
  borders: string[];
  callingCodes: string[];
  capital: string;
  currencies: string[];
  demonym: string;
  flag?: string;
  geoJSON: GeoJsonObject;
  ISO: Iso;
  languages: string[];
  latlng: Position;
  nativeName: string;
  population: number;
  provinces: string[];
  region: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: Translations;
  wiki: string;
}

export enum IdentifierType {
  ISO2 = "ISO2",
  ISO3 = "ISO3",
  name = "name",
}

export function info(identifier: string, type?: IdentifierType): Country;

export function states(identifier: string, type?: IdentifierType): Country["provinces"];

export function altSpellings(identifier: string, type?: IdentifierType): Country["altSpellings"];

export function area(identifier: string, type?: IdentifierType): Country["area"];

export function borders(identifier: string, type?: IdentifierType): Country["borders"];

export function callingCodes(identifier: string, type?: IdentifierType): Country["callingCodes"];

export function capital(identifier: string, type?: IdentifierType): Country["capital"];

export function currencies(identifier: string, type?: IdentifierType): Country["currencies"];

export function demonym(identifier: string, type?: IdentifierType): Country["demonym"];

export function flag(identifier: string, type?: IdentifierType): Country["flag"];

export function geoJSON(identifier: string, type?: IdentifierType): Country["geoJSON"];

export function ISOcodes(identifier: string, type?: IdentifierType): Country["ISO"];

export function languages(identifier: string, type?: IdentifierType): Country["languages"];

export function latlng(identifier: string, type?: IdentifierType): Country["latlng"];

export function nativeName(identifier: string, type?: IdentifierType): Country["nativeName"];

export function population(identifier: string, type?: IdentifierType): Country["population"];

export function provinces(identifier: string, type?: IdentifierType): Country["provinces"];

export function region(identifier: string, type?: IdentifierType): Country["region"];

export function subregion(identifier: string, type?: IdentifierType): Country["subregion"];

export function timezones(identifier: string, type?: IdentifierType): Country["timezones"];

export function tld(identifier: string, type?: IdentifierType): Country["tld"];

export function translations(identifier: string, type?: IdentifierType): Country["translations"];

export function wiki(identifier: string, type?: IdentifierType): Country["wiki"];

export function all(identifier: string, type?: IdentifierType): Country[];
