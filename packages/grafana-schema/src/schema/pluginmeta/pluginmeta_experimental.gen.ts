// This file is autogenerated. DO NOT EDIT.
//
// Run "make gen-cue" from repository root to regenerate.
//
// Derived from the Thema lineage at pkg/coremodel/pluginmeta


// This model is a WIP and not yet canonical. Consequently, its members are
// not exported to exclude it from grafana-schema's public API surface.

interface Pluginmeta {
  alerting?: boolean;
  annotations?: boolean;
  autoEnabled?: boolean;
  backend?: boolean;
  category?: ('tsdb' | 'logging' | 'cloud' | 'tracing' | 'sql' | 'enterprise' | 'other');
  dependencies: {
    grafanaDependency: string;
  };
  enterpriseFeatures?: {};
  executable?: string;
  hiddenQueries?: boolean;
  id: string;
  includes?: {}[];
  info: {
    keywords: string[];
    logos: {
      small: string;
      large: string;
    };
    updated: string;
    version: string;
  };
  logs?: boolean;
  metrics?: boolean;
  name: string;
  preload?: boolean;
  queryOptions?: {};
  routes?: {}[];
  skipDataQuery?: boolean;
  state?: ('alpha' | 'beta');
  streaming?: boolean;
  tables?: boolean;
  tracing?: boolean;
  type: ('app' | 'datasource' | 'panel');
}

const defaultPluginmeta: Partial<Pluginmeta> = {
  includes: [],
  routes: [],
};
