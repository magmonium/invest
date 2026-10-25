import { EnvironmentProviders, Provider } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideModalComponents } from '@magmonium/one';

const providers: (Provider | EnvironmentProviders)[] = [
  provideHttpClient(),
  provideHttpClientTesting(),
  provideRouter(
    [],
    withRouterConfig({ resolveNavigationPromiseOnError: true })
  ),
  provideModalComponents(),
];

export default providers;
