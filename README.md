# mqtt-broker

## Overview

This repo contains an example mqtt-broker that expects to receive information from [Hand_tracker](https://github.com/dspip/Hand_detector)

## Prerequisites

## To run:

```
$ npm install
// this will install dependencies

$ npm run start
```

This will host a local mqtt-broker server on port 1883.

The mqtt-broker receives the a `"fingers"` topic. messages are parsed as json, and appear in the form of:

```
{
    "count": number,        // count of how many fingers are up.
    "fingers": boolean[5],  // a boolean array, true if finger is up, false if down,
                            // finger order is [thumb, index, middle, ring, pinky]
    "handedness": {
        "label": "Left" | "Right",
        "score": number,
    },
}
```
