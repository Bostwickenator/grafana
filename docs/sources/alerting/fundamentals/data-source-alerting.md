---
aliases:
  - /docs/grafana/latest/alerting/fundamentals/data-source-alerting/
description: Data sources in Grafana Alerting
title: Data sources
weight: 100
---

# Data sources

There are a number of data sources that are compatible with Grafana Alerting. Each data source is supported by a plugin. You can use one of the built-in data sources listed below, use [external data source plugins](https://grafana.com/grafana/plugins/?type=datasource), or create your own data source plugin.

If you are creating your own data source plugin, make sure it is a backend plugin as Grafana Alerting requires this in order to be able to evaluate rules using the data source. Frontend data sources are not supported, because the evaluation engine runs on the backend.

Specifying { "alerting": true, “backend”: true } in the plugin.json file indicates that the data source plugin is compatible with Grafana Alerting and includes the backend data-fetching code. For more information, refer to [Build a data source backend plugin](https://grafana.com/tutorials/build-a-data-source-backend-plugin/).

These are the data sources that are compatible with and supported by Grafana Alerting.

- [AWS CloudWatch]({{< relref "../../datasources/aws-cloudwatch/" >}})
- [Azure Monitor]({{< relref "../../datasources/azuremonitor/" >}})
- [Elasticsearch]({{< relref "../../datasources/elasticsearch/" >}})
- [Google Cloud Monitoring]({{< relref "../../datasources/google-cloud-monitoring/" >}})
- [Graphite]({{< relref "../../datasources/graphite/" >}})
- [InfluxDB]({{< relref "influxdb/" >}})
- [Loki]({{< relref "../../datasources/loki/" >}})
- [Microsoft SQL Server (MSSQL)]({{< relref "../../datasources/mssql/" >}})
- [MySQL]({{< relref "../../datasources/mysql/" >}})
- [Open TSDB]({{< relref "../../datasources/opentsdb/" >}})
- [PostgreSQL]({{< relref "../../datasources/postgres/" >}})
- [Prometheus]({{< relref "../../datasources/prometheus/" >}})
- [Jaeger]({{< relref "../../datasources/jaeger/" >}})
- [Zipkin]({{< relref "../../datasources/zipkin/" >}})
- [Tempo]({{< relref "../../datasources/tempo/" >}})
- [Testdata]({{< relref "../../datasources/testdata/" >}})

## Useful links

- [Grafana data sources]({{< relref "../../data-sources/" >}})
- [Add a data source]({{< relref "../../data-sources/add-a-data-source/" >}})
