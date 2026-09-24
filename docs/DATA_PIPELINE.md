# Data-pipeline design

## Stages

1. **Collect** marketplace observations with source timestamp and capture metadata.
2. **Validate** required fields, numeric ranges, and observation freshness.
3. **Resolve** products and brands to stable internal identities.
4. **Classify** products into a versioned category taxonomy.
5. **Snapshot** normalized price, units, sales estimates, rank, and availability.
6. **Aggregate** by category, platform, brand, product, and reporting period.
7. **Serve** typed metrics with scope and coverage metadata.

## Quality controls

- Preserve raw and normalized values separately for auditability.
- Make entity-resolution changes replayable and versioned.
- Quarantine observations that fail validation instead of silently coercing them.
- Track collector freshness and coverage before calculating market movement.
- Attach denominator and time-window metadata to every share metric.
- Treat estimates as directional intelligence and label them accordingly.

## Public implementation

`lib/market-data.ts` represents the normalized boundary with fictional brands and products. The API applies category and platform validation and returns an explicit synthetic-data disclosure. This makes the downstream contract executable without exposing collection methods or commercial records.
