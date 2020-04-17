import { TestBed } from '@angular/core/testing';

import { VideosService } from './videos.service';

import Ajv from 'ajv';
import MOVIES_SCHEMA from '../schemas/movies.scheme.json';
import MOVIES_FIXTURE from '../fixtures/movies.fixture.json';

const ajv = new Ajv();
const moviesSchemaValidator = ajv.compile(MOVIES_SCHEMA);

describe('VideosService', () => {
  let service: VideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should returns match response', () => {
    // const input = MOVIES_FIXTURE;
    const input = [
      {
        id: 'fake-id',
        title: 'fake-title',
        // description: 'fake-description',
        thumbUrl: 'fake-thumbUrl',
        movieUrl: 'fake-movieUrl',
      }
    ];
    const status = moviesSchemaValidator(input);
    expect(status).toBeTruthy();
    if (!status) {
      console.log(
        JSON.stringify(moviesSchemaValidator.errors, null, 4)
      );
    }
  });
});
